import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60,
    },

    description: {
        type: String,
        required: true,
        maxLength: 200,
    },

    img: {
        type: String,
        required: true,
    },

    prices: {
        type: [Number],
        required: true,
    },
},
{timestamps: true}
);

export default mongoose.models.Product ||
mongoose.model('Product', ProductSchema);