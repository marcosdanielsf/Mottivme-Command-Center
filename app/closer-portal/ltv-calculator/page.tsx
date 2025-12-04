'use client'

import Link from 'next/link'
import { ArrowLeft, Users } from 'lucide-react'
import { useState } from 'react'

export default function LTVCalculator() {
  const [ticketMedio, setTicketMedio] = useState('')
  const [frequenciaCompra, setFrequenciaCompra] = useState('')
  const [tempoVida, setTempoVida] = useState('')
  const [taxaRetencao, setTaxaRetencao] = useState('70')

  const calcularLTV = () => {
    const ticket = parseFloat(ticketMedio)
    const frequencia = parseFloat(frequenciaCompra)
    const tempo = parseFloat(tempoVida)
    const retencao = parseFloat(taxaRetencao)

    if (ticket && frequencia && tempo && retencao) {
      const ltv = ticket * frequencia * tempo * (retencao / 100)
      const ltvSimples = ticket * frequencia * tempo
      const valorAnual = ticket * frequencia
      const custoAquisicao = ltv * 0.3 // Estimativa de 30% do LTV

      return {
        ltv,
        ltvSimples,
        valorAnual,
        custoAquisicao,
        retencao
      }
    }
    return null
  }

  const resultado = calcularLTV()

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Calculadora de LTV</h1>
              <p className="text-[#D1D5DB] mt-1">Lifetime Value - Valor do Cliente</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-[#3B82F6]" />
              <h2 className="text-2xl font-bold text-white">Dados do Cliente</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Ticket Médio (R$)
                </label>
                <input
                  type="number"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(e.target.value)}
                  placeholder="5000"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">Valor médio por compra</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Frequência de Compra (vezes/ano)
                </label>
                <input
                  type="number"
                  value={frequenciaCompra}
                  onChange={(e) => setFrequenciaCompra(e.target.value)}
                  placeholder="4"
                  step="0.1"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">Quantas vezes compra por ano</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Tempo de Vida (anos)
                </label>
                <input
                  type="number"
                  value={tempoVida}
                  onChange={(e) => setTempoVida(e.target.value)}
                  placeholder="3"
                  step="0.1"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">Tempo médio como cliente</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Taxa de Retenção (%)
                </label>
                <input
                  type="number"
                  value={taxaRetencao}
                  onChange={(e) => setTaxaRetencao(e.target.value)}
                  placeholder="70"
                  step="1"
                  max="100"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">% de clientes que permanecem</p>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Lifetime Value</h2>

            {resultado ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-2">LTV Total</p>
                  <p className="text-white text-4xl font-bold">
                    R$ {resultado.ltv.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                  </p>
                  <p className="text-white/60 text-xs mt-2">Com {resultado.retencao}% de retenção</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Valor Anual por Cliente</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.valorAnual.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">LTV Simples (sem retenção)</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.ltvSimples.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="bg-[#242937] rounded-lg p-4 border-2 border-[#3B82F6]">
                    <p className="text-[#9CA3AF] text-sm mb-1">CAC Máximo Recomendado</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.custoAquisicao.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-1">30% do LTV</p>
                  </div>
                </div>

                <div className="border-t border-[#2d3748] pt-4 mt-4">
                  <p className="text-[#9CA3AF] text-sm mb-2">Análise:</p>
                  <div className="space-y-2 text-sm">
                    {resultado.ltv > 50000 && (
                      <p className="text-green-400">✓ LTV alto - cliente muito valioso</p>
                    )}
                    {resultado.ltv > 20000 && resultado.ltv <= 50000 && (
                      <p className="text-[#3B82F6]">✓ LTV bom - cliente valioso</p>
                    )}
                    {resultado.ltv <= 20000 && (
                      <p className="text-yellow-400">⚠ LTV baixo - avaliar estratégia</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-[#9CA3AF]">
                <p>Preencha os dados para calcular o LTV</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Como Usar o LTV</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#D1D5DB]">
            <div>
              <h4 className="text-white font-semibold mb-2">📊 Definir CAC</h4>
              <p className="text-sm">
                O Custo de Aquisição de Cliente (CAC) ideal deve ser no máximo 30% do LTV.
                Isso garante margem saudável e crescimento sustentável.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🎯 Segmentação</h4>
              <p className="text-sm">
                Use o LTV para identificar seus clientes mais valiosos e direcionar
                esforços de marketing e retenção para esses segmentos.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">💰 Precificação</h4>
              <p className="text-sm">
                Entendendo o valor total do cliente, você pode ajustar preços e
                criar ofertas que maximizem o LTV ao longo do tempo.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">🔄 Retenção</h4>
              <p className="text-sm">
                Pequenos aumentos na taxa de retenção podem ter impacto massivo no LTV.
                Invista em experiência e suporte ao cliente.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
