const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        photo: {
            type: String,
            required: true
        },
        Nom: {
            type: String,
            required: true
        },
        CodeGitHub: {
            type: String,
            required: true
        },
        Adresse: {
            type: String,
            required: true
        },
        
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("post", postSchema)
