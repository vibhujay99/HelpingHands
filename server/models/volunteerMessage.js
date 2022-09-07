import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
  volTitle: { type: String, required: [true, "Title is required"] },
  volFirstName: { type: String, required: [true, "First Name is required"] },
  volLastName: { type: String, required: [true, "Last Name is required"] },
  volEmail: { type: String, required: [true, "Email is required"] },
  volNic: { type: String, required: [true, "NIC is required"] },
  volPhone: { type: String, required: [true, "Phone Number is required"] },
  volDesc: { type: String, required: [true, "Description is required"] },
  selectedFile: { type: String, required: [true, "Picture is required"] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const VolunteerMessage = mongoose.model("VolunteerMessage", volunteerSchema);

export default VolunteerMessage;
