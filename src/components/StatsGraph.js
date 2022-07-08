import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function StatsGraph(stats) {
  const data = {
    labels: [
      "hp",
      "attack",
      "defense",
      "special attack",
      "special defense",
      "speed",
    ],
    datasets: [
      {
        label: "stat",
        data: [
          stats.props[0].base_stat,
          stats.props[1].base_stat,
          stats.props[2].base_stat,
          stats.props[3].base_stat,
          stats.props[4].base_stat,
          stats.props[5].base_stat,
        ],
        backgroundColor: [
          "#FF5959",
          "#F5AC78",
          "#FAE078",
          "#9DB7F5",
          "#A7DB8D",
          "#FA92B2",
        ],
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 2,
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "stats",
        color: "#FFF",
        font: {
          size: 30,
        },
      },
      legend: {
        display: false,
      },
    },
  };
  return <Bar data={data} options={options} />;
}

export default StatsGraph;
