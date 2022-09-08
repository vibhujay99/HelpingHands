import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { createVolunteer, updateVolunteers } from "../../actions/volunteers";

const FormVolunteers = ({ currentId, setCurrentId }) => {
  const [volunteerData, setVolunteerData] = useState({
    volTitle: "",
    volFirstName: "",
    volLastName: "",
    volEmail: "",
    volNic: "",
    volPhone: "",
    volDesc: "",
    selectedFile: "",
  });

  const volunteer = useSelector((state) =>
    currentId ? state.volunteers.find((m) => m._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (volunteer) setVolunteerData(volunteer);
  }, [volunteer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateVolunteers(currentId, volunteerData));
    } else {
      dispatch(createVolunteer(volunteerData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setVolunteerData({
      volTitle: "",
      volFirstName: "",
      volLastName: "",
      volEmail: "",
      volNic: "",
      volPhone: "",
      volDesc: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Updating" : "Creating"} Volunteer Submissions
        </Typography>
        <TextField
          name="volTitle"
          variant="outlined"
          label="Title"
          fullWidth
          value={volunteerData.volTitle}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volTitle: e.target.value })
          }
        />
        <TextField
          name="volFirstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={volunteerData.volFirstName}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volFirstName: e.target.value })
          }
        />
        <TextField
          name="volLastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={volunteerData.volLastName}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volLastName: e.target.value })
          }
        />
        <TextField
          name="volEmail"
          variant="outlined"
          label="Email"
          fullWidth
          value={volunteerData.volEmail}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volEmail: e.target.value })
          }
        />
        <TextField
          name="volNic"
          variant="outlined"
          label="NIC"
          fullWidth
          value={volunteerData.volNic}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volNic: e.target.value })
          }
        />
        <TextField
          name="volPhone"
          variant="outlined"
          label="Phone Number"
          fullWidth
          value={volunteerData.volPhone}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volPhone: e.target.value })
          }
        />
        <TextField
          name="volDesc"
          variant="outlined"
          label="Description"
          fullWidth
          value={volunteerData.volDesc}
          onChange={(e) =>
            setVolunteerData({ ...volunteerData, volDesc: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setVolunteerData({ ...volunteerData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormVolunteers;
