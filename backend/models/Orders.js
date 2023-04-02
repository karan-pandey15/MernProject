const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    order_data: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('order', OrderSchema)