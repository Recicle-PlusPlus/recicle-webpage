import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | EcoApp",
  description: "Nossa política de privacidade e termos de uso de dados.",
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-12 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar para a Home
          </Link>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-500">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </header>

        <article className="space-y-8 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
          <section>
            <h2>1. Coleta de Dados</h2>
            <p>
              Para o funcionamento adequado do aplicativo EcoApp, coletamos
              informações essenciais durante o seu cadastro e uso da plataforma.
              Isso inclui seu nome, endereço de e-mail, número de telefone e
              dados de localização (necessários para conectar você aos coletores
              da sua região).
            </p>
          </section>

          <section>
            <h2>2. Uso das Informações</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para as seguintes
              finalidades:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
              <li>Criar e gerenciar sua conta de usuário.</li>
              <li>
                Facilitar a logística de coleta conectando seu endereço a um
                parceiro disponível.
              </li>
              <li>
                Melhorar a segurança e a confiabilidade de nossa plataforma.
              </li>
              <li>Enviar notificações sobre o status da sua coleta.</li>
            </ul>
          </section>

          <section>
            <h2>3. Compartilhamento</h2>
            <p>
              Respeitamos sua privacidade. Seus dados de contato e endereço só
              são compartilhados com o coletor específico no momento em que uma
              solicitação de coleta é aceita por ele.{" "}
              <strong>Não vendemos seus dados</strong> a terceiros em nenhuma
              hipótese.
            </p>
          </section>

          <section>
            <h2>4. Segurança</h2>
            <p>
              Adotamos as melhores práticas do mercado em relação a padrões de
              segurança para garantir a integridade dos seus dados,
              protegendo-os contra acessos não autorizados, alterações ou
              destruição.
            </p>
          </section>

          <section>
            <h2>5. Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Privacidade, ou
              desejar solicitar a exclusão de seus dados da nossa base, entre em
              contato através do e-mail:{" "}
              <a
                href="mailto:privacidade@ecoapp.com.br"
                className="text-green-600 hover:underline"
              >
                privacidade@ecoapp.com.br
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
