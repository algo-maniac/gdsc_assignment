import { Pie } from "react-chartjs-2";

export default function PieChart({ chartData }) {
  return (
    <div
      className="chart-container"
      style={{
        height: "40%",
        width: "40%",
        marginLeft: "30%",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Conference names and their IDS",
            },
          },
        }}
      />
    </div>
  );
}
