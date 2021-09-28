<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 2
      h1 Intervenciones basadas en la evidencia para la atención del tabaquismo
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down") 
      .col-lg-5
        img.img-t.img-a.my-3(src='@/assets/ilustraciones/img13.png', alt='')           
      .col-lg-7
        p(data-aos="slide-down") Alrededor del 70 % de los consumidores de tabaco manifiestan su deseo de dejar de fumar y un 40 % lo intenta cada año, solamente un 3 % puede mantenerse libre de consumo, en contraste con el 30 % que tiene la posibilidad de lograrlo con el tratamiento de cesación tabáquica adecuado. 
        .cajon.color-primario.p-4(data-aos="fade-up-left")
          p.mb-0 Adicional a las intervenciones poblacionales efectivas para el control de tabaco, enmarcadas en la estrategia MPOWER del convenio Marco, existen tratamientos efectivos para el manejo de la dependencia del tabaquismo (Alba LH, et al, 2013).         
        p(data-aos="slide-down").mt-3 Los profesionales de la salud tienen la oportunidad de aconsejar y asistir a los pacientes que son consumidores de productos de tabaco y sus derivados, teniendo en cuenta que al menos el 70 % de los fumadores acude a una consulta médica una vez al año y un 50 % por lo menos a una valoración odontológica.

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down-left")
      .col-lg-10.br-1
        p(data-aos="slide-down") Identificar sistemáticamente el consumo de tabaco y ofrecer una consejería breve para que suspendan su consumo es uno de los grandes propósitos de los clínicos en el ámbito de la atención primaria, por lo que es necesario que los profesionales de la salud tengan la formación requerida para realizar un adecuado abordaje diagnóstico y terapéutico del tabaquismo, adheridos a las recomendaciones basadas en la literatura disponible.

        p.mb-0(data-aos="slide-up") De manera general se consideran como intervenciones efectivas para dejar de fumar: 

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down-right")
      .col-lg-3.row-color-1.p-4
        img.img-t.img-a.my-3(data-aos="flip-right")(src='@/assets/ilustraciones/img14.svg', alt='')       
        p Consejería breve incorporada a la práctica clínica.
        p Consejería intensiva.
      .col-lg-3.row-color-2.p-4
        img.img-t.img-a.my-3(data-aos="flip-right")(src='@/assets/ilustraciones/img15.svg', alt='')       
        p Tratamiento farmacológico para la cesación de tabaco.    
      .col-lg-3.row-color-3.p-4
        img.img-t.img-a.my-3(data-aos="flip-right")(src='@/assets/ilustraciones/img16.svg', alt='')       
        p Combinación de consejería y terapia farmacológica.

    .row.justify-content-center.align-items-center.card-bg-4.mt-5.p-4(data-aos="slide-down")    
      .col-lg-8
        p.mb-0.ml Para profundizar en las intervenciones, se invita a realizar la lectura de: Las directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo, publicadas por el Ministerio de Salud y Protección Social de Colombia. (2020).
      .col-lg-4
        a.my-4.anexo(:href="obtenerLink('/downloads/directrices-cesacion-consumo-atencion-tabaco.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo.] Directrices para promover la cesación del consumo de tabaco y atención del tabaquismo.
    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='')           
    #t_2_1.titulo-segundo.mt-5(data-aos="slide-right")
      h2 2.1  Consejería
    p.mt-5(data-aos="slide-down") La consejería se define como una actividad comunicativa que promueve tanto el diálogo entre el fumador y el profesional de la salud como el desarrollo de habilidades para que el fumador suspenda el consumo de tabaco.

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-up")       
      .col-lg-6.card-bg-3.p-2
        p.mb-0.text-center Dependiendo del tiempo de duración la consejería se puede considerar:
    .row.justify-content-center.align-items-center.mt-5
      .col-12   
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(data-aos="flip-down").img-a.img-t(src="@/assets/ilustraciones/img17.svg")
          .col-lg-2.d-none.d-lg-block
            img(data-aos="flip-down").img-a.img-t(src="@/assets/ilustraciones/img18.svg")
          .col-lg-2.d-none.d-lg-block
            img(data-aos="flip-down").img-a.img-t(src="@/assets/ilustraciones/img19.svg")
                
        SliderCajas(columns="col-lg-2")(data-aos="slide-down") 
          .row(titulo="Mínima").justify-content-center.align-items-center(data-aos="slide-down") 
            .col-lg-10
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.d-block.d-lg-none
                  img(src="@/assets/ilustraciones/img17.svg")            
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-lg-0
                  p.mb-0 Indagación de la existencia del factor de riesgo, el desestimular dicho consumo y la orientación de la persona dentro del Sistema de salud para recibir una intervención más estructurada para dejar de fumar (máximo 3 minutos de duración). 
                  .row-hr.mt-4
          .row(titulo="Breve").justify-content-center.align-items-center(data-aos="slide-down") 
            .col-lg-10
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.d-block.d-lg-none
                  img(src="@/assets/ilustraciones/img18.svg")               
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-lg-0
                  p.mb-0 Cuando dura entre 3 y 10 minutos y se realiza en un solo encuentro. 
                  .row-hr.mt-4
          .row(titulo="Intensiva").justify-content-center.align-items-center(data-aos="slide-down") 
            .col-lg-10
              .row.justify-content-center.align-items-center.mb-3
                .col-lg-2.d-block.d-lg-none
                  img(src="@/assets/ilustraciones/img19.svg")               
              .row.justify-content-center.align-items-center
                .col-lg-8.mb-lg-0
                  p.mb-0 Es aquella con una duración mayor de 10 minutos y que supone seguimiento. 
                  .row-hr.mt-4
                    
    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-right") 
      .col-12
        .list
          .list__item
              .list__item__bulletNumber
                  span 1
          .list__txt            
            h4.list-color Consejería breve            

    p(data-aos="slide-down") Es el asesoramiento para abandonar el consumo de productos de tabaco, impartido a todos los usuarios de tabaco, normalmente en el curso de una consulta o encuentro ordinarios. Esta asesoría dura solo menos de 10 minutos. Son intervenciones oportunistas, factibles y eficaces en función de los recursos disponibles. 
    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .bloque-texto-c.color-primario.p-4(data-aos="zoom-in")
          i.fas.fa-quote-right
          h5.mb-2 Las intervenciones breves, tienen como objetivo que las personas logren avanzar en el proceso de dejar de fumar o vapear y hagan intentos serios para conseguirlo. Deben ser aplicadas en el marco de la consulta y pueden tener una duración de 3 a 10 minutos. 
          span - Ministerio de Salud, 2020.

        p.mt-5(data-aos="slide-down") Las intervenciones breves han demostrado una tasa de cesación del 16 % frente a la no intervención (OR = 1,9). (Organización Panamericana de la Salud, 2020).

        .h4.mt-5(data-aos="slide-right").title-gray ● Modelos de consejería breve
        
        p.mt-5(data-aos="slide-left") Existen una serie de propuestas estandarizadas o modelos para llevar a cabo la consejería breve:
        .row.justify-content-between.align-items-center.mt-5
          .col-lg-5(data-aos="slide-right")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Modelo de las 3 Aes
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Modelo de las 5 Aes
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Modelo de las 5 Rs
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Modelo del ABC     
          .col-lg-5(data-aos="slide-left")
            img.img-a.img-t(src="@/assets/ilustraciones/img20.svg")

        p.mt-5(data-aos="slide-right") Se recomienda adoptar alguno de estos esquemas, pues resulta conveniente para el profesional de la salud dominar sistemáticamente alguna de las propuestas existentes. En Colombia, de acuerdo con la recomendación de expertos, se usa el modelo de las 5 Aes para la intervención en pacientes motivados para dejar de fumar y el modelo de las 5 Rs para los pacientes no motivados para dejar de fumar.

        .row.justify-content-center.align-items-center.mt-5(data-aos="slide-up")       
          .col-lg-10.card-bg-3.p-2
            p.mb-0.text-center A continuación, se describirán cada uno de los modelos de consejería breve enunciados. 

        .row.justify-content-between.align-items-center.mt-5
          .col-lg-5(data-aos="slide-right")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p.title-gray  #[b Modelo de las 3 Aes]

        p(data-aos="slide-down") Este esquema corresponde a las primeras 3 Aes del modelo de las 5 Aes, esquema de intervención breve para la cesación de tabaco más utilizada. Se denomina así, pues cada uno de los 3 pasos propuestos comienza por la letra A:

        .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down-left")
          .col-lg-3.br-1
            p.mb-0.text-center(data-aos="slide-down") #[b Modelo de las 3 Aes]  
        .row.justify-content-between.align-items-center.mt-5
          .col-lg-4.mb-5.mb-lg-0.color-row-1(data-aos="fade-down-right")
            #flipper1.flip-container.zoom
              .flipper.text-center(@click='(e) => flip("#flipper1")')
                .front.Text
                  h2.text-white A1
                .back.generic.py-4.px-5
                  h4.mb-1 Averiguar        

          .col-lg-4.mb-5.mb-lg-0.color-row-1(data-aos="fade-down")
            #flipper2.flip-container.zoom
              .flipper.text-center(@click='(e) => flip("#flipper2")')
                .front.Text
                  h2.text-white A2
                .back.generic.py-4.px-5
                  h4.mb-1 Asesorar  

          .col-lg-4.mb-5.mb-lg-0.color-row-1(data-aos="fade-down-left")
            #flipper3.flip-container.zoom
              .flipper.text-center(@click='(e) => flip("#flipper3")')
                .front.Text
                  h2.text-white A3
                .back.generic.py-4.px-5
                  h4.mb-1 Apreciar  

        p.mt-5(data-aos="slide-down") El #[b Modelo de las 3 Aes] corresponde a las denominadas #[b atenciones básicas para dejar de fumar], en el marco de las directrices para la implementación de programas para la atención del tabaquismo (Ministerio de Salud, 2020), que son acciones de intervención breve que se deben ofrecer de manera sistemática a todos los usuarios del sistema de salud, en el marco de la Ruta Integral de Promoción y Mantenimiento de la Salud, independientemente del motivo de consulta y tipo de atención.  

        .row.justify-content-between.align-items-center.mt-5
          .col-lg-5(data-aos="slide-right")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.title-gray  #[b Modelo de las 5 Aes]

        p.mb-5(data-aos="slide-down") Este modelo se refiere a la aplicación de los 5 pasos descritos a partir de las 5 Aes:

    .row.justify-content-center.align-items-stretch(data-aos="flip-down")
      .col-lg-2.row-card-color.p-0.m-0.d-none.d-lg-block
        img.img-a.img-t.m-0(src="@/assets/ilustraciones/a1.jpg")
        p.mt-4.mb-0.p-3.text-center #[b Averiguar]
      .col-lg-2.row-card-color.p-0.m-0.d-none.d-lg-block
        img.img-a.img-t.m-0(src="@/assets/ilustraciones/a2.jpg")
        p.mt-4.mb-0.p-3.text-center #[b Asesorar]
      .col-lg-2.row-card-color.p-0.m-0.d-none.d-lg-block
        img.img-a.img-t.m-0(src="@/assets/ilustraciones/a3.jpg")
        p.mt-4.mb-0.p-3.text-center #[b Apreciar motivación]
      .col-lg-2.row-card-color.p-0.m-0.d-none.d-lg-block
        img.img-a.img-t.m-0(src="@/assets/ilustraciones/a4.jpg")
        p.mb-0.p-3.text-center #[b Ayudar a diseñar un plan para dejar de fumar]
      .col-lg-2.row-card-color.p-0.m-0.d-none.d-lg-block
        img.img-a.img-t.m-0(src="@/assets/ilustraciones/a5.jpg")
        p.mt-3.mb-0.p-3.text-center #[b Arreglar un plan de seguimiento]
    
    .row.justify-content-center.align-items-stretch(data-aos="flip-down")
      .col-5.row-card-color.p-0.m-0.row-br.d-block.d-lg-none
        img.img-a.img-t(src="@/assets/ilustraciones/a1.jpg")
        p.mt-1.mb-0.p-3.text-center #[b Averiguar] 
      .col-5.row-card-color.p-0.m-0.row-br.d-block.d-lg-none
        img.img-a.img-t(src="@/assets/ilustraciones/a2.jpg")
        p.mt-1.mb-0.p-3.text-center #[b Asesorar]    
      .col-5.row-card-color.p-0.m-0.row-br.d-block.d-lg-none
        img.img-a.img-t(src="@/assets/ilustraciones/a3.jpg")
        p.mt-2.mb-0.p-3.text-center #[b Apreciar motivación]    
      .col-5.row-card-color.p-0.m-0.row-br.d-block.d-lg-none
        img.img-a.img-t(src="@/assets/ilustraciones/a4.jpg")
        p.mb-0.p-3.text-center #[b Ayudar a diseñar un plan para dejar de fumar]   
      .col-5.row-card-color.p-0.m-0.row-br.d-block.d-lg-none
        img.img-a.img-t(src="@/assets/ilustraciones/a5.jpg")
        p.mt-2.mb-0.p-3.text-center #[b Arreglar un plan de seguimiento]
    
    .row.justify-content-center.align-items-center.mt-5
      .col-10      
        p(data-aos="slide-down") Este modelo corresponde a las denominadas #[b intervenciones intermedias], en el marco de las directrices para la implementación de programas para la atención del tabaquismo (Ministerio de Salud, 2020), que son acciones de intervención breve programada, que deben ofrecer las EPS a través de su red de instituciones prestadoras de servicios de salud, tal como lo establece la Ley 1335 de 2009.

        .row.justify-content-between.align-items-center.mt-5
          .col-lg-5(data-aos="slide-right")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.title-gray #[b Modelo de las 5 Rs] 

        .row.justify-content-center.align-items-center
          .col-lg-7 
            p(data-aos="fade-down-right") La intervención breve de las “5 R” es una actividad comunicativa de corta duración (3 a 10 minutos) entre el profesional de la salud y la persona fumadora que no está preparada para realizar un intento formal para dejar de fumar en el momento actual. 

            p(data-aos="fade-down-right") Las bases teóricas para su realización provienen de una modalidad de consejería denominada “entrevista motivacional”, cuyos fundamentos se basan en el respeto al paciente, a sus creencias, a su escala de valores. No implica proponer un plan de tratamiento, sino colaborar y asesorar al fumador para que éste enuncie su propio plan de cambio.                          
          .col-lg-5(data-aos="fade-down-left")
            img.img-a.img-t(src="@/assets/ilustraciones/img22.png")

        .bloque-texto-d.color-secundario.p-4.mt-5(data-aos="zoom-in")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Al igual que con el modelo de las “5 Aes” existe evidencia proveniente de estudios clínicos que ratifican la efectividad de la consejería breve motivacional. Un metaanálisis demostró que el incremento de las tasas de cesación fue de 26 % (RR = 1,26; IC 95 % 1,16-1,36) cuando se compara la entrevista motivacional de mayor duración con la consejería breve. Sin embargo, este mismo estudio también encontró un incremento en las tasas de cesación cuando se llevan a cabo intervenciones motivacionales breves comparadas con la no intervención (RR = 1,69 IC 95 % 1,34-2,12; 9 estudios n = 3,651). 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Lindson, Thompson y Begh, 2015.
            
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8 
        img.img-a.img-t(data-aos="flip-down")(src="@/assets/ilustraciones/img23.png")
        p.mt-5(data-aos="fade-down-left") Vale la pena mencionar que este metaanálisis no encontró diferencias respecto al tipo de intervención breve realizada, no obstante, se recomienda que los países adopten un esquema estandarizado para llevar a cabo las intervenciones, motivo por el cual se recomienda adoptar el esquema de las “5 R” para los pacientes no motivados.

        .cajon.color-secundario.p-4.mt-5(data-aos="fade-up-left")
          p.mb-0 El modelo de las 5 Rs está diseñado para realizarse en menos de 10 minutos y se utilizan 5 pasos, cada uno de los cuales comienza con la letra “R”:  

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down-left")
      .col-lg-3.br-1
        p.mb-0.text-center(data-aos="slide-down") #[b Modelo de las 5 Rs]  
    .row.justify-content-center.align-items-center
      .col-lg-3.mt-5.mb-lg-0.color-row-1(data-aos="fade-down-right")
        #flipper4.flip-container.zoom
          .flipper.text-center(@click='(e) => flip("#flipper4")')
            .front.Text
              h2.text-white R1
            .back.generic.py-4.px-5
              h4.mb-1 Relevancia        

      .col-lg-3.mt-5.mb-lg-0.color-row-1(data-aos="fade-down")
        #flipper5.flip-container.zoom
          .flipper.text-center(@click='(e) => flip("#flipper5")')
            .front.Text
              h2.text-white R2
            .back.generic.py-4.px-5
              h4.mb-1 Riesgos  

      .col-lg-3.mt-5.mb-lg-0.color-row-1(data-aos="fade-down-left")
        #flipper6.flip-container.zoom
          .flipper.text-center(@click='(e) => flip("#flipper6")')
            .front.Text
              h2.text-white R3
            .back.generic.py-4.px-5
              h4.mb-1 Recompensas
    .row.justify-content-center.align-items-center
      .col-lg-3.mt-5.mb-lg-0.color-row-1(data-aos="fade-down-left")
        #flipper7.flip-container.zoom
          .flipper.text-center(@click='(e) => flip("#flipper7")')
            .front.Text
              h2.text-white R4
            .back.generic.py-4.px-5
              h4.mb-1 Resistencia     
      .col-lg-3.mt-5.mb-lg-0.color-row-1(data-aos="fade-down-left")
        #flipper8.flip-container.zoom
          .flipper.text-center(@click='(e) => flip("#flipper8")')
            .front.Text
              h2.text-white R5
            .back.generic.py-4.px-5
              h4.mb-1 Repetición 

    .row.justify-content-center.align-items-center.card-bg-4.mt-5.p-4(data-aos="slide-down")    
      .col-lg-8
        p.mb-0.ml Para profundizar en los modelos de consejería breve, se invita a consultar: las herramientas para aplicar las intervenciones breves de las 5A y las 5R para tratar el consumo de tabaco a nivel de la atención primaria, publicado por la Organización Panamericana de la Salud (2020).
      .col-lg-4
        a.my-4.anexo(:href="obtenerLink('/downloads/herramientas_para_aplicar_las_intervenciones_breves.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo.] Herramientas para aplicar las intervenciones breves de las 5A y las 5R para tratar el consumo de tabaco.
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .row.justify-content-between.align-items-center.mt-5
          .col-lg-5(data-aos="slide-right")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.title-gray #[b Modelo del ABC]

        p(data-aos="slide-down") Este modelo fue desarrollado por un grupo de investigadores de Nueva Zelandia a través de su Guía de Práctica Clínica, (Ministry of Health, 2014) y ha sido adoptado por otros países como Uruguay. 


    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-up")       
      .col-lg-6.card-bg-3-1.p-2
        p.mb-0.text-center Corresponde a las siguientes acciones:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-1.run-right
        img.img-a.img-t.my-3(data-aos="slide-right")(src="@/assets/ilustraciones/img24.svg")
      .col-lg-2
        img.img-a.img-t.my-3(data-aos="flip-down")(src="@/assets/ilustraciones/img25.svg")      
      .col-lg-2
        img.img-a.img-t.my-3(data-aos="flip-down")(src="@/assets/ilustraciones/img27.svg")      
      .col-lg-2
        img.img-a.img-t.my-3(data-aos="flip-down")(src="@/assets/ilustraciones/img26.svg")      
      .col-lg-1.run-left
        img.img-a.img-t.my-3(data-aos="slide-left")(src="@/assets/ilustraciones/img28.svg")

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-up")       
      .col-lg-6
        p.mb-0.text-center En el siguiente gráfico se comparan los diferentes modelos de intervención breve:
        .row-hr 

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in-up")       
      .col-lg-8
        img.img-a.img-t(src="@/assets/ilustraciones/img29.svg")
        figcaption.mt-3 Nota. OPS (2017).
    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-right") 
      .col-lg-12
        .list
          .list__item
              .list__item__bulletNumber
                  span 2
          .list__txt            
            h4.list-color Consejería intensiva 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="slide-right") 
        img.img-a.img-t.my-3(src="@/assets/ilustraciones/img30.png")
      .col-lg-7
        p(data-aos="slide-left")  Son esquemas de intervención de mayor duración (más de 10 minutos por sesión) que las intervenciones breves, se pueden realizar en diferentes momentos y son administradas por más de un profesional sanitario (equipo interdisciplinario). En general este tipo de intervenciones se aplica a los pacientes dispuestos a iniciar un proceso para dejar de fumar y que no lograron su objetivo con las intervenciones breves o requieren de un tratamiento multicomponente con un enfoque interdisciplinario.  (Ministerio de Salud, 2020).

        p(data-aos="slide-left")  Se ha demostrado que las intervenciones intensivas tienen mayores tasas de éxito que las breves. En términos generales, a mayor tiempo de contacto con el paciente mayor será su porcentaje de éxito (tasa de cesación al año). No obstante, también se ha encontrado que intervenciones que superen de manera acumulada los 300 minutos, no aportan mayor efectividad en términos de tasas de cesación. 

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        .bloque-texto-c.color-primario.p-4(data-aos="zoom-in")
          i.fas.fa-quote-right
          h5.mb-2 Para llevar a cabo este tipo de intervención se requiere que los profesionales de la salud tengan experiencia en el tratamiento de la dependencia tabáquica. Existen también distintos modelos o esquemas de consejería intensiva (entrevista motivacional, identificación de problemas y desarrollo de habilidades en el fumador). 
          span - Lancaster y Stead, 2017.

    p.mt-5(data-aos="slide-down") Las diferentes modalidades de la consejería intensiva corresponden a las denominadas #[b intervenciones avanzadas], en el marco de las directrices para la implementación de programas para la atención del tabaquismo, a continuación, se describen algunas de las modalidades de consejería intensiva:

    TabsC.color-acento-contenido.mt-5(data-aos="flip-down")
      .py-3.py-md-4(titulo="Intervención cognitivo – conductual")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.my-3(src="@/assets/ilustraciones/img31.png")
          .col-lg-6
            p Esta intervención, tiene como objetivo modificar los comportamientos adictivos por conductas más adaptativas y de mejores habilidades a la hora de afrontar los acontecimientos vitales y los estresores de la vida cotidiana. 

      .py-3.py-md-4(titulo="Intervención cognitivo – conductual")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.my-3(src="@/assets/ilustraciones/img32.png")
          .col-lg-6
            p Esta técnica parte del enfoque cognitivo-conductual, desde el cual se considera que cualquier conducta adictiva es resultado de unos patrones comportamentales aprendidos, tal como sucede en el consumo de tabaco, reconociendo el papel de los procesos cognitivos en el desarrollo, mantenimiento y modificación de la conducta del fumador y/o vapeador.
            

      .py-3.py-md-4(titulo="Orientación en la prevención y manejo de recaídas")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.my-3(src="@/assets/ilustraciones/img33.png")
          .col-lg-6
            p Intervención encaminada a prevenir la recaída a través del manejo de las situaciones que motivan el consumo y el seguimiento de un plan de recuperación.


      .py-3.py-md-4(titulo="Orientación en la prevención y manejo de recaídas")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.my-3(src="@/assets/ilustraciones/img34.png")
          .col-lg-6
            p El plan debe incluir autorregulación emocional y control del estrés e implica el reconocimiento de señales de riesgo de recaída, entre ellas la exposición a situaciones de tensión y estados emocionales negativos, conflictos interpersonales, pensamientos relacionados con la incapacidad de mantener la abstinencia y disminución de la motivación hacia el cambio.
          
    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='')           

    #t_2_2.titulo-segundo.mt-5(data-aos="slide-right")
      h2 2.2  Terapia farmacológica

    .row.justify-content-center.align-items-center.my-5
      .col-lg-9
        p(data-aos="fade-right") El abordaje farmacológico para la cesación del consumo de tabaco hace parte de una estrategia organizada, interdisciplinaria y multifactorial, además las prescripciones deben hacerse en el momento adecuado para cada paciente, según el estado de dependencia y evolución en el proceso que se encuentre.

        p(data-aos="fade-right") Los fumadores dependientes a la nicotina requieren un plan terapéutico que aborde los aspectos fisiológicos, específicamente los trastornos de la dependencia del tabaco y el síndrome de abstinencia, para esto tenga presente los siguientes pasos:      
      .col-lg-3
        img.img-a.img-t(data-aos="fade-left")(src="@/assets/ilustraciones/img35.svg")

    .tarjeta.tarjeta--azul.p-0.d-none.d-lg-block        
      SlyderA        
        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/1.svg', alt='')           
              .col-11.my-2
                p.mb-0 Complemento de la consejería en sus diferentes modalidades para lograr el cambio conductual.
      
        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/2.svg', alt='')           
              .col-11.my-2
                p.mb-0 Se utiliza por tiempo limitado, en general 8 a 12 semanas.    
      
        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/3.svg', alt='')           
              .col-11.my-2
                p.mb-0 Se debe ofrecer y recomendar a todo fumador que está en etapa de cambio o de preparación para dejar de fumar, en ausencia de contraindicaciones.
      
        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/4.svg', alt='')           
              .col-11.my-2
                p.mb-0 Aliviar los síntomas de abstinencia y ayudar a controlar ansias o impulso. 
      
        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/5.svg', alt='')           
              .col-11.my-2
                p.mb-0 En Colombia, están disponibles: parches, chicles y tabletas de nicotina, bupropión, vareniclina y clonidina, siendo este último, medicamento de segunda línea.

        .row.justify-content-center.align-items-center(data-aos="fade-right")       
          .col-lg-10.card-bg-2-1.p-0.m-0.d-none.d-lg-block
            .row.justify-content-center.align-items-center  
              .col-1.p-0
                img.img-t.img-a(src='@/assets/ilustraciones/6.svg', alt='')           
              .col-11.my-2
                p.mb-0 La utilización de fármacos duplica la probabilidad de dejar de fumar, con tasas de cesación a 6 meses alrededor del 25 %. Esta eficacia puede incrementarse cuando la medicación se combina con consejería, alcanzando tasas de éxito hasta de 27,6 %.

    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/1.svg', alt='')           
          .col-11.my-2
            p.mb-0 Complemento de la consejería en sus diferentes modalidades para lograr el cambio conductual.
  
    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none.mt-4
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/2.svg', alt='')           
          .col-11.my-2
            p.mb-0 Se utiliza por tiempo limitado, en general 8 a 12 semanas.    
  
    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none.mt-4
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/3.svg', alt='')           
          .col-11.my-2
            p.mb-0 Se debe ofrecer y recomendar a todo fumador que está en etapa de cambio o de preparación para dejar de fumar, en ausencia de contraindicaciones.
  
    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none.mt-4
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/4.svg', alt='')           
          .col-11.my-2
            p.mb-0 Aliviar los síntomas de abstinencia y ayudar a controlar ansias o impulso. 
  
    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none.mt-4
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/5.svg', alt='')           
          .col-11.my-2
            p.mb-0 En Colombia, están disponibles: parches, chicles y tabletas de nicotina, bupropión, vareniclina y clonidina, siendo este último, medicamento de segunda línea.

    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-10.card-bg-2-1.p-0.m-0.d-block.d-lg-none.mt-4
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/6.svg', alt='')           
          .col-11.my-2
            p.mb-0 La utilización de fármacos duplica la probabilidad de dejar de fumar, con tasas de cesación a 6 meses alrededor del 25 %. Esta eficacia puede incrementarse cuando la medicación se combina con consejería, alcanzando tasas de éxito hasta de 27,6 %.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        img.img-a.img-t.my-3(data-aos="fade-left")(src="@/assets/ilustraciones/img36.png")        
      .col-lg-9
        p(data-aos="fade-right") La terapia farmacológica está indicada en personas que presentan un grado de dependencia física a la nicotina, ayudando a aliviar los síntomas de abstinencia que se pueden presentar. Los medicamentos por sí solos no se recomiendan, siempre deben estar acompañados de un esquema de consejería que complementa el cambio de conducta respecto del consumo de tabaco.

        p(data-aos="fade-right") Los medicamentos de primera línea para la cesación de tabaco son la Terapia de Reemplazo Nicotínico, la vareniclina y el bupropión, cualquiera de los cuales incrementan significativamente las tasas de cesación de tabaco a largo plazo comparados con el placebo logrando tasas de hasta el 27 % al combinarse con consejería. 

        .bloque-texto-c.color-primario.p-4(data-aos="zoom-in")
          i.fas.fa-quote-right
          h5.mb-2 Siempre que resulte indicado, el paciente lo desee, se disponga de los medicamentos y no exista alguna contraindicación se deben utilizar como parte integral del tratamiento. 
          span - Cañas, 2014.

    p.mt-5(data-aos="slide-down") El alcance de la terapia farmacológica es ayudar al fumador a lograr su objetivo terapéutico: abandonar el consumo de tabaco. Tener presente las siguientes recomendaciones generales: 

    ol.mt-5.lista-ol--cuadro(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Se obtiene mejor rendimiento cuando son parte de una estrategia de consejería y seguimiento para dejar de fumar.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Usar fármacos en el intento de abandono, es una estrategia altamente costo-efectiva. Con su implementación, las tasas de éxito se elevan al doble o triple. 
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Se utiliza por tiempo limitado, en general 8 – 12 semanas.
      li 
        .lista-ol--cuadro__vineta
          span 4
        p.mb-0 Se debe ofrecer y recomendar a todo fumador que esté 
          strong preparado 
          |  para dejar de fumar, en ausencia de contraindicaciones.
      li 
        .lista-ol--cuadro__vineta
          span 5
        | Se pueden utilizar tanto en el marco de la intervención breve como de la intensiva.   

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-up")       
      .col-lg-8.card-bg-3.p-2
        p.mb-0.text-center Otros aspectos importantes para considerar son las indicaciones de farmacoterapia:  

    ol.mt-5.lista-ol--cuadro(data-aos="fade-left")
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Dependencia física a la nicotina en nivel moderada a alta (Test de Fagerstrom) y grado de tabaquismo moderado a grave (mayor de 15 paquetes/año).
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Personas con síntomas de abstinencia prolongados o muy intensos durante el proceso de cesación.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Historia de recaídas frecuentes.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Uso previo de medicación para dejar de fumar.
      li 
        .lista-ol--cuadro__vineta
          span 5
        p.mb-0 Idealmente en personas 
          strong preparadas 
          | para dejar de fumar.
      li 
        .lista-ol--cuadro__vineta
          span 6
        | Como parte de una estrategia de consejería y seguimiento para dejar de fumar.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-right") 
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img37.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En general, no se recomienda su uso en personas que consuman menos de 10 cigarrillos diarios, cuando existan contraindicaciones o en adolescentes y en gestantes por carecer de evidencia suficiente o por existir contraindicaciones para su uso en estos grupos de personas. (Becerra, Alba y Castillo, 2012). 
    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='')    
    #t_2_3.titulo-segundo.mt-5(data-aos="slide-right")
      h2 2.3  Otras intervenciones

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")
      .col-lg-10
        p Frente al uso de otras intervenciones terapéuticas como la acupuntura, la hipnosis y la homeopatía, no se ha encontrado evidencia que permita recomendar su uso como parte de los tratamientos efectivos para la cesación de tabaco. Por lo tanto, se recomienda exclusivamente el uso de los tratamientos con demostrada evidencia para la atención del tabaquismo. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-8
        img.img-a.img-t(src="@/assets/ilustraciones/img38.png")        

        .bloque-texto-d.color-secundario.p-4.mt-5(data-aos="fade-right")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular En los últimos años se ha planteado la posibilidad de usar los cigarrillos electrónicos, específicamente los que suministran nicotina, también conocidos como Sistemas Electrónicos de Suministro de Nicotina (SEAN) como una alternativa para el manejo del tabaquismo, pero aún no se cuenta con la evidencia suficiente para soportar la recomendación de esto, además pueden tener posibles efectos y daños para la salud y la posibilidad de generar dependencia a la nicotina especialmente en los adolescentes y jóvenes.  Por estas razones, no se recomienda el uso de los cigarrillos electrónicos para el tratamiento del tabaquismo en Colombia.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Ministerio de Salud y Protección Social de Colombia, 2020.

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-left")
      .col-lg-8
        img.img-a.img-t.img-margin.alert(src="@/assets/ilustraciones/img39.png")
        p.row-card-color-2.mb-0.text-center #[b En resumen, el tratamiento del tabaquismo incluye intervenciones terapéuticas que han demostrado ser eficaces, como son la consejería, la terapia farmacológica y la combinación de consejería y terapia farmacológica.]
</template>

<script>
import SliderCajas from '../components/SliderCajas'

export default {
  name: 'Tema2',
  components: {
    SliderCajas,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
