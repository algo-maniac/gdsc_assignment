import { Pie } from "react-chartjs-2";

export default function PieChart({ chartData }) {
  return (
    <div
      className="chart-container"
      style={{
        height: "60%",
        width: "40%",
        marginLeft: "30%",
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black", marginBottom: "5px" }}>
        Pie Chart
      </h2>
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
        style={{
          boxShadow: "1px 3px 13px -4px rgba(255, 255, 255, 1)",
          padding: "10px",
          color: "black",
        }}
      />
    </div>
  );
}
