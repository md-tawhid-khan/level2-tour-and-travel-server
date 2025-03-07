import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './module/user/user.router'
import tourRouter from './module/tour/tour.router'
const app :Application = express()
// const port = 3000
app.use(express.json())
app.use(cors())

app.use("/api/user/",userRouter)
app.use("/api/tour/",tourRouter)

app.get('/', (req:Request, res:Response) => {
  res.send({
    status:true,
    message:'server live running'
  })
})

export default app

