import mongoose from "mongoose";
import validator from "validator"; // ✅ Import validator correctly

const messageSchema = new mongoose.Schema({ // ✅ Fixed "Schema" capitalization
    name: {
        type: String,
        required: [true, "Name required"],
        minLength: [3, "Name must contain at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        validate: [validator.isEmail, "Please provide a valid email"] // ✅ Fixed typo
    },
    subject: {
        type: String,
        required: [true, "Subject required"],
        minLength: [5, "Subject must contain at least 5 characters"]
    },
    message: {
        type: String,
        required: [true, "Message required"],
        minLength: [10, "Message must contain at least 10 characters"]
    },
});

export const Message = mongoose.model("Message", messageSchema);
