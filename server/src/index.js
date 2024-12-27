import dontenv from 'dotenv'

import { app } from './app.js'
import { initDatabase } from './db/init.js'

dontenv.config()

try {
  await initDatabase()
  const PORT = process.env.PORT
  app.listen(PORT)
  console.info(`Server running on http://localhost:${PORT}`)
} catch (error) {
  console.error(`Connection to database failed with error: ${error}`)
}
