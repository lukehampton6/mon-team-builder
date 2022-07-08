import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StatsGraph(stats) {

    const labels = [
        "hp",
        "attack",
        "defense",
        "special attack",
        "special defense",
        "speed",
      ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "stats",
      },
    },
    labels: { labels },
    
}

  const data = {
    datasets: [
      {
        label: "hp",
        data: stats.props[0].base_stat,
        backgroundColor: "#FF5959",
      },
      {
        label: "attack",
        data: stats.props[1].base_stat,
        backgroundColor: "#F5AC78",
      },
      {
        label: "defense",
        data: stats.props[2].base_stat,
        backgroundColor: "#FAE078",
      },
      {
        label: "special attack",
        data: stats.props[3].base_stat,
        backgroundColor: "#9DB7F5",
      },
      {
        label: "special defense",
        data: stats.props[4].base_stat,
        backgroundColor: "#A7DB8D",
      },
      {
        label: "speed",
        data: stats.props[5].base_stat,
        backgroundColor: "#FA92B2",
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default StatsGraph;
