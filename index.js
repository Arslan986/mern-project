import express from "express"

const app = express();

app.listen(3000, () => {
    console.log("My app is running port 3000");
})

app.get('/', (req,res) => {
    res.send("hello world")
})