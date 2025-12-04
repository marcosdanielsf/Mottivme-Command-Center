import Link from 'next/link'
import { ArrowLeft, MessageSquare } from 'lucide-react'

const objections = [
  {
    category: 'Preço',
    objections: [
      {
        objection: '"Está muito caro"',
        response: 'Entendo sua preocupação com o investimento. Vamos olhar o valor de outra forma: quanto você está perdendo por NÃO ter esse sistema funcionando? Se isso te gerar apenas 2-3 vendas extras por mês, já se paga completamente. E você terá isso funcionando pelos próximos anos.'
      },
      {
        objection: '"Preciso pensar / Ver com meu sócio"',
        response: 'Perfeito, eu entendo. Deixa eu te fazer uma pergunta: se o preço fosse R$ 100, você precisaria pensar também? (aguardar) Então não é realmente sobre "pensar", é sobre o investimento, correto? Vamos resolver isso agora: qual seria um valor que faria sentido pra você hoje?'
      },
      {
        objection: '"Não tenho orçamento agora"',
        response: 'Eu entendo, e justamente por isso que você PRECISA disso agora - porque esse sistema vai gerar o caixa que você precisa. A pergunta não é "posso investir agora?", mas sim "posso continuar perdendo vendas todo mês?". Temos condições que cabem no seu fluxo.'
      }
    ]
  },
  {
    category: 'Timing',
    objections: [
      {
        objection: '"Vou implementar no próximo mês/ano"',
        response: 'Entendo, mas deixa eu te mostrar uma coisa: cada mês que passa sem esse sistema, é dinheiro que você está deixando na mesa. Se começarmos hoje, em 30 dias você já está vendendo mais. Se deixar pra daqui 3 meses, você perde 90 dias de vendas. Faz sentido?'
      },
      {
        objection: '"Estou muito ocupado agora"',
        response: 'Perfeito! Essa é EXATAMENTE a razão pela qual você precisa disso AGORA. Você está ocupado porque não tem um sistema. A gente implementa tudo pra você - você só aprova. Em 90 dias está rodando sozinho e você ganha tempo de volta.'
      }
    ]
  },
  {
    category: 'Confiança',
    objections: [
      {
        objection: '"Já tentei coisas assim e não funcionou"',
        response: 'Ótimo que você menciona isso. O que você tentou antes? (ouvir) Entendo. A diferença aqui é que não é teoria - é um sistema completo, validado, que já está gerando resultados reais. Quer ver cases de clientes que estavam na sua situação?'
      },
      {
        objection: '"Preciso de garantias que vai funcionar"',
        response: 'Entendo 100%. Olha, eu não posso garantir que você vai fechar toda venda - isso depende de execução. Mas posso garantir que você vai ter MAIS conversas de vendas, um processo estruturado, e menos desperdício de leads. E temos cases provando isso. Quer conversar com algum cliente?'
      }
    ]
  },
  {
    category: 'Competidores',
    objections: [
      {
        objection: '"Estou avaliando outras opções"',
        response: 'Perfeito, você DEVE avaliar. Deixa eu te falar o que perguntar pras outras empresas: 1) Eles implementam tudo ou só vendem software? 2) Tem rotina validada ou você vai ter que descobrir? 3) Quanto tempo leva pra ter resultado? Pode anotar essas perguntas e me responde depois da reunião com eles?'
      },
      {
        objection: '"Fulano ofereceu mais barato"',
        response: 'Ótimo! Deixa eu te perguntar: o que exatamente ele está oferecendo? (ouvir) Ah, entendi. Olha, barato todo mundo consegue fazer - a questão é: funciona? Gera resultado? Tem suporte? Você prefere gastar menos e não ter retorno, ou investir certo e multiplicar isso em vendas?'
      }
    ]
  },
  {
    category: 'Técnicas',
    objections: [
      {
        objection: '"Minha equipe não vai usar"',
        response: 'Entendo sua preocupação. Mas olha só: seu time não usa porque não tem um sistema simples e eficaz. A gente treina toda sua equipe, tem scripts prontos, e tudo integrado. Se não for fácil, eles não usam mesmo - por isso a gente faz isso tudo por você.'
      },
      {
        objection: '"Já tenho CRM / Já uso ferramenta X"',
        response: 'Ótimo que você já tem! Mas deixa eu te perguntar: está gerando o resultado que você quer? (aguardar) Então o problema não é TER ferramenta, é ter o SISTEMA completo funcionando. A gente integra com o que você tem e bota pra funcionar de verdade.'
      }
    ]
  }
]

export default function ObjectionsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Objeções Comuns</h1>
              <p className="text-[#D1D5DB] mt-1">Respostas para as principais objeções de vendas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Intro Card */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-12 h-12 text-white flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Como Usar Este Script</h2>
              <p className="text-white/90">
                Objeções são oportunidades para aprofundar a conversa. Não decore as respostas -
                entenda a LÓGICA por trás delas. Adapte para seu tom de voz e contexto do cliente.
              </p>
            </div>
          </div>
        </div>

        {/* Objections by Category */}
        <div className="space-y-8">
          {objections.map((category, idx) => (
            <div key={idx} className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl overflow-hidden">
              <div className="bg-[#242937] px-8 py-4 border-b border-[#2d3748]">
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="divide-y divide-[#2d3748]">
                {category.objections.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-8">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium mb-3">
                        Objeção
                      </div>
                      <p className="text-xl text-white font-semibold italic">
                        {item.objection}
                      </p>
                    </div>

                    <div>
                      <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium mb-3">
                        Resposta
                      </div>
                      <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
                        {item.response}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">🎯 Dicas de Ouro para Objeções</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">1.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Ouça primeiro:</strong> Deixe o cliente terminar completamente antes de responder
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">2.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Valide a objeção:</strong> "Entendo", "Faz sentido", "Ótimo ponto"
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">3.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Faça perguntas:</strong> Entenda a REAL objeção por trás da objeção
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">4.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Reframe:</strong> Mostre o problema de outro ângulo
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">5.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Confirme:</strong> "Isso resolve sua preocupação?"
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#3B82F6] font-bold">6.</span>
                <p className="text-[#D1D5DB]">
                  <strong className="text-white">Avance:</strong> Sempre proponha o próximo passo
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
