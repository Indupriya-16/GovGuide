const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Profile = require("./models/Profile");
const Opportunity = require("./models/Opportunity");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/govguide")
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log("MongoDB connection error:", error));

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("GovMatch Backend is running!");
});
app.post("/profile", async (req, res) => {
    try {
        const profile = new Profile(req.body);

        await profile.save();
        console.log("Profile saved to MongoDB:", profile);

        res.json({
            message: "Profile saved successfully!"
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error saving profile"
        });
    }
});
app.post("/opportunity", async (req, res) => {
    try {
        const opportunity = new Opportunity(req.body);

        await opportunity.save();

        console.log("Opportunity saved to MongoDB:", opportunity);

        res.json({
            message: "Opportunity saved successfully!"
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error saving opportunity"
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});