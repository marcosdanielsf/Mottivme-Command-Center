'use client'

import Link from 'next/link'
import { ArrowLeft, Percent } from 'lucide-react'
import { useState } from 'react'

export default function DiscountCalculator() {
  const [valorOriginal, setValorOriginal] = useState('')
  const [desconto, setDesconto] = useState('')
  const [custoOperacional, setCustoOperacional] = useState('30')
  const [resultado, setResultado] = useState<{
    valorDesconto: number
    valorFinal: number
    margemLucro: number
    lucroFinal: number
  } | null>(null)

  const calcularDesconto = () => {
    const original = parseFloat(valorOriginal)
    const desc = parseFloat(desconto)
    const custo = parseFloat(custoOperacional)

    if (original && desc >= 0 && custo >= 0) {
      const valorDesconto = (original * desc) / 100
      const valorFinal = original - valorDesconto
      const custoTotal = (original * custo) / 100
      const lucroFinal = valorFinal - custoTotal
      const margemLucro = ((valorFinal - custoTotal) / valorFinal) * 100

      setResultado({
        valorDesconto: valorDesconto,
        valorFinal: valorFinal,
        margemLucro: margemLucro,
        lucroFinal: lucroFinal
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Calculadora de Desconto</h1>
              <p className="text-[#D1D5DB] mt-1">Calcule descontos e margens de lucro</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Percent className="w-8 h-8 text-[#3B82F6]" />
              <h2 className="text-2xl font-bold text-white">Dados</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Valor Original (R$)
                </label>
                <input
                  type="number"
                  value={valorOriginal}
                  onChange={(e) => setValorOriginal(e.target.value)}
                  placeholder="10000"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Desconto (%)
                </label>
                <input
                  type="number"
                  value={desconto}
                  onChange={(e) => setDesconto(e.target.value)}
                  placeholder="15"
                  step="0.1"
                  max="100"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Custo Operacional (%)
                </label>
                <input
                  type="number"
                  value={custoOperacional}
                  onChange={(e) => setCustoOperacional(e.target.value)}
                  placeholder="30"
                  step="0.1"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
                <p className="text-xs text-[#9CA3AF] mt-1">Base: valor original</p>
              </div>

              <button
                onClick={calcularDesconto}
                className="w-full px-6 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-lg transition-all shadow-lg"
              >
                Calcular Desconto
              </button>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Resultados</h2>

            {resultado ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-2">Valor Final</p>
                  <p className="text-white text-4xl font-bold">
                    R$ {resultado.valorFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Desconto Aplicado</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.valorDesconto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className={`rounded-lg p-4 ${
                    resultado.margemLucro > 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    <p className="text-[#9CA3AF] text-sm mb-1">Margem de Lucro</p>
                    <p className={`text-2xl font-bold ${
                      resultado.margemLucro > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {resultado.margemLucro.toFixed(2)}%
                    </p>
                  </div>

                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Lucro Final</p>
                    <p className={`text-2xl font-bold ${
                      resultado.lucroFinal > 0 ? 'text-white' : 'text-red-400'
                    }`}>
                      R$ {resultado.lucroFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#2d3748] pt-4 mt-4">
                  <p className="text-[#9CA3AF] text-sm">
                    {resultado.margemLucro > 20 ? (
                      <span className="text-green-400">✓ Margem saudável</span>
                    ) : resultado.margemLucro > 0 ? (
                      <span className="text-yellow-400">⚠ Margem baixa</span>
                    ) : (
                      <span className="text-red-400">⚠ Prejuízo - desconto muito alto</span>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-[#9CA3AF]">
                <p>Preencha os valores para ver os resultados</p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Dicas de Desconto</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#242937] rounded-lg p-4">
              <div className="text-green-400 text-2xl mb-2">✓</div>
              <h4 className="text-white font-semibold mb-1">5-10%</h4>
              <p className="text-[#9CA3AF] text-sm">Desconto ideal para fechamento rápido</p>
            </div>
            <div className="bg-[#242937] rounded-lg p-4">
              <div className="text-yellow-400 text-2xl mb-2">⚠</div>
              <h4 className="text-white font-semibold mb-1">15-20%</h4>
              <p className="text-[#9CA3AF] text-sm">Desconto moderado - avaliar caso a caso</p>
            </div>
            <div className="bg-[#242937] rounded-lg p-4">
              <div className="text-red-400 text-2xl mb-2">✗</div>
              <h4 className="text-white font-semibold mb-1">25%+</h4>
              <p className="text-[#9CA3AF] text-sm">Alto risco - pode comprometer margem</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
