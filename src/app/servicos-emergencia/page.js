"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Obter localização do usuário
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        }
      );
    } else {
      console.error("Geolocation não está disponível no navegador.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="text-center my-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
        <h1 className="text-3xl font-bold">CARE IDOSOS</h1>
        <p className="text-gray-500">Saúde e bem-estar ao seu alcance</p>
      </header>

      {/* Seção de Emergência */}
      <section className="bg-white rounded-lg shadow-md p-6 my-4 w-11/12 sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold">Emergência</h2>
        <p className="text-gray-500">Segunda-feira, 23 de Setembro de 2024</p>

        {/* Exibir o Google Maps */}
        <div className="my-6">
          {latitude && longitude ? (
            <iframe
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
              className="rounded-md border border-gray-300"
              src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${latitude},${longitude}&zoom=16`}
              title="Localização Atual"
            ></iframe>
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
              <p className="text-gray-500">Carregando localização...</p>
            </div>
          )}
        </div>

        {/* Alternar Localização */}
        <div className="flex items-center my-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500 text-xl" />
          <span className="mr-2 text-black">Permitir localização em tempo real</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

        {/* Botão de Ajuda */}
        <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full w-full my-4 hover:bg-red-700 text-lg">
          PEDIR AJUDA
        </button>
      </section>

      {/* Rodapé */}
      <footer className="text-center my-6">
        <Link href="/logged">
          <button className="text-gray-600 hover:text-gray-800 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Voltar ao menu
          </button>
        </Link>
        <p className="text-gray-400 mt-4">PTI - SENAC 2024</p>
      </footer>
    </div>
  );
}
