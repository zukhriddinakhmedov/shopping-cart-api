import express from "express"
import cors from "cors"


const server = express()

const { PORT } = process.env

server.use(cors())

server.use(express.json())

server.use()


server.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is listening on port ${PORT}`)
})

server.on("error", (error) => {
    console.log("Server is stopped", error)
})