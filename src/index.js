import express from 'express'
import { PORT } from './config/config.js'
import userRoutes from './routes/user.routes.js'
import morgan from 'morgan'
import { validateCORS } from './middlewares/middleware.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(validateCORS)

app.use('/api/user', userRoutes)

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))