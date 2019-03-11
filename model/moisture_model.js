const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const MHSchema = new mongoose.Schema({
    _msg_id: {
        type: String,
        required: true
    },
    isMoist: {
        type: Boolean,
        required: true
    },
    sensor_id: String
})

const MH = mongoose.model('moister_information', MHSchema)

module.exports = MH