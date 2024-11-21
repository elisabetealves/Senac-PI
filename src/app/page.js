import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      {/* Logo e Título */}
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

      {/* Conteúdo */}
      <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      
      <div className='flex flex-col sm:flex-row space-x-6 justify-center items-center'>
      <Image
          src="/senior-care.jpg" // Substitua pelo caminho da imagem do cuidado
          alt="Cuidado com idosos"
          width={200}
          height={200}
          className="mb-4"
          style={{borderTopLeftRadius: 75, borderBottomRightRadius: 75}}
        />
        <p className="text-gray-700 mb-6 text-start">
          Estamos aqui para tornar a sua vida mais fácil. Oferecemos acesso rápido a médicos e serviços emergenciais, tudo pensado especialmente para você.
        </p>
      </div>

        <Link href="/logged" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full">
          ACESSAR
        </Link>
      </div>

      {/* Botão de Acessibilidade */}
      <div className="mt-6 flex items-center text-gray-500">
        <span className="text-2xl mr-2">Tt</span>
        <p>Aumentar texto</p>
      </div>

      {/* Rodapé */}
      <footer className="mt-6 text-gray-400 text-sm">
        PTI - SENAC 2024
      </footer>
    </div>
  );
}