import mongoose from "mongoose";

const gapSchema = new mongoose.Schema(
    {
        skill: {
            type: String,
            required: true,
        },

        currentScore: {
            type: Number,
            default: 0,
        },

        requiredScore: {
            type: Number,
            default: 100,
        },

        gap: {
            type: Number,
            default: 0,
        },
    },
    { _id: false }
);

const competencySchema = new mongoose.Schema(
    {
        communication: {
            type: Number,
            default: 0,
        },

        problemSolving: {
            type: Number,
            default: 0,
        },

        technicalKnowledge: {
            type: Number,
            default: 0,
        },

        programming: {
            type: Number,
            default: 0,
        },

        overall: {
            type: Number,
            default: 0,
        },
    },
    { _id: false }
);

const courseSchema = new mongoose.Schema(
    {
        title: String,

        provider: String,

        url: String,

        level: String,

        duration: String,
    },
    { _id: false }
);

const analysisSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true,
            required: true,
        },

        atsScore: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        competencyScore: competencySchema,

        gapAnalysis: [gapSchema],

        recommendedCourses: [courseSchema],
    },
    {
        timestamps: true,
    }
);

const Analysis =
    mongoose.models.Analysis ||
    mongoose.model("Analysis", analysisSchema);

export default Analysis;