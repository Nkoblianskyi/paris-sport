import { Header } from "@/components/header"

export default function TermosLegaisPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Termos Legais</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center mb-8">
            <p className="text-yellow-400 text-lg">Última atualização: Janeiro de 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Identificação do Serviço</h2>
            <div className="text-slate-300 space-y-3">
              <p>
                <strong>Nome do serviço:</strong> ApostasDesportivasPT.com
                <br />
                <strong>Natureza:</strong> Plataforma de comparação e informação sobre apostas desportivas
                <br />
                <strong>Atividade:</strong> Serviço de comparação independente de casas de apostas licenciadas em
                Portugal
                <br />
                <strong>Público-alvo:</strong> Residentes em Portugal maiores de 18 anos
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Natureza do Serviço</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                O ApostasDesportivasPT.com é um <strong>serviço de informação e comparação</strong> que:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Compara casas de apostas desportivas licenciadas pelo SRIJ</li>
                <li>Fornece informações sobre bónus, odds e funcionalidades</li>
                <li>Oferece análises independentes e avaliações especializadas</li>
                <li>Promove práticas de jogo responsável</li>
              </ul>
              <p className="font-semibold text-yellow-300 mt-4">
                IMPORTANTE: Não somos uma casa de apostas nem operador de jogos. Não aceitamos apostas nem processamos
                transações financeiras relacionadas com jogos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Condições de Utilização</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Acesso ao Serviço:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>O acesso ao site é gratuito e não requer registo obrigatório</li>
                  <li>Reservamo-nos o direito de limitar o acesso por motivos técnicos ou legais</li>
                  <li>É proibido o uso automatizado (bots, scrapers) sem autorização prévia</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Utilização Adequada:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Utilizar o serviço apenas para fins informativos e de comparação</li>
                  <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
                  <li>Não interferir com o funcionamento normal do site</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Responsabilidades e Limitações</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-3">Limitações de Responsabilidade</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>As informações são fornecidas "tal como estão" sem garantias</li>
                  <li>Não garantimos a precisão absoluta de todas as informações</li>
                  <li>Não somos responsáveis por decisões tomadas com base no nosso conteúdo</li>
                  <li>Não respondemos por perdas financeiras resultantes de apostas</li>
                  <li>Links externos são da responsabilidade dos respetivos operadores</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
                <h4 className="text-green-400 font-bold mb-3">Os Nossos Compromissos</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Manter informações atualizadas na medida do possível</li>
                  <li>Fornecer análises independentes e imparciais</li>
                  <li>Proteger os dados pessoais dos utilizadores</li>
                  <li>Promover práticas de jogo responsável</li>
                  <li>Responder a questões e reclamações em tempo útil</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Propriedade Intelectual</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                Todo o conteúdo original do ApostasDesportivasPT.com (textos, análises, design, logótipos) está
                protegido por direitos de autor e outras leis de propriedade intelectual.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Utilização Permitida:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Visualização e navegação pessoal no site</li>
                  <li>Partilha de links para páginas específicas</li>
                  <li>Citação breve com atribuição adequada</li>
                </ul>
              </div>
              <p>Qualquer outra utilização requer autorização prévia por escrito.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Jogo Responsável - Compromisso Legal</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
                <h4 className="text-red-300 font-bold mb-3">AVISO LEGAL OBRIGATÓRIO</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    <strong>Idade mínima:</strong> As apostas são exclusivas para maiores de 18 anos
                  </li>
                  <li>
                    <strong>Riscos:</strong> O jogo pode causar dependência e problemas financeiros
                  </li>
                  <li>
                    <strong>Moderação:</strong> Aposte apenas o que pode permitir-se perder
                  </li>
                  <li>
                    <strong>Ajuda disponível:</strong> Linha SOS Jogador 213 950 840
                  </li>
                </ul>
              </div>

              <p>
                Em conformidade com a legislação portuguesa, promovemos ativamente o jogo responsável e fornecemos
                informações sobre recursos de ajuda para jogadores problemáticos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Modificações dos Termos</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor
                imediatamente após a publicação no site. A utilização continuada do serviço após as modificações
                constitui aceitação dos novos termos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Lei Aplicável e Jurisdição</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Estes termos são regidos pela lei portuguesa. Qualquer litígio será submetido à jurisdição dos tribunais
                portugueses competentes, sem prejuízo do recurso a meios alternativos de resolução de conflitos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Contacto e Reclamações</h2>
            <div className="text-slate-300 leading-relaxed bg-green-900/20 p-4 rounded-lg">
              <p>Para questões legais, reclamações ou esclarecimentos:</p>
              <p className="mt-2">
                <strong>Email:</strong> <span className="text-yellow-400">legal@apostasdesportivaspt.com</span>
                <br />
                <strong>Assunto:</strong> "Questão Legal - [Descrição breve]"
                <br />
                <strong>Prazo de resposta:</strong> Até 15 dias úteis
              </p>

              <div className="mt-4 pt-4 border-t border-green-700/50">
                <p className="text-sm">
                  <strong>Resolução de Conflitos:</strong>
                  <br />
                  Em caso de litígio, pode recorrer às entidades de resolução alternativa de litígios de consumo ou à
                  Direção-Geral do Consumidor (www.consumidor.gov.pt).
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
            <p className="text-blue-300 text-sm">
              Estes termos estão em conformidade com a legislação portuguesa aplicável, incluindo o Código Civil, Código
              do Consumidor e regulamentação específica sobre jogos online.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
