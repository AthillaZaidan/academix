import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Hours Studied",
            data: [13, 52, 23.8, 32, 2.2, 1, 0],
            fill: true,
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            tension: 0.4
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom" as const
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 1
            }
        }
    }
};

export default function LearningChart() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
                Learning Activity This Week
            </h3>
            <Line data={data} options={options} />
        </div>
    );
}
