const { Schema, model } = require('mongoose');
const { schema } = require('./user');
const { ObjectId } = Schema

const authorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    age: Number,
    stories: [{ type: ObjectId, ref: 'story' }],
    Buyers: [{ type: ObjectId, ref: 'user' }]
})

const author = model('author', authorSchema);

module.exports = author