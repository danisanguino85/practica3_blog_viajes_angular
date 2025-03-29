import { Category } from "../interfaces/category";
import { News } from "../interfaces/news";
import { Post } from "../interfaces/post";

const CATEGORIES: Category[] = [
    { _id: 1, titulo: 'Playa' },
    { _id: 2, titulo: 'Montaña' },
    { _id: 3, titulo: 'Ciudad' },
    { _id: 4, titulo: 'Rural' },
    { _id: 5, titulo: 'Festivales' },
]

export { CATEGORIES }


const POSTS: Post[] = [
    {
        _id: 1,
        titulo: 'CUENCA',
        texto: 'Cuenca, situada en Castilla-La Mancha, es una de las ciudades más fascinantes de España. Su casco antiguo, declarado Patrimonio de la Humanidad por la UNESCO, se alza sobre las hoces de los ríos Júcar y Huécar, ofreciendo paisajes espectaculares. Uno de sus mayores atractivos son las famosas Casas Colgadas, construcciones medievales que desafían la gravedad al asomarse sobre el precipicio. Hoy, una de ellas alberga el Museo de Arte Abstracto Español, convirtiéndola en un punto clave para los amantes de la cultura. Más allá de su legado histórico, Cuenca es un destino ideal para los amantes de la naturaleza. La Ciudad Encantada, a pocos kilómetros, ofrece formaciones rocosas únicas esculpidas por la erosión a lo largo de milenios. También cuenta con el nacimiento del río Cuervo, un paraje natural de gran belleza con cascadas y senderos rodeados de vegetación. Además, su gastronomía es otro de sus atractivos, con platos típicos como el morteruelo, el ajoarriero y el alajú.Ya sea por su patrimonio medieval, sus paisajes impresionantes o su exquisita comida, Cuenca es un destino que sorprende y enamora a quienes la visitan. Sin duda, una joya en el corazón de España.',
        autor: 'Alfredo',
        apellidos: 'Muriel Barragan',
        imagen: 'https://mifamiliaviajera.com/wp-content/uploads/2023/05/cuenca.jpg',
        fecha: new Date('2024-10-09'),
        categoria: 'rural'
    },
    {
        _id: 2,
        titulo: 'MARRAKECH',
        texto: 'Marrakech es un destino que hechiza desde el primer momento. Sus calles bulliciosas, el aroma a especias y la explosión de colores convierten cada rincón en una postal inolvidable.Mi viaje comenzó en la icónica Plaza Jemaa el-Fna, el corazón de la ciudad. Durante el día, es un hervidero de vendedores ambulantes, músicos y encantadores de serpientes. Pero al caer la noche, se transforma en un festival de luces y sabores con puestos de comida que ofrecen tajines, cuscús y brochetas de cordero.Caminando por la Medina, me perdí entre sus estrechos callejones llenos de zocos. Aquí, el regateo es un arte, y terminé comprando una hermosa alfombra bereber y una lámpara de latón que ahora ilumina mi salón con un toque marroquí.Para escapar del bullicio, visité el Jardín Majorelle, un oasis de tranquilidad con su famoso azul intenso y una colección de plantas exóticas. También recorrí el Palacio de la Bahía, un ejemplo impresionante de la arquitectura marroquí, con sus patios llenos de azulejos y fuentes de mármol. No podía irme sin disfrutar de un tradicional hammam, una experiencia de relajación absoluta con masajes y exfoliaciones con jabón negro. Y, por supuesto, probé un té de menta en una azotea con vistas a la ciudad mientras el sol se ocultaba detrás de las murallas rojizas. Marrakech es una ciudad que despierta los sentidos y deja huella en el alma. Si buscas un destino vibrante, lleno de historia y hospitalidad, esta joya marroquí no te decepcionará.',
        autor: 'Miguel',
        apellidos: 'Salinas Teruel',
        imagen: 'https://thebucketlistcompany.co.uk/wp-content/uploads/2019/12/iStock-498402049-copy-scaled.jpg',
        fecha: new Date('2025-10-09'),
        categoria: 'ciudad'
    },


    {
        _id: 3,
        titulo: 'EL PALMAR',
        texto: 'El Palmar, con su arena dorada y su brisa marina, me recibió con un ambiente relajado y natural. Desde el primer momento, supe que este rincón de la Costa de la Luz era especial. Caminé por su extensa playa, sintiendo la arena cálida bajo mis pies y el sonido hipnótico de las olas. Durante el día, me aventuré a probar el surf, desafiando las olas atlánticas bajo un sol radiante. Después, me relajé en un chiringuito frente al mar, disfrutando de un atardecer impresionante con un refrescante tinto de verano en la mano. La gastronomía fue otro gran placer: el atún de almadraba y las tortillitas de camarones fueron un auténtico festín para el paladar. Entre paseos en la playa, cielos estrellados y la energía bohemia del lugar, El Palmar se convirtió en un destino inolvidable, perfecto para desconectar y disfrutar de la naturaleza en su estado más puro.',
        autor: 'Rafa',
        apellidos: 'Morales Cuna',
        imagen: 'https://www.vejerdelafrontera.org/wp-content/uploads/2017/05/playa-el-palmar-vejer.jpg',
        fecha: new Date('2024-07-09'),
        categoria: 'Playa'
    },
    {
        _id: 4,
        titulo: 'ESTAMBUL',
        texto: 'Estambul me recibió con su mezcla única de historia, cultura y modernidad. Al recorrer sus calles, sentí la magia de una ciudad que une dos continentes. Mi primera parada fue la impresionante Santa Sofía, con su imponente cúpula y su fascinante historia como iglesia y mezquita. Justo enfrente, la Mezquita Azul me dejó sin palabras con sus azulejos y majestuosa arquitectura. Paseé por el Gran Bazar, donde los colores y aromas de especias, tés y alfombras creaban un ambiente vibrante. Luego, navegué por el Bósforo, admirando los palacios otomanos y las vistas panorámicas de la ciudad. La gastronomía fue otro deleite: probé un delicioso *kebab*, *baklava* y un aromático té turco. Al atardecer, me perdí en las calles de Galata y subí a su torre para disfrutar de una vista inolvidable. Estambul me envolvió con su historia y su encanto, dejándome con ganas de volver.',
        autor: 'Sonia',
        apellidos: 'Estebam Marcos',
        imagen: 'https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/69/2024/10/08182347/istock-475460738-ok.jpg',
        fecha: new Date('2022-07-09'),
        categoria: 'Ciudad'
    },
    {
        _id: 5,
        titulo: 'PIRINEOS',
        texto: 'Los Pirineos me recibieron con sus majestuosas montañas, valles verdes y aire puro. Desde el primer momento, me sentí envuelto en un paisaje de ensueño. Comencé mi viaje en un pequeño pueblo de montaña, con casas de piedra y calles empedradas que parecían sacadas de un cuento. Las rutas de senderismo me llevaron a lagos cristalinos y bosques frondosos, donde el silencio solo era interrumpido por el canto de los pájaros. Ascendí hasta un mirador desde donde contemplé cumbres nevadas y valles infinitos. La belleza del paisaje era sobrecogedora. Después de un día de aventura, disfruté de la gastronomía local: una olla de caldo caliente y un queso curado típico de la región. Por la noche, el cielo estrellado me dejó sin palabras. Los Pirineos fueron un refugio de paz y naturaleza, un lugar al que sin duda volveré para seguir explorando su magia.',
        autor: 'Mario',
        apellidos: 'Mola Cuadrado',
        imagen: 'https://wowrural.com/wp-content/uploads/2022/03/ordesa-canones-1080x675.jpg',
        fecha: new Date('2022-07-09'),
        categoria: 'Montaña'
    },
    {
        _id: 6,
        titulo: 'GLASTONBURY',
        texto: 'Glastonbury es una pequeña ciudad en el suroeste de Inglaterra, famosa por su historia, leyendas y su icónico festival de música. Ubicada en el condado de Somerset, este lugar ha sido durante siglos un punto de interés tanto para peregrinos espirituales como para amantes de la cultura y la naturaleza. Su monumento más emblemático es la colina de Glastonbury Tor, coronada por la Torre de San Miguel. Según la leyenda, esta colina ha sido asociada con la isla de Ávalon del ciclo artúrico y se dice que aquí descansan los restos del Rey Arturo y la Reina Ginebra. También es un lugar de fuerte conexión con antiguas tradiciones druídicas y místicas.Además de su riqueza histórica y espiritual, Glastonbury es conocida por albergar uno de los festivales de música más famosos del mundo. El Festival de Glastonbury, fundado en 1970, ha crecido hasta convertirse en un evento multitudinario que reúne a los mejores artistas de diversos géneros musicales. Celebrado en Worthy Farm, el festival atrae a más de 200,000 personas cada año y ofrece espectáculos de rock, pop, electrónica y hasta teatro y circo. Es considerado uno de los festivales más importantes y diversos del planeta.Más allá del festival, la ciudad también es un destino popular para los interesados en la espiritualidad y el esoterismo. Sus calles están llenas de tiendas de cristales, tarot y libros sobre mitología celta. La Abadía de Glastonbury, en ruinas pero majestuosa, es otro de sus grandes atractivos, ya que se cree que pudo ser el lugar donde José de Arimatea llevó el Santo Grial. Sin duda, Glastonbury es un lugar donde la historia, la leyenda y la música se unen para crear una experiencia mágica y única.',
        autor: 'Mike',
        apellidos: 'Navarro Smith',
        imagen: 'https://www.yellowbrick.co/wp-content/uploads/2023/07/Glastonbury.png',
        fecha: new Date('2022-07-09'),
        categoria: 'Festivales'
    },
    {
        _id: 7,
        titulo: 'NUEVA YORK',
        texto: 'Nueva York, la ciudad que nunca duerme, me recibió con su energía vibrante y su icónica silueta de rascacielos. Al llegar, me sumergí en el bullicio de Times Square, con sus luces deslumbrantes y pantallas gigantes. Luego, caminé por Central Park, un oasis verde en medio del caos urbano. Subí al Empire State y admiré la vista panorámica de Manhattan, una imagen inolvidable. En la Estatua de la Libertad, sentí la historia y la grandeza de la ciudad. Exploré el MET, maravillándome con su vasta colección de arte, y en Broadway, disfruté de un espectáculo impresionante. La gastronomía neoyorquina fue otro deleite: probé la clásica pizza de Nueva York y un hot dog callejero en Coney Island. Cada rincón de la ciudad ofrecía algo nuevo, y me fui con la certeza de que Nueva York es un destino al que siempre querré volver.',
        autor: 'Pedro',
        apellidos: 'García Salamanca',
        imagen: 'https://media.istockphoto.com/id/178735930/es/foto/la-ciudad-de-nueva-york.jpg?s=612x612&w=0&k=20&c=4kG25OUZA1223J-zw_RHWy49VL3AZww4DR4HeIKUYn4=',
        fecha: new Date('2023-10-01'),
        categoria: 'Ciudad'
    },
    {
        _id: 8,
        titulo: 'VIETNAM',
        texto: 'Vietnam me recibió con su vibrante mezcla de historia, naturaleza y cultura. Mi aventura comenzó en Hanói, donde las calles bulliciosas estaban llenas de motos y puestos de comida callejera. Probé un delicioso *pho* mientras exploraba el casco antiguo, repleto de templos y mercados. Luego, viajé a la bahía de Ha Long, donde navegué entre imponentes islas de piedra caliza cubiertas de vegetación. La vista era simplemente mágica. Continué hacia Hoi An, una ciudad encantadora con farolillos de colores y arquitectura colonial. Allí, tomé una clase de cocina vietnamita y recorrí sus pintorescas calles. En Ho Chi Minh, el Museo de la Guerra me impactó con su historia, mientras que los túneles de Cu Chi me mostraron la resistencia vietnamita. Antes de partir, disfruté de un paseo en barco por el delta del Mekong, entre mercados flotantes y paisajes exuberantes. Vietnam me dejó recuerdos inolvidables.',
        autor: 'Rosa',
        apellidos: 'Guerra Díaz',
        imagen: 'https://imagenes.elpais.com/resizer/v2/XYAEN4AXO5ERBKMVLT2S4BW4YA.jpg?auth=9dcd1b7022c87110f1e0aed42657ff6d1662be4de078f253fdcd716c6b4ac496&width=414',
        fecha: new Date('2024-08-10'),
        categoria: 'Playa'
    }


]

export { POSTS }

const ARTICULOS: News[] = [
    {
        _id: 1,
        titulo: 'COSAS CURIOSAS DE VIAJES',
        entradilla: 'Viajar nos abre la mente y nos permite descubrir curiosidades sorprendentes del mundo.Desde aeropuertos con bibliotecas gratuitas hasta islas habitadas por gatos, el planeta está lleno de datos fascinantes que pueden cambiar nuestra forma de explorar. ¡Aquí te dejamos algunas de las más interesantes!',
        descripcion: 'El mundo está lleno de datos sorprendentes que hacen que viajar sea aún más fascinante. Por ejemplo, el pasaporte más poderoso varía cada año, pero los de Japón y Singapur suelen liderar el ranking al permitir la entrada sin visa a más de 190 países. En cuanto a aeropuertos, el Hartsfield-Jackson de Atlanta es el más transitado, con más de 100 millones de pasajeros al año. Francia ostenta el récord del país con más husos horarios (12 en total), debido a sus territorios de ultramar. Además, existen lugares únicos como Giethoorn, un pueblo en los Países Bajos sin calles, donde los habitantes se mueven en barcas por los canales.Japón también alberga islas fascinantes, como Aoshima, donde los gatos superan en número a los humanos en una proporción de seis a uno. Otro dato curioso es que la frontera terrestre más corta del mundo está entre España y Marruecos, en la isla de Perejil, con solo 85 metros de separación. Estos son solo algunos de los muchos detalles asombrosos que nos demuestran que viajar es mucho más que conocer destinos: es descubrir historias inesperadas y curiosidades que hacen que cada rincón del planeta sea especial. ¿Conocías alguno de estos datos? ¡Cuéntanos en los comentarios!',
        imagen: 'https://www.vinccihoteles.com/uploads/cms_apps/imagenes/disposicion-articulos-viaje-angulo-alto.jpg',
        autor: 'Esther Pelaez'
    },
    {
        _id: 2,
        titulo: 'VIAJAR POR ESPAÑA',
        entradilla: 'España es un país lleno de contrastes y rincones sorprendentes. Desde pueblos que parecen sacados de un cuento hasta trenes que atraviesan paisajes espectaculares, viajar por España es descubrir un sinfín de curiosidades. Aquí te dejamos algunos datos fascinantes que harán que quieras recorrer cada rincón del país.',
        descripcion: 'España es un país con una diversidad increíble, y viajar por él permite descubrir lugares realmente únicos. Por ejemplo, en Ronda (Málaga) se encuentra uno de los puentes más impresionantes de Europa, el Puente Nuevo, que se alza a 98 metros de altura sobre el desfiladero del Tajo. Además, España tiene la red de trenes de alta velocidad más extensa de Europa y la segunda del mundo, solo superada por China, lo que permite recorrer grandes distancias en poco tiempo. También es el país con más reservas de la biosfera de la UNESCO, con un total de 53, lo que demuestra su riqueza natural. Si hablamos de pueblos curiosos, en Júzcar (Málaga) las casas están pintadas de azul debido a que fue el escenario de la película de Los Pitufos en 2011, y los vecinos decidieron conservar el color. En cuanto a gastronomía, España es el mayor productor de aceite de oliva del mundo, generando más del 40% de la producción global. Y un dato sorprendente es que en Madrid se encuentra el restaurante más antiguo del mundo, Casa Botín, fundado en 1725 y reconocido por el Récord Guinness. Viajar por España es descubrir historia, naturaleza y tradiciones que la hacen única. ¿Cuál de estos datos te ha sorprendido más? ¡Déjanos tu opinión en los comentarios!',
        imagen: 'https://aquidepaso.com/wp-content/uploads/2024/07/viajar-a-espana-desde-latinoamerica-1.jpg',
        autor: 'Alberto Martín'
    }


]
export { ARTICULOS }


const SPONSORED: News[] = [

    {
        titulo: 'WeRoad te anima a viajar... con personas como tú o no',
        entradilla: 'WeRoad lanza su nueva campaña DOOH con imágenes de viajeros reales y una invitación a dejar las diferencias a un lado y salir a descubrir el mundo juntos.',
        descripcion: 'El llamado síndrome Wanderlust arrastra a todos los Millennials hacia una pasión por viajar. La necesidad de descubrir nuevos lugares, culturas y experiencias se ha convertido en un rasgo común de esta generación que supera cualquier diferencia de gustos o aficiones. Bajo esta premisa, WeRoad lanza su nueva campaña creativa “Viaja con personas como tú. O no”, que toma la ciudad de Madrid con imágenes de viajeros reales que comenzaron su aventura como desconocidos, la vivieron como compañeros de viaje y volvieron como grandes amigos. Las fotografías de las piezas creativas, tomadas en destinos como Cabo Verde, Costa Oeste, Patagonia, Capadocia, Tailandia y Nueva Zelanda, van acompañadas de pequeñas descripciones que reflejan sus diferencias en gustos y pasiones: la comida, la música, el deporte o sus planes favoritos. Porque, al final, lo que realmente les une es la pasión por los viajes. La acción combina la publicidad tradicional y la digital gracias a su apuesta por la DOOH, ejecutada con los soportes de JCDecaux en Madrid y desarrollada en conjunto por la agencia creativa Officer & Gentleman y el equipo creativo de WeRoad. Todas las creatividades se pueden ver del 24 al 30 de marzo en las principales estaciones de metro de Madrid como Sol, Alonso Martínez, Tribunal, Nuevos Ministerios, Príncipe Pío, Callao o Gran Vía. Además, la campaña incluye el despliegue de una lona gigante en Plaza Olavide, en el barrio de Chamberí, con un mensaje muy local y con un toque de humor: ¿"team de Domingos de Rastro o team de los domingos me arrastro?".',
        imagen: 'https://pbs.twimg.com/profile_images/1557377235375587328/-RZHavMM_400x400.jpg',
        autor: 'Sandra García Martín',
        url: 'https://controlpublicidad.com/campanas-publicitarias/weroad-te-anima-a-viajar-con-personas-como-tu-o-no/'
    },
    {
        titulo: 'Huakai crea una nueva forma de viajar que conquista al viajero “millennial” ',
        entradilla: 'La puesta en marcha fue en noviembre 2019 y cada vez son más los jóvenes que se animan a probar esta manera de viajar.',
        descripcion: ' ¿Cansado de viajar solo? ¿Quieres viajar, pero tus amigos no tienen disponibilidad? Tranquilo, Huakai tiene la fórmula perfecta para eso. En grupos de 8 a 10 personas, con edades e intereses similares, podrás descubrir increíbles destinos llenos de aventura. ¿Lo mejor? ¡Solo tienes que reservar el vuelo, Huakai se encarga del resto! Una vez allí conocerás a tus compañeros en persona y vivirás emocionantes aventuras, te sumergirás en nuevas culturas y probarás la deliciosa comida local. Durante toda la aventura un coordinador te acompañará por los rincones más auténticos del país y los que comenzaron siendo desconocidos se convertirán en tu segunda familia. “Los jóvenes llevaban tiempo esperando algo así; una forma cómoda, divertida y diferente de viajar, en la que no solo descubres nuevos destinos, sino que también vives experiencias únicas y conoces nuevos amigos con los que compartirlas”, comenta Fernando Cerro que, junto a Roberto Castelli, fundó Huakai a finales del año pasado. Lo que empezó con una conversación de dos emprendedores entre cervezas y tapas, terminó tomando forma y siendo, a día de hoy, una realidad que está pegando fuerte entre los jóvenes de 25 a 45 años en España. Año nuevo en Tailandia fue el pistoletazo de salida de la empresa, y pocos meses después ya cuentan con más de 100 reservas programadas hasta verano. En la actualidad disponen de 13 itinerarios creados por la agencia por países entre los que destacan Tailandia, Indonesia, Islandia o México entre tantos otros.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnHnamzskjvtmSC71tew0GWrKooav1hWKvQ&s',
        autor: 'Berto Espinola',
        url: 'https://www.eldiario.es/campobase/noticias/huakai-viajes-aventura-viajero-millennial_1_1112232.html'
    }

]

export { SPONSORED }

