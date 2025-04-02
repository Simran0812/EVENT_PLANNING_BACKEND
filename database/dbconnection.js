import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACKEVENT_MESSAGE"
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(err => {
        console.log("Some error occurred while connecting to database", err);
    });
};
