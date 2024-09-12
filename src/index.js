import express from 'express'
import { PORT } from './config/config.js'
import userRoutes from './routes/user.routes.js'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.use('/api/user', userRoutes)

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))