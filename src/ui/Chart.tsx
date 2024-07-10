import { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { SymbolData } from "../utils/fake-data";

function SymbolChart({ symbolData }: { symbolData: SymbolData }) {
  const [fakeData, setFakeData] = useState<number[]>([100]);

  const average =
    fakeData.reduce((a: number, b: number) => a + b) / fakeData.length;

  const color = symbolData.price > average ? "#00FFAB" : "#FF204E";

  const spark1 = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      color: "00FFAB",
      width: 5,
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    series: [
      {
        name: "Sales",
        data: fakeData,
      },
    ],
    colors: [color],
    title: {
      text: `$${symbolData.price}`,
      style: {
        fontSize: "24px",
        color,
        cssClass: "apexcharts-yaxis-title",
      },
    },
    subtitle: {
      text: "LBKHND",
      style: {
        fontSize: "14px",
        color: "#8e8e8e",
      },
    },
  };

  const chartRef = useRef<ReactApexChart>();

  useEffect(() => {
    const data = [...fakeData, symbolData.price];
    if (data.length > 50) data.shift();

    setFakeData(data);
  }, [symbolData]);

  return (
    <Chart ref={chartRef} options={spark1} series={spark1.series} type="area" />
  );
}

export default SymbolChart;
