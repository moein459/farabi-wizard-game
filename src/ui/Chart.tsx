import Chart from "react-apexcharts";
import { useFakeSymbolStore } from "../state/fake-symbol";

function SymbolChart() {
  const fakeSymbolStore = useFakeSymbolStore();
  const color = fakeSymbolStore.status === "POSITIVE" ? "#00FFAB" : "#FF204E";

  const spark1: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
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
        data: fakeSymbolStore.history,
      },
    ],
    colors: [color],
    title: {
      text: `$${fakeSymbolStore.current.price}`,
      style: {
        fontSize: "24px",
        color,
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

  return <Chart options={spark1} series={spark1.series} type="area" />;
}

export default SymbolChart;
