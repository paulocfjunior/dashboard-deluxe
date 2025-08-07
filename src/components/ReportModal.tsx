import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// This setup makes the component "heavy"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const ReportModal = () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [{ label: "Sample Data", data: [10, 20, 15] }],
  };
  return (
    <div style={{ padding: "2rem", width: "500px" }}>
      <h2>Report</h2>
      <Bar data={data} />
    </div>
  );
};
export default ReportModal;
