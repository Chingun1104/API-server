import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required : true,
        },
        price : {
            type : Number,
            default : 0,
        },
        category: mongoose.SchemaTypes.ObjectId,
    }
)

export const Food = mongoose.model("food", FoodSchema)