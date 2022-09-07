import express from "express";

import {
  getVolunteers,
  createVolunteer,
  updateVolunteers,
  deleteVolunteers,
} from "../controllers/volunteers.js";

const router = express.Router();

//http://localhost:5000/volunteers

router.get("/", getVolunteers);
router.post("/", createVolunteer);
router.patch("/:id", updateVolunteers);
router.delete("/:id", deleteVolunteers);

export default router;
