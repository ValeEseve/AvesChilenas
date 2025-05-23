const aves = [
  {
    nombre: "Cachudito de Juan Fernández",
    nombre_cientifico: "Anairetes fernandezianus",
    tamano: "14",
    habitat: "Bosques nativos de la isla Robinson Crusoe",
    dieta: "Insectos",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Archipiélago de Juan Fernández",
    riesgo_value: "en-peligro",
    riesgo: "En peligro",
    img: "./assets/img/cachudito.jpg",
    canto: "./assets/audios/cachudito.mp3"
  },
  {
    nombre: "Canastero",
    nombre_cientifico: "Asthenes humicola",
    tamano: "17",
    habitat: "Matorrales y pastizales",
    dieta: "Insectos, semillas",
    dieta_value: ["insectos", "semillas"],
    dieta_icons: "<i data-lucide='bug'></i><i data-lucide='bean'></i>",
    zona_de_chile: "Centro y sur",
    riesgo_value: "preocupacion-menor",
    riesgo: "Preocupación menor",
    img: "./assets/img/canastero.jpg",
    canto: "./assets/audios/canastero.wav"
  },
  {
    nombre: "Chiricoca",
    nombre_cientifico: "Ochetorhynchus melanurus",
    tamano: "20",
    habitat: "Zonas áridas, matorrales",
    dieta: "Insectos y pequeños invertebrados",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Norte chico y centro",
    riesgo: "Preocupación menor",
    riesgo_value: "preocupacion-menor",
    img: "./assets/img/chiricoca.jpg",
    canto: "./assets/audios/chiricoca.wav"
  },
  {
    nombre: "Choroy",
    nombre_cientifico: "Enicognathus leptorhynchus",
    tamano: "34",
    habitat: "Bosques templados",
    dieta: "Semillas, frutas, brotes",
    dieta_value: ["semillas", "frutas"],
    dieta_icons: "<i data-lucide='bean'></i><i data-lucide='cherry'></i>",
    zona_de_chile: "Centro-sur y sur",
    riesgo: "Vulnerable",
    riesgo_value: "vulnerable",
    img: "./assets/img/choroy.jpg",
    canto: "./assets/audios/choroy.wav"
  },
  {
    nombre: "Churrete costero",
    nombre_cientifico: "Cinclodes nigrofumosus",
    tamano: "20",
    habitat: "Costas rocosas",
    dieta: "Invertebrados marinos",
    dieta_value: ["invertebrados-marinos"],
    dieta_icons: "<i data-lucide='waves'></i>",
    zona_de_chile: "Desde Antofagasta a Los Lagos",
    riesgo: "Preocupación menor",
    riesgo_value: "preocupacion-menor",
    img: "./assets/img/churrete_costero.jpg",
    canto: "./assets/audios/churrete.mp3"
  },
  {
    nombre: "Churrín del Norte",
    nombre_cientifico: "Scytalopus magellanicus",
    tamano: "12",
    habitat: "Bosques densos y húmedos",
    dieta: "Insectos y larvas",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Centro-sur y sur",
    riesgo: "Preocupación menor",
    riesgo_value: "preocupacion-menor",
    img: "./assets/img/churrin.jpg",
    canto: "./assets/audios/churrin.mp3"
  },
  {
    nombre: "Golondrina de mar pincoya",
    nombre_cientifico: "Oceanites pincoyae",
    tamano: "18",
    habitat: "Alta mar, zonas oceánicas",
    dieta: "Plancton, crustáceos pequeños",
    dieta_value: ["crustaceos"],
    dieta_icons: "<i data-lucide='waves'></i>",
    zona_de_chile: "Chiloé y mares circundantes",
    riesgo: "Datos insuficientes",
    riesgo_value: "datos",
    img: "./assets/img/golondrinas.jpg",
    canto: "./assets/audios/golondrina.mp3"
  },
  {
    nombre: "Perdiz chilena",
    nombre_cientifico: "Nothoprocta perdicaria",
    tamano: "30",
    habitat: "Campos abiertos, matorrales",
    dieta: "Semillas, insectos",
    dieta_value: ["semillas", "insectos"],
    dieta_icons: "<i data-lucide='bug'></i><i data-lucide='bean'></i>",
    zona_de_chile: "Centro y sur",
    riesgo: "Preocupación menor",
    riesgo_value: "preocupacion-menor",
    img: "./assets/img/perdiz_chilena.jpg",
    canto: "./assets/audios/perdiz.mp3"
  },
  {
    nombre: "Picaflor de Juan Fernández",
    nombre_cientifico: "Sephanoides fernandensis",
    tamano: "11",
    habitat: "Bosques nativos y jardines",
    dieta: "Néctar e insectos",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Isla Robinson Crusoe",
    riesgo: "En peligro crítico",
    riesgo_value: "critico",
    img: "./assets/img/picaflor.png",
    canto: "./assets/audios/picaflor.mp3"
  },
  {
    nombre: "Rayadito de Mas Afuera",
    nombre_cientifico: "Aphrastura masafuerae",
    tamano: "16",
    habitat: "Bosques húmedos",
    dieta: "Insectos",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Isla Alejandro Selkirk",
    riesgo: "En peligro crítico",
    riesgo_value: "critico",
    img: "./assets/img/rayadito.jpg",
    canto: "./assets/audios/rayadito.mp3"
  },
  {
    nombre: "Tapaculo",
    nombre_cientifico: "Scytalopus fuscus",
    tamano: "13",
    habitat: "Bosques esclerófilos y matorrales",
    dieta: "Insectos y larvas",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Centro de Chile",
    riesgo: "Casi amenazado",
    riesgo_value: "casi-amenazado",
    img: "./assets/img/tapaculo.jpg",
    canto: "./assets/audios/tapaculo.wav"
  },
  {
    nombre: "Turca",
    nombre_cientifico: "Pteroptochos megapodius",
    tamano: "23",
    habitat: "Matorrales y quebradas",
    dieta: "Insectos, lombrices",
    dieta_value: ["insectos"],
    dieta_icons: "<i data-lucide='bug'></i>",
    zona_de_chile: "Centro y norte chico",
    riesgo: "Preocupación menor",
    riesgo_value: "preocupacion-menor",
    img: "./assets/img/turca.jpg",
    canto: "./assets/audios/turca.wav"
  }
];
