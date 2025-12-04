import Link from 'next/link'
import { ArrowLeft, FileText, Download, Calendar, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Header */}
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">Relatórios</h1>
                <p className="text-[#D1D5DB] mt-1">Análises e relatórios do sistema</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar Todos
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Relatórios Gerados"
            value="127"
            trend="+12 este mês"
            icon={<FileText className="w-6 h-6" />}
          />
          <StatCard
            title="Total de Vendas"
            value="R$ 2.4M"
            trend="+18% vs mês anterior"
            icon={<DollarSign className="w-6 h-6" />}
          />
          <StatCard
            title="Taxa de Conversão"
            value="34.5%"
            trend="+2.3%"
            icon={<TrendingUp className="w-6 h-6" />}
          />
          <StatCard
            title="Leads Ativos"
            value="1,284"
            trend="+156"
            icon={<Users className="w-6 h-6" />}
          />
        </div>

        {/* Relatórios Disponíveis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Relatórios Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReportCard
              title="Relatório de Vendas Mensal"
              description="Análise completa das vendas do mês atual"
              lastUpdated="Há 2 horas"
              category="Vendas"
            />

            <ReportCard
              title="Performance de Leads"
              description="Conversão e qualificação de leads"
              lastUpdated="Há 5 horas"
              category="Marketing"
            />

            <ReportCard
              title="Custos de IA - N8N"
              description="Custos detalhados por workflow e modelo"
              lastUpdated="Há 1 hora"
              category="Operações"
            />

            <ReportCard
              title="Ranking de Closers"
              description="Performance individual dos vendedores"
              lastUpdated="Há 3 horas"
              category="Vendas"
            />

            <ReportCard
              title="Análise de Churn"
              description="Taxa de cancelamento e retenção"
              lastUpdated="Ontem"
              category="Financeiro"
            />

            <ReportCard
              title="ROI por Canal"
              description="Retorno de investimento por fonte de lead"
              lastUpdated="Há 6 horas"
              category="Marketing"
            />
          </div>
        </div>

        {/* Relatórios Agendados */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Relatórios Agendados</h2>
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
            <div className="space-y-4">
              <ScheduledReport
                name="Relatório Semanal de Vendas"
                frequency="Toda segunda-feira, 08:00"
                recipients="time@mottivme.com"
              />
              <ScheduledReport
                name="Custos Mensais de IA"
                frequency="Todo dia 1, 09:00"
                recipients="financeiro@mottivme.com"
              />
              <ScheduledReport
                name="Performance de Equipe"
                frequency="Toda sexta-feira, 17:00"
                recipients="gestao@mottivme.com"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, trend, icon }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6">
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

function ReportCard({ title, description, lastUpdated, category }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <FileText className="w-6 h-6 text-[#3B82F6]" />
        <span className="px-2 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs rounded font-medium">
          {category}
        </span>
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#9CA3AF] text-xs">
          <Calendar className="w-4 h-4" />
          <span>{lastUpdated}</span>
        </div>
        <button className="text-[#3B82F6] text-sm font-medium hover:underline flex items-center gap-1">
          <Download className="w-4 h-4" />
          Baixar
        </button>
      </div>
    </div>
  )
}

function ScheduledReport({ name, frequency, recipients }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#242937] rounded-lg">
      <div className="flex-1">
        <h4 className="text-white font-medium mb-1">{name}</h4>
        <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {frequency}
          </span>
          <span>→ {recipients}</span>
        </div>
      </div>
      <button className="text-[#3B82F6] text-sm hover:underline">
        Editar
      </button>
    </div>
  )
}
