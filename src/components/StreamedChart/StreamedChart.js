import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import streamedChartData from "../../MockData/StreamchartData.json";
export const StreamedChart = () => {
  return (
    <div className="container">
      <h1>Streamed chart</h1>
      <ResponsiveContainer width="90%" height={500}>
        <AreaChart width={1000} height={500} data={streamedChartData}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis
            type="category"
            label={{
              value: "Hours in avg",
              position: "insideBottomRight",
              dy: 15,
            }}
          ></XAxis>
          <YAxis
            type="number"
            domain={[0, 60]}
            label={{
              value: "Story Point (Days)",
              position: "insideLeft",
              angle: -90,
              dy: -10,
            }}
          ></YAxis>
          <Tooltip> </Tooltip>
          <Legend></Legend>
          <Area
            type="bumpX"
            dataKey="IssueOpen"
            stroke="#535757"
            fill="#535757"
            legendType="circle"
            dot={false}
          />
          <Area
            type="bumpX"
            dataKey="IssueStarted"
            stroke="#bdc2c2"
            fill="#bdc2c2"
            legendType="circle"
            dot={false}
            // #8f9192
          />
          <Area
            type="bumpX"
            dataKey="IssueCompleted"
            stroke="#e0e6e6"
            fill="#e0e6e6"
            legendType="circle"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
