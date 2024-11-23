"use client";

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // CSS para Leaflet
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  useEffect(() => {
    const initMap = async () => {
      try {
        const L = await import("leaflet");

        // Remove o contêiner do mapa se já estiver inicializado
        const container = document.getElementById("map");
        if (container && container._leaflet_id) {
          container._leaflet_id = null;
        }

        // Inicializa o mapa
        const map = L.map("map").setView([-23.55052, -46.633308], 16);

        // Adiciona o TileLayer (camadas do mapa)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Configura o ícone padrão do marcador
        const DefaultIcon = L.icon({
          iconUrl: "/location.png", // Localize o ícone na pasta public
          iconSize: [25, 25], // Tamanho do ícone
          iconAnchor: [12, 0], // Ponto de ancoragem
        });
        L.Marker.prototype.options.icon = DefaultIcon;

        // Adiciona marcador e popup
        L.marker([-23.55052, -46.633308])
          .addTo(map)
          .bindPopup("<b>Localização padrão:</b><br>São Paulo, SP.")
          .openPopup();
      } catch (error) {
        console.error("Erro ao inicializar o mapa:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="text-center my-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
        <h1 className="text-3xl font-bold text-black">CARE IDOSOS</h1>
        <p className="text-gray-500">Saúde e bem-estar ao seu alcance</p>
      </header>

      <section className="bg-white rounded-lg shadow-md p-6 my-4 w-11/12 sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold">Emergência</h2>
        <p className="text-gray-500">Segunda-feira, 23 de Setembro de 2024</p>

        <div className="my-6">
          <div
            id="map"
            style={{ height: "300px", width: "100%" }}
            className="rounded-md border border-gray-300"
          ></div>
        </div>

        <div className="flex items-center my-4">
          <span className="mr-2 text-black">
            Permitir localização em tempo real
          </span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

        <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full w-full my-4 hover:bg-red-700 text-lg">
          PEDIR AJUDA
        </button>
      </section>

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
