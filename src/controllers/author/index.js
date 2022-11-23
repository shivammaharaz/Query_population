const { populate } = require("../../model/author")
const author = require("../../model/author")

const authors = {
    create: async (req, resp, next) => {
        const data = req.body
        const Data = await new author(data)
        const status = await Data.save()
        console.log(status)
        resp.status(201).json({ result: status })
    },
    update: (req, resp, next) => {

    },
    delete: (req, resp, next) => {

    },
    get: async (req, resp, next) => {
        const id = req.params.userid
        const Data = await author.findOne({ _id: id }).populate([{
            path: "Buyers",
            model: "user",
            match: { age: { $gt: 20 } },
            select: 'name',
            populate: [
                {
                    path: 'authors'
                },
                {
                    path: 'stories'
                }
            ]


        },
        {
            path: 'stories',
            model: 'story',
            select: 'title'
        }]).exec()
        resp.status(201).json(Data)
    }
}
module.exports = authors