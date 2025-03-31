import express from "express";
import {client } from "@repo/db/client";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data:{
            username,
            password
        }
    })

    res.json({
        message: "Sign Up is successfully",
        id: user.id
    })
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})