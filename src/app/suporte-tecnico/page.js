"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SuporteTecnico() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="text-center bg-green-100 w-full max-w-md rounded-t-lg p-6 flex flex-col items-center">
        <img src="/logo.png" alt="Logo" className="mb-4 w-24 h-24" />
        <h1 className="text-2xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-gray-600">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Suporte Técnico Section */}
      <div className="bg-white w-full max-w-md rounded-b-lg p-6">
        <h2 className="text-xl font-semibold text-center">Suporte Técnico</h2>
        <p className="text-gray-700 mb-4 text-justify">
          No Care Idosos, seu bem-estar é a nossa prioridade. Aqui, garantimos que você tenha o suporte que precisa. Para isso, oferecemos atendimento técnico especializado disponível 24h por dia.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          Esclareça qualquer questão sobre o uso do aplicativo e seus recursos, tire dúvidas, faça sugestões ou reclamações, receba assistência para resolver problemas técnicos rapidamente. Além disso, se preferir, converse com nossos especialistas em tempo real.
        </p>
        <p className="text-gray-700 text-justify mb-6">Estamos prontos para atendê-los!</p>

        {/* Botão Solicitar Suporte */}
        <a
          href="tel:+5508001234567" // Número fictício para demonstração
          className="w-full bg-green-200 text-green-800 font-semibold py-2 rounded-full hover:bg-green-300 mb-6 text-center block"
        >
          Solicitar Suporte
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <Link href="/logged">
          <button className="text-gray-600 hover:text-gray-800 text-lg flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Voltar ao menu
          </button>
        </Link>
        <p className="text-gray-400 mt-4">PTI - SENAC 2024</p>

      </div>
    </div>
  );
}
