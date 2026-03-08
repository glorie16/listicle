import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import FurnitureController from '../controllers/furnitures.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', FurnitureController.getFurniture)

router.get('/:furnitureId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/furniture.html'))
})



export default router