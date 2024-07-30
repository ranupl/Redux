const mongoose = require("mongoose");

const DBconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todo');
        console.log("Mongodb is connected successfully");
    } catch (error) {
        console.log("Error while connecting to DB", error);
    }
}

module.exports = DBconnect;

