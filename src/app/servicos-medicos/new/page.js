"use client";
import { useState } from "react";
import Link from "next/link";
import { addMedicalService } from "@/services/api"; // Importa a função do arquivo services/api.js

export default function AgendarServico() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Consulta", // Valor padrão consistente
    medicalSpecialty: "",
    doctor: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      // Chamada ao serviço
      await addMedicalService(formData);
      setResponseMessage("Consulta/Exame agendado com sucesso!");
      setFormData({
        name: "",
        phone: "",
        service: "Consulta",
        medicalSpecialty: "",
        doctor: "",
        date: "",
        time: "",
      });
    } catch (error) {
      setResponseMessage(
        error.response?.data?.error || "Erro ao agendar o serviço. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 p-4">
      {/* Cabeçalho */}
      <header className="text-center my-6 bg-green-200 w-full max-w-md rounded-t-lg p-6 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-gray-600">Agendar Consulta ou Exame</p>
      </header>

      {/* Formulário */}
      <section className="bg-white w-full max-w-md rounded-b-lg p-6 shadow-lg text-black">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Nome do Paciente</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Tipo de Serviço</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            >
              <option value="Consulta">Consulta</option>
              <option value="Exame">Exame</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Especialidade Médica</label>
            <input
              type="text"
              name="medicalSpecialty"
              value={formData.medicalSpecialty}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Médico</label>
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Data</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Hora</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 mt-1 focus:ring focus:ring-green-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition"
          >
            {loading ? "Agendando..." : "Agendar"}
          </button>
        </form>

        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-700">{responseMessage}</p>
        )}
      </section>

      {/* Rodapé */}
      <footer className="text-center my-6">
        <Link href="/servicos-medicos">
          <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full hover:bg-green-300 transition-colors">
            Voltar ao Menu
          </button>
        </Link>
      </footer>
    </div>
  );
}
