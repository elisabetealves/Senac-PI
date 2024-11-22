"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Configuração do ícone padrão do Leaflet
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function Home() {
  useEffect(() => {
    // Verifica se o mapa já está inicializado e reseta o contêiner, se necessário
    const container = L.DomUtil.get("map");
    if (container) {
      container._leaflet_id = null;
    }

    // Inicializa o mapa
    const map = L.map("map").setView([-23.55052, -46.633308], 16);

    // Adiciona o TileLayer (camadas de mapas)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Configura o ícone padrão do marcador
    L.Marker.prototype.options.icon = DefaultIcon;

    // Adiciona um marcador e um popup
    L.marker([-23.55052, -46.633308])
      .addTo(map)
      .bindPopup("<b>Localização padrão:</b><br>São Paulo, SP.")
      .openPopup();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="text-center my-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
        <h1 className="text-3xl font-bold text-black">CARE IDOSOS</h1>
        <p className="text-gray-500">Saúde e bem-estar ao seu alcance</p>
      </header>

      {/* Seção de Emergência */}
      <section className="bg-white rounded-lg shadow-md p-6 my-4 w-11/12 sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold">Emergência</h2>
        <p className="text-gray-500">Segunda-feira, 23 de Setembro de 2024</p>

        {/* Contêiner do Mapa */}
        <div className="my-6">
          <div
            id="map"
            style={{ height: "300px", width: "100%" }}
            className="rounded-md border border-gray-300"
          ></div>
        </div>

        {/* Alternar Localização */}
        <div className="flex items-center my-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="mr-2 text-red-500 text-xl"
          />
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
