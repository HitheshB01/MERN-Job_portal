import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

app.use(cors(corsOptions))


app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
