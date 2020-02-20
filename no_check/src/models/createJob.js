const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createJobSchema = new Schema(
{
    jobTitle:
    {
        type: String,
        trim: true,
        required: "String Required"
    },
    company:
    {
        type: String,
        trim: true,
        required: "String Required"
    },
    salary:
    {
        type: Number,
        required: true
    },
    summary:
    {
        type: String,
        required: "String Required"
    },
    crimeType:
    {
        type: String,
        required: "String Required"
    }
});

const createJob = mongoose.model("createJob", createJobSchema);

module.exports = createJob