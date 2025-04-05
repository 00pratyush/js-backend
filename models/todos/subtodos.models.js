import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: String,
            default: false
        },
        cretedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

export const SubTodo = mongoose.model("SubTodo",subTodoSchema)