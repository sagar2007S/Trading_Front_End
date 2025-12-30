import {
   Chart as ChartJs,
   LineElement,
   CategoryScale,
   LinearScale,
   PointElement,
   Tooltip,
   Filler
} from 'chart.js'
import {Line} from "react-chartjs-2";
import { useState } from 'react';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler
);


const chartDataMap = {
  equity: {
    labels: ["11.2024", "12.2024", "01.2025", "02.2025", "03.2025", "04.2025", "05.2025"],
    data: [0, 20, 40, 60,80,100, 120,140],
  },
  year: {
    labels: [" "," ", " ","05.25", "", "", ""],
    data: [0, 20, 40, 60, 80, 100, 120],
  },
  "6m": {
    // labels: ["Month 1", "Month 3", "Month 6"],
    // data: [2000, 6000, 8000],
  },
  "3m": {
    labels: ["Month 1", "Month 2", "Month 3"],
    data: [3000, 6000, 7000],
  },
  "1m": {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [2000, 4000, 6500, 7000],
  },
};

export default function EquityChart() {
  const [activeTab, setActiveTab] = useState("equity");

  const chartData = {
    labels: chartDataMap[activeTab].labels,
    datasets: [
      {
        data: chartDataMap[activeTab].data,
        borderColor: "#6b7280",
        backgroundColor: "rgba(107,114,128,0.1)",
        fill: true,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [4, 4],
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Tabs */}
      <div className="flex border-b mb-4 text-sm">
        {[
          ["equity", "Equity"],
          ["year", "Year"],
          ["6m", "6 mth."],
          ["3m", "3 mth."],
          ["1m", "1 mth."],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 font-medium border-b-2 transition
              ${
                activeTab === key
                  ? "border-red-500 text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[350px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}