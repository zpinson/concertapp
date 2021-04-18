import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import API from "../../utils/API";

const StatesTotal = () => {
  const [chartStateData, setChartStateData] = useState({});
  const [total, setTotal] = useState([]);
  const [statesShows, setStatesShows] = useState([]);
  const [statesName, setStatesName] = useState([]);

  console.log(total);
  console.log(statesName);

  const chartState = () => {
    let states = [];
    let shows = [];

    API.getStatesTotal()
      .then((res) => {
        setStatesShows(res.data);
        console.log(res.data);
        for (const dataObj of res.data) {
          states.push(dataObj._id);
          shows.push(dataObj.count);

          console.log(states, shows);
        }
        setStatesName(states);
        setStatesShows(shows);

        setChartStateData({
          labels: statesName,
          datasets: [
            {
              label: "myConcerts by State/Region",
              data: statesShows,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chartState();
  }, []);

  return (
    <div>
      <Pie
        data={{
          labels: statesName,
          datasets: [
            {
              label: "# of votes",
              data: statesShows,
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

export default StatesTotal;
