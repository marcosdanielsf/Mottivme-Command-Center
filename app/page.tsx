import Link from 'next/link'
import { BarChart3, Users, DollarSign, Bot, Calculator, FileText, Workflow, TrendingUp } from 'lucide-react'

export default function CommandCenterHome() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Header */}
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F19]/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Mottivme Command Center</h1>
              <p className="text-[#D1D5DB] mt-1">Central de controle e gestão unificada</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-[#9CA3AF]">Status do Sistema</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Operacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Sistemas Ativos"
            value="7"
            icon={<Workflow className="w-8 h-8" />}
            trend="+2 este mês"
          />
          <StatCard
            title="Workflows N8N"
            value="24"
            icon={<Bot className="w-8 h-8" />}
            trend="12 ativos"
          />
          <StatCard
            title="Custo IA (Mês)"
            value="$127.50"
            icon={<DollarSign className="w-8 h-8" />}
            trend="-15% vs mês anterior"
          />
          <StatCard
            title="Conversões"
            value="89%"
            icon={<TrendingUp className="w-8 h-8" />}
            trend="+5.2%"
          />
        </div>

        {/* Systems Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sistemas e Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SystemCard
              title="Dashboard Comercial"
              description="Métricas de vendas e performance comercial"
              icon={<BarChart3 className="w-8 h-8" />}
              href="https://v0-comercial-dashboard-metrics-cqxi3zhqu.vercel.app"
              status="online"
            />

            <SystemCard
              title="Dashboard Financeiro BPO"
              description="Gestão financeira e operações BPO"
              icon={<DollarSign className="w-8 h-8" />}
              href="https://dashboard-nextjs-nu-five.vercel.app"
              status="online"
            />

            <SystemCard
              title="Admin Dashboard"
              description="Gestão de usuários e permissões"
              icon={<Users className="w-8 h-8" />}
              href="https://admin-dashboard-zeta-umber.vercel.app"
              status="online"
            />

            <SystemCard
              title="Monitor N8N"
              description="Workflows, custos de IA e logs"
              icon={<Bot className="w-8 h-8" />}
              href="/n8n-monitor"
              status="online"
              isInternal
            />

            <SystemCard
              title="Portal do Closer"
              description="Calculadoras, scripts e ferramentas"
              icon={<Calculator className="w-8 h-8" />}
              href="/closer-portal"
              status="online"
              isInternal
            />

            <SystemCard
              title="Script Assembly Line"
              description="Script de vendas interativo"
              icon={<FileText className="w-8 h-8" />}
              href="https://assembly-line-script-app.vercel.app/script-vendas-interativo.html"
              status="online"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Ações Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickAction href="/n8n-monitor" label="Ver Custos IA" />
            <QuickAction href="/closer-portal" label="Calculadora ROI" />
            <QuickAction href="/reports" label="Relatórios" />
            <QuickAction href="/settings" label="Configurações" />
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, icon, trend }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:border-[#3B82F6] transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="text-[#3B82F6]">{icon}</div>
      </div>
      <div>
        <p className="text-[#9CA3AF] text-sm font-medium mb-1">{title}</p>
        <p className="text-white text-3xl font-bold mb-2">{value}</p>
        <p className="text-[#3B82F6] text-sm">{trend}</p>
      </div>
    </div>
  )
}

function SystemCard({ title, description, icon, href, status, isInternal }: any) {
  const cardContent = (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer group h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="text-[#3B82F6] group-hover:scale-110 transition-transform">{icon}</div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          status === 'online'
            ? 'bg-green-500/20 text-green-400'
            : 'bg-red-500/20 text-red-400'
        }`}>
          {status === 'online' ? 'Online' : 'Offline'}
        </div>
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-sm">{description}</p>
      <div className="mt-4 flex items-center text-[#3B82F6] text-sm font-medium">
        Acessar →
      </div>
    </div>
  )

  if (isInternal) {
    return <Link href={href}>{cardContent}</Link>
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  )
}

function QuickAction({ href, label }: any) {
  return (
    <Link
      href={href}
      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-4 rounded-lg font-semibold text-center transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
    >
      {label}
    </Link>
  )
}
