import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAmbulance, faStar, faHeart, faWalking, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function MenuPage() {
  const menuItems = [
    { label: 'Contatos de Emergência', icon: faUser, href: '/contatos-emergencia' },
    { label: 'Serviços de Emergência', icon: faAmbulance, href: '/servicos-emergencia' },
    { label: 'Serviços Médicos', icon: faStar, href: '/servicos-medicos' },
    { label: 'Monitoramento de Saúde', icon: faHeart, href: '/monitoramento-saude' },
    { label: 'Recursos de Bem-Estar', icon: faWalking, href: '/recursos-bem-estar' },
    { label: 'Suporte Técnico', icon: faCog, href: '/suporte-tecnico' },
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-between p-4">
      {/* Cabeçalho */}
      <div className="text-center mb-6">
        <Image
          src="/logo.png" // Substitua pelo caminho da imagem do logo
          alt="Logo Care Idosos"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">CARE IDOSOS</h1>
        <p className="text-lg text-gray-600">Saúde e bem-estar ao seu alcance</p>
      </div>

      {/* Menu de Navegação */}
      <div className="w-full max-w-md">
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mt-4 hover:bg-gray-100 transition cursor-pointer">
              <span className="text-gray-800 font-medium">{item.label}</span>
              <div className="bg-green-200 rounded-full p-2 text-gray-800">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Botão de Sair */}
      <Link href="/" className="flex items-center justify-center bg-red-500 text-white font-bold py-2 px-6 rounded-full mt-6 hover:bg-red-600 transition">
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 w-6 h-6" />
          Sair
      </Link>
     

      {/* Rodapé */}
      <footer className="mt-6 text-gray-400 text-sm">
        PTI - SENAC 2024
      </footer>
    </div>
  );
}
