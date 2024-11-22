"use client";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function RecursoDetalhe() {
  const pathname = usePathname();
  const recursoSelecionado = decodeURIComponent(pathname.split("/")[2]);

  // Conteúdo estático para cada tópico
  const temas = {
    "PROGRAMAS DE ATIVIDADE FÍSICA": {
      titulo: "Programas de Atividade Física",
      descricao: "Descubra programas de exercícios físicos criados para promover a saúde e o bem-estar em qualquer idade.",
      detalhes: `
        **Benefícios:**
        - Melhoram a mobilidade e o equilíbrio.
        - Reduzem o risco de quedas e lesões.
        - Aumentam a força muscular e a flexibilidade.
        
        **O que oferecemos:**
        - Vídeos de treinos guiados por especialistas.
        - Exercícios adaptados para iniciantes e avançados.
        - Sugestões de atividades para praticar em casa ou ao ar livre.

        **Dica de ouro:**
        Sempre consulte um profissional de saúde antes de iniciar novos exercícios para garantir segurança e eficácia.
      `,
    },
    "DICAS DE NUTRIÇÃO": {
      titulo: "Dicas de Nutrição",
      descricao: "Aposte em uma alimentação equilibrada para manter a saúde em dia e prevenir doenças.",
      detalhes: `
        **Principais orientações:**
        - **Alimentos ricos em fibras:** Inclua frutas, legumes, verduras e grãos integrais.
        - **Proteínas de qualidade:** Opte por carnes magras, ovos, peixes e leguminosas.
        - **Hidratação:** Beba pelo menos 2 litros de água por dia.

        **Planos disponíveis:**
        - **Receitas práticas:** Como sopas nutritivas, saladas completas e lanches saudáveis.
        - **Guias de substituição:** Troque alimentos industrializados por opções naturais.
        - **Roteiros personalizados:** Sugestões adaptadas às necessidades individuais.

        **Dica de ouro:**
        Prefira alimentos frescos e evite o excesso de sal e açúcar. Moderar é essencial!
      `,
    },
    "ORIENTAÇÃO E CUIDADOS PREVENTIVOS": {
      titulo: "Orientação e Cuidados Preventivos",
      descricao: "Cuidados simples podem fazer toda a diferença para prevenir problemas de saúde.",
      detalhes: `
        **Dicas de prevenção:**
        - Mantenha uma rotina de exames regulares.
        - Vacine-se contra doenças sazonais, como gripe e pneumonia.
        - Pratique atividades cognitivas para manter o cérebro ativo.

        **Programas disponíveis:**
        - **Monitoramento de saúde:** Acompanhamento de pressão arterial, glicose e colesterol.
        - **Planejamento de rotina saudável:** Checklists para ajudar no dia a dia.
        - **Guias práticos:** Informações sobre sinais de alerta para diversas condições de saúde.

        **Dica de ouro:**
        Pequenas mudanças no cotidiano, como caminhar mais, podem ter um grande impacto a longo prazo.
      `,
    },
  };

  const recurso = temas[recursoSelecionado] || {
    titulo: "Recurso não encontrado",
    descricao: "O recurso que você tentou acessar não existe.",
    detalhes: "Por favor, volte ao menu e selecione um recurso válido.",
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="text-center my-6 bg-green-100 w-full max-w-md rounded-t-lg p-6">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-20 h-20" />
        <h1 className="text-3xl font-bold text-gray-800">CARE IDOSOS</h1>
        <p className="text-gray-600">Saúde e bem-estar ao seu alcance</p>
      </header>

      {/* Detalhes do Recurso */}
      <section className="bg-white w-full max-w-md rounded-b-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">{recurso.titulo}</h2>
        <p className="text-gray-600 text-center mb-6">{recurso.descricao}</p>
        <div className="text-gray-800 leading-relaxed">
          {recurso.detalhes.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center my-6">
        <Link href="/recursos-bem-estar">
          <button className="text-gray-600 hover:text-gray-800 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Voltar aos Recursos
          </button>
        </Link>
      </footer>
    </div>
  );
}
