import Link from 'next/link'
import { ArrowLeft, Presentation } from 'lucide-react'

export default function SalesPitch() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Pitch de Vendas Mottivme</h1>
              <p className="text-[#D1D5DB] mt-1">Script estruturado para apresentação</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Framework */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-8 mb-12">
          <Presentation className="w-12 h-12 text-white mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Framework: Problema → Agitação → Solução → Prova</h2>
          <p className="text-white/90">
            Este pitch segue a estrutura testada que converte. Adapte para seu estilo, mas mantenha a sequência.
          </p>
        </div>

        {/* Pitch Sections */}
        <div className="space-y-8">
          {/* Abertura */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-lg text-sm font-bold">
                1. ABERTURA
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#9CA3AF] mb-2">Objetivo: Criar rapport e pegar permissão</p>
                <div className="bg-[#242937] rounded-lg p-6">
                  <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`"[Nome], obrigado por separar esse tempo. Vou ser direto contigo porque sei que seu tempo é valioso.

Nos próximos 20 minutos, vou te mostrar exatamente como a gente implanta uma máquina de vendas previsível em até 90 dias - mesmo se você nunca teve processo comercial estruturado antes.

Mas antes disso, preciso entender melhor seu cenário. Tudo bem se eu te fizer algumas perguntas primeiro?"`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-lg text-sm font-bold">
                2. DISCOVERY (5-7min)
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#9CA3AF] mb-2">Perguntas obrigatórias:</p>
                <div className="bg-[#242937] rounded-lg p-6 space-y-3">
                  <p className="text-white font-medium">→ Como funciona seu processo de vendas hoje?</p>
                  <p className="text-white font-medium">→ Quantos leads qualificados você gera por mês?</p>
                  <p className="text-white font-medium">→ Qual sua taxa de conversão atual?</p>
                  <p className="text-white font-medium">→ Quanto tempo leva, em média, para fechar uma venda?</p>
                  <p className="text-white font-medium">→ Qual o principal gargalo que você vê no seu comercial hoje?</p>
                  <p className="text-white font-medium">→ O que acontece se você não resolver isso nos próximos 6 meses?</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  ⚠️ <strong>CRÍTICO:</strong> Ouça mais do que fale. Anote tudo. Você vai usar essas respostas no restante do pitch.
                </p>
              </div>
            </div>
          </div>

          {/* Problema + Agitação */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-lg text-sm font-bold">
                3. PROBLEMA + AGITAÇÃO (3min)
              </span>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`"[Nome], pelo que você me contou, você está na mesma situação que 90% dos nossos clientes estavam:

Você tem [produto/serviço bom], tem demanda no mercado, mas não tem um SISTEMA de vendas funcionando.

O que acontece? Você depende de indicação, de momento, de sorte. Mês bom, mês ruim. Não tem previsibilidade.

E o pior: você sabe que está deixando dinheiro na mesa todo mês, porque leads chegam e não viram venda.

Você já calculou quanto dinheiro você está perdendo por não ter isso funcionando?

[aguardar resposta]

Exato. E quanto mais tempo passa, mais você perde."`}
              </p>
            </div>
          </div>

          {/* Solução */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold">
                4. SOLUÇÃO (5min)
              </span>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`"A boa notícia? Isso tem solução. E é mais simples do que você imagina.

A gente implanta sua máquina de vendas completa em 90 dias. E quando eu digo completa, é COMPLETA:

✓ Rotina comercial validada - não é teoria, é o que funciona
✓ CRM configurado e rodando - plug and play
✓ Scripts de vendas testados - você não inventa na hora
✓ Social Selling estruturado - geração de leads constante
✓ Time treinado - se você tem ou se a gente recruta pra você

E o melhor: a gente FAZ tudo isso POR você. Você só aprova.

Em 30 dias você já está gerando leads qualificados.
Em 60 dias seu time já está fechando com o processo.
Em 90 dias você tem uma máquina rodando sozinha.

Faz sentido até aqui?"`}
              </p>
            </div>
          </div>

          {/* Prova */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-bold">
                5. PROVA SOCIAL (3min)
              </span>
            </div>

            <div className="bg-[#242937] rounded-lg p-6 space-y-4">
              <p className="text-[#D1D5DB]">
                "Não precisa acreditar só na minha palavra. Deixa eu te mostrar alguns resultados:"
              </p>

              <div className="space-y-3 pl-4 border-l-2 border-[#3B82F6]">
                <div>
                  <p className="text-white font-medium">Cliente X (mesmo segmento):</p>
                  <p className="text-[#D1D5DB] text-sm">De 5 vendas/mês para 18 vendas/mês em 90 dias</p>
                </div>
                <div>
                  <p className="text-white font-medium">Cliente Y:</p>
                  <p className="text-[#D1D5DB] text-sm">Aumentou ticket médio em 40% com o novo processo</p>
                </div>
                <div>
                  <p className="text-white font-medium">Cliente Z:</p>
                  <p className="text-[#D1D5DB] text-sm">Reduziu ciclo de vendas de 45 para 21 dias</p>
                </div>
              </div>

              <p className="text-[#D1D5DB]">
                [Mostrar prints, vídeos de depoimentos, ou agendar call com cliente]
              </p>
            </div>
          </div>

          {/* Fechamento */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-bold">
                6. FECHAMENTO (2min)
              </span>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`"[Nome], olhando pro seu caso, você tem duas opções:

Opção 1: Continuar como está, dependendo de sorte e indicação, perdendo dinheiro todo mês.

Opção 2: A gente implanta isso pra você, em 90 dias você tem uma máquina funcionando e gerando resultado previsível.

Qual faz mais sentido pra você?

[aguardar]

Ótimo. Então vamos fazer o seguinte: vou te mandar a proposta hoje ainda.

Amanhã a gente marca 15 minutos pra eu tirar suas dúvidas e, se fizer sentido, a gente já te encaixa na agenda.

Quanto mais rápido começar, mais rápido você vê resultado. Faz sentido?

[confirmar próximo passo]

Perfeito. Até amanhã então!"`}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">⏱️ Timing do Pitch (20min total)</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">1. Abertura</span>
              <span className="text-[#3B82F6] font-bold">1-2min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">2. Discovery</span>
              <span className="text-[#3B82F6] font-bold">5-7min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">3. Problema + Agitação</span>
              <span className="text-[#3B82F6] font-bold">3min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">4. Solução</span>
              <span className="text-[#3B82F6] font-bold">5min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">5. Prova Social</span>
              <span className="text-[#3B82F6] font-bold">3min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#242937] rounded-lg">
              <span className="text-[#D1D5DB]">6. Fechamento</span>
              <span className="text-[#3B82F6] font-bold">2min</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
