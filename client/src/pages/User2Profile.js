import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import HomeIcon from "@material-ui/icons/Home";
import DataUsageIcon from '@material-ui/icons/DataUsage';
import API from "../utils/API";
// import { mainListItems, secondaryListItems } from "./listItems";
// import Stats from "../Stats";
// import UpcomingEvents from "../UpcomingEvents";
// import Orders from "./Orders";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        DSD Designs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// handleGetSavedEvents = () => {
//     getSavedEvents()
//     .than(tell it what to return)
// }
// componentDidMount() {
//     this.getSavedEvents();
//   };

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  card: {
    display: "inline-block",
    margin: 5,
    alignItems: "center",
    justify: "center",
  },
  artistCard: {
    minWidth: "100",
    minHeight: "100",
    margin: 5,
  },
  eventText: {
    display: "flex",
    padding: 5,
    align: "center",
    justify: "center",
  },
}));

export default function User2Profile() {
  const classes = useStyles();
  const [events, setEvents] = React.useState([]);
  const [open, setOpen] = React.useState(true);

  function getSavedEvents() {
    API.getSavedEvents()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleEventDelete(id) {
    console.log(id);
    API.deleteEvent(id).then((res) => this.getSavedEvents());
  }

  useEffect(() => {
    getSavedEvents();
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            myConcerts Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText>Upcoming Events</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventBusyIcon />
            </ListItemIcon>
            <ListItemText>Past Events</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DataUsageIcon />
            </ListItemIcon>
            <ListItemText>myStats</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {events ? (
            <div>
              {events.map((event) => (
                <Grid
                  className="overflow-container"
                  container
                  direction="row"
                  spacing={3}
                  key={event.id}
                >
                  <Grid item xs={12}>
                    <Paper elevation={5}>
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                        spacing={3}
                      >
                        <Grid item justify="center">
                          <Card className={classes.card} variant="outlined">
                            <CardContent className={classes.artistCard}>
                              <Typography variant="h6" component="h2">
                                /image/
                              </Typography>
                            </CardContent>
                          </Card>
                          <Typography
                            className={classes.eventText}
                            component="h2"
                          >
                            <strong>{event.artist_name}</strong>
                          </Typography>
                        </Grid>
                        <Grid wrap="nowrap" item className={classes.artistCard}>
                          <Typography
                            className={classes.eventText}
                            component="h2"
                          >
                            <strong>{event.venue_name}</strong>
                          </Typography>
                          <Typography
                            className={classes.eventText}
                            component="h2"
                          >
                            {event.location}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.artistCard}>
                          <Typography
                            className={classes.eventText}
                            component="h2"
                          >
                            <strong>{event.time}</strong>
                          </Typography>
                          <Typography
                            className={classes.eventText}
                            component="h2"
                          >
                            {event.date}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container justify="center" spacing={4}>
                        <Grid item>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            <a href={event.event_url} target="_blank">
                              More Info
                            </a>
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            <a
                              href={
                                "https://www.google.com/maps/search/?api=1&query=" +
                                event.latitude +
                                "," +
                                event.longitude
                              }
                              target="_blank"
                            >
                              Get Directions
                            </a>
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            onClick={() => this.handleEventDelete(event._id)}
                            size="small"
                            variant="contained"
                            color="primary"
                          >
                            Remove Event
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>

                    {/* <Card className={classes.card} variant="outlined">
                      <CardContent className={classes.cardContent}>
                        <Paper elevation={6} className={classes.paperRes}>
                          <Typography variant="h5" component="h2">
                            {event.date}
                            <p>{event.time}</p>
                          </Typography>
                        </Paper>
                        <Paper elevation={6} className={classes.paperRes}>
                          <Typography variant="h5" component="h2">
                            {event.artist_name}
                          </Typography>
                        </Paper>
                        <Paper className={classes.paperRes}>
                          <Typography>{event.venue_name}</Typography>
                        </Paper>
                      </CardContent>
                    </Card> */}
                  </Grid>
                </Grid>
              ))}
            </div>
          ) : (
            <h3>No Results to Display</h3>
          )}

          {/* <Grid container spacing={3}>
            Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Stats />
              </Paper>
            </Grid>
            Upcoming Events
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <UpcomingEvents />
              </Paper>
            </Grid> */}
          {/* Recent Orders */}
          {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          {/* </Grid> */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
