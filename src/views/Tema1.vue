<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Tabaquismo, una enfermedad 
    p(data-aos="slide-down") El tabaquismo es uno de los principales factores de riesgo prevenible para las enfermedades no transmisibles, se considera una enfermedad adictiva, resultado del consumo regular de productos del tabaco, que requiere con frecuencia de múltiples intentos para dejar de fumar. Actualmente la dependencia al tabaco se reconoce como un “trastorno mental y del comportamiento” tanto en Clasificación Internacional de Enfermedades (CIE-10), como en el Manual de Diagnóstico y Estadísticas de la Asociación Americana de Psiquiatría (DSM-IV), por lo que es importante reconocer esta afección y registrarla en la historia clínica de los pacientes consumidores de productos del tabaco.  

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-10.card-bg-1
        .row.justify-content-center.align-items-center  
          .col-lg-7.my-3
            p.ml.mb-0 El tabaquismo es una enfermedad crónica que se puede presentar con múltiples períodos de recaída, como consecuencia de la potente adicción física que genera la nicotina, sustancia considerada aún más adictiva que la cocaína y la heroína, razón por la cual no es tan difícil para las personas suspender su consumo. Afortunadamente, el tabaquismo es una enfermedad prevenible, tratable y recuperable.  	  
          .col-lg-5
            img.img-t.img-a(src='@/assets/ilustraciones/img1.jpg', alt='')
    p.mt-5.text-center(data-aos="slide-down") De acuerdo con la Organización Panamericana de la Salud (2009):
    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")       
      .col-lg-10.card-bg-2
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/1.svg', alt='')           
          .col-11.my-2
            p.mb-0 Se estima que, aunque el 70% de los fumadores desean cesar su consumo, solo el 3% logra mantenerse sin fumar después de un año de haberlo intentado sin la asistencia médica necesaria. 	  

    .row.justify-content-center.align-items-center.mt-3(data-aos="fade-left")       
      .col-lg-10.card-bg-2
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/2.svg', alt='')           
          .col-11.my-2
            p.mb-0 Aproximadamente el 30% de las personas que tienen una asistencia por parte del equipo de salud para la cesación logran el objetivo terapéutico: dejar de fumar.	 

    .row.justify-content-center.align-items-center.mt-3(data-aos="fade-right")       
      .col-lg-10.card-bg-2
        .row.justify-content-center.align-items-center  
          .col-1.p-0
            img.img-t.img-a(src='@/assets/ilustraciones/3.svg', alt='')           
          .col-11.my-2
            p.mb-0 No existe un nivel seguro de consumo de productos de tabaco o sucedáneos (incluyendo los cigarrillos electrónicos), ni de exposición al humo de segunda mano. Todo consumo de tabaco es perjudicial para la salud. 

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='')           

    #t_1_1.titulo-segundo.mt-5(data-aos="slide-right")
      .h4 1.1  Triple dependencia del tabaquismo 

    p.mt-5(data-aos="slide-down") El tabaquismo resulta del consumo constante de productos del tabaco o sus derivados, generando el fenómeno conocido como la triple dependencia: dependencia física, psicológica y social. En cada fumador puede encontrarse en menor o mayor medida cada uno de los componentes de la triple dependencia del tabaquismo, las cuales se presentan en el siguiente recurso de aprendizaje:
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-4.card-bg-3.p-2
        p.mb-0.text-center Dependencia

    .row.justify-content-center.align-items-center.mt-5       
      .col-lg-4(data-aos="fade-down-right")         
        .contenedor
          img(src='@/assets/ilustraciones/img2.svg' )
          img.top(src='@/assets/ilustraciones/img_h1.svg')
          

      .col-lg-4(data-aos="fade-down")
        .contenedor
          img(src='@/assets/ilustraciones/img3.svg' @mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")          
          img.top(src='@/assets/ilustraciones/img_h2.svg')

      .col-lg-4(data-aos="fade-down-left")
        .contenedor
          img(src='@/assets/ilustraciones/img4.svg')
          img.top(src='@/assets/ilustraciones/img_h3.svg')            

    SlyderB(:datos="datosSlyder")(data-aos="flip-down")

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='') 

    #t_1_2.titulo-segundo.mt-5(data-aos="slide-right")
      .h4 1.2 Efectos de la nicotina a nivel cerebral 

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in-down")       
      .col-lg-12.card-bg-3.p-3 
        .row.justify-content-center.align-items-center
          .col-lg-5(data-aos="slide-right") 
            img.img-t.img-a(src='@/assets/ilustraciones/img8.svg', alt='')          
          .col-lg-7.my-3(data-aos="slide-left") 
            p La nicotina ejerce su acción a nivel del sistema nervioso central, específicamente sobre los receptores acetilcolinérgicos (área tegmental ventral del mesencéfalo).

            p Se estimulan los receptores nicotínicos, generando un aumento en la liberación de dopamina a nivel del núcleo accumbens. 

            p.mb-0 Esta respuesta produce sensación de recompensa, explicando la necesidad de consumo. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-down")       
      .col-lg-6
        p.text-center A continuación se presentan el esquema de impacto de la nicotina en el cerebro, uno tras la vía dopaminérgica y el otro por vía noradrenérgica: 

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-8
        img.img-t.img-a(src='@/assets/ilustraciones/img9.svg', alt='')          

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/hr-before-h2.svg', alt='') 
    
    #t_1_3.titulo-segundo.mt-5(data-aos="slide-right")
      .h4 1.3  Síndrome de abstinencia

    p.mt-5(data-aos="slide-down") Cuando una persona deja de fumar, se produce una respuesta bioquímica muy intensa a nivel de la vía noradrenérgica, como respuesta al descenso de los niveles de nicotina, manifestándose los signos del síndrome de abstinencia.      

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-10.card-bg-3.p-2
        p.mb-0.text-center A continuación, se listan los síntomas de este síndrome que son los responsables de las recaídas frecuentes en el proceso de cesación:	 

    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-8
        img.img-t.img-a(data-aos="fade-down")(src='@/assets/ilustraciones/img10.png', alt='') 
        .row.justify-content-between.align-items-center.mt-5      
          .col-lg-7(data-aos="fade-down-right") 
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Tos 

              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cefaleas 

              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Deseo intenso de fumar 

              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Aumento del apetito / aumento de peso 

              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Cambios en el estado de ánimo (tristeza, irritabilidad, ira)                                                                 
          .col-lg-5(data-aos="fade-down-left") 
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Agitación / ansiedad 

              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Dificultad para concentrarse 

              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Insomnio 

              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Frecuencia cardíaca reducida 

              li 
                .lista-ol--cuadro__vineta
                  span 10
                | Síntomas similares a la gripe 

        p.mt-5(data-aos="slide-down") Estos síntomas son más intensos en las primeras 24 a 48 horas después de suspender el consumo de tabaco, aunque van disminuyendo gradualmente en intensidad durante las siguientes 2 o 3 semanas. En general, después de los 14 días, los síntomas del síndrome de abstinencia son menos intensos, por lo que una vez el paciente logra superar la barrera de los 14 días sin consumo de tabaco, la posibilidad de presentar síndrome de abstinencia es mucho menor, como se observa en la figura 1. 

        .BorTit.mt-5(data-aos="fade-down")  Base de superior masculina         
        img.mt-4.img-t.img-a(data-aos="fade-down")(src='@/assets/ilustraciones/img11.svg', alt='')
        figcaption.mt-3 Nota. Organización Panamericana de la Salud (2017). Taller cesación de tabaco 2017.  
        p.mt-5(data-aos="slide-down") Es importante conocer la evolución del síndrome de abstinencia, para poder informar a los pacientes, tranquilizarlos y tomar las medidas anticipatorias necesarias.  

    #t_1_4.titulo-segundo.mt-5(data-aos="slide-right")
      .h4 1.4  Beneficios de la cesación del tabaco y productos derivados   

    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-4(data-aos="fade-right")
        img.img-t.img-a.my-3(src='@/assets/ilustraciones/img12.png', alt='') 
      .col-lg-8 
        p(data-aos="fade-down-left") Los beneficios de abandonar el consumo de tabaco se hacen evidentes inmediatamente, generando un impacto positivo sobre la salud, calidad de vida y situación económica de las personas, además de los efectos positivos sobre el entorno de las personas que conviven con el fumador. Dejar de fumar antes de los 40 años disminuye el riesgo de muerte asociada al tabaquismo en un 90%. 
        .cajon.color-primario.p-4(data-aos="fade-up-left")
          p.mb-0 Existen tratamientos efectivos para el tratamiento del tabaquismo, no obstante, los índices de abordaje del tabaquismo en el ámbito del cuidado primario siguen siendo muy bajos. Un estudio realizado en Chile, (Alcántara–Gómez et al, 2016), reportó que solamente el 43,7% de los pacientes atendidos en un escenario de atención primaria fue evaluado sobre el consumo de tabaco, y del total de fumadores, solo al 37,1% se le aconsejó dejar de fumar. 

    p.mt-5(data-aos="slide-down") Es por este motivo surge la necesidad de fortalecer los sistemas de salud para alcanzar una adecuada atención del tabaquismo en los diferentes entornos a partir de una oportuna identificación de personas consumidoras de tabaco o productos derivados y la aplicación de intervenciones efectivas para la cesación del consumo.

    p.mt-5(data-aos="slide-down") En la siguiente tabla 1 se encuentran los principales beneficios para la salud de dejar de consumir tabaco o sus derivados.                  

    .BorTit.mt-5(data-aos="fade-down")  Tabla 1. Principales beneficios de dejar de fumar.
    .tabla-b.color-acento-contenido.mt-3(data-aos="slide-down")
      table
        caption Nota. Adaptada de Organización Mundial de la Salud (2019).
        tr.table-bg
          td.text-center.text-white Tiempo desde que se deja de fumar
          td.text-center.text-white Beneficios para la salud
        tr
          td.text-center 20 minutos
          td.t-border Descienden la frecuencia cardíaca y presión arterial
        tr
          td.text-center 12 horas 
          td.t-border El nivel de monóxido de carbono en la sangre desciende a lo normal         
        tr
          td.text-center 2 – 12 semanas 
          td.t-border Mejora la circulación y aumenta la función pulmonar
        tr
          td.text-center 1 -9 meses 
          td.t-border Disminuyen la tos y la disnea  
        tr
          td.text-center 1 año 
          td.t-border El riesgo de padecer enfermedad coronaria es cerca de la mitad del riesgo de un fumador         
        tr
          td.text-center 5 años 
          td.t-border De 5 a 15 años después de dejar de fumar, el riesgo de sufrir accidentes cerebrovasculares se reduce al riesgo de un no fumador
        tr
          td.text-center 10 años 
          td.t-border El riesgo de padecer cáncer de pulmón desciende a cerca de la mitad del riesgo de un fumador y disminuye el riesgo de padecer cáncer de boca, garganta, esófago, vejiga urinaria, cérvix y páncreas.  
        tr
          td.text-center 15 años 
          td.t-border El riesgo de padecer cardiopatía coronaria es igual al de un no fumador.                            

    .row.justify-content-center.align-items-center.card-bg-3.mt-5.p-4(data-aos="slide-down")    
      .col-lg-8
        p.mb-0.ml Para profundizar en los beneficios de la cesación del tabaco y productos derivados realizar la lectura de ABECÉ efectos en la salud por el consumo de tabaco del Ministerio de Salud  
      .col-lg-4
        a.anexo(:href="obtenerLink('/downloads/abece-efectos-salud-tabaco.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. abece efectos salud tabaco

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Dependencia física:',
        texto:
          'Corresponde a un período de neuro-adaptación ocasionado por la administración repetida de una sustancia (nicotina), generando la necesidad de continuar su consumo, para evitar los síntomas generados por su privación (síndrome de abstinencia). <br><br>El consumo de la sustancia puede generar un doble refuerzo conductual, que puede ser positivo o negativo:<br><br>●  Refuerzo positivo: Fumar por los efectos positivos de la droga (nicotina)<br>●  Refuerzo negativo: Fumar para evitar los síntomas de abstinencia.<br>',
        imagen: require('@/assets/ilustraciones/img5.png'),
      },
      {
        titulo: 'Dependencia psicológica',
        texto:
          '●  Corresponde a las asociaciones aprendidas entre el consumo de la sustancia (nicotina) y las circunstancias relacionadas con la conducta de fumar.<br>●  La repetición de situaciones, emociones y actividades asociadas al consumo de una sustancia (nicotina), generando cambios de conducta perdurables.<br>●  Asociado con condicionamientos y aprendizajes asociativos.',
        imagen: require('@/assets/ilustraciones/img6.png'),
      },
      {
        titulo: 'Dependencia social',
        texto:
          '● Hace referencia al refuerzo del consumo de la sustancia a partir de estímulos sociales.<br>Presión de pares (inicio y mantenimiento del consumo).<br>●  Consumo de la sustancia como método de aceptación social.<br>●  Entorno favorecedor: padres y modelos fumadores.',
        imagen: require('@/assets/ilustraciones/img7.png'),
      },
    ],
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
