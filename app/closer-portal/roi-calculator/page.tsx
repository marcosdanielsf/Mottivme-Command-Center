'use client'

import Link from 'next/link'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function ROICalculator() {
  const [investimento, setInvestimento] = useState('')
  const [retorno, setRetorno] = useState('')
  const [resultado, setResultado] = useState<{
    roi: number
    lucro: number
    percentual: number
  } | null>(null)

  const calcularROI = () => {
    const inv = parseFloat(investimento)
    const ret = parseFloat(retorno)

    if (inv && ret && inv > 0) {
      const lucro = ret - inv
      const roi = ((ret - inv) / inv) * 100

      setResultado({
        roi: roi,
        lucro: lucro,
        percentual: (ret / inv) * 100
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
              <h1 className="text-3xl font-bold text-white">Calculadora de ROI</h1>
              <p className="text-[#D1D5DB] mt-1">Retorno sobre Investimento</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#3B82F6]" />
              <h2 className="text-2xl font-bold text-white">Dados</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Investimento Inicial (R$)
                </label>
                <input
                  type="number"
                  value={investimento}
                  onChange={(e) => setInvestimento(e.target.value)}
                  placeholder="10000"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Retorno Obtido (R$)
                </label>
                <input
                  type="number"
                  value={retorno}
                  onChange={(e) => setRetorno(e.target.value)}
                  placeholder="25000"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <button
                onClick={calcularROI}
                className="w-full px-6 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-lg transition-all shadow-lg"
              >
                Calcular ROI
              </button>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Resultados</h2>

            {resultado ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-2">ROI</p>
                  <p className="text-white text-4xl font-bold">
                    {resultado.roi.toFixed(2)}%
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Lucro</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.lucro.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Múltiplo do Investimento</p>
                    <p className="text-white text-2xl font-bold">
                      {(resultado.percentual / 100).toFixed(2)}x
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#2d3748] pt-4 mt-4">
                  <p className="text-[#9CA3AF] text-sm">
                    {resultado.roi > 0 ? (
                      <span className="text-green-400">✓ Investimento positivo</span>
                    ) : (
                      <span className="text-red-400">⚠ Investimento negativo</span>
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
          <h3 className="text-xl font-bold text-white mb-4">Como funciona?</h3>
          <div className="space-y-3 text-[#D1D5DB]">
            <p>
              <strong className="text-white">ROI (Return on Investment)</strong> mede a eficiência de um investimento.
            </p>
            <p>
              <strong className="text-white">Fórmula:</strong> ROI = ((Retorno - Investimento) / Investimento) × 100
            </p>
            <p>
              <strong className="text-white">Exemplo:</strong> Se você investiu R$ 10.000 e obteve R$ 25.000, seu ROI é de 150%.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
