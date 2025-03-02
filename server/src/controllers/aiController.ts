import dotenv from 'dotenv'
import { Request, Response } from 'express'
import Anthropic, { AnthropicError, ContentBlock } from '@anthropic-ai/sdk'
import { anthropicConfig, controlExample, getCombinePrompt } from '../config/anthropicModel'

const REQUEST_TIMEOUT = 10000

dotenv.config()

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error('ANTHROPIC_API_KEY не знайдено в змінних середовища')
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

type GenerateResponseOutput = {
  response: ContentBlock
}

type ErrorOutput = {
  error: string
}

type AnthropicResponse = Anthropic.Messages.Message & { _request_id?: string | null }

const timeoutPromise = (ms: number) =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'))
    }, ms)
  })

export const generateResponseMessage = async (req: Request, res: Response<GenerateResponseOutput | ErrorOutput>) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No body provided' })
    }
    const { productList, preparedDishWeight } = req.body

    if (!productList) {
      return res.status(400).json({ error: 'Product List is required' })
    }

    const message = await Promise.race<AnthropicResponse | unknown>([
      (await anthropic.messages.create({
        ...anthropicConfig,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: controlExample },
              {
                type: 'text',
                text: getCombinePrompt({ productList, preparedDishWeight })
              }
            ]
          }
        ]
      })) as AnthropicResponse,
      timeoutPromise(REQUEST_TIMEOUT)
    ])
    console.log('message', message)

    return res.json({
      // @ts-expect-error expected
      response: (message as AnthropicResponse).content[0].text
    })
  } catch (error) {
    console.error('Error generating AI response:', error)

    if (error instanceof Anthropic.APIError) {
      return res.status(error.status || 500).json({
        error: `API Error: ${error.message}`
      })
    }

    return res.status(500).json({
      error: `Failed to generate AI response: ${(error as AnthropicError).message}`
    })
  }
}
