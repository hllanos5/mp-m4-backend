import express from 'express'
import { PORT } from './config/config.js'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))


app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))