import express, { Request, Response } from 'express';
import mongoose from "mongoose"
import { Food } from './schema/Food';


const app = express();

const port = 8080;
app.use(express.json());

// app.get('/food', (req: Request, res: Response) => {
//     // res.json({ message: "hello" });
// })
app.post('/food', async (req, res) => {
    const food = await Food.create(req.body)
    console.log(req.body);
    res.json({ sucess: true, food })
});

app.get('/food', async (_req, res) => {
    const foods = await Food.find();
    res.json({ success: true, foods });
});

app.listen(port, async () => {
    const connectDb = async () => {
        try {
            await mongoose.connect(
                "mongodb+srv://Chingun:Chingun0711@cluster0.blxsi4c.mongodb.net/"
            );
            console.log('Server is running port');
        } catch (error) {

        }

    }

    connectDb();
    console.log(`Server is running on port ${port}`)

})
