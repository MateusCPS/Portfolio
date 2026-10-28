import {
  Accessibility,
  Braces,
  Code2,
  Gamepad2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

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
  { label: "Especialidades", href: "#especialidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export const specialties = [
  {
    title: "Desenvolvimento de jogos",
    description:
      "Criação de jogos para navegador com mecânicas objetivas, progressão por níveis, feedback imediato e experiências que unem aprendizado e diversão.",
    icon: Gamepad2,
  },
  {
    title: "Aplicações web",
    description:
      "Desenvolvimento de aplicações modernas, responsivas e interativas, pensadas para funcionar bem em diferentes dispositivos e contextos de uso.",
    icon: Braces,
  },
  {
    title: "Aplicativos e produtos digitais",
    description:
      "Transformação de ideias em produtos funcionais, organizando fluxos, telas, estados e interações de maneira clara e consistente.",
    icon: Smartphone,
  },
  {
    title: "UX e interfaces",
    description:
      "Atenção à hierarquia visual, legibilidade, navegação, acessibilidade e microinterações para tornar cada experiência simples e agradável.",
    icon: Palette,
  },
  {
    title: "Responsividade",
    description:
      "Interfaces adaptadas a celulares, tablets e computadores, evitando cortes de conteúdo e mantendo a experiência coerente em qualquer tela.",
    icon: MonitorSmartphone,
  },
  {
    title: "Código limpo e arquitetura",
    description:
      "Organização em componentes reutilizáveis, separação de responsabilidades e estruturas fáceis de compreender, manter e evoluir.",
    icon: Workflow,
  },
];

export const skillGroups = [
  {
    title: "Desenvolvimento web",
    description: "Desenvolvimento de aplicações web modernas e responsivas, com foco em interfaces intuitivas, componentes reutilizáveis e organização de código.",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Desenvolvimento de Jogos",
    description: "Criação de experiências interativas que combinam programação, mecânicas de jogo e narrativa, buscando dar significado às ações do jogador e tornar cada experiência memorável.",
    icon: Gamepad2,
    skills: ["Unity 3d", "Game Design"],
  },
  {
    title: "Aplicativos mobile",
    description: "Desenvolvimento de aplicações mobile com atenção à experiência do usuário, à organização das interfaces e à criação de soluções funcionais para dispositivos Android.",
    icon: Sparkles,
    skills: ["UX/UI", "Android Studio", "Kotlin", "Java"],
  },
  {
    title: "Qualidade e entrega",
    description: "Organização e acompanhamento de projetos por meio de controle de versão, prototipação e ferramentas de colaboração, contribuindo para um desenvolvimento mais estruturado e consistente.",
    icon: Rocket,
    skills: ["Git", "GitHub", "Prototipação", "Figma", "Notion", "Metodologias Ágeis (Scrum)"],
  },
];

// Explicação curta exibida ao passar o mouse (ou tocar) em cada competência.
// A chave precisa ser exatamente igual ao nome usado em skillGroups.
export const skillInfo: Record<string, string> = {
  "Next.js": "Framework baseado em React para criar sites e aplicações web rápidas, com rotas, renderização no servidor e otimização automática.",
  React: "Biblioteca JavaScript para construir interfaces a partir de componentes reutilizáveis.",
  TypeScript: "JavaScript com tipagem estática, que ajuda a encontrar erros antes de o código rodar e deixa projetos maiores mais seguros.",
  JavaScript: "A linguagem de programação da web, responsável pela interatividade das páginas.",
  HTML5: "Linguagem de marcação que define a estrutura e o conteúdo de uma página web.",
  CSS3: "Linguagem de estilos que controla cores, layout, responsividade e animações das páginas.",
  "Unity 3d": "Motor de jogos usado para criar jogos 2D, 3D e VR, programados em C#, para PC, web e dispositivos móveis.",
  "Game Design": "Planejamento das regras, mecânicas, progressão e experiência de um jogo, definindo o que torna ele divertido e significativo.",
  "UX/UI": "UX é a experiência de uso (o quanto algo é fácil e agradável de usar); UI é a interface visual com que o usuário interage.",
  "Android Studio": "Ambiente oficial do Google para desenvolver, testar e publicar aplicativos Android.",
  Kotlin: "Linguagem moderna recomendada pelo Google para o desenvolvimento de aplicativos Android.",
  Java: "Linguagem orientada a objetos muito usada em sistemas corporativos, back-end e aplicativos Android.",
  Git: "Sistema de controle de versão que registra o histórico de alterações do código e permite trabalhar em equipe sem conflitos.",
  GitHub: "Plataforma para hospedar repositórios Git, revisar código e colaborar em projetos.",
  "Prototipação": "Criação de versões simplificadas de telas ou jogos para testar ideias antes do desenvolvimento completo.",
  Figma: "Ferramenta de design colaborativo para criar layouts, protótipos e interfaces.",
  Notion: "Ferramenta de organização para documentação, planejamento e gestão de tarefas do projeto.",
  "Metodologias Ágeis (Scrum)": "Forma de organizar o trabalho em ciclos curtos (sprints), com reuniões diárias, planejamento e retrospectivas para entregar valor continuamente.",
};

export const principles = [
  {
    title: "Experiência antes do excesso",
    description:
      "Interações e animações devem ajudar o usuário a entender o produto, e não apenas decorar a tela.",
    icon: Accessibility,
  },
  {
    title: "Criatividade com propósito",
    description:
      "Elementos de jogos, identidade visual e recursos interativos precisam reforçar a proposta da experiência.",
    icon: Sparkles,
  },
  {
    title: "Estrutura preparada para crescer",
    description:
      "O projeto deve continuar organizado quando novas páginas, funcionalidades e conteúdos forem adicionados.",
    icon: Layers3,
  },
];

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