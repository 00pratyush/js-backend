import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        isActive: {
            type: Boolean,
            required: [true, "password is required"],  //custom validators is possible 
        }
    },
    {
        timestamps: true   //createdAt and updatedAt fields added in the document(table)
    }
)

export const User = mongoose.model("User", userSchema)