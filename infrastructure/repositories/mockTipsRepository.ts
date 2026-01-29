import type { Tip } from "@/domain/models/tip";

export const mockTips: Tip[] = [
  {
    id: "tip-beginner-grip",
    title: "Empuñadura básica para empezar sólido",
    shortDescription: "Asegura una empuñadura cómoda y neutra para evitar lesiones.",
    content:
      "Usa una empuñadura continental ligeramente cerrada. Mantén la muñeca firme pero relajada y evita agarrar la pala demasiado fuerte para reducir la tensión en el codo.",
    category: "tecnico",
    level: "beginner",
    tags: ["empunadura", "basico"],
  },
  {
    id: "tip-intermediate-wall",
    title: "Aprende a usar la pared a tu favor",
    shortDescription:
      "Lee el rebote y coloca tu cuerpo antes de que llegue la bola.",
    content:
      "Anticípate al rebote observando la altura y velocidad de la bola. Coloca los pies antes del bote en la pared y ejecuta el golpe con swing corto, dejando que la bola trabaje por ti.",
    category: "estrategia",
    level: "intermediate",
    tags: ["pared", "posicion"],
  },
  {
    id: "tip-advanced-net",
    title: "Cierra la red con voleas profundas",
    shortDescription:
      "Gana la red y mantén a tus rivales defendiendo desde el fondo.",
    content:
      "Cuando estés en la red, busca voleas profundas al centro para forzar errores y evitar ángulos. Cambia alturas y velocidades, pero mantén siempre la posición compacta y lista para la siguiente bola.",
    category: "tecnico",
    level: "advanced",
    tags: ["voleas", "ofensivo"],
  },
  {
    id: "tip-injury-warmup",
    title: "Calentamiento express de 5 minutos",
    shortDescription:
      "Reduce el riesgo de lesión con una rutina rápida antes de jugar.",
    content:
      "Haz movilidad de hombros, cadera y tobillos, seguida de 2-3 sprints suaves y cambios de dirección. Termina con 10-15 golpes suaves de derecha y revés para activar la memoria motora.",
    category: "lesiones",
    level: "beginner",
    tags: ["calentamiento", "lesiones"],
  },
  {
    id: "tip-beginner-position",
    title: "Colócate siempre en el centro",
    shortDescription:
      "Jugar pegado a la pared lateral te deja muchos espacios descubiertos.",
    content:
      "Tras cada golpe vuelve a una posición cercana al centro de tu lado de pista. Así cubres mejor globos y bolas cruzadas y ayudas a tu compañero a no tener que correr tanto.",
    category: "estrategia",
    level: "beginner",
    tags: ["posicion", "basico"],
  },
  {
    id: "tip-beginner-lob",
    title: "Globo alto cuando estés apurado",
    shortDescription:
      "Si llegas forzado, un globo alto suele ser mejor que un golpe fuerte.",
    content:
      "Cuando recibas una bola profunda y vayas tarde, en vez de intentar un golpe ganador, lanza un globo alto y profundo al centro. Te dará tiempo para recolocarte y quitar presión.",
    category: "estrategia",
    level: "beginner",
    tags: ["globo", "defensa"],
  },
  {
    id: "tip-beginner-footwork",
    title: "Pequeños pasos en lugar de zancadas",
    shortDescription:
      "Muévete con pasos cortos para ajustar mejor el golpe y evitar torceduras.",
    content:
      "Evita grandes zancadas que te dejen desequilibrado. Usa pasos cortos y rápidos, manteniendo el peso sobre la punta de los pies para reaccionar mejor y cuidar tobillos y rodillas.",
    category: "lesiones",
    level: "beginner",
    tags: ["pies", "movimiento"],
  },
  // INTERMEDIATE
  {
    id: "tip-intermediate-serve",
    title: "Saca abierto para ganar la red",
    shortDescription:
      "Coloca el saque hacia el cristal lateral para abrir huecos en la pista.",
    content:
      "En vez de sacar siempre al cuerpo, alterna saques abiertos hacia el cristal lateral. Obligas al resto a desplazarse y dejas espacio libre para que tú y tu pareja entréis a la red con ventaja.",
    category: "estrategia",
    level: "intermediate",
    tags: ["saque", "red"],
  },
  {
    id: "tip-intermediate-transition",
    title: "Transición a la red sin regalar globos",
    shortDescription:
      "No corras a la red después de un globo corto o fácil de atacar.",
    content:
      "Avanza a la red solo cuando tu golpe obligue a los rivales a defender. Si tu globo se queda corto, mantente en el fondo preparado para defender y espera una mejor oportunidad para subir.",
    category: "estrategia",
    level: "intermediate",
    tags: ["transicion", "tactica"],
  },
  {
    id: "tip-intermediate-injury",
    title: "Cuida tu codo con pauses y cambios de pala",
    shortDescription:
      "El sobreuso y las palas duras son las principales causas de epicondilitis.",
    content:
      "Si notas molestias en el codo, reduce el número de partidos por semana y evita palas muy rígidas o pesadas en la cabeza. Trabaja fuerza de antebrazo y usa overgrips para mejorar el agarre.",
    category: "lesiones",
    level: "intermediate",
    tags: ["codo", "epicondilitis"],
  },
  // ADVANCED
  {
    id: "tip-advanced-smash-selection",
    title: "Elige bien cuándo romper la bola",
    shortDescription:
      "No todos los globos son para rematar: prioriza la precisión sobre la fuerza.",
    content:
      "Remata solo cuando el globo venga corto y por debajo de la altura de tu hombro al golpear. Si el globo es profundo o te obliga a ir hacia atrás, opta por un bandeja trabajada o un globo de respuesta.",
    category: "tecnico",
    level: "advanced",
    tags: ["smash", "decision"],
  },
  {
    id: "tip-advanced-defence-wall",
    title: "Defiende globos con salida de pared controlada",
    shortDescription:
      "Baja el centro de gravedad y prepara la pala desde atrás para controlar la salida.",
    content:
      "En defensa de globos que botan cerca de la pared, flexiona rodillas, adelanta el pie de apoyo y prepara la pala detrás de la bola. Golpea acompañando, sin pegar fuerte, para mantener profundidad.",
    category: "tecnico",
    level: "advanced",
    tags: ["pared", "defensa"],
  },
  {
    id: "tip-advanced-communication",
    title: "Comunícate en cada punto con tu pareja",
    shortDescription:
      "Un nivel avanzado se nota en cómo se habla y se decide cada jugada.",
    content:
      "Marca antes del saque quién cubre el centro, quién toma más riesgo y qué patrón de juego vais a seguir. Durante el punto utiliza palabras cortas: 'mía', 'tuya', 'sube', 'globo', para evitar dudas.",
    category: "estrategia",
    level: "advanced",
    tags: ["pareja", "comunicacion"],
  },
];

export function getTipsByLevel(levelId: string | null): Tip[] {
  if (!levelId) return [];
  return mockTips.filter((tip) => tip.level === levelId);
}

export function getTipById(id: string): Tip | undefined {
  return mockTips.find((tip) => tip.id === id);
}
