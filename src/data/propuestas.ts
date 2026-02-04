export interface Proposal {
  title?: string;
  description: string;
}

export interface ProposalTema {
  id: string;
  title: string;
  proposals: Proposal[];
}

export const propuestasPorTema: ProposalTema[] = [
  {
    id: "campo",
    title: "POR EL CAMPO TODO",
    proposals: [
      {
        description: "Eliminar el IVA para insumos agrícolas de primera necesidad.",
      },
      {
        description: "Crear una línea de créditos agropecuarios al 0%, subsidiados con recursos del presupuesto nacional.",
      },
      {
        description: "Aumentar al 100% la cobertura de créditos del Fondo Agropecuario de Garantías.",
      },
      {
        description: "Proteger financieramente al productor de las pérdidas de cosechas ante calamidades o caída de precios.",
      },
      {
        description: "Crear la pensión rural digna, con pleno reconocimiento de las condiciones del trabajo campesino.",
      },
      {
        description: "Incentivar que las nuevas generaciones permanezcan en sus territorios, con acceso a becas educativas y técnicas.",
      },
      {
        description: "Facilitar el acceso a parcelas o créditos para crear sus propias unidades productivas.",
      },
      {
        description: "Presentar un proyecto para que los saberes campesinos sean homologados como conocimientos técnicos laborales.",
      },
      {
        description: "Priorizar las adquisiciones estatales directamente a campesinos, productores locales y cooperativas de Cundinamarca.",
      },
    ],
  },
  {
    id: "salud",
    title: "POR LA SALUD TODO",
    proposals: [
      {
        description: "Proponer que el Programa Médico en tu Territorio se convierta en Ley Nacional, garantizando atención médica 24/7 en municipios de geografía dispersa.",
      },
      {
        description: "Crear una ley de incentivos para profesionales de la salud, promoviendo su permanencia en zonas rurales y apartadas.",
      },
      {
        description: "Crear una Ley pro discapacidad y cuidadores, que garantice una asignación presupuestal específica para programas de atención especial a personas con discapacidad y apoyo a sus cuidadores.",
      }
    ],
  },
  {
    id: "educacion",
    title: "EDUCACIÓN, DEPORTE Y CULTURA, TODO CON ENFOQUE TERRITORIAL",
    proposals: [
      {
        description: "Replicar el modelo funzano de Ciudad Universitaria en cada provincia del Departamento; es decir, construir escenarios para la educación en el que se puedan ofertar distintas carreras adaptadas a la vocación del territorio. ",
      },
      {
        description: "Crear la Ley de apoyo al deportista regional, con destinación de recursos del presupuesto nacional para estímulos eficientes, continuos e implementar un régimen especial tipo beca o salario.",
      },
      {
        description: "Establecer un marco de formalización laboral y una ley de apoyo a la cultura regional con recursos específicos para artistas locales, que incluya su protección en la vejez.",
      },
      {
        title: "Presentar un proyecto de Ley de compras públicas en cultura,",
        description: "para que el Estado priorice, de manera transparente, a los artistas, productores, asociaciones y cooperativas culturales locales en la contratación de bienes y servicios culturales.",
      },
    ],
  },
  {
    id: "seguridad",
    title: "POR LA SEGURIDAD TODO",
    proposals: [
      {
        description: "Reformar la Ley de Convivencia y Seguridad Ciudadana para que la reincidencia vuelva a ser un factor de aumento de pena.",
      },
      {
        description: "Eliminar los beneficios jurídicos para delitos delincuentes reincidentes.",
      },
      {
        description: "Asignar más recursos del presupuesto nacional para la seguridad y el aumento del pie de fuerza en nuestro departamento.  ",
      },
    ],
  },
  {
    id: "autonomia",
    title: "AUTONOMÍA Y BUEN GOBIERNO",
    proposals: [
      {
        description: "Impulsar una descentralización fiscal para que impuestos generados en el territorio permanezcan en las arcas locales.",
      },
    ],
  },
  {
    id: "movilidad",
    title: "POR UNA MOVILIDAD EFICIENTE TODO",
    proposals: [
      {
        title: "Incluir en el Plan Nacional de Desarrollo el Fondo Nacional de Vías Terciarias:",
        description: "Propondremos la creación de un sistema de financiación exclusivo para vías terciarias (caminos rurales) en los municipios.",
      },
      {
        description: "Lograr que municipios que sean sede de actividades de alto impacto accedan a compensaciones económicas para que proyectos de gran impacto ambiental, social o territorial generen recursos directos en beneficio de las comunidades, como ya se logró en Funza y en El Guavio.  ",
      },
      {
        description: "Defender y cuidar nuestra vía perimetral para que nunca se ponga peaje. ",
      },
      {
        description: "Gestionar la prolongación de la calle 63 de Bogotá a Funza para enlazarla con la vía perimetral y mejorar la movilidad de la región.",
      },
    ],
  }
];
