import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Recicle++",
  description:
    "Política de Privacidade e termos de uso de dados do aplicativo open-source Recicle++.",
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-[2rem] shadow-sm border border-slate-100">
        {/* Botão Voltar */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para a Home
          </Link>
        </div>

        {/* Cabeçalho */}
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Política de Privacidade do Recicle++
          </h1>
          <p className="text-slate-500 font-medium">
            Última atualização: 04 de Outubro de 2026
          </p>
        </header>

        {/* Conteúdo */}
        <article className="space-y-10 text-slate-600 leading-relaxed text-lg">
          {/* Introdução */}
          <div className="space-y-4">
            <p>
              O Recicle++ ("nós", "nosso" ou "aplicativo") é um projeto de
              código aberto (open-source) de natureza acadêmica e social,
              desenvolvido em parceria por pesquisadores de instituições como
              USP, CEFET-MG, ICMC e CeMEAI. Nosso objetivo é facilitar a coleta
              seletiva urbana, conectando doadores de materiais recicláveis a
              coletores autônomos por meio de tecnologia e gamificação.
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos,
              armazenamos e protegemos suas informações pessoais quando você
              utiliza nossos aplicativos (Doador e Coletor) e nossa plataforma
              web (Manager), em conformidade com a Lei Geral de Proteção de
              Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="font-semibold text-slate-800">
              Ao utilizar o Recicle++, você concorda com a coleta e o uso de
              informações de acordo com esta política.
            </p>
          </div>

          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Informações que Coletamos
            </h2>
            <p className="mb-4">
              Para o funcionamento adequado da plataforma, coletamos os
              seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Dados de Cadastro:</strong> Nome completo, endereço de
                e-mail e senha.
              </li>
              <li>
                <strong>Dados de Localização (GPS):</strong>
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-base">
                  <li>
                    <strong>Doadores:</strong> Coletamos a localização exata no
                    momento em que você solicita uma coleta, para que o coletor
                    saiba onde buscar o material.
                  </li>
                  <li>
                    <strong>Coletores:</strong> Coletamos a localização para
                    habilitar o "Radar de Oportunidades" e para traçar as rotas
                    otimizadas de deslocamento. O aplicativo pode solicitar
                    acesso à localização em segundo plano para manter a
                    navegação da rota ativa durante a viagem.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Informações de Uso e Gamificação:</strong> Registramos o
                histórico de coletas realizadas, o volume/peso estimado dos
                materiais, os tipos de resíduos e a pontuação virtual (moeda de
                recompensa) acumulada em sua conta.
              </li>
              <li>
                <strong>Conteúdo do Usuário (Chat):</strong> Armazenamos as
                mensagens trocadas no chat interno entre doadores e coletores
                para fins de segurança, auditoria e facilitação do encontro.
              </li>
              <li>
                <strong>Dados do Dispositivo:</strong> Informações técnicas,
                como modelo do aparelho, sistema operacional e tokens de
                notificação push (para enviar alertas de mensagens e status de
                coletas).
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Como Usamos Suas Informações
            </h2>
            <p className="mb-4">
              As informações coletadas são utilizadas estritamente para as
              seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Viabilizar o Serviço:</strong> Conectar doadores a
                coletores próximos e otimizar logisticamente o trajeto de
                coleta.
              </li>
              <li>
                <strong>Sistema de Recompensas:</strong> Calcular e creditar
                pontos na carteira virtual do usuário com base no peso e tipo de
                material doado, permitindo o resgate de produtos no marketplace.
              </li>
              <li>
                <strong>Comunicação:</strong> Enviar notificações sobre o status
                da coleta ("Coletor a caminho", "Coleta concluída") e viabilizar
                o chat em tempo real.
              </li>
              <li>
                <strong>Segurança e Suporte:</strong> Monitorar atividades
                suspeitas, validar o cadastro de coletores e garantir um
                ambiente seguro para ambas as partes.
              </li>
              <li>
                <strong>Pesquisa Acadêmica (Dados Anonimizados):</strong> Por
                ser um projeto de pesquisa financiado por instituições públicas
                de fomento (como CAPES, FAPESP e CNPq), os dados operacionais
                (como volume de lixo reciclado, distâncias percorridas e tempos
                médios) poderão ser utilizados em publicações científicas.
                Nesses casos, todos os dados pessoais que possam identificar o
                usuário serão rigorosamente anonimizados.
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Compartilhamento de Dados
            </h2>
            <p className="mb-4">
              O Recicle++ não vende, aluga ou comercializa seus dados pessoais a
              terceiros. Suas informações são compartilhadas apenas nas
              seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Entre Usuários:</strong> Quando um coletor aceita a
                solicitação de um doador, o nome e o endereço de coleta do
                doador são compartilhados com o coletor específico para
                viabilizar a retirada.
              </li>
              <li>
                <strong>Provedores de Serviços:</strong> Utilizamos serviços de
                terceiros para a infraestrutura do aplicativo, que processam
                dados sob rígidos padrões de segurança:
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-base">
                  <li>
                    <strong>Supabase:</strong> Para hospedagem segura do banco
                    de dados e autenticação de usuários.
                  </li>
                  <li>
                    <strong>Google Maps API:</strong> Para renderização de
                    mapas, cálculo de distâncias e otimização das rotas de
                    coleta.
                  </li>
                  <li>
                    <strong>Firebase Cloud Messaging:</strong> Para o disparo de
                    notificações push em seu dispositivo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Obrigação Legal:</strong> Podemos divulgar suas
                informações caso seja exigido por lei ou em resposta a
                solicitações válidas de autoridades públicas.
              </li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Segurança e Armazenamento
            </h2>
            <div className="space-y-4">
              <p>
                Empregamos medidas técnicas e organizacionais avançadas para
                proteger seus dados. Nosso banco de dados utiliza criptografia
                de ponta a ponta para senhas e implementa regras rígidas de
                segurança (Row Level Security - RLS), garantindo que um usuário
                só tenha acesso aos dados de suas próprias coletas e mensagens.
              </p>
              <p>
                Os dados são armazenados em servidores seguros na nuvem pelo
                tempo necessário para cumprir as finalidades descritas nesta
                política, ou até que o usuário solicite a exclusão de sua conta.
              </p>
            </div>
          </section>

          {/* Seção 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Seus Direitos e Exclusão de Conta
            </h2>
            <p className="mb-4">
              De acordo com a LGPD, e com as diretrizes das lojas de aplicativos
              (Google Play e App Store), você tem total controle sobre seus
              dados. Você possui o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Acessar e Corrigir:</strong> Visualizar e alterar seus
                dados cadastrais a qualquer momento pelo aplicativo.
              </li>
              <li>
                <strong>Revogar Consentimento:</strong> Desativar permissões de
                localização ou notificações diretamente nas configurações do seu
                celular. (Note que isso pode limitar algumas funcionalidades do
                app).
              </li>
              <li>
                <strong>
                  Excluir Conta e Dados (Direito ao Esquecimento):
                </strong>{" "}
                Você pode solicitar a exclusão permanente e irrecuperável da sua
                conta e de todos os seus dados pessoais.
              </li>
            </ul>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900">Como excluir:</p>
              <p className="mt-1 text-base">
                Acesse o menu "Perfil" no aplicativo e clique no botão "Excluir
                Minha Conta". Alternativamente, você pode enviar um e-mail para
                nossa equipe solicitando a deleção de seus registros.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente
              para refletir novas funcionalidades do aplicativo ou mudanças na
              legislação. Recomendamos que você revise esta página regularmente.
              Notificaremos os usuários sobre mudanças significativas através de
              um aviso no próprio aplicativo.
            </p>
          </section>

          {/* Seção 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Contato
            </h2>
            <p className="mb-4">
              Se você tiver dúvidas, sugestões ou solicitações relacionadas a
              esta Política de Privacidade ou aos seus dados pessoais, entre em
              contato com a equipe de pesquisa e desenvolvimento do projeto
              através dos e-mails institucionais abaixo:
            </p>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-green-900 text-base space-y-1 font-medium">
              <p>recicleplus.usp@gmail.com</p>
              <p>
                Instituto de Ciências Matemáticas e de Computação (ICMC - USP)
              </p>
              <p>
                Centro Federal de Educação Tecnológica de Minas Gerais
                (CEFET-MG)
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
