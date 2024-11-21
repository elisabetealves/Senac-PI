"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getMedicalServices } from "@/services/api";

export default function ListarServicos() {
  const pathname = usePathname(); // Captura o caminho da URL
  const service = decodeURIComponent(pathname.split("/")[2]); // Extrai o tipo de serviço da URL
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const data = await getMedicalServices(service);
        setServicos(data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchServicos();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <header className="text-center my-6 bg-green-200 w-full max-w-md rounded-t-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-gray-600">Listagem de {service}</p>
      </header>

      <section className="bg-white w-full max-w-md rounded-b-lg p-6 shadow-md text-black">
        <h2 className="text-2xl font-semibold text-center mb-4">Serviços</h2>
        {loading ? (
          <p className="text-center text-gray-600">Carregando...</p>
        ) : servicos.length > 0 ? (
          <ul>
            {servicos.map((servico) => (
              <li key={servico.serviceId} className="border rounded-md p-4 mb-4">
                <p><strong>Paciente:</strong> {servico.name}</p>
                <p><strong>Especialidade:</strong> {servico.medicalSpecialty}</p>
                <p><strong>Médico:</strong> {servico.doctor}</p>
                <p><strong>Data:</strong> {servico.date}</p>
                <Link href={`/servicos-medicos/service/${servico.serviceId}`}>
                  <button className="mt-2 bg-green-200 text-green-700 rounded-full px-4 py-1 text-sm font-medium hover:bg-green-300">
                    Ver detalhes
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Nenhum serviço encontrado.</p>
        )}
      </section>

      <footer className="text-center my-6">
        <Link href="/servicos-medicos">
          <button className="text-gray-600 hover:text-gray-800 text-lg">Voltar</button>
        </Link>
      </footer>
    </div>
  );
}
