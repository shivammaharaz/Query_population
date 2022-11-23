const { Schema, model } = require('mongoose')

const { ObjectId } = Schema


const storySchema = new Schema({
    author: { type: ObjectId, ref: 'author' },
    title: String,
    person: [{ type: ObjectId, ref: 'user' }]
});

const story = model('story', storySchema)
module.exports = story

