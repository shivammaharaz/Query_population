const mongoose = require('mongoose')
const URL = `mongodb://localhost:27017/Demo_project`

const connectToDb = () => {
    mongoose.connect(URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (!err) {
                console.log(' DB connected Successfuly')
            }
            else {
                throw new Error("error while connecting to db")
            }
        }
    )
}

module.exports = connectToDb