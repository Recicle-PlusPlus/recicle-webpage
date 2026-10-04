import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Code,
  Recycle,
  Users,
  Map,
  Gift,
  MessageCircle,
  LayoutDashboard,
  Clock,
  Mail,
  TrendingUp,
  ShieldCheck,
  Route,
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Maristela Oliveira",
    role: "Orientadora",
    image: "/team/perfil.png",
  },
  {
    id: 2,
    name: "Alisson Marques",
    role: "Orientador",
    image: "/team/perfil.png",
  },
  {
    id: 3,
    name: "Mirela Cazzolato",
    role: "Orientadora",
    image: "/team/perfil.png",
  },
  {
    id: 4,
    name: "Eduardo Rossi",
    role: "Desenvolvedor",
    image: "/team/perfil.png",
  },
  {
    id: 5,
    name: "Leonardo",
    role: "Desenvolvedor",
    image: "/team/perfil.png",
  },
  {
    id: 6,
    name: "Fernando Souza",
    role: "Desenvolvedor",
    image: "/team/perfil.png",
  },
  {
    id: 7,
    name: "Itallo Santos",
    role: "Desenvolvedor",
    image: "/team/perfil.png",
  },
  {
    id: 8,
    name: "Carlos Lohan",
    role: "Desenvolvedor",
    image: "/team/perfil.png",
  },
];

const PARTNERS = [
  { name: "CEFET-MG", logo: "/partners/cefet.png" },
  { name: "USP", logo: "/partners/usp.png" },
  { name: "ICMC", logo: "/partners/icmc.jpg" },
  { name: "CeMEAI", logo: "/partners/cemeai.png" },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar Simples */}
      <nav className="absolute top-0 w-full px-6 py-6 lg:px-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Ícone Recicle++"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Recicle<span className="text-green-600">++</span>
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 bg-white overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-200 to-green-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-full inline-flex items-center gap-2 font-bold px-4 text-sm">
              <Code size={16} /> Plataforma Open Source
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Tecnologia livre para revolucionar a{" "}
            <span className="text-green-600">coleta seletiva</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            O Recicle++ é uma infraestrutura tecnológica completa oferecida para
            que Prefeituras, ONGs e Cooperativas organizem suas operações,
            otimizem rotas de catadores e engajem a população através da
            gamificação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-500 rounded-full font-semibold border border-slate-200 cursor-not-allowed">
              <Clock size={20} />
              Apps em breve nas lojas
            </div>
            <Link
              href="https://github.com/seu-usuario/seu-repositorio"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors duration-200 shadow-lg"
            >
              <Code size={20} />
              Ver código no GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Parceiros */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Apoiadores e Parceiros Acadêmicos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="relative w-28 h-12 md:h-16 flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades - App do Doador */}
      <section className="px-6 py-24 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">
                <Smartphone size={16} /> App do Doador
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Engajamento e praticidade para o cidadão
              </h2>
              <p className="text-lg text-slate-600">
                Criado para facilitar o descarte e reter o usuário. O cidadão
                solicita a coleta, acompanha em tempo real e acumula pontos no
                sistema gerido pela entidade adotante.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-lg text-green-600 shadow-sm border border-slate-100">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Chat em Tempo Real
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Canal direto com o coletor para alinhar detalhes da
                    retirada.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-lg text-green-600 shadow-sm border border-slate-100">
                  <Gift size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Gamificação e Marketplace
                  </h4>
                  <p className="text-slate-600 text-sm">
                    O sistema calcula pontos automaticamente por doação. As
                    prefeituras/ONGs podem oferecer produtos ou benefícios em
                    troca desses pontos na vitrine virtual.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full relative h-[600px] flex justify-center">
            {/* Mockup Secundário (Atrás) */}
            <div className="absolute right-[5%] md:right-[20%] top-12 border-gray-200 bg-gray-200 border-[6px] rounded-[2rem] h-[450px] w-[220px] shadow-xl overflow-hidden rotate-6 z-0 hidden sm:block">
              <Image
                src="/prints/doador2.jpeg"
                alt="Tela Secundária Doador"
                fill
                className="object-cover bg-slate-100"
              />
            </div>
            {/* Mockup Principal (Frente) */}
            <div className="absolute left-[5%] md:left-[20%] top-0 border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[550px] w-[260px] shadow-2xl overflow-hidden z-10">
              <Image
                src="/prints/doador1.jpeg"
                alt="Tela Principal Doador"
                fill
                className="object-cover bg-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades - App do Coletor */}
      <section className="px-6 py-24 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative h-[600px] flex justify-center">
            {/* Mockup Secundário (Atrás) */}
            <div className="absolute left-[5%] md:left-[20%] top-12 border-gray-200 bg-gray-200 border-[6px] rounded-[2rem] h-[450px] w-[220px] shadow-xl overflow-hidden -rotate-6 z-0 hidden sm:block">
              <Image
                src="/prints/coletor2.jpeg"
                alt="Tela Secundária Coletor"
                fill
                className="object-cover bg-slate-100"
              />
            </div>
            {/* Mockup Principal (Frente) */}
            <div className="absolute right-[5%] md:right-[20%] top-0 border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[550px] w-[260px] shadow-2xl overflow-hidden z-10">
              <Image
                src="/prints/coletor1.jpeg"
                alt="Tela Principal Coletor"
                fill
                className="object-cover bg-slate-100"
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                <Route size={16} /> App do Coletor
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Eficiência e otimização para o catador
              </h2>
              <p className="text-lg text-slate-600">
                Focado em aumentar a renda e reduzir o custo com combustível. O
                motor logístico calcula trajetos inteligentes para catadores
                autônomos e cooperativas.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Map size={20} />
                <div className="mt-1 p-2 bg-slate-50 rounded-lg text-blue-600 shadow-sm border border-slate-200"></div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Mapa de Oportunidades & Múltiplos Pontos
                  </h4>
                  <p className="text-slate-600 text-sm">
                    O coletor visualiza doações por raio de distância e
                    seleciona várias coletas para montar seu "carrinho" do
                    turno.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-50 rounded-lg text-blue-600 shadow-sm border border-slate-200">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Roteirização Otimizada & Trava de Concorrência
                  </h4>
                  <p className="text-slate-600 text-sm">
                    O app reordena as paradas geograficamente usando o Google
                    Directions e bloqueia as doações escolhidas para evitar
                    viagens perdidas.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Funcionalidades - Manager Web */}
      <section className="px-6 py-24 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-bold mb-4 border border-slate-700">
                <LayoutDashboard size={16} /> Recicle++ Manager
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gestão total para a sua Entidade
              </h2>
              <p className="text-lg text-slate-300">
                Uma plataforma web poderosa para Prefeituras, ONGs ou
                Cooperativas gerenciarem todo o ecossistema de reciclagem da
                cidade de forma segura.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-800 rounded-lg text-green-400">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Estatísticas e Auditoria</h4>
                  <p className="text-slate-400 text-sm">
                    Dashboard com volume coletado, impacto ambiental e controle
                    de aprovação manual de novos catadores.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-800 rounded-lg text-green-400">
                  <Gift size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Parametrização do Marketplace</h4>
                  <p className="text-slate-400 text-sm">
                    A entidade define as regras: quantos pontos vale cada
                    material, cadastra os produtos/brindes e gerencia os
                    resgates.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full flex justify-center">
            {/* Mockup Desktop Browser */}
            <div className="w-full max-w-2xl bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="relative aspect-video w-full bg-slate-100">
                {/* Print Web Horizontal */}
                <Image
                  src="/prints/manager.png"
                  alt="Tela do Manager Web"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Users size={32} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Pesquisa e Desenvolvimento
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Um projeto acadêmico focado em engenharia de software sustentável
              e otimização logística.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md w-full"
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 bg-slate-200">
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

      {/* Contato Section */}
      <section className="px-6 py-20 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center bg-green-50 p-10 md:p-14 rounded-[2.5rem] border border-green-100">
          <Mail className="mx-auto text-green-600 mb-6" size={40} />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Leve o Recicle++ para a sua cidade
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Você representa uma Prefeitura, Cooperativa ou ONG e deseja
            modernizar a gestão de resíduos da sua região com a nossa plataforma
            open-source? Vamos conversar.
          </p>
          <Link
            href="mailto:recicleplus.usp@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-green-200"
          >
            <Mail size={20} />
            Entre em contato por e-mail
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Ícone Recicle++"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">
              Recicle<span className="text-green-500">++</span>
            </span>
          </div>

          <div className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Recicle++. Projeto Acadêmico Open Source.
            <br />
            Desenvolvido com o apoio da FAPESP, CAPES e CNPq.
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
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
