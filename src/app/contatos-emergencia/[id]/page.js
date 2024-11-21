"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { getContacts, updateContact } from '@/services/api';
import { usePathname } from 'next/navigation';

export default function EditContact() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname(); // Obtém o caminho da URL atual
  const id = pathname.split('/').pop(); // Extrai o valor do ID da rota

  useEffect(() => {
    if (!id) return;

    const fetchContact = async () => {
      setIsLoading(true);
      try {
        const contacts = await getContacts();
        const contact = contacts.find((c) => c.contactId === id);
        if (contact) {
          setFormData({ name: contact.name, phone: contact.phone });
        } else {
          setMessage('Contato não encontrado.');
        }
      } catch (error) {
        setMessage('Erro ao carregar informações do contato.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const updatedContact = {
      contactId: id,
      name: formData.name,
      phone: formData.phone,
    };

    try {
      await updateContact(updatedContact); // Envia os dados atualizados usando a API
      setMessage('Contato atualizado com sucesso!');
      window.location.href = '/contatos-emergencia'; // Redireciona para a lista de contatos após sucesso
    } catch (error) {
      setMessage(`Erro ao atualizar contato: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-lg text-gray-600">Editar Número de Emergência</p>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4 text-black"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Nome do Contato
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Número de Emergência
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-full text-white font-bold ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            } transition`}
          disabled={isSubmitting}
        >
          <FontAwesomeIcon icon={faSave} className="mr-2" />
          {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
        </button>
      </form>

      {/* Mensagem de Sucesso ou Erro */}
      {message && (
        <div
          className={`mt-4 px-4 py-2 rounded-md text-center ${message.startsWith('Erro') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
        >
          {message}
        </div>
      )}

      {/* Botão Voltar */}
      <Link href="/contatos-emergencia" className="mt-6 flex items-center text-gray-500 hover:text-gray-700 transition">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Voltar para a lista de contatos
      </Link>

      {/* Rodapé */}
      <footer className="mt-6 text-gray-400 text-sm">
        PTI - SENAC 2024
      </footer>
    </div>
  );
}
