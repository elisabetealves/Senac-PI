"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getMedicalServiceById } from "@/services/api"; // Importa o serviço do arquivo `services/api.js`

export default function DetalhesServico() {
  const pathname = usePathname(); // Captura o caminho da URL
  const serviceId = decodeURIComponent(pathname.split("/")[3]); // Extrai o ID do serviço da URL
  const [servico, setServico] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (serviceId) {
      const fetchServico = async () => {
        try {
          const data = await getMedicalServiceById(serviceId); // Utiliza o serviço da API
          setServico(data);
        } catch {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchServico();
    }
  }, [serviceId]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-green-50 to-gray-100 p-4">
      {/* Cabeçalho */}
      <header className="text-center my-6 bg-green-200 w-full max-w-md rounded-t-lg p-6">
        <h1 className="text-3xl font-bold text-black">CARE IDOSOS</h1>
        <p className="text-black">Detalhes do Serviço</p>
      </header>

      {/* Conteúdo */}
      <section className="bg-white w-full max-w-md rounded-b-lg p-6 shadow-lg text-gray-800">
        {loading ? (
          <p className="text-center text-gray-600 animate-pulse">Carregando...</p>
        ) : error ? (
          <p className="text-center text-red-500">Erro ao carregar o serviço. Verifique o ID.</p>
        ) : servico ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-4">{servico.name}</h2>
            <div className="space-y-2">
              <p><strong>Telefone:</strong> {servico.phone || "Não informado"}</p>
              <p><strong>Serviço:</strong> {servico.service || "Não informado"}</p>
              <p><strong>Especialidade:</strong> {servico.medicalSpecialty || "Não informado"}</p>
              <p><strong>Médico:</strong> {servico.doctor || "Não informado"}</p>
              <p><strong>Data:</strong> {servico.date || "Não informado"}</p>
              <p><strong>Hora:</strong> {servico.time || "Não informado"}</p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Serviço não encontrado.</p>
        )}
      </section>

      {/* Rodapé */}
      <footer className="text-center my-6">
        <Link href="/servicos-medicos">
          <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full hover:bg-green-300 transition-colors">
            Voltar
          </button>
        </Link>
      </footer>
    </div>
  );
}
