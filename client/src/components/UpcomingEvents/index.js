import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, artist, location, venue, amount) {
  return { id, date, artist, location, venue, amount };
}

const rows = [
  createData(
    0,
    "16 Jul, 2021",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719"
  ),
  createData(
    1,
    "23 Jul, 2021",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574"
  ),
  createData(
    2,
    "26 Jul, 2021",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253"
  ),
  createData(
    3,
    "1 Aug, 2021",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000"
  ),
  createData(
    4,
    "5 Sep, 2021",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Upcoming Events</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Event Location</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more events
        </Link>
      </div>
    </React.Fragment>
  );
}
