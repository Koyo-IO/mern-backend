const mongoose = require("mongoose")

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://kwata2001:GFfIleupCeU4TBqe@cluster0.hqt4kjk.mongodb.net/appDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Falure: Unconnected to MongoDB")
        throw new Error()
    }
}

module.exports = connectDB