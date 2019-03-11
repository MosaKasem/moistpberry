const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const htSchema = new mongoose.Schema({
    _msg_id: {
        type: String,
        required: true
    },
    topic: String,
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    sensor_id: String
})

const HT11 = mongoose.model('hum_temp_information', htSchema)

module.exports = HT11