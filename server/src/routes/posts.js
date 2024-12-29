import {
  createPost,
  deletePost,
  getPostById,
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  updatePost
} from '../services/posts.js'

export function postsRoutes(app) {
  app.get('/api/v1/posts', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query
    const options = { sortBy, sortOrder }

    try {
      if (author && tag) {
        return res.status(400).json({ error: 'query by either author or tag, not both' })
      } else if (author) {
        return res.json(await listPostsByAuthor(author, options))
      } else if (tag) {
        return res.json(await listPostsByTag(tag, options))
      } else {
        return res.json(await listAllPosts(options))
      }
    } catch (error) {
      console.error(`Error fetching posts: ${error}`)
      return res.status(500).json({ error: 'internal server error' }).end()
    }
  })

  app.get('/api/v1/posts/:id', async (req, res) => {
    const { id } = req.params

    try {
      const post = await getPostById(id)
      if (post) {
        return res.json(post)
      } else {
        return res.status(404).json({ error: 'post not found' }).end()
      }
    } catch (error) {
      console.error(`Error fetching post: ${error}`)
      return res.status(500).json({ error: 'internal server error' }).end()
    }
  })

  app.post('/api/v1/posts', async (req, res) => {
    try {
      const post = await createPost(req.body)
      return res.status(201).json(post)
    } catch (error) {
      console.error(`Error creating post: ${error}`)
      return res.status(500).json({ error: 'error creating post' }).end()
    }
  })

  app.patch('/api/v1/posts/:id', async (req, res) => {
    const { id } = req.params
    try {
      const post = await updatePost(id, req.body)
      return res.json(post)
    } catch (error) {
      console.error(`Error creating post: ${error}`)
      return res.status(500).json({ error: `error updating post` }).end()
    }
  })
  app.delete('/api/v1/posts/:id', async (req, res) => {
    const { id } = req.params

    try {
      const { deletedCount } = await deletePost(id)
      return deletedCount > 0 ? res.status(204).end() : res.status(404).end()
    } catch (error) {
      console.error(`Error deleting post: ${error}`)
      return res.status(500).json({ error: `error deleting post` }).end()
    }
  })
}
