import express from  'express'
import morgan from 'morgan'
import cors from 'cors'
import routesUser from './routes/users.routes'
import routesAssets from './routes/assets.routes'
import routesLoans from './routes/loans.routes'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(routesLoans)
app.use(routesUser)
app.use(routesAssets)

export default app