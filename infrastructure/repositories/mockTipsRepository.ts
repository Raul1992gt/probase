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
  {
    id: "tip-beginner-serve-consistency",
    title: "Prioriza sacar dentro antes que fuerte",
    shortDescription:
      "Un saque seguro que entra siempre vale más que uno rápido pero fallón.",
    content:
      "Como principiante, céntrate en que el saque bote primero en tu cuadro y luego pase la red sin tocarla. Usa un gesto corto, lanza la bola baja y busca profundidad media al cuerpo del rival.",
    category: "tecnico",
    level: "beginner",
    tags: ["saque", "consistencia"],
  },
  {
    id: "tip-beginner-contact-point",
    title: "Golpea siempre delante del cuerpo",
    shortDescription:
      "Si golpeas demasiado atrás pierdes control y potencia.",
    content:
      "Para derecha y revés, intenta que el punto de impacto esté ligeramente por delante del pie delantero. Prepara la pala pronto y da un paso hacia la bola para evitar golpear pegado al cuerpo o por detrás.",
    category: "tecnico",
    level: "beginner",
    tags: ["impacto", "control"],
  },
  {
    id: "tip-beginner-between-points",
    title: "Respira y recolócate entre puntos",
    shortDescription:
      "Un par de segundos de pausa te ayudan a jugar con más calma.",
    content:
      "Entre puntos, camina hacia el fondo, respira profundo 2-3 veces y piensa solo en la siguiente bola. Evita que los fallos anteriores se acumulen en tu cabeza y acuerda una idea simple con tu pareja para el siguiente punto.",
    category: "estrategia",
    level: "beginner",
    tags: ["mental", "rutina"],
  },
  {
    id: "tip-beginner-hydration",
    title: "Hidratación básica para evitar calambres",
    shortDescription:
      "Beber solo cuando tienes sed suele ser tarde para tu rendimiento.",
    content:
      "Llega a la pista ya hidratado y bebe pequeños sorbos cada cambio de lado, aunque no tengas mucha sed. Si los partidos son largos o hace calor, añade sales minerales para reducir la aparición de calambres.",
    category: "lesiones",
    level: "beginner",
    tags: ["hidratacion", "prevencion"],
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
  {
    id: "tip-intermediate-bandeja-depth",
    title: "Trabaja bandejas profundas al centro",
    shortDescription:
      "Una bandeja profunda y pesada vale más que un smash arriesgado.",
    content:
      "En bolas altas que no son claras de remate, usa la bandeja buscando profundidad al centro de la pista rival. Mantén los pies detrás de la bola, golpea por encima de la cabeza y prioriza colocación sobre potencia.",
    category: "tecnico",
    level: "intermediate",
    tags: ["bandeja", "profundidad"],
  },
  {
    id: "tip-intermediate-cross-play",
    title: "Juega cruzado para tener más margen",
    shortDescription:
      "El paralelo es más agresivo, pero también más arriesgado.",
    content:
      "En peloteos neutrales, prioriza golpes cruzados: la red es más baja, tienes más pista y usas la pared del rival. Reserva los paralelos para cambiar el ritmo cuando tengas a los oponentes en problemas.",
    category: "estrategia",
    level: "intermediate",
    tags: ["cruzado", "tactica"],
  },
  {
    id: "tip-intermediate-net-position",
    title: "Ni pegado a la red ni sobre la línea de saque",
    shortDescription:
      "Busca una posición intermedia cómoda para volear y reaccionar.",
    content:
      "Cuando ganes la red, quédate aproximadamente a un paso y medio de la línea de saque. Ahí podrás volear cómodo y seguir bolas profundas sin que te ganen fácilmente por arriba o con globos cortos.",
    category: "estrategia",
    level: "intermediate",
    tags: ["posicion", "red"],
  },
  {
    id: "tip-intermediate-recovery",
    title: "Cuida la recuperación entre partidos",
    shortDescription:
      "La carga sin descanso aumenta el riesgo de lesión y bajón de nivel.",
    content:
      "Si juegas 3 o más veces por semana, incluye al menos un día suave o de descanso total. Estira cadenas posteriores, trabaja core y glúteos y respeta el sueño para llegar fresco a los partidos importantes.",
    category: "lesiones",
    level: "intermediate",
    tags: ["recuperacion", "carga"],
  },
  {
    id: "tip-intermediate-wall-exit",
    title: "Salida de pared segura con swing corto",
    shortDescription:
      "No intentes ganarlo todo desde la pared, prioriza control y altura.",
    content:
      "En salidas de pared, espera a que la bola se separe del cristal y golpea con un swing corto y vertical, buscando altura y profundidad más que velocidad. Mantén la pala preparada baja y flexiona piernas para absorber el bote.",
    category: "tecnico",
    level: "intermediate",
    tags: ["pared", "salida"],
  },
  {
    id: "tip-intermediate-rival-hard-hitter",
    title: "Cómo jugar contra rivales que pegan muy fuerte",
    shortDescription:
      "Usa su velocidad en tu favor y evita entrar en una guerra de potencia.",
    content:
      "Contra rivales pegadores, cierra el centro de la pista y devuelve bolas profundas y altas que les obliguen a golpear desde abajo. No intentes acelerar más que ellos: céntrate en globos largos y en obligarles a golpear una bola más.",
    category: "estrategia",
    level: "intermediate",
    tags: ["rival", "pegador"],
  },
  {
    id: "tip-intermediate-back-pain",
    title: "Cuida tu espalda con buena técnica de flexión",
    shortDescription:
      "Flexiona cadera y rodillas, no solo la zona lumbar.",
    content:
      "En bolas bajas, piensa en 'sentarte' flexionando caderas y rodillas, manteniendo la espalda relativamente recta. Evita inclinarte doblando solo la zona lumbar y añade trabajo de core y glúteos fuera de pista para proteger la espalda.",
    category: "lesiones",
    level: "intermediate",
    tags: ["espalda", "prevencion"],
  },
  {
    id: "tip-intermediate-basic-smash",
    title: "Remate seguro dirigido al centro",
    shortDescription:
      "No busques la verja o la reja hasta dominar un remate estable al centro.",
    content:
      "Cuando tengas una bola clara de remate, prioriza dirigirla fuerte al centro de la pista rival en lugar de buscar ángulos extremos. Así reduces errores no forzados y mantienes la iniciativa en el punto.",
    category: "tecnico",
    level: "intermediate",
    tags: ["smash", "seguridad"],
  },
  {
    id: "tip-intermediate-drop-shot",
    title: "Usa la chiquita para sacar de zona de confort",
    shortDescription:
      "Una chiquita bien ejecutada rompe el ritmo de rivales muy defensivos.",
    content:
      "Desde el fondo, cuando los rivales estén muy pegados a la línea de saque, prueba una chiquita baja hacia sus pies. Obligarás a volear desde muy abajo y podrás ganar la red con ventaja.",
    category: "estrategia",
    level: "intermediate",
    tags: ["chiquita", "tactica"],
  },
  {
    id: "tip-intermediate-3rd-ball",
    title: "Planifica siempre la tercera bola tras tu saque",
    shortDescription:
      "El punto no acaba en el saque: piensa qué quieres hacer con la tercera bola.",
    content:
      "Después de sacar y subir a la red, ten claro si vas a bloquear cruzado, volear al centro o buscar la esquina libre con la tercera bola. Esta intención previa te dará más claridad y menos dudas al ejecutar.",
    category: "estrategia",
    level: "intermediate",
    tags: ["saque", "tercerabola"],
  },
  {
    id: "tip-intermediate-reset-point",
    title: "Reinicia el punto con globos altos cuando te desborden",
    shortDescription:
      "Si estás corriendo de lado a lado, es momento de frenar el ritmo.",
    content:
      "Cuando los rivales te muevan mucho desde la red, utiliza uno o dos globos muy altos y profundos para forzarles a retroceder. Así pasarás de una situación defensiva a un intercambio más neutral.",
    category: "estrategia",
    level: "intermediate",
    tags: ["globo", "reset"],
  },
  {
    id: "tip-intermediate-anticipation",
    title: "Lee la postura del rival para anticipar golpes",
    shortDescription:
      "La dirección del cuerpo y la pala te dan pistas antes de que salga la bola.",
    content:
      "Observa el hombro y la cara de la pala del rival justo antes del impacto. Si abre el cuerpo, es más probable que juegue cruzado; si se cierra, paralelo. Esta lectura te permitirá dar un paso de ventaja en cada punto.",
    category: "mental",
    level: "intermediate",
    tags: ["anticipacion", "lectura"],
  },
  {
    id: "tip-intermediate-pair-roles",
    title: "Define roles claros con tu pareja",
    shortDescription:
      "Saber quién asume más riesgo evita muchos choques y dudas.",
    content:
      "Antes de jugar, acordad si alguno de los dos va a ser más agresivo y quién cubrirá más el centro. Con roles claros, las decisiones en puntos dudosos serán más rápidas y coherentes.",
    category: "mental",
    level: "intermediate",
    tags: ["pareja", "roles"],
  },
  {
    id: "tip-intermediate-offense-from-wall",
    title: "Ataca bolas cómodas también desde la pared",
    shortDescription:
      "No todo lo que sale de la pared es defensa: algunas bolas piden ataque.",
    content:
      "Si una bola que viene a la pared de fondo pierde mucha velocidad y te queda a media pista, entra hacia adelante y juega un golpe agresivo al centro o a los pies del rival. Convertirás situaciones neutras en ofensivas.",
    category: "tecnico",
    level: "intermediate",
    tags: ["pared", "ataque"],
  },
  {
    id: "tip-intermediate-net-switch",
    title: "Cruza con tu pareja cuando os superan por globo",
    shortDescription:
      "Un cruce rápido evita dejar un pasillo enorme descubierto.",
    content:
      "Si un globo supera claramente a uno de los dos, comunica el cruce ('mía' o 'tuya') y cambia de lado con pasos rápidos y decididos. Así mantendréis la pista cubierta sin dejar huecos exagerados.",
    category: "estrategia",
    level: "intermediate",
    tags: ["cruce", "coordinacion"],
  },
  {
    id: "tip-intermediate-load-legs",
    title: "Carga piernas antes de volear",
    shortDescription:
      "La potencia y control empiezan desde el suelo, no solo en el brazo.",
    content:
      "Antes de cada volea, flexiona ligeramente rodillas y activa el core. Golpea acompañando con el cuerpo hacia delante en lugar de usar solo el brazo; ganarás estabilidad y precisión.",
    category: "tecnico",
    level: "intermediate",
    tags: ["piernas", "volea"],
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
  {
    id: "tip-advanced-serve-patterns",
    title: "Crea patrones de saque predefinidos",
    shortDescription:
      "No saques al azar: combina direcciones y jugadas trabajadas.",
    content:
      "Diseña 2-3 patrones de saque: por ejemplo, saque abierto + volea al centro, saque al cuerpo + subida agresiva, y saque al cristal + globo preparado. Repite estos patrones hasta que tú y tu pareja los ejecutéis casi en automático.",
    category: "estrategia",
    level: "advanced",
    tags: ["saque", "patrones"],
  },
  {
    id: "tip-advanced-pace-variation",
    title: "Varía el ritmo más que la fuerza",
    shortDescription:
      "Los cambios de ritmo rompen el timing del rival sin asumir tanto riesgo.",
    content:
      "Alterna bolas más pesadas y profundas con golpes más suaves y cortos, especialmente desde la red. Esta variación obliga a tus rivales a ajustar continuamente su posición y timing, generando errores no forzados.",
    category: "tecnico",
    level: "advanced",
    tags: ["ritmo", "ofensivo"],
  },
  {
    id: "tip-advanced-defense-to-offense",
    title: "Convierte la defensa en ataque con globos inteligentes",
    shortDescription:
      "Un buen globo en el momento justo te devuelve la iniciativa.",
    content:
      "Cuando estés sometido en el fondo, busca globos muy altos al revés del rival menos ofensivo. Si lo obligas a retroceder o a golpear incómodo, tú y tu pareja podréis adelantaros y tomar la red.",
    category: "estrategia",
    level: "advanced",
    tags: ["defensa", "globo"],
  },
  {
    id: "tip-advanced-prehab",
    title: "Incluye trabajo de prehabilitación semanal",
    shortDescription:
      "A nivel avanzado, prevenir lesiones es clave para mantener el volumen de juego.",
    content:
      "Dedica 2 sesiones cortas a la semana a fortalecer manguito rotador, escápulas y core. Ejercicios con bandas elásticas, planchas y trabajo unilateral de piernas reducen mucho el riesgo de lesiones en hombro y rodilla.",
    category: "lesiones",
    level: "advanced",
    tags: ["prehab", "prevencion"],
  },
  {
    id: "tip-advanced-vibora",
    title: "Víbora tensa al cuerpo del rival",
    shortDescription:
      "Usa la víbora para presionar sin regalar globos fáciles.",
    content:
      "En bolas altas laterales, ejecuta la víbora con un gesto lateral y efecto cortado, buscando el cuerpo o el centro entre rivales. Prioriza una trayectoria tensa y que bote cerca de la línea de fondo para que devuelvan defensivos.",
    category: "tecnico",
    level: "advanced",
    tags: ["vibora", "ofensivo"],
  },
  {
    id: "tip-advanced-rival-lobber",
    title: "Estrategia contra rivales globeros",
    shortDescription:
      "No entres en su juego de globos eternos: adelanta la posición y ataca la bola corta.",
    content:
      "Si tus rivales tiran globos constantemente, ajusta tu posición unos pasos por detrás de la línea de saque para poder golpear de arriba hacia abajo sin ir siempre hacia atrás. Ataca los globos cortos con bandeja profunda o remate a la verja.",
    category: "estrategia",
    level: "advanced",
    tags: ["rival", "globeros"],
  },
  {
    id: "tip-advanced-knee-care",
    title: "Protege tus rodillas gestionando frenadas y cambios de ritmo",
    shortDescription:
      "El problema no es solo cuánto juegas, sino cómo frenas y arrancas.",
    content:
      "Evita frenar en seco sobre la punta del pie. Intenta frenar con pasos más cortos y progresivos y trabaja fuerza de cuádriceps, isquios y glúteos en el gimnasio. Si notas molestias, reduce partidos sobre moqueta rápida y usa buen calzado específico.",
    category: "lesiones",
    level: "advanced",
    tags: ["rodilla", "prevencion"],
  },
  {
    id: "tip-advanced-mental-routines",
    title: "Rutinas mentales para puntos clave",
    shortDescription:
      "Los puntos importantes se juegan con la cabeza, no solo con la pala.",
    content:
      "Define una mini-rutina para bolas de break o tie-break: respiración profunda, frase clave positiva y elección de un patrón de jugada que domines. Evita cambiar radicalmente tu juego solo porque el punto sea importante.",
    category: "mental",
    level: "advanced",
    tags: ["mental", "rutinas"],
  },
  {
    id: "tip-advanced-net-closing",
    title: "Cierra puntos en la red con cambios de dirección",
    shortDescription:
      "Alterna golpes cruzados y paralelos para descolocar a la pareja rival.",
    content:
      "Cuando tengas a los rivales en apuros desde el fondo, combina voleas profundas cruzadas con alguna volea paralela sorpresa al pasillo. Este cambio de dirección genera huecos y acelera el cierre del punto.",
    category: "estrategia",
    level: "advanced",
    tags: ["red", "direcciones"],
  },
  {
    id: "tip-advanced-smash-wall",
    title: "Usa el remate por tres o por cuatro solo cuando toque",
    shortDescription:
      "Elige bien la altura y la posición antes de buscar sacarla de la pista.",
    content:
      "Para remates por tres o por cuatro, asegúrate de estar bien colocado debajo de la bola y que su altura te permita golpear claramente hacia abajo. Si dudas, opta por un remate fuerte al cristal de fondo para mantener la iniciativa.",
    category: "tecnico",
    level: "advanced",
    tags: ["smash", "por3"],
  },
  {
    id: "tip-advanced-fake-movements",
    title: "Finta con tu cuerpo para provocar errores",
    shortDescription:
      "Un pequeño amago de movimiento puede condicionar la decisión del rival.",
    content:
      "En la red, amaga un paso hacia un lado y vuelve rápido a la posición neutral para invitar al rival a jugar al lado contrario. Si lees bien su reacción, interceptarás muchas bolas en el centro.",
    category: "mental",
    level: "advanced",
    tags: ["fintas", "lectura"],
  },
  {
    id: "tip-advanced-defense-bajada",
    title: "Bajada de pared agresiva a los pies",
    shortDescription:
      "Convierte globos intermedios en oportunidad de ataque con la bajada.",
    content:
      "Cuando recibas un globo que te permita golpear cómodo tras la pared, entra hacia la bola y juega una bajada fuerte y tensa dirigida a los pies del voleador. Así pasarás de una situación aparentemente defensiva a un ataque claro.",
    category: "tecnico",
    level: "advanced",
    tags: ["bajada", "pared"],
  },
  {
    id: "tip-advanced-tempo-control",
    title: "Controla el tempo del partido con tus rutinas",
    shortDescription:
      "Acelera o frena el juego dentro de las normas para sentirte más cómodo.",
    content:
      "Si necesitas calma, tómate unos segundos extra entre puntos para respirar y preparar la siguiente jugada. Si ves al rival cansado o frustrado, agiliza el ritmo (sin perder el respeto) para aumentar su presión mental.",
    category: "mental",
    level: "advanced",
    tags: ["tempo", "partido"],
  },
  {
    id: "tip-advanced-unforced-errors",
    title: "Reduce errores no forzados en momentos clave",
    shortDescription:
      "En puntos importantes, juega tu patrón más fiable, no el más espectacular.",
    content:
      "En bolas de break o tie-break, elige golpes y direcciones que domines: cruzado alto, globo profundo o volea al centro. Evita inventar golpes nuevos solo porque el punto sea decisivo.",
    category: "mental",
    level: "advanced",
    tags: ["errores", "clave"],
  },
  {
    id: "tip-advanced-serve-variation",
    title: "Varía efectos y alturas en el saque",
    shortDescription:
      "A nivel avanzado, pequeños cambios de efecto marcan grandes diferencias.",
    content:
      "Introduce saques liftados más altos y saques con efecto cortado que boten bajos cerca del cristal. Alternar estos efectos hará más difícil que el restador se acomode a un solo tipo de bote.",
    category: "tecnico",
    level: "advanced",
    tags: ["saque", "efecto"],
  },
  {
    id: "tip-advanced-transition-defense",
    title: "Transición defensa-ataque sin precipitarte",
    shortDescription:
      "No intentes ganar el punto en el primer golpe cómodo tras defender.",
    content:
      "Después de varias defensas buenas, utiliza una bola profunda y pesada para ganar tiempo y subir a la red con control. Solo cuando estés bien colocado y con ventaja busca el golpe definitivo.",
    category: "estrategia",
    level: "advanced",
    tags: ["transicion", "ataque"],
  },
  {
    id: "tip-intermediate-mental-errors",
    title: "Gestiona mejor los errores seguidos",
    shortDescription:
      "Dos fallos seguidos no significan que estés jugando mal todo el partido.",
    content:
      "Cuando encadenes varios errores, utiliza un pequeño ritual: mira tu pala o una zona neutra de la pista, respira hondo y decide una sola prioridad para el siguiente punto (por ejemplo, 'jugar alto' o 'buscar cruzado'). Así evitas entrar en bucles de enfado.",
    category: "mental",
    level: "intermediate",
    tags: ["errores", "mental"],
  },
  {
    id: "tip-beginner-ankle-prevention",
    title: "Evita esguinces de tobillo con buena base de apoyo",
    shortDescription:
      "Jugar con los pies juntos y mirar solo la bola aumenta el riesgo de torceduras.",
    content:
      "Mantén una base de apoyo algo más ancha que los hombros y entra a las bolas con pasos laterales, no saltando sobre un solo pie. Fuera de pista, trabaja equilibrio sobre una sola pierna y usa calzado con buen soporte de tobillo.",
    category: "lesiones",
    level: "beginner",
    tags: ["tobillo", "prevencion"],
  },
  {
    id: "tip-beginner-basic-volley",
    title: "Volea sencilla al centro de la pista",
    shortDescription:
      "Apunta al centro cuando aún no domines bien la volea.",
    content:
      "En lugar de buscar ángulos complicados, trabaja voleas cómodas al centro de la pista rival. Te dará más margen de error y obligará a los oponentes a decidir quién va a por la bola.",
    category: "tecnico",
    level: "beginner",
    tags: ["volea", "centro"],
  },
  {
    id: "tip-beginner-wall-respect",
    title: "No tengas miedo a dejar pasar la bola a la pared",
    shortDescription:
      "A veces es más fácil golpear después de la pared que antes.",
    content:
      "Si la bola viene muy pegada al cuerpo o muy rápida, deja que bote y toque la pared de fondo antes de golpear. Tendrás más tiempo para colocarte y podrás ejecutar un golpe más controlado.",
    category: "estrategia",
    level: "beginner",
    tags: ["pared", "defensa"],
  },
  {
    id: "tip-beginner-keep-eye",
    title: "Mantén la vista en la bola hasta el impacto",
    shortDescription:
      "Levantar la cabeza antes de tiempo genera muchos fallos tontos.",
    content:
      "Concéntrate en ver la bola hasta que toque la pala. Evita mirar dónde quieres colocar el golpe demasiado pronto; primero asegúrate de un buen contacto y luego ya llegará la precisión.",
    category: "mental",
    level: "beginner",
    tags: ["concentracion", "basico"],
  },
  {
    id: "tip-beginner-soft-grip",
    title: "Afloja el agarre cuando bloquees bolas rápidas",
    shortDescription:
      "Un agarre demasiado fuerte transmite toda la vibración al brazo.",
    content:
      "En voleas de bloqueo o bolas muy rápidas, reduce ligeramente la presión de la empuñadura y deja que la pala absorba parte del impacto. Así ganarás control y protegerás muñeca y codo.",
    category: "lesiones",
    level: "beginner",
    tags: ["agarre", "bloqueo"],
  },
  {
    id: "tip-beginner-simple-signals",
    title: "Acordad una señal sencilla en el saque",
    shortDescription:
      "Una única señal básica ya mejora mucho la coordinación de pareja.",
    content:
      "Antes del saque, acordad solo una o dos señales simples con la mano para indicar si tu compañero se cruza o se queda. No hace falta un sistema complejo; lo importante es que ambos sepáis qué va a pasar tras el saque.",
    category: "estrategia",
    level: "beginner",
    tags: ["pareja", "saque"],
  },
  {
    id: "tip-beginner-avoid-wild-shots",
    title: "Evita golpes ganadores imposibles",
    shortDescription:
      "Cuanto más difícil el golpe, más probable es que falle.",
    content:
      "En lugar de buscar el punto ganador desde situaciones incómodas, céntrate en devolver la bola alta y profunda. Obliga al rival a jugar una bola más y espera una oportunidad realmente clara para arriesgar.",
    category: "mental",
    level: "beginner",
    tags: ["decisiones", "consistencia"],
  },
  {
    id: "tip-beginner-split-step",
    title: "Haz un pequeño salto de ajuste antes de cada golpe",
    shortDescription:
      "El split step te ayuda a reaccionar mejor a la dirección de la bola.",
    content:
      "Justo cuando el rival golpea la bola, realiza un pequeño salto vertical cayendo con ambos pies preparados para salir hacia cualquier lado. Este gesto simple mejora tu tiempo de reacción y equilibrio.",
    category: "tecnico",
    level: "beginner",
    tags: ["splitstep", "pies"],
  },
  {
    id: "tip-beginner-basic-goals",
    title: "Márcate objetivos simples por partido",
    shortDescription:
      "No todo es ganar: también puedes medir tu progreso con metas pequeñas.",
    content:
      "Antes de jugar, define 1 o 2 objetivos fáciles de recordar, como 'jugar más globos cuando esté apurado' o 'hablar más con mi pareja'. Esto te ayudará a concentrarte en mejorar y no solo en el marcador.",
    category: "mental",
    level: "beginner",
    tags: ["objetivos", "progreso"],
  },
  {
    id: "tip-beginner-recover-center",
    title: "Recupera siempre la posición después de volear",
    shortDescription:
      "No te quedes clavado donde golpeaste la última volea.",
    content:
      "Tras cada volea, da uno o dos pequeños pasos para volver a tu posición base cerca del centro de tu mitad de pista. Así evitarás que te ganen por los huecos que dejas al quedarte estático.",
    category: "estrategia",
    level: "beginner",
    tags: ["posicion", "red"],
  },
  {
    id: "tip-beginner-simple-routines",
    title: "Crea una mini rutina antes de sacar",
    shortDescription:
      "Repetir siempre los mismos gestos te da calma y consistencia.",
    content:
      "Antes de cada saque, repite una pequeña rutina: por ejemplo, botar la bola dos veces, respirar hondo y decidir hacia dónde vas a sacar. Esto reduce nervios y mejora tu porcentaje de saques dentro.",
    category: "mental",
    level: "beginner",
    tags: ["rutina", "saque"],
  },
  {
    id: "tip-beginner-serve-body",
    title: "Saque al cuerpo para forzar restos incómodos",
    shortDescription:
      "Cuando dudes, sacar al cuerpo del restador es una opción muy segura.",
    content:
      "Apunta tu saque hacia la zona del pecho o cadera del rival para que tenga menos espacio para armar el golpe. No necesitas mucha potencia: prioriza botar alto y que la bola entre con margen al cuadro.",
    category: "tecnico",
    level: "beginner",
    tags: ["saque", "seguridad"],
  },
  {
    id: "tip-beginner-serve-rhythm",
    title: "Mantén siempre el mismo ritmo de saque",
    shortDescription:
      "Un ritual constante de saque reduce dobles faltas en momentos de presión.",
    content:
      "Cuenta mentalmente un pequeño patrón (por ejemplo, 'respiro, boto, saco') y respétalo en todos tus saques. Evita acelerar el gesto cuando estés nervioso; cuanto más repitas la misma secuencia, más estable será tu porcentaje de primeros.",
    category: "mental",
    level: "beginner",
    tags: ["saque", "rutina"],
  },
  {
    id: "tip-beginner-physical-mobility",
    title: "Trabaja movilidad básica de cadera y tobillos",
    shortDescription:
      "Una buena movilidad reduce lesiones y mejora tu alcance en la pista.",
    content:
      "Dedica 5 minutos, 2-3 veces por semana, a hacer círculos de cadera, sentadillas profundas asistidas y movilidad de tobillos contra la pared. Ganar rango de movimiento hará que llegar a bolas difíciles sea más cómodo y seguro.",
    category: "lesiones",
    level: "beginner",
    tags: ["fisico", "movilidad"],
  },
  {
    id: "tip-intermediate-serve-second",
    title: "Construye una segunda bola de saque muy fiable",
    shortDescription:
      "Una segunda bola segura te permite arriesgar más con la primera.",
    content:
      "Entrena un segundo saque con más altura y efecto liftado, apuntando al centro del cuadro. Aunque el rival pueda atacar un poco más, reducirás drásticamente las dobles faltas en momentos clave del partido.",
    category: "tecnico",
    level: "intermediate",
    tags: ["saque", "seguridad"],
  },
  {
    id: "tip-intermediate-serve-to-weak",
    title: "Saca más veces al jugador más débil",
    shortDescription:
      "Dirigir el saque al rival que falla más es una decisión táctica sencilla.",
    content:
      "Observa quién resta peor o comete más errores no forzados y concentra ahí la mayoría de tus saques. Sin cambiar nada técnico, estarás generando más puntos gratis a lo largo del partido.",
    category: "estrategia",
    level: "intermediate",
    tags: ["saque", "tactica"],
  },
  {
    id: "tip-intermediate-wall-lift",
    title: "Usa bolas liftadas para que la pared trabaje a tu favor",
    shortDescription:
      "Un golpe con efecto liftado que bote cerca de la pared se vuelve muy incómodo.",
    content:
      "Desde el fondo, juega derechas y reveses con efecto liftado que boten profundo, cerca de la pared rival. El segundo bote se acelerará y obligará a tus oponentes a preparar el golpe muy pronto o a devolver bolas forzadas.",
    category: "estrategia",
    level: "intermediate",
    tags: ["pared", "profundidad"],
  },
  {
    id: "tip-intermediate-wall-position",
    title: "Ajusta tu distancia a la pared según la velocidad de la bola",
    shortDescription:
      "Cuanto más fuerte venga la bola, más espacio necesitas con la pared.",
    content:
      "Si la bola viene muy rápida, da un paso hacia delante para que el rebote en la pared no te 'coma'. Si viene lenta, puedes pegarte un poco más para aprovechar mejor la altura de salida. Este ajuste fino mejora mucho tu control.",
    category: "tecnico",
    level: "intermediate",
    tags: ["pared", "posicion"],
  },
  {
    id: "tip-intermediate-physical-core",
    title: "Refuerza tu core para golpes más estables",
    shortDescription:
      "Un core fuerte reduce sobrecarga en hombros y codos.",
    content:
      "Incluye planchas frontales y laterales 2-3 veces por semana, además de puentes de glúteo. Mantener el tronco estable al golpear permitirá que el brazo trabaje más libre y con menos riesgo de lesión.",
    category: "lesiones",
    level: "intermediate",
    tags: ["fisico", "core"],
  },
  {
    id: "tip-advanced-serve-body-backhand",
    title: "Saque al revés del rival en momentos clave",
    shortDescription:
      "Ataca la zona de revés del restador para limitar sus opciones ofensivas.",
    content:
      "En bolas de break o puntos importantes, orienta tu saque hacia el revés del restador, combinando altura y efecto. La mayoría de jugadores se sienten menos cómodos restando de revés, lo que te dará bolas más blandas para la tercera.",
    category: "estrategia",
    level: "advanced",
    tags: ["saque", "tactica"],
  },
  {
    id: "tip-advanced-serve-to-berja",
    title: "Saque al cristal y volea a la verja",
    shortDescription:
      "Un patrón agresivo para romper la dinámica del restador.",
    content:
      "Saca alto hacia el cristal lateral buscando que la bola se abra mucho. Si el resto queda corto o flotado, avanza y juega una volea tensa dirigida a la verja, aprovechando el ángulo para forzar el error.",
    category: "estrategia",
    level: "advanced",
    tags: ["saque", "pared"],
  },
  {
    id: "tip-advanced-wall-double",
    title: "Lee los dobles rebotes pared-lateral + fondo",
    shortDescription:
      "En niveles altos, muchos globos y bolas defensivas usan dobles paredes.",
    content:
      "Entrena la lectura de bolas que tocan primero pared lateral y luego fondo (o al revés). Observa el ángulo de entrada y la altura para decidir si esperar más atrás o atacar de volea tras la salida.",
    category: "tecnico",
    level: "advanced",
    tags: ["pared", "lectura"],
  },
  {
    id: "tip-advanced-wall-drop-shot",
    title: "Chiquita pegada a la pared para romper la red",
    shortDescription:
      "Una chiquita muy pegada a la pared obliga al rival a golpear incómodo.",
    content:
      "Desde el fondo, si los rivales están muy pegados a la red, ejecuta una chiquita baja y cercana a la pared lateral. El bote hará que la pelota se 'pegue' al cristal y dificulte mucho una volea agresiva.",
    category: "estrategia",
    level: "advanced",
    tags: ["pared", "chiquita"],
  },
  {
    id: "tip-advanced-mental-reset",
    title: "Reset mental después de un juego muy malo",
    shortDescription:
      "Un solo juego no define el partido si sabes reiniciar tu cabeza.",
    content:
      "Cuando encadenes varios errores en un mismo juego, utiliza el cambio de lado para hacer 3 respiraciones profundas, definir una única prioridad táctica y recordar algún punto que hayas jugado bien. Esto evita arrastrar el mal juego al siguiente.",
    category: "mental",
    level: "advanced",
    tags: ["mental", "reset"],
  },
  {
    id: "tip-advanced-physical-load-management",
    title: "Planifica semanas de descarga cada cierto tiempo",
    shortDescription:
      "Bajar el volumen de juego puntualmente te hace rendir más a largo plazo.",
    content:
      "Cada 6-8 semanas, reduce durante 5-7 días el número de partidos y la intensidad de entrenamientos. Aprovecha para trabajar movilidad y fuerza suave. Esta descarga programada disminuye el riesgo de sobrecarga crónica.",
    category: "lesiones",
    level: "advanced",
    tags: ["fisico", "carga"],
  },
];

export function getTipsByLevel(levelId: string | null): Tip[] {
  if (!levelId) return [];
  return mockTips.filter((tip) => tip.level === levelId);
}

export function getTipById(id: string): Tip | undefined {
  return mockTips.find((tip) => tip.id === id);
}

export function getTipsByLevelPaginated(
  levelId: string | null,
  page: number,
  pageSize: number,
): { items: Tip[]; total: number; totalPages: number; page: number; pageSize: number } {
  if (!levelId) {
    return { items: [], total: 0, totalPages: 0, page, pageSize };
  }

  const allForLevel = getTipsByLevel(levelId);
  const total = allForLevel.length;
  const safePageSize = pageSize > 0 ? pageSize : 10;
  const totalPages = total === 0 ? 0 : Math.ceil(total / safePageSize);

  const safePage = page < 1 ? 1 : page;
  const startIndex = (safePage - 1) * safePageSize;
  const endIndex = startIndex + safePageSize;

  const items = allForLevel.slice(startIndex, endIndex);

  return {
    items,
    total,
    totalPages,
    page: safePage,
    pageSize: safePageSize,
  };
}
