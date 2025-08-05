// models/Profile.js
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // Basic Info
  name: String,
  profilePhoto: String,
  backgroundPhoto: String,
  headline: String,
  currentPosition: String,
  education: String,
  location: String,
  industry: String,
  contactInfo: String,
  summary: String,

  openTo: {
    jobSeeking: Boolean,
    hiring: Boolean,
    providingServices: Boolean,
  },

   experience: [
    {
      title: { type: String },
      company: { type: String },
      location: { type: String },
      from: { type: Date },
      to: { type: Date },
      description: { type: String },
      type: { type: String },
    }
  ],
  educationDetails: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      from: Date,
      to: Date,
      description: String,
    },
  ],

  certifications: [
    {
      name: String,
      issuingOrganization: String,
      issueDate: Date,
      expirationDate: Date,
      credentialID: String,
      credentialURL: String,
    },
  ],

  skills: [String],

  recommendations: [
    {
      from: String,
      message: String,
    },
  ],

  courses: [
    {
      name: String,
      institution: String,
    },
  ],

  awards: [
    {
      title: String,
      issuer: String,
      date: Date,
      description: String,
    },
  ],

  languages: [String],

  organizations: [
    {
      name: String,
      role: String,
      from: Date,
      to: Date,
    },
  ],

  patents: [
    {
      title: String,
      office: String,
      date: Date,
      description: String,
    },
  ],

  publications: [
    {
      title: String,
      publisher: String,
      date: Date,
      url: String,
    },
  ],

  projects: [
    {
      name: String,
      description: String,
      url: String,
      teamMembers: [String],
    },
  ],

  testScores: [
    {
      name: String,
      score: String,
      date: Date,
    },
  ],

  volunteer: [
    {
      role: String,
      organization: String,
      from: Date,
      to: Date,
      description: String,
    },
  ],
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
