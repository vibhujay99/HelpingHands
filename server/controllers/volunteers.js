import express from "express";
import mongoose from "mongoose";

import VolunteerMessage from "../models/volunteerMessage.js";

const router = express.Router();

export const getVolunteers = async (req, res) => {
  try {
    const volunteerMessage = await VolunteerMessage.find();

    res.status(200).json(volunteerMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createVolunteer = async (req, res) => {
  const volunteer = req.body;

  const newVolunteer = new VolunteerMessage(volunteer);

  try {
    await newVolunteer.save();

    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateVolunteers = async (req, res) => {
  const { id: _id } = req.params;
  const volunteers = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No submission with that ID");

  const updateVolunteers = await VolunteerMessage.findByIdAndUpdate(
    _id,
    { ...volunteers, _id },
    { new: true }
  );

  res.json(updateVolunteers);
};

export const deleteVolunteers = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No submission with that ID");

  await VolunteerMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export default router;
