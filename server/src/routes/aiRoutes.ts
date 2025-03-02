import express from 'express'
import { generateResponseMessage } from '../controllers/aiController'

const router = express.Router()

router.post('/generate', generateResponseMessage)

export default router
