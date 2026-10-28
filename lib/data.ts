import { Code2, Gamepad2, GraduationCap } from "lucide-react";

export const profile = {
  name: "Mateus Costa",
  shortName: "MC",
  role: "Desenvolvedor de jogos, aplicativos e experiências web",
  email: "cpsmateus16@gmail.com",
  location: "Brasil",
  github: "https://github.com/MateusCPS",
  linkedin: "https://www.linkedin.com/in/mateus-costa-66715414a/",
  availability: "Disponível para novos projetos e oportunidades",
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "O que eu faço", href: "#especialidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

// "O que eu faço": cada área com uma frase de prova e as tecnologias (com balão explicativo).
export const skillGroups = [
  {
    title: "Desenvolvimento de jogos",
    description:
      "Mecânicas, IA de inimigos, sistemas de gameplay e multiplayer online em Unity, de game jams a um MOBA 5v5 com Photon.",
    icon: Gamepad2,
    skills: ["Unity", "C#", "Photon", "Game Design"],
  },
  {
    title: "Jogos educativos e pesquisa",
    description:
      "Serious games e experiências em VR desenvolvidos como pesquisador no IFRJ (PIBIC), e jogos educativos para clientes.",
    icon: GraduationCap,
    skills: ["Serious Games", "VR", "Prolog", "Machine Learning", "HTML5"],
  },
  {
    title: "Web e sistemas",
    description:
      "Sistemas sob medida e aplicações web, de um sistema de gestão para uma imobiliária a este portfólio em Next.js.",
    icon: Code2,
    skills: ["Python", "Java", "Kotlin", "SQL", "Firebase", "Next.js", "TypeScript"],
  },
];

// Ferramentas do dia a dia, exibidas numa linha abaixo das áreas.
export const tools = ["Git", "GitHub", "Scrum", "Notion", "Figma"];

// Explicação curta exibida ao passar o mouse (ou tocar) em cada competência.
// A chave precisa ser exatamente igual ao nome usado em skillGroups e tools.
export const skillInfo: Record<string, string> = {
  Unity: "Motor de jogos usado para criar jogos 2D, 3D e VR para PC, web e dispositivos móveis.",
  "C#": "Linguagem de programação usada no Unity para escrever a lógica dos jogos.",
  Photon: "Serviço de rede para jogos multiplayer online, que conecta os jogadores e sincroniza a partida entre eles.",
  "Game Design": "Planejamento das regras, mecânicas, progressão e experiência de um jogo, definindo o que torna ele divertido e significativo.",
  "Serious Games": "Jogos criados com um objetivo além do entretenimento, como ensinar um conteúdo ou treinar uma habilidade.",
  VR: "Realidade virtual: experiências imersivas em que o jogador usa um óculos, como o Meta Quest 2, para estar dentro do jogo.",
  Prolog: "Linguagem de programação lógica, baseada em fatos e regras, usada para inferência e inteligência artificial.",
  "Machine Learning": "Área da inteligência artificial em que modelos aprendem padrões a partir de dados, como classificar o perfil de um jogador.",
  HTML5: "Linguagem que define a estrutura das páginas web; também usada para jogos que rodam direto no navegador.",
  Python: "Linguagem versátil, usada em automações, sistemas desktop, análise de dados e back-end.",
  Java: "Linguagem orientada a objetos muito usada em sistemas corporativos, back-end e aplicativos Android.",
  Kotlin: "Linguagem moderna que roda na mesma plataforma do Java, usada em back-end e no desenvolvimento Android.",
  SQL: "Linguagem para consultar e organizar dados em bancos de dados relacionais.",
  Firebase: "Plataforma do Google com banco de dados em tempo real, autenticação e hospedagem para aplicações.",
  "Next.js": "Framework baseado em React para criar sites e aplicações web rápidas, com rotas, renderização no servidor e otimização automática.",
  TypeScript: "JavaScript com tipagem estática, que ajuda a encontrar erros antes de o código rodar e deixa projetos maiores mais seguros.",
  Git: "Sistema de controle de versão que registra o histórico de alterações do código e permite trabalhar em equipe sem conflitos.",
  GitHub: "Plataforma para hospedar repositórios Git, revisar código e colaborar em projetos.",
  Scrum: "Forma de organizar o trabalho em ciclos curtos (sprints), com reuniões diárias, planejamento e retrospectivas.",
  Notion: "Ferramenta de organização para documentação, planejamento e gestão de tarefas do projeto.",
  Figma: "Ferramenta de design colaborativo para criar layouts, protótipos e interfaces.",
};

export type JourneyItem = {
  number: string;
  title: string;
  period: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  link?: { label: string; href: string };
};

export const journey: JourneyItem[] = [
  {
    number: "01",
    title: "A Curiosidade",
    period: "2020",
    description:
      "Sempre tive curiosidade de saber como eram feitas as coisas que a gente usa todo dia. Fui puxando esse fio e acabei chegando nos jogos. Quando percebi, já estava inscrito no curso de Jogos Digitais do IFRJ, em Engenheiro Paulo de Frontin.",
  },
  {
    number: "02",
    title: "Tecnologia em Jogos Digitais — IFRJ",
    period: "2021 – 2024",
    description:
      "Comecei a faculdade em plena pandemia, estudando de casa. Foi ali que conheci tudo o que existe por trás de um jogo: game design, arte, áudio e programação. Me encontrei na programação e não larguei mais. A cada semestre a turma entregava um jogo completo, o TCP (Trabalho de Conclusão de Período), e eu sempre ficava com o código.",
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    number: "03",
    title: "Game Jams",
    period: "2022 – 2024",
    description:
      "Game jam é uma maratona: equipes, um tema e poucos dias para entregar um jogo inteiro. Participei de várias durante a faculdade, e foi onde eu mais aprendi. Com o tempo apertado, não dava para ficar só no código, então acabei mexendo com áudio e game design também. Eu saía exausto e já pensando na próxima.",
    tags: ["Prototipagem rápida", "Trabalho em equipe"],
    link: { label: "Ver jogos no itch.io", href: "https://mateus-costa.itch.io" },
  },
  {
    number: "04",
    title: "Pesquisa no IFRJ",
    period: "2023 – 2024",
    description:
      "Lá pela metade do curso, surgiu a chance de entrar como bolsista no Grupo de Pesquisa em Jogos do IFRJ. Foi a primeira vez que vi um jogo meu servir para algo além de divertir. Me dediquei bastante, e isso me rendeu uma bolsa PIBIC. Alguns desses trabalhos viraram publicações acadêmicas.",
    highlights: [
      "Avaliação de conteúdo dinâmico com inferência semântica em Prolog",
      "Serious game em VR (Meta Quest 2) para o ensino de astronomia no ensino fundamental",
      "Jogo educativo sobre agricultura familiar na região de Paulo de Frontin",
      "Balanceamento dinâmico de dificuldade com Inteligência Artificial (PIBIC)",
    ],
    tags: ["Unity", "C#", "Prolog", "VR", "Machine Learning"],
    link: {
      label: "Ver Currículo Lattes",
      href: "http://lattes.cnpq.br/8414656873974358",
    },
  },
  {
    number: "05",
    title: "Engenharia de Software — Universidade de Vassouras",
    period: "2024 – 2025",
    description:
      "Em janeiro de 2024 comecei Engenharia de Software na Universidade de Vassouras, ainda terminando Jogos Digitais. Conciliar duas faculdades foi puxado, mas valeu muito: nos cinco períodos que cursei, aprendi gestão de projetos, Scrum e desenvolvimento web. Também entrei num projeto de extensão para criar uma distribuição Linux para a universidade. Infelizmente ele não foi para frente, mas eu gostei tanto que continuei estudando Linux por conta própria.",
    tags: ["Java", "SQL", "Scrum", "Linux", "HTML/CSS/JS"],
  },
  {
    number: "06",
    title: "Estágio — Observatório Nacional",
    period: "fev/2024 – fev/2025",
    description:
      "No meio de tudo isso, fui selecionado para estagiar no Observatório Magnético de Vassouras, do Observatório Nacional. Foi meu primeiro contato com o dia a dia de uma equipe de verdade. Desenvolvi soluções web, automatizei processos internos e criei uma aplicação em Python para controlar os itens do observatório. Também cuidei de suporte, manutenção e backups.",
    tags: ["Python", "Automação", "Linux", "Suporte"],
  },
  {
    number: "07",
    title: "Freelancer",
    period: "2024 – hoje",
    description:
      "Com o diploma de Jogos Digitais na mão, comecei a pegar freelas: jogos para web, aplicativos mobile e desktop. Um dos projetos de que mais me orgulho é o sistema de gestão de imóveis alugados que fiz para uma imobiliária, do zero até a entrega, em dois meses.",
    tags: ["Python", "Tkinter", "Firebase", "HTML5"],
    link: {
      label: "Ver no GitHub",
      href: "https://github.com/MateusCPS/GerenciadorDeImoveis",
    },
  },
  {
    number: "08",
    title: "Hoje",
    period: "2026",
    description:
      "Hoje eu divido meu tempo entre as duas coisas de que mais gosto: jogos, com Unity e C#, e desenvolvimento web e back-end. Todo dia útil eu sento para construir algo novo para o portfólio. Ainda tenho muito para aprender, e é justamente isso que me anima. Agora estou em busca da minha próxima oportunidade.",
    tags: ["Aberto a oportunidades"],
  },
];

export type Project = {
  title: string;
  description: string;
  category: "Jogo" | "Aplicativo" | "Aplicação web";
  tags: string[];
  image: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
  /** Imagens extras que aparecem no carrossel ao passar o mouse (a capa é `image`). */
  gallery?: string[];
  /** Seu papel no projeto, ex.: "Programação e áudio". */
  role?: string;
  /** Tamanho da equipe, ex.: "Equipe de 4" ou "Solo". */
  team?: string;
  /** O que você fez no projeto (aparece no botão "Ver o que eu fiz"). */
  contributions?: string[];
};

// Adicione seus projetos aqui. Consulte o README para ver exemplos.
export const projects: Project[] = [
  {
    title: "Buriti Project",
    description:
      "Jogo desenvolvido para a GameJam Plus, um tower defense 2D inspirado na lenda indígena da árvore buriti. O jogador deve proteger seu território utilizando estratégias e defesas para enfrentar as ameaças, em uma experiência que combina ação, estratégia e elementos da cultura brasileira.",
    category: "Jogo",
    tags: ["Unity3D", "Visual Studio", "Tower Defense", "2D Game"],
    image: "/projects/BuritiProject.png",
    liveUrl: "https://mateus-costa.itch.io/the-buritis-project",
    gallery: ["/ProjectsGalery/Buriti-1.png", "/ProjectsGalery/Buriti-2.png"],
    repositoryUrl: "https://github.com/FernandoBMSouza/GameJamSX2",
    featured: true,
    role: "Programação e áudio",
    contributions: [
      "Condições de vitória e derrota da partida",
      "Inteligência artificial dos inimigos",
      "Interface dinâmica, atualizada conforme o andamento do jogo",
      "Criação dos áudios do jogo e implementação no Unity",
    ],
  },
  {
    title: "Semeando Saberes",
    description:
      "Este jogo nasceu de uma pesquisa que teve como objetivo criar uma experiência digital única, voltada para jovens de comunidades rurais. Nosso foco foi avaliar o conhecimento dos jovens sobre a agricultura e despertar o entusiasmo por meio de uma abordagem lúdica.",
    category: "Jogo",
    tags: ["Unity3D", "Visual Studio", "Simulator", "Serious Game", "Virtual Reality(VR)"],
    image: "/projects/SemeandoSaberes.png",
    liveUrl: "https://z3z0m.itch.io/semeando-saberes-tcp6",
    gallery: ["/ProjectsGalery/Semeando-1.png", "/ProjectsGalery/Semeando-2.png"],
    repositoryUrl: "https://github.com/BurnOut-Games/TCP6_SemeandoSaberes",
    featured: true,
    role: "Apoio em áudio",
    contributions: ["Apoio na implementação dos áudios do jogo"],
  },
  {
    title: "Musician Life Simulator",
    description:
      "Jogo musical que acompanha a jornada de um aspirante a músico em busca de realizar o sonho de seu avô falecido: tocar em grandes palcos internacionais. Para alcançar esse objetivo, o jogador precisa aprimorar suas habilidades musicais, conquistar fama e dinheiro por meio de vídeos e apresentações, enquanto administra sua energia e saúde mental.",
    category: "Jogo",
    tags: ["Unity3D", "Visual Studio", "Tycoon", "3D Game", "Mobile"],
    image: "/projects/MusicianLifeSimulator.png",
    gallery: ["/ProjectsGalery/Musician-1.png", "/ProjectsGalery/Musician-2.png", "/ProjectsGalery/Musician-3.png"],
    liveUrl: "https://z3z0m.itch.io/musician-life-simulator-tcp4",
    repositoryUrl: "https://github.com/BurnOut-Games/TPC4",
    featured: true,
    role: "Programação",
    contributions: [
      "Sistema para o jogador posicionar e editar objetos no cenário",
      "Minijogo de carro completo",
      "Persistência de dados para salvar e carregar o progresso",
    ],
  },
  {
    title: "In a Bad Eggxinstece",
    description:
      "MOBA online no qual duas equipes de cinco jogadores se enfrentam em nome dos Senhores dos Pesadelos, Cthulhu e Kathanideos, invocados por um grupo de cultistas que abriu um portal entre os mundos. Para vencer, os jogadores precisam coletar as almas dos oponentes e usá-las para derrubar as torres inimigas, em partidas que combinam estratégia, trabalho em equipe e a estética retrô dos desenhos animados dos anos 90.",
    category: "Jogo",
    tags: ["Unity3D", "Visual Studio", "Moba", "3D Game"],
    image: "/projects/InABadEggxistence.png",
    gallery: ["/ProjectsGalery/BadEggxistence-1.png", "/ProjectsGalery/BadEggxistence-2.png", "/ProjectsGalery/BadEggxistence-3.png"],
    liveUrl: "https://axlfontes.itch.io/in-a-bad-eggxistence",
    repositoryUrl: "https://github.com/TCP3LOL/TCP3",
    featured: true,
    role: "Programação",
    contributions: [
      "Multiplayer online com Photon",
      "Spawn dos jogadores na partida",
      "Desenvolvimento dos Cooldowns das habilidades",
      "Desenvolvimento de um personagem e suas habilidades",
      "Implementação de assets e animações 3D ",
      "Condições de vitória e derrota",
      "Sistema de persistência de dados em JSON",
    ],
  },

];