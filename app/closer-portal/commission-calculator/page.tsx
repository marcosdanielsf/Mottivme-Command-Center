'use client'

import Link from 'next/link'
import { ArrowLeft, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function CommissionCalculator() {
  const [valorVenda, setValorVenda] = useState('')
  const [percentualComissao, setPercentualComissao] = useState('10')
  const [bonus, setBonus] = useState('0')
  const [resultado, setResultado] = useState<{
    comissaoBase: number
    bonusValor: number
    total: number
  } | null>(null)

  const calcularComissao = () => {
    const venda = parseFloat(valorVenda)
    const percentual = parseFloat(percentualComissao)
    const bonusVal = parseFloat(bonus)

    if (venda && percentual) {
      const comissaoBase = (venda * percentual) / 100
      const total = comissaoBase + (bonusVal || 0)

      setResultado({
        comissaoBase: comissaoBase,
        bonusValor: bonusVal || 0,
        total: total
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
              <h1 className="text-3xl font-bold text-white">Calculadora de Comissão</h1>
              <p className="text-[#D1D5DB] mt-1">Calcule suas comissões e bônus</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-[#3B82F6]" />
              <h2 className="text-2xl font-bold text-white">Dados da Venda</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Valor da Venda (R$)
                </label>
                <input
                  type="number"
                  value={valorVenda}
                  onChange={(e) => setValorVenda(e.target.value)}
                  placeholder="50000"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Percentual de Comissão (%)
                </label>
                <input
                  type="number"
                  value={percentualComissao}
                  onChange={(e) => setPercentualComissao(e.target.value)}
                  placeholder="10"
                  step="0.1"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Bônus Adicional (R$)
                </label>
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 bg-[#242937] border border-[#2d3748] rounded-lg text-white text-lg focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <button
                onClick={calcularComissao}
                className="w-full px-6 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-lg transition-all shadow-lg"
              >
                Calcular Comissão
              </button>
            </div>
          </div>

          {/* Results Card */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Sua Comissão</h2>

            {resultado ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-2">Total a Receber</p>
                  <p className="text-white text-4xl font-bold">
                    R$ {resultado.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#242937] rounded-lg p-4">
                    <p className="text-[#9CA3AF] text-sm mb-1">Comissão Base ({percentualComissao}%)</p>
                    <p className="text-white text-2xl font-bold">
                      R$ {resultado.comissaoBase.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  {resultado.bonusValor > 0 && (
                    <div className="bg-[#242937] rounded-lg p-4">
                      <p className="text-[#9CA3AF] text-sm mb-1">Bônus</p>
                      <p className="text-white text-2xl font-bold">
                        R$ {resultado.bonusValor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#2d3748] pt-4 mt-4">
                  <p className="text-[#9CA3AF] text-sm">
                    💰 Percentual sobre a venda: {((resultado.total / parseFloat(valorVenda)) * 100).toFixed(2)}%
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-[#9CA3AF]">
                <p>Preencha os valores para calcular sua comissão</p>
              </div>
            )}
          </div>
        </div>

        {/* Tabela de Referência */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Tabela de Referência</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2d3748]">
                  <th className="text-left text-[#9CA3AF] font-medium pb-3">Valor da Venda</th>
                  <th className="text-right text-[#9CA3AF] font-medium pb-3">Comissão 5%</th>
                  <th className="text-right text-[#9CA3AF] font-medium pb-3">Comissão 10%</th>
                  <th className="text-right text-[#9CA3AF] font-medium pb-3">Comissão 15%</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[10000, 25000, 50000, 100000].map((valor) => (
                  <tr key={valor} className="border-b border-[#2d3748]/50">
                    <td className="py-3">R$ {valor.toLocaleString('pt-BR')}</td>
                    <td className="text-right">R$ {(valor * 0.05).toLocaleString('pt-BR')}</td>
                    <td className="text-right">R$ {(valor * 0.10).toLocaleString('pt-BR')}</td>
                    <td className="text-right">R$ {(valor * 0.15).toLocaleString('pt-BR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
