const { Schema, model } = require('mongoose')

const { ObjectId } = Schema

const userSchema = new Schema({
    name: String,
    age: Number,
    stories: [{ type: ObjectId, ref: "story" }],
    authors: [{ type: ObjectId, ref: "story" }]
})

const user = model("user", userSchema)

module.exports = user