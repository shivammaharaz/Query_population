const users = require("../../model/user")
const story = require("../../model/story")
const author = require("../../model/author")
// const user = require("../../model/user")


const user = {
    create: async (req, resp, next) => {
        const name = req.body.name
        const age = req.body.age
        const story_title = req.body.story_title
        const author_name = req.body.author_name
        const storyData = await story.findOne({ title: story_title })
        const authorData = await author.findOne({ name: author_name })
        console.log(storyData)
        console.log(authorData)
        const userData = new users({
            name: name,
            age: age
        })
        userData.stories.push(storyData._id)
        userData.authors.push(authorData._id)
        // const user = await new users(data)
        console.log(userData._id, "h")
        const status = await userData.save()
        console.log(status._id)
        authorData.Buyers.push(status._id)
        storyData.person.push(userData._id)
        storyData.save()
        authorData.save()
        console.log(status)
        resp.status(201).json({ result: status })
    },
    update: (req, resp, next) => {

    },
    delete: (req, resp, next) => {

    },
    get: async (req, resp, next) => {
        const id = req.params.userid
        const Data = await users.findOne({ _id: id }).populate([{
            path: 'authors',
            model: 'author',

        }, {
            path: 'stories',
            model: 'story',
            populate: { path: "author", }
        }
        ]).exec()
        resp.status(201).json(Data)
    }
}
module.exports = user