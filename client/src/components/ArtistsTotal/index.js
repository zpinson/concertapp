
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import API from "../../utils/API";

const ArtistsTotal = () => {
  const [chartData, setChartData] = useState({});
  const [events, setEvents] = useState([]);
  const [showsNum, setShowsNum] = useState([]);
  const [artistName, setArtistName] = useState([]);

  // function getArtistTotal() {
  //   API.getArtistTotal()
  //     .then((res) => {
  //       setShowsNum(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function chart() {
  //   type: 'bar',
  //   data: {
  //     labels: [artistName],
  //     datasets: [
  //       {
  //         axis: 'y',
  //         label: "# of shows attended (by artist)",
  //         data: [showsNum],
  //         fill: false,
  //   backgroundColor: [
  //     'rgba(255, 99, 132, 0.2)',
  //     'rgba(255, 159, 64, 0.2)',
  //     'rgba(255, 205, 86, 0.2)',
  //     'rgba(75, 192, 192, 0.2)',
  //     'rgba(54, 162, 235, 0.2)',
  //     'rgba(153, 102, 255, 0.2)',
  //     'rgba(201, 203, 207, 0.2)'
  //   ],
  //   borderColor: [
  //     'rgb(255, 99, 132)',
  //     'rgb(255, 159, 64)',
  //     'rgb(255, 205, 86)',
  //     'rgb(75, 192, 192)',
  //     'rgb(54, 162, 235)',
  //     'rgb(153, 102, 255)',
  //     'rgb(201, 203, 207)'
  //   ],
  //   borderWidth: 1
  // }]
  //     }
  //   }
  // };

  const chart = () => {
    let artist = [];
    let shows = [];

    function getArtistTotal() {
    API.getArtistTotal()
      .then(
        (res) => {
          setShowsNum(res.data);
          console.log(res.data);
          for (const dataObj of res.data) {
            artist.push(dataObj._id);
            shows.push(dataObj.count);

            console.log(artist, shows);
          }
          setChartData({
            labels: [1, 2, 3, 4],
            datasets: [
              {
                label: "level of thiccness",
                data: [9, 8, 7, 6],
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4,
              },
            ],
          });
        }
        // .then((res) => {
        //   console.log(res);
        //   for (const dataObj of res.data.data) {
        //     artist.push(dataObj._id);
        //     shows.push(dataObj.count);
          }
      )
      .catch((err) => {
        console.log(err);
      });
    // };
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Bar
        data={{
          labels: [1, 2, 3, 4],
          datasets: [
            {
              label: "# of votes",
              data: [1, 2, 3, 4],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default ArtistsTotal;
