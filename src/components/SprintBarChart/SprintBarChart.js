import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import sprintBarData  from "../../MockData/SprintBarChartData.json";

export const SprintBarChart = () => {
  console.log(sprintBarData, "json data");
  return (
    <div className="container">
      <h1>Sprint Bar chart</h1>
      <ResponsiveContainer width="90%" height={500}>
        <BarChart width={800} height={400} data={sprintBarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Sprints", position: "insideBottomRight", dy: 13 }}
          />
          <YAxis
            type="number"
            domain={[0, 200]}
            label={{
              value: "StoryPoint (SP)",
              position: "insideLeft",
              angle: -90,
              dy: -10,
            }}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar
            dataKey="SPPlanned"
            fill="#c9cccc"
            stackId="a"
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="SPAdded"
            fill="#979c9c"
            stackId="a"
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="SPCompleted"
            fill="#616666"
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="SPForecast"
            fill="#e4e9e9"
            stackId="a"
            radius={[10, 10, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
