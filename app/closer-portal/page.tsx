import Link from 'next/link'
import { Calculator, FileText, TrendingUp, Users, ArrowLeft, DollarSign, Target, Percent } from 'lucide-react'

export default function CloserPortal() {
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
                <h1 className="text-3xl font-bold text-white">Portal do Closer</h1>
                <p className="text-[#D1D5DB] mt-1">Calculadoras, scripts e ferramentas de vendas</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Calculadoras Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Calculadoras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CalculatorCard
              title="Calculadora de ROI"
              description="Calcule o retorno sobre investimento das suas vendas"
              icon={<TrendingUp className="w-8 h-8" />}
              href="/closer-portal/roi-calculator"
            />

            <CalculatorCard
              title="Calculadora de Comissão"
              description="Calcule comissões e bonificações"
              icon={<DollarSign className="w-8 h-8" />}
              href="/closer-portal/commission-calculator"
            />

            <CalculatorCard
              title="Calculadora de Desconto"
              description="Calcule descontos e margens de lucro"
              icon={<Percent className="w-8 h-8" />}
              href="/closer-portal/discount-calculator"
            />

            <CalculatorCard
              title="Meta de Vendas"
              description="Acompanhe suas metas e objetivos"
              icon={<Target className="w-8 h-8" />}
              href="/closer-portal/sales-goals"
            />

            <CalculatorCard
              title="Valor por Cliente"
              description="Calcule o LTV (Lifetime Value)"
              icon={<Users className="w-8 h-8" />}
              href="/closer-portal/ltv-calculator"
            />

            <CalculatorCard
              title="Planilha de Comissões"
              description="Visualize suas comissões do mês"
              icon={<FileText className="w-8 h-8" />}
              href="/closer-portal/commission-sheet"
            />
          </div>
        </div>

        {/* Scripts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Scripts de Vendas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScriptCard
              title="Script Assembly Line"
              description="Script de vendas interativo passo a passo"
              href="https://assembly-line-script-app.vercel.app/script-vendas-interativo.html"
              external
            />

            <ScriptCard
              title="Objeções Comuns"
              description="Respostas para as principais objeções"
              href="/closer-portal/objections"
            />

            <ScriptCard
              title="Script de Follow-up"
              description="Follow-up efetivo para fechar vendas"
              href="/closer-portal/followup-script"
            />

            <ScriptCard
              title="Pitch de Vendas"
              description="Pitch estruturado para produtos Mottivme"
              href="/closer-portal/sales-pitch"
            />
          </div>
        </div>

        {/* Ferramentas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Ferramentas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ToolCard
              title="CRM Quick Access"
              description="Acesso rápido ao CRM"
              icon={<Users className="w-6 h-6" />}
            />

            <ToolCard
              title="Relatório de Vendas"
              description="Suas vendas do mês"
              icon={<FileText className="w-6 h-6" />}
            />

            <ToolCard
              title="Treinamentos"
              description="Materiais de treinamento"
              icon={<Target className="w-6 h-6" />}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function CalculatorCard({ title, description, icon, href }: any) {
  return (
    <Link href={href}>
      <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer group h-full">
        <div className="text-[#3B82F6] group-hover:scale-110 transition-transform mb-4">
          {icon}
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm">{description}</p>
        <div className="mt-4 flex items-center text-[#3B82F6] text-sm font-medium">
          Abrir Calculadora →
        </div>
      </div>
    </Link>
  )
}

function ScriptCard({ title, description, href, external }: any) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <FileText className="w-6 h-6 text-[#3B82F6]" />
            <span className="text-xs text-[#9CA3AF]">Externo</span>
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <p className="text-[#9CA3AF] text-sm">{description}</p>
          <div className="mt-4 flex items-center text-[#3B82F6] text-sm font-medium">
            Acessar Script →
          </div>
        </div>
      </a>
    )
  }

  return (
    <Link href={href}>
      <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer">
        <FileText className="w-6 h-6 text-[#3B82F6] mb-3" />
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[#9CA3AF] text-sm">{description}</p>
        <div className="mt-4 flex items-center text-[#3B82F6] text-sm font-medium">
          Ver Script →
        </div>
      </div>
    </Link>
  )
}

function ToolCard({ title, description, icon }: any) {
  return (
    <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-6 hover:bg-[#242937] hover:border-[#3B82F6] transition-all cursor-pointer">
      <div className="text-[#3B82F6] mb-3">{icon}</div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-[#9CA3AF] text-sm">{description}</p>
    </div>
  )
}
