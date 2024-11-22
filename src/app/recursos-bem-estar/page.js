"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function RecursosBemEstar() {
  const recursos = [
    {
      titulo: 'PROGRAMAS DE ATIVIDADE FÍSICA',
      descricao: 'Programas de exercícios personalizados para diferentes níveis. Além de, vídeos de treinos e instruções fáceis de seguir.',
    },
    {
      titulo: 'DICAS DE NUTRIÇÃO',
      descricao: 'Planos alimentares e receitas saudáveis adaptadas as suas necessidades.',
    },
    {
      titulo: 'ORIENTAÇÃO E CUIDADOS PREVENTIVOS',
      descricao: 'Dicas e programas para ajudar a manter sua saúde em dia e prevenir doenças.',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="text-center my-6 w-full max-w-md rounded-t-lg p-6">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-20 h-20" />
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-gray-600">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Recursos de Bem-Estar Section */}
      <div className="bg-white w-full max-w-md rounded-b-lg p-4">
        <h2 className="text-xl font-semibold text-center mb-4">Recursos de Bem-Estar</h2>
        {recursos.map((recurso, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 mb-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{recurso.titulo}</h3>
              <p className="text-gray-600 text-sm">{recurso.descricao}</p>
            </div>
            <Link href={`/recursos-bem-estar/${encodeURIComponent(recurso.titulo)}`}>
              <button className="bg-green-200 text-green-700 rounded-full px-4 py-1 text-sm font-medium hover:bg-green-300">
                Acessar
              </button>
            </Link>
          </div>
        ))}
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
