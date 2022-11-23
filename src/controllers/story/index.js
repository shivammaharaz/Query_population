const story = require("../../model/story")
// const author = require("../../model/author")


const mongoose = require('mongoose')
const author = require("../../model/author")
const { response } = require("express")

const stories = {
    create: async (req, resp, next) => {
        try {
            const { title, author_name } = req.body
            const authorData = await author.findOne({ name: author_name })
            console.log(authorData)
            if (!authorData) resp.send('no author exists with this name')
            const storyData = await new story({
                title: title
            })
            storyData.author = (authorData._id)
            const Data = await storyData.save()
            authorData.stories.push(storyData._id)
            authorData.save()
            resp.status(203).json(Data)

        }
        catch (e) {
            throw new Error(e)
        }
    },
    update: (req, resp, next) => {

    },
    delete: (req, resp, next) => {

    },
    get: async (req, resp, next) => {
        // const id=req.params.authorid 
        // const Data=await 
    }
}
module.exports = stories