import { scaleBand, scaleLinear } from "d3";

const data = [100, 200, 300];

export default function RPSChart() {
  const width = 200;
  const height = 100;

  const xScale = scaleBand<number>()
    .domain(data.map((_, i) => i))
    .range([0, width])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain([0, Math.max(...data)])
    .range([height, 0]);

  return (
    <div className="p-4 rounded-md inline-block">
      <svg width={width} height={height}>
        {data.map((d, i) => (
          <rect
            key={i}
            x={xScale(i)}
            y={yScale(d)}
            width={xScale.bandwidth()}
            height={height - yScale(d)}
            fill={i === data.length - 1 ? "#22d3ee" : "#475569"}
            rx={2}
          />
        ))}
      </svg>
    </div>
  );
}
