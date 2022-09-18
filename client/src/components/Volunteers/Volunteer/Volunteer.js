import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deleteVolunteers } from "../../../actions/volunteers";

const Volunteer = ({ volunteer, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={volunteer.selectedFile}
        title={volunteer.volTitle}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">
          {volunteer.volFirstName} {volunteer.volLastName}
        </Typography>
        <Typography variant="h6">{volunteer.volEmail}</Typography>
        <Typography variant="h6">{volunteer.volPhone}</Typography>
        <Typography variant="body2">
          {moment(volunteer.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(volunteer._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {volunteer.volFirstName}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {volunteer.volTitle}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteVolunteers(volunteer._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Volunteer;
