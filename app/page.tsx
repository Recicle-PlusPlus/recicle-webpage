import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Leaf,
  Recycle,
  Users,
  ArrowRight,
  Code,
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "/team/membro1.jpg",
  },
  { id: 2, name: "Carlos Santos", role: "CTO", image: "/team/membro2.jpg" },
  {
    id: 3,
    name: "Marina Costa",
    role: "Head de Sustentabilidade",
    image: "/team/membro3.jpg",
  },
  {
    id: 4,
    name: "João Paulo",
    role: "Lead Designer",
    image: "/team/membro4.jpg",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:px-8 bg-white overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-200 to-green-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-100 text-green-700 rounded-full">
              <Recycle size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            O futuro da reciclagem na{" "}
            <span className="text-green-600">palma da sua mão</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Conectamos pessoas e empresas que desejam descartar materiais
            recicláveis a coletores independentes e cooperativas. Transforme o
            seu lixo em impacto positivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#download"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-colors duration-200 shadow-lg shadow-green-200"
            >
              <Smartphone size={20} />
              Baixar App do Doador
            </Link>
            <Link
              href="https://github.com/seu-usuario/seu-repositorio"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors duration-200 shadow-lg"
            >
              <Code size={20} />
              Ver no GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-24 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <Leaf size={16} /> Simples e intuitivo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Solicite uma coleta em menos de 3 cliques
            </h2>
            <p className="text-lg text-slate-600">
              Esqueça a burocracia. Basta tirar uma foto dos seus recicláveis,
              informar a quantidade estimada e aguardar um coletor parceiro
              aceitar o chamado na sua região.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Tire uma foto dos itens",
                "Confirme seu endereço",
                "Acompanhe o coletor em tempo real",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-none relative">
            {/* Celular Mockup Stylized Container */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[600px] w-[280px] shadow-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-[2rem] bg-slate-100"
                autoPlay
                loop
                muted
                playsInline
                src="/demo.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users size={32} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Conheça as mentes por trás da nossa missão de tornar o mundo um
              lugar mais sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-slate-50"
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {/* Placeholder fallback for uncreated images */}
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover relative z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <Recycle className="text-green-500" /> EcoApp
          </div>

          <div className="text-slate-400 text-sm">
            © {currentYear} EcoApp. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="https://github.com/seu-usuario/seu-repositorio"
              target="_blank"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/privacidade"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
