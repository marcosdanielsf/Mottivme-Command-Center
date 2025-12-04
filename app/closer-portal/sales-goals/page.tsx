'use client'

import Link from 'next/link'
import { ArrowLeft, Target } from 'lucide-react'
import { useState } from 'react'

export default function SalesGoals() {
  const [metaMensal, setMetaMensal] = useState('')
  const [vendidoAtual, setVendidoAtual] = useState('')
  const [diasUteis, setDiasUteis] = useState('22')
  const [diasDecorridos, setDiasDecorridos] = useState('10')

  const calcularMetas = () => {
    const meta = parseFloat(metaMensal)
    const vendido = parseFloat(vendidoAtual)
    const diasTotal = parseInt(diasUteis)
    const diasPassados = parseInt(diasDecorridos)

    if (meta && vendido >= 0 && diasTotal && diasPassados) {
      const percentualAlcancado = (vendido / meta) * 100
      const diasRestantes = diasTotal - diasPassados
      const metaEsperada = (meta / diasTotal) * diasPassados
      const diferenca = vendido - metaEsperada
      const metaDiaria = meta / diasTotal
      const metaRestante = meta - vendido
      const mediaNecess aria = diasRestantes > 0 ? metaRestante / diasRestantes : 0

      return {
        percentualAlcancado,
        diasRestantes,
        metaEsperada,
        diferenca,
        metaDiaria,
        metaRestante,
        mediaNecess aria,
        statusMeta: vendido >= metaEsperada ? 'above' : 'below'
      }
    }
    return null
  }

  const resultado = calcularMetas()

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Metas de Vendas</h1>
              <p className="text-[#D1D5DB] mt-1">Acompanhe seu progresso mensal</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Inputs */}
        <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-[#3B82F6]" />
            <h2 className="text-2xl font-bold text-white">Dados do Mês</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                Meta Mensal (R$)
              </label>
              <input
                type="number"
                value={metaMensal}
                onChange={(e) => setMetaMensal(e.target.value)}
                placeholder="100000"
                className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                Vendido Até Agora (R$)
              </label>
              <input
                type="number"
                value={vendidoAtual}
                onChange={(e) => setVendidoAtual(e.target.value)}
                placeholder="45000"
                className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                Dias Úteis no Mês
              </label>
              <input
                type="number"
                value={diasUteis}
                onChange={(e) => setDiasUteis(e.target.value)}
                className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                Dias Decorridos
              </label>
              <input
                type="number"
                value={diasDecorridos}
                onChange={(e) => setDiasDecorridos(e.target.value)}
                className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
              />
            </div>
          </div>
        </div>

        {resultado && (
          <>
            {/* Progress Bar */}
            <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Progresso da Meta</h3>
                <span className="text-3xl font-bold text-[#3B82F6]">
                  {resultado.percentualAlcancado.toFixed(1)}%
                </span>
              </div>

              <div className="w-full bg-[#242937] rounded-full h-6 mb-4">
                <div
                  className={`h-6 rounded-full transition-all ${
                    resultado.percentualAlcancado >= 100
                      ? 'bg-green-500'
                      : resultado.percentualAlcancado >= 80
                      ? 'bg-[#3B82F6]'
                      : resultado.percentualAlcancado >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(resultado.percentualAlcancado, 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm text-[#9CA3AF]">
                <span>R$ 0</span>
                <span className="text-white font-medium">
                  R$ {parseFloat(vendidoAtual).toLocaleString('pt-BR')} de R$ {parseFloat(metaMensal).toLocaleString('pt-BR')}
                </span>
                <span>R$ {parseFloat(metaMensal).toLocaleString('pt-BR')}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className={`border border-[#2d3748] rounded-xl p-6 ${
                resultado.statusMeta === 'above' ? 'bg-green-500/10' : 'bg-red-500/10'
              }`}>
                <p className="text-[#9CA3AF] text-sm mb-2">Status vs Esperado</p>
                <p className={`text-3xl font-bold ${
                  resultado.statusMeta === 'above' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {resultado.statusMeta === 'above' ? '↑' : '↓'} R$ {Math.abs(resultado.diferenca).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  {resultado.statusMeta === 'above' ? 'Acima da meta' : 'Abaixo da meta'}
                </p>
              </div>

              <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
                <p className="text-[#9CA3AF] text-sm mb-2">Meta Diária</p>
                <p className="text-white text-3xl font-bold">
                  R$ {resultado.metaDiaria.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">Por dia útil</p>
              </div>

              <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
                <p className="text-[#9CA3AF] text-sm mb-2">Falta Atingir</p>
                <p className="text-white text-3xl font-bold">
                  R$ {resultado.metaRestante.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Em {resultado.diasRestantes} dias restantes
                </p>
              </div>
            </div>

            {/* Action Card */}
            <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-8">
              <h3 className="text-white text-2xl font-bold mb-4">Para Atingir a Meta</h3>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <p className="text-white/80 text-sm mb-2">Você precisa vender em média:</p>
                <p className="text-white text-4xl font-bold mb-4">
                  R$ {resultado.mediaNecess aria.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
                <p className="text-white/80 text-sm">
                  por dia útil nos próximos {resultado.diasRestantes} dias
                </p>
              </div>
            </div>
          </>
        )}

        {!resultado && (
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-12 text-center">
            <Target className="w-16 h-16 text-[#3B82F6] mx-auto mb-4" />
            <p className="text-[#9CA3AF]">Preencha os dados acima para ver seu progresso</p>
          </div>
        )}
      </main>
    </div>
  )
}
