import React from "react";
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
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import image from "../../images/MSG_SEA.jpg";

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

export default function ImgMediaCard() {
  const classes = useStyles();

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
          <Button size="small" variant="contained" color="primary">
            Show my Concerts!
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}