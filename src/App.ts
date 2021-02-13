import express, {Request, Response} from 'express'
// @ts-ignore
import cors from 'cors'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Web service was started with port %s", port)
})