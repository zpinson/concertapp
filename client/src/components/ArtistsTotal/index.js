import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import API from "../../utils/API";

const ArtistsTotal = () => {
  const [chartData, setChartData] = useState({});
  const [total, setTotal] = useState([]);
  const [showsNum, setShowsNum] = useState([]);
  const [artistName, setArtistName] = useState([]);

  console.log(total);
  console.log(artistName);

  const chart = () => {
    let artist = [];
    let shows = [];

    API.getArtistTotal()
      .then((res) => {
        setShowsNum(res.data);
        console.log(res.data);
        for (const dataObj of res.data) {
          artist.push(dataObj._id);
          shows.push(dataObj.count);

          console.log(artist, shows);
        }
        setArtistName(artist);
        setTotal(shows);

        setChartData({
          labels: artistName,
          datasets: [
            {
              data: total,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 23,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Bar
        data={{
          labels: artistName,
          datasets: [
            {
              label: "myArtists",
              data: total,
              backgroundColor: [
                "#B21F00",
                "#C9DE00",
                "#2FDE00",
                "#00A6B4",
                "#6800B4",
                "#ffafbd",
                "#2193b0",
                "#bdc3c7",
                "#ffc3a0",
                "#6dd5ed",
                "#6dd5ed",
                "#cc2b5e",
                "#753a88",
                "#734b6d",
                "#2c3e50",
                "#42275a",
                "#48b1bf",
                "#06beb6",
                "#06beb6",
                "#ef629f",
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
          ],
        }}
        height={400}
        width={600}
        options={{
          title: {
            display: true,
            text: "myConcerts by Artist",
            fontSize: 32,
          },
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
