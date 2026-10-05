import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        resumeUrl: {
            type: String,
            default: "",
        },

        bio: {
            type: String,
            trim: true,
            maxlength: 500,
            default: "",
        },

        interestedDomains: [
            {
                type: String,
                trim: true,
            },
        ],

        skills: [
            {
                type: String,
                trim: true,
            },
        ],

        education: {
            type: String,
            default: "",
        },

        experience: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const Profile =
    mongoose.models.Profile ||
    mongoose.model("Profile", profileSchema);

export default Profile;