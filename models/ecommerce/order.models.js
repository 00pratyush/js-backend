import mongoose from 'mongoose'

//for each order
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const  orderSchema = new mongoose.Schema({
    orderPrice : {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemSchema],    //we can also define here instead of making new schema                
    },
    address: {
        type: String, 
        required: true
    },
    status: {
        type: String,
        enum: ["Pending","Cancelled","Delivered"],
        default: "Pending"
    }
}, {timestamps: true})

export default Order = mongoose.model("Order", orderSchema)