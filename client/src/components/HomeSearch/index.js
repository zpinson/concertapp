import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import image from "../images/MSG_SEA.jpg";
import SearchForm from "../SearchForm";
import API from "../../utils/API";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
  },
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
});

export default function HomeSearch() {
  const classes = useStyles();
  const [events, setEvent] = useState('');

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   API.getEvent(this.state.artist)
  //     .then((res) => {
  //       console.log("res.data: ", res.data);
  //       const events = res.data.map((event) => {
  //         console.log(event.lineup[0]);
  //         const id = event.id;
  //         const artist = event.lineup[0];
  //         const location = event.venue.location;
  //         const venue = event.venue.name;
  //         const date = event.datetime;
  //         const eventUrl = event.url;

  //         const eventObj = {
  //           id: id,
  //           artist: artist,
  //           location: location,
  //           venue: venue,
  //           date: date,
  //           eventUrl: eventUrl,
  //         };
  //         console.log(eventObj);
  //         return eventObj;
  //       });
  //       console.log(events);
  //       this.setState({ events: events });
  //     })
  //     .catch((err) => console.log("API.getEvent err: ", err));
  //     return events;
  // };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Sea of MSG"
            height="400"
            image={image}
            title="Sea of MSG"
          />
          <CardContent className={classes.alignItemsAndJustifyContent}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                style={{ color: "white" }}
              >
                Search for an Artist:
              </InputLabel>
              <Input
                onChange={(e) => setEvent(e.target.value)}
                id="input-with-icon-adornment"
                style={{ width: "250" }}
                startAdornment={
                  <InputAdornment position="start">
                    <MusicNoteIcon style={{ color: "white" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
        </CardActionArea>
        <CardActions
          className={classes.alignItemsAndJustifyContent}
          style={{ backgroundColor: "grey" }}
        >
          <Button
            // onClick={handleFormSubmit}
            href="/searchresult"
            size="small"
            variant="contained"
            color="primary"
          >
            Show my Concerts!
          </Button>
        </CardActions>
      </Card>
      <SearchForm />
    </Grid>
  );
}