var config = {
     style: 'mapbox://styles/enuni/cmhdr177t004p01sgbs7nhe7s',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZW51bmkiLCJhIjoiY21oZHQxcnZwMDZrdjJrczYzMTcwa2N0cCJ9.O-Y1LhYI0LOj3vQdBU8kaQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Andalucía, tu lugar para trabajar y para vivir',
    subtitle: 'Alex, un nómada digital en busca de inspiración, decide dejar atrás la rutina y viajar al sur de Europa. Su destino: Andalucía, una región donde el trabajo remoto se mezcla con la historia, la luz y la vida mediterránea. Acompáñalo en su recorrido por algunas de las ciudades más vibrantes para teletrabajar.',
    byline: 'Por Emilio Núñez',
    footer: 'Source: Map Data from <a href="https://www.openstreetmap.org/" target="_blank"> OpenStreetMap</a> & images from Wikipedia. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Sevilla - historia y conectividad',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Plaza_de_la_Encarnaci%C3%B3n_%2817193358720%29_retouched.jpg/2560px-Plaza_de_la_Encarnaci%C3%B3n_%2817193358720%29_retouched.jpg',
            description: 'Alex comienza su viaje en Sevilla, una ciudad que combina el encanto de lo antiguo con la energía de lo moderno. Entre sus calles históricas encuentra coworkings que laten al ritmo del Guadalquivir, donde el aroma del azahar se mezcla con las ideas innovadoras. Un lugar perfecto para quienes buscan equilibrio entre inspiración cultural y productividad.',
            location: {
                center: [-6.008753, 37.391996],
                zoom: 12.22,
                pitch: 33.70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Córdoba - Silencio productivo y alma creativa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Centro_Hist%C3%B3rico%2C_16.9_--_2023_--_C%C3%B3rdoba%2C_Espa%C3%B1a.jpg',
            description: 'En Córdoba, Alex descubre un ambiente más tranquilo, ideal para concentrarse. Los coworkings se esconden entre patios floridos y callejuelas que invitan a pensar despacio. Aquí el tiempo se estira, y la historia inspira cada proyecto. Una ciudad para quienes valoran la calma y la belleza en su rutina diaria.',
            location: {
                center: [-4.774337, 37.880779],
                zoom: 13.98,
                pitch: -24.80,
                bearing: 36.93,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Granada - Energía joven y vistas a Sierra Nevada',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Alhambra_I_%2815381913145%29_cropped.jpg',
            description: 'Granada le recibe con una mezcla única de tradición universitaria y aire fresco de montaña. Los espacios de coworking rebosan juventud, creatividad y colaboración. Alex siente que aquí podría quedarse un tiempo: buena conexión, bajo coste y una comunidad abierta. El lugar perfecto para nutrir ideas y vivir con intensidad.',
            location: {
                center: [-3.606769, 37.175725],
                zoom: 15.08,
                pitch: 81.60,
                bearing: 60.30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Almería - Sol, mar y concentración',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/2007-12-18-04706_Spain_Almeria_edited.jpg',
            description: 'En Almería, el ritmo baja. Alex encuentra un equilibrio natural entre el trabajo y el descanso frente al Mediterráneo. Los espacios para teletrabajar se integran con el entorno, entre desierto y costa. Aquí, cada pausa tiene vistas al mar y cada día termina con una puesta de sol distinta.',
            location: {
                center: [-2.463949, 36.840755],
                zoom: 14.39,
                pitch: -20.80,
                bearing: 43.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Málaga - Comunidad internacional y oportunidades',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Da_Gibralfaro_%28cropped%29.jpg',
            description: 'Su última parada es Málaga, la capital digital del sur. Entre el Polo de Contenidos Digitales, Málaga TechPark y decenas de coworkings frente al mar, Alex encuentra una comunidad internacional vibrante. Aquí, la tecnología, la creatividad y el estilo de vida se funden. Alex sabe que ha encontrado su lugar.',
            location: {
                center: [-4.440597, 36.713632],
                zoom: 13.59,
                pitch: -42.40,
                bearing: 53.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Andalucía, un lugar para conectar y crear',
            image: './assets/andalucia_tech_hub.png',
            description: 'Tras recorrer Sevilla, Córdoba, Granada, Almería y Málaga, Alex comprende que Andalucía no es solo un destino, sino una forma de vivir. Cada provincia ofrece una experiencia distinta, pero todas comparten lo esencial: sol, talento, cultura y conexión. Y tú, ¿dónde montarías tu oficina con vistas?',
            location: {
                center: [-4.218999, 37.278641],
                zoom: 7.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
