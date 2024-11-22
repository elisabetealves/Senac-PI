"use client"
import Link from 'next/link';
import { useEffect, useState } from "react";

import { getContacts, deleteContact } from "@/services/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCog, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts((prev) => prev.filter((c) => c.contactId !== contactId));
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-lg text-gray-600">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Lista de Contatos */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Seus contatos</h2>

        <ul className='space-y-4'>
          {contacts.map((contact) => (
            <li key={contact.contactId} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <span className="ml-3 text-gray-800 font-medium">{contact.name}</span>

              <div className='flex flex-row space-x-4'>
                <Link href={`/contatos-emergencia/${contact.contactId}`}>
                <div className="bg-orange-500 text-white px-2 py-2 rounded-full hover:bg-red-600 transition flex items-center justify-center">
                  <FontAwesomeIcon icon={faCog} />
                </div>
                </Link>
                <button onClick={() => handleDelete(contact.contactId)} className="bg-red-500 text-white px-2 py-2 rounded-full hover:bg-red-600 transition flex items-center justify-center">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>

            </li>
          ))}
        </ul>
      </div>

      {/* Botões Adicionar e Gerenciar */}
      <div className="flex space-x-4 mt-6">
        <Link href='/contatos-emergencia/add'>
          <button className="flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Adicionar
          </button>
        </Link>
      </div>

      {/* Botão Voltar ao Menu */}
      <Link href="/logged" className="mt-6 flex items-center text-gray-500 hover:text-gray-700 transition">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-6 w-6" />
        Voltar ao menu
      </Link>

      {/* Rodapé */}
      <footer className="mt-6 text-gray-400 text-sm">
        PTI - SENAC 2024
      </footer>
    </div>
  );
}
