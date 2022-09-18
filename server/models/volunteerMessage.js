import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
  volTitle: { type: String, required: [true, "Title is required"] },
  volFirstName: { type: String, required: [true, "First Name is required"] },
  volLastName: { type: String, required: [true, "Last Name is required"] },
  volEmail: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email is required"],
  },
  volNic: {
    type: String,
    validate: {
      validator: function (e) {
        return /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(e);
      },
      message: "Please enter a valid NIC",
    },
    required: [true, "NIC is required"],
  },
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

//^(?:0|94|\+94|0094)?(?:(?P<area>11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(?P<land_carrier>0|2|3|4|5|7|9)|7(?P<mobile_carrier>0|1|2|4|5|6|7|8)\d)\d{6}$
