import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Volunteer from "./Volunteer/Volunteer";

import useStyles from "./styles";

const Volunteers = ({ setCurrentId }) => {
  const volunteers = useSelector((state) => state.volunteers);
  const classes = useStyles();

  console.log(volunteers);
  return !volunteers.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {volunteers.map((volunteer) => (
        <Grid key={volunteer._id} item xs={12} sm={6}>
          <Volunteer volunteer={volunteer} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Volunteers;
