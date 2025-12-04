'use client'

import Link from 'next/link'
import { ArrowLeft, Bot, DollarSign, MessageSquare, AlertTriangle, TrendingUp, Activity } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function N8NMonitorPage() {
  const [metrics, setMetrics] = useState({
    totalCost: 0,
    totalTokens: 0,
    totalMessages: 0,
    activeWorkflows: 0,
    errors: 0
  })

  const [workflows, setWorkflows] = useState([
    {
      id: 'GWKl5KuXAdeu4BLr',
      name: 'Registrar Custo IA',
      status: 'active',
      executions: 1247,
      avgCost: 0.12,
      lastRun: '2 min atrás'
    },
    {
      id: 'workflow-2',
      name: 'Assembly Line - Reagendamento',
      status: 'active',
      executions: 856,
      avgCost: 0.08,
      lastRun: '5 min atrás'
    },
    {
      id: 'workflow-3',
      name: 'Qualificação de Leads',
      status: 'active',
      executions: 2341,
      avgCost: 0.15,
      lastRun: '1 min atrás'
    },
    {
      id: 'workflow-4',
      name: 'Follow-up Automático',
      status: 'paused',
      executions: 453,
      avgCost: 0.06,
      lastRun: '1h atrás'
    }
  ])

  const [recentActivity, setRecentActivity] = useState([
    {
      workflow: 'Assembly Line',
      action: 'reagendamento',
      model: 'gemini-2.5-flash',
      tokens: 1250,
      cost: 0.08,
      timestamp: '14:32:15'
    },
    {
      workflow: 'Qualificação',
      action: 'análise_lead',
      model: 'gemini-2.5-flash',
      tokens: 2100,
      cost: 0.13,
      timestamp: '14:31:42'
    },
    {
      workflow: 'Follow-up',
      action: 'mensagem_personalizada',
      model: 'gemini-2.5-flash',
      tokens: 980,
      cost: 0.06,
      timestamp: '14:30:18'
    }
  ])

  useEffect(() => {
    // Simular carregamento de métricas
    setMetrics({
      totalCost: 127.50,
      totalTokens: 1847362,
      totalMessages: 3456,
      activeWorkflows: 12,
      errors: 3
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Header */}
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[#9CA3AF] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Bot className="w-8 h-8 text-[#3B82F6]" />
                Monitor N8N
              </h1>
              <p className="text-[#D1D5DB] mt-1">Workflows, custos de IA e métricas em tempo real</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <MetricCard
            title="Custo Total (Mês)"
            value={`$${metrics.totalCost.toFixed(2)}`}
            icon={<DollarSign className="w-6 h-6" />}
            trend="-15% vs mês anterior"
            trendUp={false}
          />
          <MetricCard
            title="Tokens Consumidos"
            value={metrics.totalTokens.toLocaleString()}
            icon={<Activity className="w-6 h-6" />}
            trend="+8.2%"
            trendUp={true}
          />
          <MetricCard
            title="Mensagens Geradas"
            value={metrics.totalMessages.toLocaleString()}
            icon={<MessageSquare className="w-6 h-6" />}
            trend="+12%"
            trendUp={true}
          />
          <MetricCard
            title="Workflows Ativos"
            value={metrics.activeWorkflows.toString()}
            icon={<Bot className="w-6 h-6" />}
            trend="3 pausados"
            trendUp={null}
          />
          <MetricCard
            title="Erros (24h)"
            value={metrics.errors.toString()}
            icon={<AlertTriangle className="w-6 h-6" />}
            trend="Última: 2h atrás"
            trendUp={false}
          />
        </div>

        {/* Workflows Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Workflows Ativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        </div>

        {/* Atividade Recente */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Atividade Recente</h2>
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#242937] border-b border-[#2d3748]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#D1D5DB]">Horário</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#D1D5DB]">Workflow</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#D1D5DB]">Ação</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#D1D5DB]">Modelo</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#D1D5DB]">Tokens</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-[#D1D5DB]">Custo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2d3748]">
                  {recentActivity.map((activity, idx) => (
                    <tr key={idx} className="hover:bg-[#242937] transition-colors">
                      <td className="px-6 py-4 text-sm text-[#9CA3AF]">{activity.timestamp}</td>
                      <td className="px-6 py-4 text-sm text-white font-medium">{activity.workflow}</td>
                      <td className="px-6 py-4 text-sm text-[#D1D5DB]">{activity.action}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded text-xs font-medium">
                          {activity.model}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-[#D1D5DB]">
                        {activity.tokens.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-white font-medium">
                        ${activity.cost.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function MetricCard({ title, value, icon, trend, trendUp }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:border-[#3B82F6] transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="text-[#3B82F6]">{icon}</div>
      </div>
      <div>
        <p className="text-[#9CA3AF] text-sm font-medium mb-1">{title}</p>
        <p className="text-white text-2xl font-bold mb-2">{value}</p>
        <p className={`text-sm ${
          trendUp === true ? 'text-green-400' :
          trendUp === false ? 'text-red-400' :
          'text-[#9CA3AF]'
        }`}>
          {trend}
        </p>
      </div>
    </div>
  )
}

function WorkflowCard({ workflow }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white text-lg font-semibold mb-1">{workflow.name}</h3>
          <p className="text-[#9CA3AF] text-sm">ID: {workflow.id}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          workflow.status === 'active'
            ? 'bg-green-500/20 text-green-400'
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {workflow.status === 'active' ? '● Ativo' : '⏸ Pausado'}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-[#9CA3AF] text-xs mb-1">Execuções</p>
          <p className="text-white font-semibold">{workflow.executions.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-[#9CA3AF] text-xs mb-1">Custo Médio</p>
          <p className="text-white font-semibold">${workflow.avgCost.toFixed(3)}</p>
        </div>
        <div>
          <p className="text-[#9CA3AF] text-xs mb-1">Última Exec</p>
          <p className="text-white font-semibold">{workflow.lastRun}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium rounded-lg transition-colors">
          Ver Detalhes
        </button>
        <button className="px-4 py-2 border border-[#3B82F6] text-[#3B82F6] text-sm font-medium rounded-lg hover:bg-[#3B82F6]/10 transition-colors">
          Logs
        </button>
      </div>
    </div>
  )
}
