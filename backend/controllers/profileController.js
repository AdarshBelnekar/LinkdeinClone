// controllers/profileController.js
import Profile from "../models/Profile.js";

// Create or update profile
export const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user.id;



    // Try parsing if it is a string
    if (typeof req.body.experience === "string") {
      try {
        req.body.experience = JSON.parse(req.body.experience);
        console.log("Parsed experience:", req.body.experience);
      } catch (e) {
        return res.status(400).json({ success: false, message: "Invalid JSON for experience" });
      }
    }

    let profile = await Profile.findOne({ userId });
    if (profile) {
      Object.keys(req.body).forEach(key => {
        profile[key] = req.body[key];
      });
      await profile.save();
      return res.status(200).json({ success: true, data: profile });
    }

    profile = new Profile({ ...req.body, userId });
    await profile.save();

    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// Get profile by logged-in user
export const getProfile = async (req, res) => {
  try {
    
    const userId = req.user.id;

    const profile = await Profile.findOne({ userId });
    if (!profile)
      return res.status(404).json({ success: false, message: "Profile not found" });

    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// controllers/profileController.js
export const UpdateProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Make sure authMiddleware sets this
    const profileData = req.body;

    let profile = await ProfileModel.findOne({ user: userId });

    if (profile) {
      // Update existing profile
      profile = await ProfileModel.findOneAndUpdate(
        { user: userId },
        { $set: profileData },
        { new: true }
      );
    } else {
      // Create new profile
      profile = await ProfileModel.create({ ...profileData, user: userId });
    }

    res.json({ success: true, data: profile });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
