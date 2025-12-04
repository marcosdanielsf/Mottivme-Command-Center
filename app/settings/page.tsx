import Link from 'next/link'
import { ArrowLeft, User, Bell, Shield, Database, Palette, Zap, Globe, Key } from 'lucide-react'

export default function SettingsPage() {
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
                <h1 className="text-3xl font-bold text-white">Configurações</h1>
                <p className="text-[#D1D5DB] mt-1">Gerencie as configurações do sistema</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-4 sticky top-24">
              <nav className="space-y-2">
                <SettingsNavItem
                  icon={<User className="w-5 h-5" />}
                  label="Perfil"
                  active
                />
                <SettingsNavItem
                  icon={<Bell className="w-5 h-5" />}
                  label="Notificações"
                />
                <SettingsNavItem
                  icon={<Shield className="w-5 h-5" />}
                  label="Segurança"
                />
                <SettingsNavItem
                  icon={<Database className="w-5 h-5" />}
                  label="Integrações"
                />
                <SettingsNavItem
                  icon={<Palette className="w-5 h-5" />}
                  label="Aparência"
                />
                <SettingsNavItem
                  icon={<Zap className="w-5 h-5" />}
                  label="Automações"
                />
                <SettingsNavItem
                  icon={<Globe className="w-5 h-5" />}
                  label="Geral"
                />
                <SettingsNavItem
                  icon={<Key className="w-5 h-5" />}
                  label="API Keys"
                />
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Perfil Section */}
            <SettingsSection title="Informações do Perfil">
              <div className="space-y-4">
                <SettingField
                  label="Nome Completo"
                  value="Admin Mottivme"
                  type="text"
                />
                <SettingField
                  label="Email"
                  value="admin@mottivme.com"
                  type="email"
                />
                <SettingField
                  label="Cargo"
                  value="Administrador"
                  type="text"
                />
                <SettingField
                  label="Telefone"
                  value="+55 (11) 99999-9999"
                  type="tel"
                />
              </div>
            </SettingsSection>

            {/* Preferências */}
            <SettingsSection title="Preferências">
              <div className="space-y-4">
                <SettingToggle
                  label="Receber notificações por email"
                  description="Receba atualizações importantes no seu email"
                  enabled={true}
                />
                <SettingToggle
                  label="Notificações push"
                  description="Receba notificações em tempo real"
                  enabled={true}
                />
                <SettingToggle
                  label="Modo escuro"
                  description="Interface em tema escuro (padrão)"
                  enabled={true}
                />
                <SettingToggle
                  label="Atualizações automáticas"
                  description="Atualizar dados automaticamente"
                  enabled={false}
                />
              </div>
            </SettingsSection>

            {/* Integrações */}
            <SettingsSection title="Integrações Ativas">
              <div className="space-y-3">
                <IntegrationCard
                  name="Supabase"
                  description="Banco de dados e autenticação"
                  status="online"
                />
                <IntegrationCard
                  name="N8N"
                  description="Automação de workflows"
                  status="online"
                />
                <IntegrationCard
                  name="Vercel"
                  description="Hosting e deployment"
                  status="online"
                />
                <IntegrationCard
                  name="OpenAI"
                  description="Modelos de IA"
                  status="online"
                />
              </div>
            </SettingsSection>

            {/* Zona de Perigo */}
            <SettingsSection title="Zona de Perigo" danger>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 border-2 border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all font-medium">
                  Limpar Cache do Sistema
                </button>
                <button className="w-full px-4 py-3 border-2 border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all font-medium">
                  Resetar Configurações
                </button>
                <button className="w-full px-4 py-3 bg-red-500/20 border-2 border-red-500 text-red-400 rounded-lg hover:bg-red-500/30 transition-all font-medium">
                  Excluir Conta
                </button>
              </div>
            </SettingsSection>

            {/* Save Button */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-semibold transition-all">
                Salvar Alterações
              </button>
              <button className="px-6 py-3 border border-[#2d3748] text-[#9CA3AF] hover:text-white hover:border-[#3B82F6] rounded-lg font-semibold transition-all">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SettingsNavItem({ icon, label, active }: any) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active
          ? 'bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/50'
          : 'text-[#9CA3AF] hover:bg-[#242937] hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function SettingsSection({ title, children, danger }: any) {
  return (
    <div className={`bg-[#1a1f2e] border rounded-xl p-6 ${
      danger ? 'border-red-500/50' : 'border-[#2d3748]'
    }`}>
      <h2 className={`text-xl font-bold mb-6 ${
        danger ? 'text-red-400' : 'text-white'
      }`}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function SettingField({ label, value, type }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
        {label}
      </label>
      <input
        type={type}
        defaultValue={value}
        className="w-full px-4 py-2 bg-[#242937] border border-[#2d3748] rounded-lg text-white focus:outline-none focus:border-[#3B82F6] transition-all"
      />
    </div>
  )
}

function SettingToggle({ label, description, enabled }: any) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-white font-medium">{label}</p>
        <p className="text-sm text-[#9CA3AF] mt-1">{description}</p>
      </div>
      <button
        className={`relative w-12 h-6 rounded-full transition-all ${
          enabled ? 'bg-[#3B82F6]' : 'bg-[#2d3748]'
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
            enabled ? 'left-7' : 'left-1'
          }`}
        />
      </button>
    </div>
  )
}

function IntegrationCard({ name, description, status }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#242937] rounded-lg">
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-sm text-[#9CA3AF]">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          status === 'online' ? 'bg-green-500' : 'bg-red-500'
        } animate-pulse`} />
        <span className="text-sm text-[#9CA3AF]">
          {status === 'online' ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  )
}
