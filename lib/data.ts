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
  email: "seuemail@exemplo.com",
  location: "Brasil",
  github: "https://github.com/MateusCPS",
  linkedin: "https://www.linkedin.com/in/mateus-costa-66715414a/",
  availability: "Disponível para novos projetos e oportunidades",
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Projetos", href: "#projetos" },
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
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Desenvolvimento de Jogos",
    icon: Gamepad2,
    skills: ["Unity 3d", "Game design", "Unreal 5"],
  },
  {
    title: "Aplicativos mobile",
    icon: Sparkles,
    skills: ["UX/UI", "Android Studio", "Kotlin", "Java"],
  },
  {
    title: "Qualidade e entrega",
    icon: Rocket,
    skills: ["Git", "GitHub", "Prototipação", "Figma", "Notion", "Metodologias Ágeis (Scrum)"],
  },
];

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

export const journey = [
  {
    number: "01",
    title: "Da curiosidade à construção",
    description:
      "Minha trajetória começou pela vontade de entender como sites, sistemas e jogos funcionavam. A prática transformou essa curiosidade em capacidade de construir experiências próprias para a web.",
  },
  {
    number: "02",
    title: "Aprendizado através de projetos",
    description:
      "Passei a desenvolver projetos reais para aprender: interfaces, páginas responsivas, aplicações interativas e experiências que exigem decisões de lógica, design e usabilidade.",
  },
  {
    number: "03",
    title: "Jogos como produto digital",
    description:
      "No desenvolvimento de jogos educativos, comecei a unir mecânicas, progressão, perguntas, níveis de dificuldade, pixel art e adaptação para dispositivos móveis.",
  },
  {
    number: "04",
    title: "Foco em UX e qualidade",
    description:
      "Além de fazer funcionar, passei a observar como as pessoas navegam, onde a interface pode falhar e como responsividade, feedback e organização melhoram o produto final.",
  },
  {
    number: "05",
    title: "Próximo nível",
    description:
      "Hoje direciono minha evolução para jogos, aplicativos e aplicações web modernas, buscando criar produtos com identidade, código limpo e experiências memoráveis.",
  },
];

export type Project = {
  title: string;
  description: string;
  category: "Jogo" | "Aplicativo" | "Aplicação web";
  tags: string[];
  image?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
};

// Adicione seus projetos aqui. Consulte o README para ver exemplos.
export const projects: Project[] = [];
