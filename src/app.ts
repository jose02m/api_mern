import express from 'express'
import cors from 'cors'
import routes from './route/videos.routes';

const app = express()

app.set('port', 4000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

export default app;