export default {
  global: {
    componenteFormativo:
      'Intervenciones para la cesación de tabaco y abordaje del paciente fumador',
    descripcionCurso:
      'El contenido de este componente ayudará a identificar las intervenciones basadas en la evidencia que pueden ser aplicadas a las personas que consumen productos de tabaco o sus derivados para el cese del consumo. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tabaquismo, una enfermedad ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Triple dependencia del tabaquismo ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Efectos de la nicotina a nivel cerebral',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Síndrome de abstinencia ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Beneficios de la cesación del tabaco y productos derivados',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Intervenciones basadas en la evidencia para la atención del tabaquismo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Consejería',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Terapia farmacológica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Otras intervenciones',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcántara Gómez, J., Martínez, J., Bambs, S. (2016). Consejo breve sobre el tabaco en atención primaria de salud en Chile: un desafío pendiente. ARS MEDICA Revista de Ciencias Médicas, Volumen 41, número 1.',
    },
    {
      referencia:
        'Becerra , N., Alba,  L. H.  y Castillo J. S. (2012). Terapias alternativas para la cesación de la adicción al tabaco: Revisión de guías de práctica clínica. Gaceta Médica de México. 148:457-66.',
    },
    {
      referencia:
        'Cañas,  A., Alba,  L. H. y Becerra,  N. (2014). Eficacia y seguridad del uso de medicamentos para la cesación de la adicción al tabaco: revisión de guías de práctica clínica. Rev. Salud Pública,16(5), 772-85. ',
    },
    {
      referencia:
        'Lancaster, T. y Stead,  L. F. (2017). Individual behavioural counselling for smoking cessation (Review). Cochrane Database Syst Rev, Issue 3. Art. No.: CD001292. DOI: 10.1002/14651858.CD001292.pub3.',
    },
    {
      referencia:
        'Lindson Hawley, N., Thompson, T. P. y Begh, R. (2015). Motivational interviewing for smoking cessation. Cochrane Database Syst Rev; Issue 3. Art. No.: CD006936. DOI: 10.1002/14651858.CD006936.pub3. ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia. (2020).  Directrices para promover la cesación del consumo de tabaco y atención del tabaquismo. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      referencia:
        'Ministry of Health. (2014). The New Zealand Guidelines for Helping People to Stop Smoking.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2017). Informe OMS sobre la epidemia mundial de tabaquismo, 2017. OMS. ',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/258599/WHO-NMH-PND-17.4-spa.pdf;jsessionid=19C3DE0F7C6E20DA3240C4E1807FB393?sequence=1',
    },
    {
      referencia: 'Organización Mundial de la Salud. (2018). Tabaco. OMS. ',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/tobacco',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2019). Los efectos benéficos principales de dejar de fumar. OMS. ',
      link:
        'https://www.who.int/es/news-room/q-a-detail/tobacco-health-benefits-of-smoking-cessation',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (2009). Manual Nacional de Abordaje del Tabaquismo en el Primer Nivel de Atención. Organización Mundial de la Salud. ',
      link:
        'https://www.paho.org/es/documentos/manual-nacional-abordaje-tabaquismo-primer-nivel-atencion',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (2017). Informe Quinquenal 2013 - 2017 del Director de la Oficina Sanitaria Panamericana. OPS. ',
      link: 'https://www.paho.org/annual-report-2017/Espanol.html',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (2020). Herramientas para aplicar las intervenciones breves de las 5A y las 5R para tratar el consumo de tabaco a nivel de la atención primaria. OPS. ',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/52793/9789275322451_spa.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Abstinencia/Síndrome de abstinencia',
      significado:
        'Conjunto de síntomas que se presentan al suspender el consumo de productos de tabaco. Algunos de los síntomas generados son: ansiedad, irritabilidad, dolor de cabeza, temblor, trastornos del sueño y deseo imperioso de consumir cigarrillos u otras fuentes de nicotina. (Ministerio de Salud, 2020).',
    },
    {
      termino: 'Intervención',
      significado:
        'Acción o estrategia dirigida a obtener resultados en el marco del tratamiento de la dependencia tabáquica. (Ministerio de Salud, 2020).',
    },
    {
      termino: 'Consejería',
      significado:
        'Se define como una actividad comunicativa que promueve tanto el diálogo entre el fumador y el profesional de la salud como el desarrollo de habilidades para que el fumador suspenda el consumo de tabaco. (Ministerio de Salud, 2020).',
    },
    {
      termino: 'Consejería o intervención mínima',
      significado:
        'Acción inicial de indagación sobre el consumo de tabaco o exposición ambiental a esta sustancia, seguida por un mensaje breve para desestimular dicho consumo y la orientación de la persona dentro del sistema de salud para recibir una intervención más estructurada para dejar de fumar. Se realiza dentro del cuidado habitual de pacientes en todos los escenarios de atención y lo lleva a cabo cualquier profesional de la salud. (Ministerio de Salud, 2020).',
    },
  ],
  complementario: [
    {
      texto:
        'Fiore,  M. C., Jaén,  C. R., Baker, T. B. y Bailey W. C. (2008). Treating tobacco use and dependence: 2008 update. Clinical practice guideline. Rockville, MD: U.S. Department of Health and Human Services. Public Health Service. NCBI. ',
      tipo: 'Guía de práctica clínica',
      descarga: '/downloads/Guia_de_practica_clinica.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yolanda Inés Sandoval Gil',
        cargo: 'Profesional especializado',
        centro:
          'Ministerio de Salud - Subdirección de enfermedades no transmisibles',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Antioquia - Centro de Servicios de Salud',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
