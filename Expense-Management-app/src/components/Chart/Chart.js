import "../Chart_css/Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
