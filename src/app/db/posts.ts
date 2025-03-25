import { Category } from "../interfaces/category";
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
        titulo: 'NUEVA YORK',
        texto: 'Nueva York, la ciudad que nunca duerme, me recibió con su energía vibrante y su icónica silueta de rascacielos. Al llegar, me sumergí en el bullicio de Times Square, con sus luces deslumbrantes y pantallas gigantes. Luego, caminé por Central Park, un oasis verde en medio del caos urbano. Subí al Empire State y admiré la vista panorámica de Manhattan, una imagen inolvidable. En la Estatua de la Libertad, sentí la historia y la grandeza de la ciudad. Exploré el MET, maravillándome con su vasta colección de arte, y en Broadway, disfruté de un espectáculo impresionante. La gastronomía neoyorquina fue otro deleite: probé la clásica pizza de Nueva York y un hot dog callejero en Coney Island. Cada rincón de la ciudad ofrecía algo nuevo, y me fui con la certeza de que Nueva York es un destino al que siempre querré volver.',
        autor: 'Pedro',
        imagen: 'https://media.istockphoto.com/id/178735930/es/foto/la-ciudad-de-nueva-york.jpg?s=612x612&w=0&k=20&c=4kG25OUZA1223J-zw_RHWy49VL3AZww4DR4HeIKUYn4=',
        fecha: new Date('2023-10-01'),
        categoria: 'Ciudad'
    },
    {
        _id: 2,
        titulo: 'VIETNAM',
        texto: 'Vietnam me recibió con su vibrante mezcla de historia, naturaleza y cultura. Mi aventura comenzó en Hanói, donde las calles bulliciosas estaban llenas de motos y puestos de comida callejera. Probé un delicioso *pho* mientras exploraba el casco antiguo, repleto de templos y mercados. Luego, viajé a la bahía de Ha Long, donde navegué entre imponentes islas de piedra caliza cubiertas de vegetación. La vista era simplemente mágica. Continué hacia Hoi An, una ciudad encantadora con farolillos de colores y arquitectura colonial. Allí, tomé una clase de cocina vietnamita y recorrí sus pintorescas calles. En Ho Chi Minh, el Museo de la Guerra me impactó con su historia, mientras que los túneles de Cu Chi me mostraron la resistencia vietnamita. Antes de partir, disfruté de un paseo en barco por el delta del Mekong, entre mercados flotantes y paisajes exuberantes. Vietnam me dejó recuerdos inolvidables.',
        autor: 'Rosa',
        imagen: 'https://imagenes.elpais.com/resizer/v2/XYAEN4AXO5ERBKMVLT2S4BW4YA.jpg?auth=9dcd1b7022c87110f1e0aed42657ff6d1662be4de078f253fdcd716c6b4ac496&width=414',
        fecha: new Date('2024-08-10'),
        categoria: 'Playa'
    },
    {
        _id: 3,
        titulo: 'El Palmar',
        texto: 'El Palmar, con su arena dorada y su brisa marina, me recibió con un ambiente relajado y natural. Desde el primer momento, supe que este rincón de la Costa de la Luz era especial. Caminé por su extensa playa, sintiendo la arena cálida bajo mis pies y el sonido hipnótico de las olas. Durante el día, me aventuré a probar el surf, desafiando las olas atlánticas bajo un sol radiante. Después, me relajé en un chiringuito frente al mar, disfrutando de un atardecer impresionante con un refrescante tinto de verano en la mano. La gastronomía fue otro gran placer: el atún de almadraba y las tortillitas de camarones fueron un auténtico festín para el paladar. Entre paseos en la playa, cielos estrellados y la energía bohemia del lugar, El Palmar se convirtió en un destino inolvidable, perfecto para desconectar y disfrutar de la naturaleza en su estado más puro.',
        autor: 'Rafa',
        imagen: 'https://www.vejerdelafrontera.org/wp-content/uploads/2017/05/playa-el-palmar-vejer.jpg',
        fecha: new Date('2024-07-09'),
        categoria: 'Playa'
    },
    {
        _id: 4,
        titulo: 'Estambul',
        texto: 'Estambul me recibió con su mezcla única de historia, cultura y modernidad. Al recorrer sus calles, sentí la magia de una ciudad que une dos continentes. Mi primera parada fue la impresionante Santa Sofía, con su imponente cúpula y su fascinante historia como iglesia y mezquita. Justo enfrente, la Mezquita Azul me dejó sin palabras con sus azulejos y majestuosa arquitectura. Paseé por el Gran Bazar, donde los colores y aromas de especias, tés y alfombras creaban un ambiente vibrante. Luego, navegué por el Bósforo, admirando los palacios otomanos y las vistas panorámicas de la ciudad. La gastronomía fue otro deleite: probé un delicioso *kebab*, *baklava* y un aromático té turco. Al atardecer, me perdí en las calles de Galata y subí a su torre para disfrutar de una vista inolvidable. Estambul me envolvió con su historia y su encanto, dejándome con ganas de volver.',
        autor: 'Sonia',
        imagen: 'https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/69/2024/10/08182347/istock-475460738-ok.jpg',
        fecha: new Date('2022-07-09'),
        categoria: 'Ciudad'
    },
    {
        _id: 5,
        titulo: 'Pirineos',
        texto: 'Los Pirineos me recibieron con sus majestuosas montañas, valles verdes y aire puro. Desde el primer momento, me sentí envuelto en un paisaje de ensueño. Comencé mi viaje en un pequeño pueblo de montaña, con casas de piedra y calles empedradas que parecían sacadas de un cuento. Las rutas de senderismo me llevaron a lagos cristalinos y bosques frondosos, donde el silencio solo era interrumpido por el canto de los pájaros. Ascendí hasta un mirador desde donde contemplé cumbres nevadas y valles infinitos. La belleza del paisaje era sobrecogedora. Después de un día de aventura, disfruté de la gastronomía local: una olla de caldo caliente y un queso curado típico de la región. Por la noche, el cielo estrellado me dejó sin palabras. Los Pirineos fueron un refugio de paz y naturaleza, un lugar al que sin duda volveré para seguir explorando su magia.',
        autor: 'Mario',
        imagen: 'https://wowrural.com/wp-content/uploads/2022/03/ordesa-canones-1080x675.jpg',
        fecha: new Date('2022-07-09'),
        categoria: 'Montaña'
    },
]


export { POSTS }