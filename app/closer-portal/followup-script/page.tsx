import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'

export default function FollowUpScript() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="border-b border-[#2d3748] bg-[#0B0F19]/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/closer-portal" className="text-[#9CA3AF] hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Script de Follow-up</h1>
              <p className="text-[#D1D5DB] mt-1">Como fazer follow-up efetivo</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Intro */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <Phone className="w-12 h-12 text-white flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">A Venda Está no Follow-up</h2>
              <p className="text-white/90">
                80% das vendas acontecem entre o 5º e 12º contato. A maioria desiste no 2º.
                Não seja a maioria.
              </p>
            </div>
          </div>
        </div>

        {/* Follow-up Sequence */}
        <div className="space-y-6">
          {/* Day 1 */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">
                1
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Follow-up Dia 1 (Mesmo Dia)</h3>
                <p className="text-sm text-[#9CA3AF]">2-3 horas após a reunião</p>
              </div>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`Oi [Nome], tudo bem?

Acabei de sair da nossa reunião e queria agradecer pelo tempo. Foi muito bom entender seus desafios com [problema específico que ele mencionou].

Já estou preparando aqui a proposta personalizada com o que conversamos. Vou te enviar amanhã de manhã.

Enquanto isso, dá uma olhada nesse case de [empresa similar] que tinha o mesmo desafio que você: [link]

Qualquer dúvida, só chamar!

Abraço,
[Seu nome]`}
              </p>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">
                2
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Follow-up Dia 2</h3>
                <p className="text-sm text-[#9CA3AF]">Envio da proposta</p>
              </div>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`[Nome], conforme prometido!

Montei uma proposta pensando exatamente no que você precisa:

✓ [Benefício 1 específico para o cliente]
✓ [Benefício 2 específico para o cliente]
✓ [Benefício 3 específico para o cliente]

[Anexar proposta]

Olha esse documento com calma e me chama quando tiver 10 minutinhos.
Vou te explicar alguns detalhes que vão fazer mais sentido ao vivo.

Quando você consegue dar uma olhada? Amanhã de manhã ou tarde?`}
              </p>
            </div>
          </div>

          {/* Day 3 */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">
                3
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Follow-up Dia 3-4</h3>
                <p className="text-sm text-[#9CA3AF]">Check-in casual</p>
              </div>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`Fala [Nome]!

Conseguiu dar uma olhada na proposta que te mandei?

Tenho alguns horários disponíveis hoje e amanhã caso queira tirar dúvidas.
Ou se preferir, me manda suas perguntas por aqui mesmo que eu respondo!

O que acha?`}
              </p>
            </div>
          </div>

          {/* Day 5 */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">
                4
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Follow-up Dia 5-7</h3>
                <p className="text-sm text-[#9CA3AF]">Criar urgência com valor</p>
              </div>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`[Nome], tudo certo?

Estava aqui olhando seu case e tive uma ideia que pode acelerar ainda mais seus resultados.

Lembra que você mencionou [problema X]?

Tenho um material específico sobre isso que pode te ajudar muito. Dá uma olhada: [link/recurso]

Aproveitando: essa semana ainda consigo encaixar você na nossa agenda de implementação.
Se começarmos agora, você já está vendendo mais em [prazo].

Faz sentido conversarmos hoje?`}
              </p>
            </div>
          </div>

          {/* Final */}
          <div className="bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                5
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Follow-up Final (Break-up)</h3>
                <p className="text-sm text-[#9CA3AF]">Dia 10-14</p>
              </div>
            </div>

            <div className="bg-[#242937] rounded-lg p-6">
              <p className="text-[#D1D5DB] leading-relaxed whitespace-pre-line">
{`[Nome],

Tentei falar contigo algumas vezes mas imagino que deve estar corrido aí.

Vou assumir que não faz sentido pra você agora, sem problema!

Mas antes de eu arquivar aqui, me responde uma coisa:

Foi o timing? O investimento? Ou não ficou claro o valor?

Pergunto porque isso me ajuda a melhorar, e se for algo que eu posso resolver,
talvez ainda faça sentido conversarmos.

Se não rolar, tranquilo também. Fica o contato pra quando precisar!

Abraço,
[Seu nome]`}
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 bg-[#1a1f2e] border border-[#2d3748] rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">🎯 Regras de Ouro do Follow-up</h3>
          <div className="space-y-4 text-[#D1D5DB]">
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Sempre adicione valor</strong> - nunca envie só "e aí, viu a proposta?"</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Varie os canais</strong> - alterne entre WhatsApp, email, ligação</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Seja específico</strong> - referencie coisas que o cliente mencionou na reunião</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Crie urgência genuína</strong> - agenda lotada, vagas limitadas, deadline real</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Não tenha medo do "break-up"</strong> - ele frequentemente gera resposta</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#3B82F6]">✓</span>
              <p><strong className="text-white">Mantenha tom leve</strong> - sem pressão, mas sem ser frouxo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
