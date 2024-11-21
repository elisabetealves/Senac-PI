"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Pressão Arterial (mmHg)",
      data: [120, 130, 125, 140, 135, 128],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4,
    },
    {
      label: "Glicemia (mg/dL)",
      data: [95, 110, 98, 102, 105, 100],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Importante para adaptar o gráfico em telas menores
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      title: {
        display: true,
        text: "Valores",
      },
    },
    x: {
      title: {
        display: true,
        text: "Meses",
      },
    },
  },
};

export default function MonitoramentoSaude() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center my-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
        <h1 className="text-3xl font-bold text-black">CARE IDOSOS</h1>
        <p className="text-gray-500">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Monitoramento de Saúde Section */}
      <div className="w-11/12 sm:w-2/3 lg:w-1/2 my-4">
        <h2 className="text-2xl font-semibold text-center text-black">Monitoramento de Saúde</h2>

        {/* Relatório de Saúde */}
        <div className="bg-white rounded-lg shadow-md p-6 my-4 border border-gray-200">
          <h3 className="text-xl font-bold">RELATÓRIO DE SAÚDE</h3>
          <p className="text-gray-500 mb-4">
            Aqui está disponível suas métricas de saúde, como pressão arterial, glicemia e peso.
          </p>
        </div>

        {/* Histórico de Saúde com Gráfico */}
        <div className="bg-white rounded-lg shadow-md p-6 my-4 border border-gray-200 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">HISTÓRICO DE SAÚDE</h3>
          <div
            className="w-full h-64 sm:h-80 md:h-96"
          >
            <Line data={data} options={options} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center my-6">
        <Link href="/logged">
          <button className="text-gray-600 hover:text-gray-800 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Voltar ao menu
          </button>
        </Link>
        <p className="text-gray-400 mt-4">PTI - SENAC 2024</p>
      </div>
    </div>
  );
}
