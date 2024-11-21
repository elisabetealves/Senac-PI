// pages/servicos.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ServicosMedicos() {
  const servicos = [
    {
      titulo: "CONSULTAS",
      descricao: "Agende consultas com especialistas.",
    },
    {
      titulo: "EXAMES E DIAGNÓSTICOS",
      descricao: "Marque e acompanhe exames necessários para monitorar sua saúde.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center my-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
        <h1 className="text-3xl font-bold text-black">CARE IDOSOS</h1>
        <p className="text-gray-500">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Serviços Médicos Section */}
      <div className="w-11/12 sm:w-2/3 lg:w-1/2 my-4">
        <h2 className="text-2xl font-semibold text-center text-black">Serviços Médicos</h2>

        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 my-4 border border-gray-200 text-black"
          >
            <h3 className="text-xl font-bold">{servico.titulo}</h3>
            <p className="text-gray-500 mb-4">{servico.descricao}</p>
            <div className="flex space-x-4">
              <Link href={`/servicos-medicos/${servico.titulo == "CONSULTAS" ? "Consulta" : "Exame"}`}>
                <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full hover:bg-green-300">
                  Detalhar
                </button>
              </Link>
              <Link href={`/servicos-medicos/new`}>
                <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full hover:bg-green-300">
                  Agendar
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center my-6">
        <Link href="/logged">
          <button className="text-gray-600 hover:text-gray-800 text-lg flex">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-6 w-6" />
            Voltar ao menu
          </button>
        </Link>
        <p className="text-gray-400 mt-4">PTI - SENAC 2024</p>
      </div>
    </div>
  );
}
