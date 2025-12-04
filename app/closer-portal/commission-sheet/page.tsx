'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Plus } from 'lucide-react'
import { useState } from 'react'

type Venda = {
  id: string
  data: string
  cliente: string
  valor: number
  comissao: number
  status: 'pago' | 'pendente'
}

export default function CommissionSheet() {
  const [vendas, setVendas] = useState<Venda[]>([
    {
      id: '1',
      data: '2024-12-01',
      cliente: 'Empresa ABC Ltda',
      valor: 50000,
      comissao: 5000,
      status: 'pago'
    },
    {
      id: '2',
      data: '2024-12-05',
      cliente: 'Tech Solutions SA',
      valor: 75000,
      comissao: 7500,
      status: 'pago'
    },
    {
      id: '3',
      data: '2024-12-10',
      cliente: 'Startup Inovadora',
      valor: 30000,
      comissao: 3000,
      status: 'pendente'
    },
    {
      id: '4',
      data: '2024-12-15',
      cliente: 'Consultoria XYZ',
      valor: 120000,
      comissao: 12000,
      status: 'pendente'
    }
  ])

  const totalVendas = vendas.reduce((acc, v) => acc + v.valor, 0)
  const totalComissoes = vendas.reduce((acc, v) => acc + v.comissao, 0)
  const comissoesPagas = vendas.filter(v => v.status === 'pago').reduce((acc, v) => acc + v.comissao, 0)
  const comissoesPendentes = vendas.filter(v => v.status === 'pendente').reduce((acc, v) => acc + v.comissao, 0)

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">Planilha de Comissões</h1>
                <p className="text-[#D1D5DB] mt-1">Dezembro 2024</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Nova Venda
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
            <p className="text-[#9CA3AF] text-sm mb-2">Total em Vendas</p>
            <p className="text-white text-3xl font-bold">
              R$ {totalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6">
            <p className="text-white/80 text-sm mb-2">Comissões Pagas</p>
            <p className="text-white text-3xl font-bold">
              R$ {comissoesPagas.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl p-6">
            <p className="text-white/80 text-sm mb-2">Comissões Pendentes</p>
            <p className="text-white text-3xl font-bold">
              R$ {comissoesPendentes.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-6">
            <p className="text-white/80 text-sm mb-2">Total de Comissões</p>
            <p className="text-white text-3xl font-bold">
              R$ {totalComissoes.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#2d3748]">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#3B82F6]" />
              <h2 className="text-xl font-bold text-white">Vendas do Mês</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#242937]">
                <tr>
                  <th className="text-left text-[#9CA3AF] font-medium px-6 py-4 text-sm">Data</th>
                  <th className="text-left text-[#9CA3AF] font-medium px-6 py-4 text-sm">Cliente</th>
                  <th className="text-right text-[#9CA3AF] font-medium px-6 py-4 text-sm">Valor da Venda</th>
                  <th className="text-right text-[#9CA3AF] font-medium px-6 py-4 text-sm">Comissão</th>
                  <th className="text-center text-[#9CA3AF] font-medium px-6 py-4 text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d3748]">
                {vendas.map((venda) => (
                  <tr key={venda.id} className="hover:bg-[#242937] transition-colors">
                    <td className="px-6 py-4 text-white">
                      {new Date(venda.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-white font-medium">
                      {venda.cliente}
                    </td>
                    <td className="px-6 py-4 text-white text-right">
                      R$ {venda.valor.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </td>
                    <td className="px-6 py-4 text-[#3B82F6] font-bold text-right">
                      R$ {venda.comissao.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        venda.status === 'pago'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {venda.status === 'pago' ? '✓ Pago' : '⏳ Pendente'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-[#242937] border-t-2 border-[#3B82F6]">
                <tr>
                  <td colSpan={2} className="px-6 py-4 text-white font-bold">
                    TOTAL
                  </td>
                  <td className="px-6 py-4 text-white font-bold text-right">
                    R$ {totalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                  </td>
                  <td className="px-6 py-4 text-[#3B82F6] font-bold text-right text-lg">
                    R$ {totalComissoes.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-8 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Resumo do Mês</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#D1D5DB]">
            <div>
              <p className="text-sm text-[#9CA3AF] mb-1">Número de Vendas</p>
              <p className="text-2xl font-bold text-white">{vendas.length}</p>
            </div>
            <div>
              <p className="text-sm text-[#9CA3AF] mb-1">Ticket Médio</p>
              <p className="text-2xl font-bold text-white">
                R$ {(totalVendas / vendas.length).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#9CA3AF] mb-1">Taxa Média de Comissão</p>
              <p className="text-2xl font-bold text-white">
                {((totalComissoes / totalVendas) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
