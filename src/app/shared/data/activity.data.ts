import { Activities } from "../base/activity.types";

export const ACTIVITIES: Activities = {
  "cases": [
    {
      "idAccess": "m1_final",
      "type": "cases",
      "monocase": true,
      "header": {
        "title": {
          "courseTitle": "Formación Integral para el Emprendedorismo",
          "evaluationTitle": "Evaluación Final - Habilidades Clave para Emprender",
          "subtitle": "Actividad de comprobación del Módulo 1"
        },
        "instructions": {
          "instructionText": [
            "Esta evaluación integra los contenidos trabajados en la jornada \"Habilidades Clave para Emprender\".",
            "Leé atentamente cada situación y seleccioná la opción que consideres más adecuada según los conceptos vistos en la clase.",
            "El objetivo es evaluar tu capacidad de análisis, reflexión y aplicación práctica de herramientas vinculadas al autoconocimiento, las habilidades blandas, la adaptabilidad y la gestión del tiempo."
          ]
        }
      },
      "passingScore": 7,
      "cases": [
        {
          "caseTitle": "CASO INTEGRADOR ÚNICO",
          "situation": "Mariano tiene 38 años y hace seis meses comenzó un emprendimiento de estampado y diseño de remeras personalizadas desde su casa. Trabaja muchas horas por día porque además tiene otro empleo de media jornada.\nAunque logra vender algunos productos por redes sociales y recomendaciones, siente que constantemente está apagando incendios y que nunca termina de organizarse.\nActualmente:\n\t● Responde mensajes de clientes a cualquier hora del día.\n\t● Acepta todos los pedidos aunque algunos no le resulten convenientes.\n\t● Suele postergar tareas administrativas porque “no le gustan”.\n\t● Se frustra rápidamente cuando surgen cambios o problemas con proveedores.\n\t● Tiene buenas ideas creativas, pero le cuesta priorizar tareas.\n\t● Nunca realizó un análisis personal sobre sus fortalezas y debilidades como emprendedor.\nMariano quiere profesionalizar su emprendimiento, reducir el estrés y mejorar su organización para poder crecer de manera más sostenible.",
          "score": 10,
          "questions": [
            {
              "title": "BLOQUE 1 - Habilidades blandas y autoconocimiento",
              "question": "¿Cuál de las siguientes situaciones refleja principalmente una dificultad vinculada a la gestión del tiempo?",
              "options": [
                {
                  "answer": "Tener creatividad para diseñar productos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Ofrecer productos personalizados",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Responder mensajes a cualquier hora y no priorizar tareas",
                  "isCorrect": true,
                  "justification": "La gestión del tiempo implica organizar tareas, establecer prioridades y administrar horarios de trabajo. La falta de límites y organización afecta directamente la productividad y el bienestar."
                },
                {
                  "answer": "Trabajar desde su casa",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Cuál de las siguientes habilidades blandas necesita fortalecer Mariano para enfrentar mejor los cambios y problemas con proveedores?",
              "options": [
                {
                  "answer": "Memoria",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Velocidad de producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Adaptabilidad",
                  "isCorrect": true,
                  "justification": "La adaptabilidad permite ajustarse a nuevas situaciones, resolver problemas y responder mejor frente a cambios e imprevistos del contexto emprendedor."
                },
                {
                  "answer": "Manejo técnico de impresión",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Qué herramienta trabajada en el módulo ayudaría a Mariano a identificar fortalezas, debilidades, oportunidades y amenazas?",
              "options": [
                {
                  "answer": "Canvas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Técnica de Pomodoro",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "FODA personal",
                  "isCorrect": true,
                  "justification": "El FODA personal permite analizar factores internos y externos que impactan en el desarrollo personal y emprendedor."
                },
                {
                  "answer": "Organigrama",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "¿Cuál de las siguientes opciones representa una fortaleza dentro de un FODA personal?",
              "options": [
                {
                  "answer": "Inflación y aumento de costos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Mucha competencia en redes sociales",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Buena creatividad para diseñar productos",
                  "isCorrect": true,
                  "justification": "Las fortalezas son aspectos internos positivos que ayudan al emprendimiento, como capacidades, conocimientos o habilidades personales."
                },
                {
                  "answer": "Cambios en tendencias del mercado",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "¿Por qué las habilidades blandas son importantes para emprender?",
              "options": [
                {
                  "answer": "Porque reemplazan totalmente los conocimientos técnicos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque solo sirven para grandes empresas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque ayudan a relacionarse, organizarse y adaptarse mejor",
                  "isCorrect": true,
                  "justification": "Las habilidades blandas facilitan la comunicación, la toma de decisiones, la organización y la adaptación frente a contextos cambiantes."
                },
                {
                  "answer": "Porque permiten evitar todos los problemas del negocio",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "title": "BLOQUE 2 - Adaptabilidad y gestión del tiempo",
              "question": "¿Qué situación representa un \"ladrón de tiempo\" frecuente?",
              "options": [
                {
                  "answer": "Planificar tareas semanalmente",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Delegar tareas específicas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Revisar constantemente redes sociales mientras se trabaja",
                  "isCorrect": true,
                  "justification": "Las interrupciones constantes y el uso excesivo de redes sociales dificultan la concentración y reducen la productividad."
                },
                {
                  "answer": "Organizar horarios de trabajo",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "¿Cuál sería una acción concreta para mejorar la organización diaria de Mariano?",
              "options": [
                {
                  "answer": "Trabajar sin horarios definidos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Aceptar todos los pedidos sin analizar tiempos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Definir prioridades y horarios específicos de trabajo",
                  "isCorrect": true,
                  "justification": "Definir horarios y prioridades permite organizar mejor las tareas y evitar el agotamiento."
                },
                {
                  "answer": "Responder mensajes durante toda la madrugada",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "¿Qué significa \"resistencia al cambio\"?",
              "options": [
                {
                  "answer": "Adaptarse rápidamente a nuevas situaciones",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Buscar soluciones creativas frente a problemas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Mantener hábitos conocidos por miedo o inseguridad",
                  "isCorrect": true,
                  "justification": "La resistencia al cambio aparece cuando las personas se aferran a formas conocidas de actuar por temor a la incertidumbre."
                },
                {
                  "answer": "Cambiar permanentemente de emprendimiento",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "Si Mariano detecta que pierde mucho tiempo respondiendo mensajes, ¿qué herramienta podría ayudarlo?",
              "options": [
                {
                  "answer": "Definir horarios específicos para responder consultas",
                  "isCorrect": true,
                  "justification": "Organizar momentos específicos para responder mensajes mejora la concentración y el orden de trabajo."
                },
                {
                  "answer": "Trabajar más horas sin descanso",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Aceptar todos los pedidos posibles",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Eliminar completamente las redes sociales",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
            {
              "question": "¿Por qué el autoconocimiento es importante para emprender?",
              "options": [
                {
                  "answer": "Porque evita completamente los errores",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque permite reconocer fortalezas, límites y necesidades de mejora",
                  "isCorrect": true,
                  "justification": "El autoconocimiento ayuda a tomar mejores decisiones, organizar recursos personales y desarrollar habilidades necesarias para crecer."
                },
                {
                  "answer": "Porque reemplaza la planificación del negocio",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque garantiza el éxito económico inmediato",
                  "isCorrect": false,
                  "justification": ""
                },
              ]
            },
          ]
        },
      ],
      feedback: {
        resultOk: [
          "¡Felicitaciones!",
          "En esta jornada trabajaste herramientas fundamentales para fortalecer tu rol emprendedor, desarrollando habilidades vinculadas al autoconocimiento, la adaptabilidad y la organización del tiempo.",
          "Comprender cómo gestionás tus tareas, emociones y decisiones es clave para construir un emprendimiento más sostenible y saludable en el tiempo.",
          "Todo lo trabajado en este módulo será una base importante para las próximas jornadas, donde comenzarás a profundizar en planificación, costos, clientes y estrategias para hacer crecer tu proyecto.",
        ],
        resultNotOk: [
          "En esta jornada comenzaste a trabajar habilidades fundamentales para el desarrollo emprendedor. Si bien todavía no alcanzaste el puntaje necesario, este proceso también forma parte del aprendizaje.",
          "Te sugerimos revisar especialmente los siguientes contenidos:",
          "\t● Habilidades blandas y su importancia\n\t● FODA personal\n\t● Adaptabilidad y resistencia al cambio\n\t● Gestión del tiempo y ladrones de tiempo",
          "Reforzar estos conceptos te va a ayudar a organizar mejor tu emprendimiento y tomar decisiones más claras y sostenibles en el tiempo.",
        ]
      }
    },
    {
      "idAccess": "m2_final",
      "type": "cases",
      "monocase": true,
      "header": {
        "title": {
          "courseTitle": "Formación Integral para el Emprendedorismo",
          "evaluationTitle": "Evaluación Final - Idear y Planificar",
          "subtitle": "Actividad de comprobación del Módulo 2"
        },
        "instructions": {
          "instructionText": [
            "Esta evaluación integra los contenidos trabajados en el segundo encuentro del curso. Leé atentamente cada caso y seleccioná la opción que consideres más adecuada en función de lo aprendido.",
            "El objetivo es evaluar tu capacidad de análisis, razonamiento y toma de decisiones en contextos reales de emprendimiento."
          ]
        }
      },
      "passingScore": 7,
      "cases": [
        {
          "caseTitle": "CASO INTEGRADOR ÚNICO",
          "situation": "Sofía tiene 34 años y trabaja en relación de dependencia con jornada completa. Desde hace un año vende viandas caseras saludables a conocidos, compañeros de trabajo y contactos que llegan por recomendación. Comenzó el emprendimiento para generar un ingreso extra, pero con el tiempo notó que muchas personas valoran la practicidad de sus productos, especialmente quienes trabajan todo el día y no quieren cocinar.\n\nActualmente, Sofía:\n\n\t● Acepta pedidos muy variados (viandas saludables, menúes especiales, tortas, comidas para eventos pequeños).\n\t● No tiene definidos precios fijos ni un criterio claro para calcularlos.\n\t● Compra los insumos semana a semana, según los pedidos que surgen.\n\t● No tiene definido un tipo de cliente objetivo.\n\t● Percibe que existen muchas propuestas similares en redes sociales, pero no tiene claro qué la diferencia.\n\t● Siente que le gusta emprender, aunque no sabe si esto puede transformarse en un negocio sostenible en el tiempo.\n\nSofía se encuentra en un momento de decisión: continuar como hasta ahora o empezar a pensar su emprendimiento de manera más estratégica.",
          "score": 10,
          "questions": [
            {
              "title": "BLOQUE 1 - Comprensión estratégica",
              "question": "Según el caso, el emprendimiento de Sofía se identifica principalmente como:",
              "options": [
                {
                  "answer": "Emprendimiento por herencia",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Emprendimiento por necesidad",
                  "isCorrect": true,
                  "justification": "Sofía comienza a emprender como complemento de ingresos frente a una necesidad económica. Si bien luego detecta una oportunidad, el origen del emprendimiento es la necesidad, tal como se trabaja en los tipos de emprendedores."
                },
                {
                  "answer": "Emprendimiento por oportunidad",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Emprendimiento innovador tecnológico",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Cuál de los siguientes problemas muestra que la idea aún no está pensada como negocio sostenible?",
              "options": [
                {
                  "answer": "La venta a través de WhatsApp",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "La falta de precios estables y definición de clientes",
                  "isCorrect": true,
                  "justification": "Un negocio sostenible requiere planificación, precios claros y clientes definidos. La falta de estos elementos afecta la viabilidad del emprendimiento."
                },
                {
                  "answer": "La elaboración de viandas saludables",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "El trabajo en relación de dependencia",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Qué pregunta clave del análisis de la idea emprendedora NO está claramente respondida en el caso?",
              "options": [
                {
                  "answer": "¿Qué quiero hacer?",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "¿Qué problema concreto resuelvo?",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "¿Por qué me elegirían a mí?",
                  "isCorrect": true,
                  "justification": "Sofía no tiene definido su diferencial ni su propuesta clara frente a la competencia, aspecto central del análisis de la idea."
                },
                {
                  "answer": "¿Cómo se llama el emprendimiento?",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Cuál sería la función principal de la misión del emprendimiento en este momento?",
              "options": [
                {
                  "answer": "Describir el crecimiento futuro a largo plazo",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Definir el propósito actual y el valor que ofrece",
                  "isCorrect": true,
                  "justification": "La misión explica qué hace hoy el emprendimiento, para quién y cómo genera valor. Es una herramienta clave para ordenar decisiones iniciales."
                },
                {
                  "answer": "Establecer los precios de los productos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Analizar a la competencia directa",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "title": "BLOQUE 2 - Modelo de Negocio Canvas",
              "question": "¿Cuál de los siguientes elementos pertenece al bloque \"Propuesta de Valor\" del Modelo Canvas?",
              "options": [
                {
                  "answer": "Costos fijos del emprendimiento",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Problemas que resuelve el producto",
                  "isCorrect": true,
                  "justification": "La propuesta de valor se centra en los problemas que se resuelven y el valor diferencial que se ofrece al cliente."
                },
                {
                  "answer": "Proveedores de insumos",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Canales de distribución",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si Sofía define como clientes a \"personas que trabajan todo el día y no cocinan\", ¿en qué bloque del Canvas se trabaja esta decisión?",
              "options": [
                {
                  "answer": "Canales",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Recursos clave",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Segmentos de clientes",
                  "isCorrect": true,
                  "justification": "Los segmentos de clientes identifican a quién se dirige el emprendimiento y son fundamentales para definir el resto del modelo."
                },
                {
                  "answer": "Fuentes de ingreso",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Aceptar pedidos muy distintos entre sí impacta negativamente principalmente en qué bloque del Canvas?",
              "options": [
                {
                  "answer": "Relación con clientes",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Actividades clave",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Propuesta de valor",
                  "isCorrect": true,
                  "justification": "Una propuesta de valor poco clara genera confusión tanto interna como hacia el cliente y dificulta la planificación del negocio."
                },
                {
                  "answer": "Fuentes de ingreso",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Cuál de los siguientes bloques ayuda a ordenar cómo se va a cobrar y cuánto están dispuestos a pagar los clientes?",
              "options": [
                {
                  "answer": "Canales",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Fuentes de ingreso",
                  "isCorrect": true,
                  "justification": "Las fuentes de ingreso permiten definir precios, formas de cobro y la lógica económica del negocio."
                },
                {
                  "answer": "Socios clave",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Recursos físicos",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "El hecho de comprar insumos sin planificación impacta directamente en:",
              "options": [
                {
                  "answer": "Segmentos de clientes",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Estructura de costos",
                  "isCorrect": true,
                  "justification": "La falta de planificación en compras genera desorden en costos y afecta la rentabilidad y sostenibilidad del emprendimiento."
                },
                {
                  "answer": "Relación con clientes",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Canales de comunicación",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Por qué el Modelo Canvas se considera una herramienta dinámica?",
              "options": [
                {
                  "answer": "Porque se completa una sola vez",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque reemplaza al plan de negocios tradicional",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Porque se ajusta y mejora a medida que el emprendimiento evoluciona",
                  "isCorrect": true,
                  "justification": "El Canvas no es un documento cerrado; se revisa y ajusta a medida que se valida la idea y el negocio crece."
                },
                {
                  "answer": "Porque solo sirve para grandes empresas",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            }
          ]
        }
      ],
      feedback: {
        resultOk: [
          "¡Felicitaciones!",
          "En esta jornada lograste transformar una idea inicial en una primera estructura de negocio, reflexionando sobre tu rol como emprendedor/a, tu motivación, la propuesta de valor y los componentes clave del Modelo de Negocio.",
          "Este trabajo es una base fundamental para seguir avanzando. Todo lo que definiste en esta clase te va a permitir tomar mejores decisiones en las próximas etapas del emprendimiento.",
          "En la Jornada 3: Costos y Precios, vas a profundizar en cómo calcular, ordenar y analizar los números de tu negocio para que sea sostenible en el tiempo. Te recomendamos conservar todo lo trabajado hasta acá, ya que lo vas a volver a utilizar."
        ],
        resultNotOk: [
          "En esta jornada comenzaste a trabajar sobre tu idea de negocio, tu motivación y la estructura básica del emprendimiento. Si bien aún no alcanzaste el puntaje necesario, este proceso es parte del aprendizaje.",
          "Te sugerimos revisar especialmente los siguientes contenidos antes de avanzar:",
          "● Análisis de la idea emprendedora\n● Diferencia entre misión y visión\n● Bloques y lógica del Modelo de Negocio Canvas",
          "Revisar estos conceptos te va a ayudar a ordenar mejor tu idea y a comprender cómo se conectan las distintas partes del negocio.",
          "Todo lo trabajado en esta jornada será clave para la Jornada 3: Costos y Precios, donde comenzarás a poner números a tu emprendimiento."
        ]
      }
    },
    {
      "idAccess": "m3_final",
      "type": "cases",
      "monocase": true,
      "header": {
        "title": {
          "courseTitle": "Formación Integral para el Emprendedorismo",
          "evaluationTitle": "Evaluación Final - Costos y Precios",
          "subtitle": "Actividad de comprobación del Módulo 3"
        },
        "instructions": {
          "instructionText": [
            "Esta evaluación integra los contenidos trabajados en el segundo encuentro del curso. Lee atentamente cada caso y selecciona la opción que consideres más adecuada en función de lo aprendido.",
            "El objetivo es evaluar tu capacidad de análisis, razonamiento y toma de decisiones en contextos reales de emprendimiento."
          ]
        }
      },
      "passingScore": 7,
      "cases": [
        {
          "caseTitle": "CASO INTEGRADOR ÚNICO",
          "situation": "Marina tiene un emprendimiento de velas artesanales aromáticas.\nProduce desde su casa y vende a través de redes sociales, ferias de emprendedores y una tienda online.\nEn los últimos meses comenzó a ordenar sus números porque sentía que trabajaba mucho pero no sabía con claridad si estaba ganando dinero.\nProduce una vela estándar que representa el 80% de sus ventas.\n\nCostos fijos mensuales\n\t● Alquiler del espacio de trabajo compartido: $240.000\n\t● Servicios, internet y electricidad: $60.000\n\t● Impuestos, insumos generales y gastos administrativos: $100.000\nTotal costos fijos mensuales = $400.000\n\nCostos variables por unidad\n\t● Cera y fragancia: $2.000\n\t● Envase: $800\n\t● Etiqueta y packaging: $700\n\t● Comisión de venta online: $500\nCosto variable unitario = $4.000\n\nMarina desea trabajar con un margen del 75% sobre el costo. Actualmente estima vender 400 velas por mes, aunque algunos meses las ventas bajan.\n\nAdemás está evaluando:\n\t● participar en más ferias,\n\t● ofrecer promociones,\n\t● o ajustar precios para sostener su rentabilidad.",
          "score": 10,
          "questions": [
            {
              "title": "Costo unitario",
              "question": "Identificá el costo variable unitario considerando todos los elementos necesarios para producir cada vela.",
              "options": [
                {
                  "answer": "$2.000",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "$3.000",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "$4.000",
                  "isCorrect": true,
                  "justification": "Reconocer los costos directos permite construir una base sólida para calcular precios."
                },
                {
                  "answer": "$5.500",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "title": "Precio de venta sugerido",
              "question": "Si el costo unitario es $4.000 y desea aplicar un margen del 75%, ¿qué precio debería considerar?",
              "options": [
                {
                  "answer": "$5.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$6.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$7.000",
                  "justification": "Aplicar el margen sobre el costo permite construir precios coherentes con la rentabilidad buscada.",
                  "isCorrect": true
                },
                {
                  "answer": "$8.500",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Margen bruto por unidad",
              "question": "Si el precio es $7.000 y el costo variable es $4.000, ¿cuál es el margen bruto por vela?",
              "options": [
                {
                  "answer": "$2.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$3.000",
                  "justification": "La diferencia entre precio y costo directo permite visualizar el aporte de cada producto al negocio.",
                  "isCorrect": true
                },
                {
                  "answer": "$4.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$7.000",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Ingreso mensual estimado",
              "question": "Si vende 400 velas a $7.000, ¿cuál sería el ingreso total mensual por ventas?",
              "options": [
                {
                  "answer": "$1.200.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$2.400.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$2.800.000",
                  "justification": "Relacionar volumen con precio permite proyectar ingresos y analizar escenarios.",
                  "isCorrect": true
                },
                {
                  "answer": "$3.200.000",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Ganancia bruta total",
              "question": "Si el margen bruto por unidad es $3.000 y vende 400 velas, ¿cuál sería la ganancia bruta total?",
              "options": [
                {
                  "answer": "$600.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$900.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "$1.200.000",
                  "justification": "El margen unitario multiplicado por el volumen permite estimar el resultado operativo inicial.",
                  "isCorrect": true
                },
                {
                  "answer": "$2.800.000",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Resultado final del emprendimiento",
              "question": "Si la ganancia bruta es $1.200.000 y los costos fijos son $400.000, ¿cuál sería el resultado final aproximado?",
              "options": [
                {
                  "answer": "Déficit de $400.000",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Equilibrio",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Superávit de $800.000",
                  "justification": "Descontar costos fijos permite aproximarse al resultado económico final.",
                  "isCorrect": true
                },
                {
                  "answer": "Superávit de $1.200.000",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Punto de equilibrio",
              "question": "Si cada vela aporta $3.000 para cubrir costos fijos de $400.000, ¿cuántas velas debería vender para alcanzar el equilibrio?",
              "options": [
                {
                  "answer": "80",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "100",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "134",
                  "justification": "Relacionar costos fijos con margen unitario permite estimar el mínimo de ventas necesario.",
                  "isCorrect": true
                },
                {
                  "answer": "400",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Interpretación del equilibrio",
              "question": "Si vende menos de 134 velas por mes, ¿qué situación podría enfrentar?",
              "options": [
                {
                  "answer": "Siempre obtiene ganancia",
                  "justification": "Podría ayudarte volver a pensar qué ocurre cuando las ventas no alcanzan el mínimo necesario.",
                  "isCorrect": false
                },
                {
                  "answer": "No cubre todos sus costos",
                  "justification": "El punto de equilibrio funciona como referencia mínima para sostener la actividad.",
                  "isCorrect": true
                },
                {
                  "answer": "Tiene margen neto positivo",
                  "justification": "Podría ayudarte volver a pensar qué ocurre cuando las ventas no alcanzan el mínimo necesario.",
                  "isCorrect": false
                },
                {
                  "answer": "Sus costos fijos desaparecen",
                  "justification": "Podría ayudarte volver a pensar qué ocurre cuando las ventas no alcanzan el mínimo necesario.",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Escenario de baja de ventas",
              "question": "Si en un mes vende solo 100 velas manteniendo el mismo precio y costos, ¿qué situación es más probable?",
              "options": [
                {
                  "answer": "Cubrir todos los costos",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Estar cerca del equilibrio",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Tener pérdidas",
                  "justification": "Comparar el volumen real con el punto de equilibrio ayuda a anticipar resultados económicos.",
                  "isCorrect": true
                },
                {
                  "answer": "Obtener alta rentabilidad",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            },
            {
              "title": "Toma de decisiones",
              "question": "Si Marina detecta que su margen es bajo pero quiere sostener ventas, ¿qué estrategia sería más coherente con lo trabajado?",
              "options": [
                {
                  "answer": "Bajar precios sin analizar costos",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Vender por debajo del costo",
                  "justification": "",
                  "isCorrect": false
                },
                {
                  "answer": "Revisar costos y agregar valor al producto",
                  "justification": "Ajustar costos y diferenciar la propuesta permite mejorar la sostenibilidad sin comprometer el negocio.",
                  "isCorrect": true
                },
                {
                  "answer": "Ignorar los números y aumentar producción",
                  "justification": "",
                  "isCorrect": false
                }
              ]
            }
          ]
        }
      ],
      
    },
    {
      "idAccess": "m4_final",
      "type": "cases",
      "monocase": true,
      "header": {
        "title": {
          "courseTitle": "Formación Integral para el Emprendedorismo",
          "evaluationTitle": "Evaluación Final - Jornada Gestión Operativa",
          "subtitle": "Actividad de comprobación del Módulo 4"
        },
        "instructions": {
          "instructionText": [
            "Esta evaluación integra los contenidos trabajados en el cuarto encuentro  del curso. Lee atentamente cada caso y selecciona la opción que consideres más adecuada en función de lo aprendido.",
            "El objetivo es evaluar tu capacidad de análisis, razonamiento y toma de decisiones en contextos reales de emprendimiento."
          ]
        }
      },
      "passingScore": 7,
      "cases": [
        {
          "caseTitle": "CASO PRÁCTICO",
          "situation": "Valentina tiene un emprendimiento de productos de decoración artesanal.\nDatos actuales:\n\t● Vende 180 unidades por mes.\n\t● Precio promedio por unidad: $12.000.\n\t● Facturación mensual promedio: $2.160.000.\n\t● Cobra el 60% en 2 cuotas.\n\t● Su proveedor tarda 25 días en entregar.\n\t● Stock actual: 50 unidades.\n\t● Stock mínimo definido: 70 unidades.\n\t● Stock de seguridad: 30 unidades.\n\t● Pagó $1.400.000 a proveedores esta semana.\n\t● Está inscripta en Monotributo.\n\t● No está inscripta en Ingresos Brutos.\n\t● No registró su marca.\n\t● No analiza ticket promedio ni rotación.\n\t● Su alícuota estimada de IIBB sería 3%.",
          "score": 10,
          "questions": [
            {
              "question": "Según los datos de consumo y reposición, la situación de stock es:",
              "options": [
                {
                  "answer": "Normal",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Por encima del mínimo",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Crítica",
                  "isCorrect": true,
                  "justification": "Vende 180 unidades por mes (≈6 por día). Con 50 unidades y 25 días de reposición, no cubre el consumo proyectado (150 unidades en 25 días). Está por debajo del stock mínimo (70) y del nivel de seguridad (30 adicionales), lo que indica riesgo inmediato."
                },
                {
                  "answer": "De sobrestock",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si decide comprar solo por un descuento del 10% por volumen sin analizar ventas, estaría cometiendo:",
              "options": [
                {
                  "answer": "Optimización financiera",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Compra estratégica",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Compra basada solo en precio",
                  "isCorrect": true,
                  "justification": "El descuento no garantiza eficiencia si inmoviliza capital o supera la capacidad de rotación."
                },
                {
                  "answer": "Diversificación de riesgo",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "El impacto inmediato de haber pagado $1.400.000 y cobrar el 60% en cuotas será:",
              "options": [
                {
                  "answer": "Mejora automática del margen",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Tensión en el cash flow",
                  "isCorrect": true,
                  "justification": "Paga hoy y cobra después. El flujo de caja se ve presionado aunque el negocio sea rentable."
                },
                {
                  "answer": "Aumento de rentabilidad",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Mayor stock de seguridad",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si factura $2.160.000 y su IIBB es 3%, el impuesto estimado sería:",
              "options": [
                {
                  "answer": "$64.800",
                  "isCorrect": true,
                  "justification": "2.160.000 x 3% = 64.800. Se calcula sobre facturación total."
                },
                {
                  "answer": "$6.480",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "$21.600",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "$216.000",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "No inscribirse en IIBB implica:",
              "options": [
                {
                  "answer": "No pagar nada adicional",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Riesgo de deuda provincial acumulada",
                  "isCorrect": true,
                  "justification": "IIBB es provincial y no está incluido en Monotributo."
                },
                {
                  "answer": "Que el Monotributo lo absorbe",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Que solo paga si hay ganancia",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Qué indicador le permitiría saber si vende menos unidades pero mantiene facturación?",
              "options": [
                {
                  "answer": "Margen bruto",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Ticket promedio",
                  "isCorrect": true,
                  "justification": "El ticket promedio muestra cuánto gasta cada cliente."
                },
                {
                  "answer": "Punto de equilibrio",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Caja operativa",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si registrás tu marca ante el Instituto Nacional de la Propiedad Industrial, ¿qué beneficio obtenés?",
              "options": [
                {
                  "answer": "Exclusividad de uso y protección legal",
                  "isCorrect": true,
                  "justification": "El registro otorga derecho exclusivo de uso y respaldo jurídico frente a terceros."
                },
                {
                  "answer": "Reducción impositiva",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Prioridad automática en licitaciones públicas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Exención de tasas administrativas",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Qué acción mejora el cash flow de un emprendimiento?",
              "options": [
                {
                  "answer": "Cobrar anticipos y negociar plazos con proveedores",
                  "isCorrect": true,
                  "justification": "Mejora la sincronización entre ingresos y egresos de fondos."
                },
                {
                  "answer": "Comprar más stock sin rotación",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Pagar todas las compras al contado",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Aumentar gastos fijos mensuales",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Estar por debajo del stock mínimo significa:",
              "options": [
                {
                  "answer": "Nivel planificado de operación",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Punto de equilibrio",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Umbral de reposición superado",
                  "isCorrect": true,
                  "justification": "El stock mínimo es el umbral que activa reposición."
                },
                {
                  "answer": "Reserva estratégica",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "La principal debilidad de gestión de Valentina es:",
              "options": [
                {
                  "answer": "Falta de publicidad",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Falta de indicadores y planificación integrada",
                  "isCorrect": true,
                  "justification": "Los problemas cruzan stock, caja, impuestos y medición."
                },
                {
                  "answer": "Precio alto",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Falta de redes sociales",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "idAccess": "m5_final",
      "type": "cases",
      "monocase": true,
      "header": {
        "title": {
          "courseTitle": "Formación Integral para el Emprendedorismo",
          "evaluationTitle": "Evaluación Final - Branding, Comunicación, Marketing, Venta Digital y Networking",
          "subtitle": "Actividad de comprobación del Módulo 5"
        },
        "instructions": {
          "instructionText": [
            "Esta evaluación integra los contenidos trabajados en el cuarto encuentro  del curso. Lee atentamente cada caso y selecciona la opción que consideres más adecuada en función de lo aprendido.",
            "El objetivo es evaluar tu capacidad de análisis, razonamiento y toma de decisiones en contextos reales de emprendimiento."
          ]
        }
      },
      "passingScore": 7,
      "cases": [
        {
          "caseTitle": "CASO PRÁCTICO",
          "situation": "Marcos tiene 29 años y hace dos años comenzó un emprendimiento de venta de productos de cuidado personal naturales (jabones artesanales, cremas y aceites corporales).\nAl principio vendía principalmente a familiares y conocidos, pero recientemente decidió empezar a promocionar sus productos en redes sociales.\nActualmente, su emprendimiento presenta las siguientes características:\n\t● Publica productos en Instagram de forma ocasional, sin una estrategia clara de contenido.\n\t● Utiliza distintos estilos de comunicación en cada publicación.\n\t● No tiene definido qué lo diferencia de otros emprendimientos similares.\n\t● Sus publicaciones muestran los productos, pero explican poco sus beneficios.\n\t● Muchas personas le preguntan precios por mensaje privado, pero pocas concretan la compra.\n\t● Marcos participa de ferias y eventos emprendedores, aunque le cuesta explicar rápidamente qué hace diferente a su marca.\n\nMarcos siente que su emprendimiento tiene potencial, pero percibe que no está logrando comunicar claramente el valor de sus productos ni posicionar su marca en el mercado.",
          "score": 10,
          "questions": [
            {
              "title": "Branding y comunicación",
              "question": "Según el caso, ¿cuál es uno de los principales problemas de comunicación del emprendimiento de Marcos?",
              "options": [
                {
                  "answer": "Vender productos naturales",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "No tener suficiente producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "No tener una identidad y mensaje de marca claros",
                  "isCorrect": true,
                  "justification": "Una marca necesita comunicar de manera coherente su identidad, valores y propuesta. La falta de un mensaje claro genera confusión en el público y dificulta el posicionamiento."
                },
                {
                  "answer": "No utilizar redes sociales",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Qué concepto del branding ayuda a definir cómo se quiere que el público perciba la marca?",
              "options": [
                {
                  "answer": "Propuesta de valor",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Identidad de marca",
                  "isCorrect": true,
                  "justification": "La identidad de marca reúne los elementos visuales, verbales y conceptuales que construyen la forma en que el público percibe el emprendimiento."
                },
                {
                  "answer": "Estrategia de precios",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Segmentación de mercado",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si Marcos quiere explicar mejor por qué sus productos son diferentes, ¿qué debería trabajar principalmente?",
              "options": [
                {
                  "answer": "El diseño del logo",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "La propuesta de valor",
                  "isCorrect": true,
                  "justification": "La propuesta de valor define qué problema se resuelve y qué beneficio diferencial ofrece el producto frente a otras opciones del mercado."
                },
                {
                  "answer": "El volumen de producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "La cantidad de publicaciones",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Cuál sería el objetivo de desarrollar un elevator pitch para su emprendimiento?",
              "options": [
                {
                  "answer": "Explicar todo el proceso productivo",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Presentar el emprendimiento de forma clara y breve",
                  "isCorrect": true,
                  "justification": "El elevator pitch permite presentar rápidamente el emprendimiento, explicar qué hace y despertar interés en posibles clientes o contactos."
                },
                {
                  "answer": "Mostrar todos los productos disponibles",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Definir el precio de cada producto",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "title": "Marketing, venta digital y networking",
              "question": "Publicar productos sin explicar sus beneficios puede afectar principalmente:",
              "options": [
                {
                  "answer": "La logística del negocio",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "La decisión de compra del cliente",
                  "isCorrect": true,
                  "justification": "Los clientes necesitan comprender qué problema resuelve el producto o qué beneficio ofrece para decidir la compra."
                },
                {
                  "answer": "La calidad del producto",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Los costos de producción",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Si muchas personas consultan precios pero pocas compran, esto puede indicar:",
              "options": [
                {
                  "answer": "Falta de interés en el producto",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Problemas en el proceso de comunicación o venta",
                  "isCorrect": true,
                  "justification": "Cuando hay interés inicial pero no se concreta la compra, suele existir una dificultad en la comunicación del valor, el precio o el proceso de venta."
                },
                {
                  "answer": "Exceso de clientes potenciales",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Falta de stock",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Las redes sociales, para un emprendimiento, funcionan principalmente como:",
              "options": [
                {
                  "answer": "Herramientas de producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Canales de comunicación y marketing",
                  "isCorrect": true,
                  "justification": "Las redes sociales permiten comunicar la marca, mostrar productos, generar confianza y establecer contacto con clientes potenciales."
                },
                {
                  "answer": "Sistemas contables",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Plataformas de logística",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Participar en ferias y eventos emprendedores permite principalmente:",
              "options": [
                {
                  "answer": "Reducir los costos de producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Generar contactos, visibilidad y oportunidades comerciales",
                  "isCorrect": true,
                  "justification": "Las ferias funcionan como espacios de networking que permiten conocer clientes, proveedores y otros emprendedores."
                },
                {
                  "answer": "Automatizar ventas",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Reemplazar el marketing digital",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "Definir un público objetivo claro permite principalmente:",
              "options": [
                {
                  "answer": "Publicar más contenido",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Comunicar de manera más efectiva",
                  "isCorrect": true,
                  "justification": "Cuando el público objetivo está definido, la comunicación puede adaptarse mejor a sus necesidades, intereses y hábitos."
                },
                {
                  "answer": "Reducir el tiempo de producción",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Evitar la competencia",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            },
            {
              "question": "¿Por qué es importante que la comunicación de la marca sea coherente en todas las publicaciones?",
              "options": [
                {
                  "answer": "Para publicar menos contenido",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Para generar reconocimiento y confianza en el público",
                  "isCorrect": true,
                  "justification": "La coherencia en la comunicación fortalece la identidad de marca y ayuda a que los clientes reconozcan y recuerden el emprendimiento."
                },
                {
                  "answer": "Para reducir los costos de marketing",
                  "isCorrect": false,
                  "justification": ""
                },
                {
                  "answer": "Para aumentar la producción",
                  "isCorrect": false,
                  "justification": ""
                }
              ]
            }
          ]
        }
      ],
      "feedback": {
        "resultOk": [
          "¡Felicitaciones!",
          "En esta jornada trabajaste sobre un aspecto fundamental del emprendimiento: cómo comunicar tu propuesta de valor y posicionar tu marca en el mercado.",
          "Comprender el rol del branding, el marketing y la comunicación estratégica te permite generar mayor visibilidad, conectar con tus clientes y fortalecer el crecimiento de tu emprendimiento."
        ],
        "resultNotOk": [
          "En esta jornada comenzaste a trabajar sobre la identidad de marca, la comunicación y las estrategias de marketing para emprendedores.",
          "Si bien aún no alcanzaste el puntaje necesario, este proceso forma parte del aprendizaje.",
          "Te sugerimos revisar especialmente los siguientes contenidos antes de avanzar:\n\t● Concepto de branding e identidad de marca\n\t● Propuesta de valor y diferenciación\n\t● Uso de redes sociales como canal de comunicación\n\t● Importancia del público objetivo\n\t● Rol del networking en los emprendimientos",
          "Revisar estos conceptos te ayudará a comprender mejor cómo posicionar tu emprendimiento y comunicarlo de manera efectiva."
        ]
      }
    }
  ],
  "quizTF": [
    {
      "idAccess": "m3_c1",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Comprendiendo los costos",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": [
            "Determinar si la siguiente afirmación es verdadera o falsa."
          ]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "Los costos fijos continúan existiendo aunque el emprendimiento no registre ventas durante un período.",
          "answer" : {
            "correct": true,
            "justificationCorrect": "Esta idea aparece vinculada a aquellos gastos necesarios para sostener la estructura del emprendimiento más allá del nivel de actividad. Puede ayudarte revisar los ejemplos vistos.",
            "justificationIncorrect": "Te sugerimos volver a pensar qué gastos permanecen aunque el nivel de ventas sea bajo o nulo y revisar la clasificación de costos presentada en el módulo."
            }
        }
      ],
    },
    {
      "idAccess": "m3_c3",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Punto de equilibrio",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si la siguiente afirmación es verdadera o falsa."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El punto de equilibrio representa una situación donde ingresos y costos totales se encuentran en el mismo nivel.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Este concepto está vinculado a un momento donde el emprendimiento cubre sus gastos sin generar aún resultados positivos.",
            "justificationIncorrect": "Te proponemos revisar el apartado donde se relacionan ingresos, costos y resultados del negocio."
          }
        }
      ]
    },
    {
      "idAccess": "m3_c4",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Financiamiento y capital semilla",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si la siguiente afirmación es verdadera o falsa."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "title": "1 - Costos fijos y variables",
          "question": "Los costos variables cambian en función del nivel de producción o ventas, mientras que los costos fijos se mantienen constantes aunque no se venda nada. ",
          "answer": {
            "correct": true,
            "justificationCorrect": "Los costos variables están ajustados a la producción y venta. Los costos fijos no dependen de la producción o venta.",
            "justificationIncorrect": "No es correcto."
          }
        },
        {
          "title": "2 - Precio de venta",
          "question": "El precio de venta debe ser suficiente para cubrir los costos directos, los gastos del negocio y además generar una ganancia.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Costos Fijos + Costos Variables + Ganancia deseada = Precio de Venta.",
            "justificationIncorrect": "No es correcto."
          }
        },
        {
          "title": "3 - Margen bruto y margen neto",
          "question": "El margen bruto no tiene en cuenta todos los gastos del negocio, mientras que el margen neto no considera el costo directo del producto o servicio. ",
          "answer": {
            "correct": false,
            "justificationCorrect": "El margen bruto tiene en cuenta los gastos del negocio, mientras que el margen neto considera el costo directo del producto o servicio.",
            "justificationIncorrect": "No es correcto."
          }
        },
        {
          "title": "4 - Punto de equilibrio",
          "question": "El punto de equilibrio es el nivel de ventas en el cual los ingresos superan  costos totales, por lo que la utilidad es un número positivo. ",
          "answer": {
            "correct": false,
            "justificationCorrect": "El punto de equilibrio es el nivel de ventas en el cual los ingresos son exactamente iguales a la suma de los costos totales, por lo que la utilidad es cero.",
            "justificationIncorrect": "No es correcto."
          }
        },
        {
          "title": "5 - Capital semilla",
          "question": "El capital semilla es el dinero inicial que se utiliza para poner en marcha un emprendimiento y siempre debe devolverse. ",
          "answer": {
            "correct": false,
            "justificationCorrect": "El capital semilla es el dinero inicial que se utiliza para poner en marcha un emprendimiento y según de donde provenga hay que devolverlo o no.",
            "justificationIncorrect": "No es correcto."
          }
        },
        {
          "title": "6 - Financiamiento",
          "question": "El financiamiento implica obtener recursos de terceros que, en general, deben ser devueltos en un plazo determinado y no tienen ningún costo financiero. ",
          "answer": {
            "correct": false,
            "justificationCorrect": "El financiamiento siempre arroja un costo financiero.",
            "justificationIncorrect": "No es correcto."
          }
        }
      ]
    },
     {
      "idAccess": "m4_c6",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Registro de marca",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "Una marca registrada tiene una vigencia de 10 años y puede renovarse.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Correcto. En Argentina, la marca se otorga por 10 años desde su concesión y puede renovarse indefinidamente por períodos iguales, siempre que se cumplan los requisitos legales.",
            "justificationIncorrect": "Incorrecto. La Ley de Marcas establece que la protección tiene duración de 10 años, pero permite renovaciones sucesivas si el titular mantiene el uso y realiza los trámites correspondientes."
          }
        },
        {
          "question": "Durante el proceso de registro, terceros pueden presentar oposiciones si consideran que la marca afecta sus derechos.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Correcto. Luego de la publicación de la solicitud, existe un período en el cual terceros pueden oponerse si consideran que la marca genera confusión o afecta derechos previos.",
            "justificationIncorrect": "Incorrecto. El sistema prevé una etapa de oposiciones para proteger derechos de titulares de marcas previamente registradas."
          }
        }
      ]
     },
     {
      "idAccess": "m4_c7",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Indicadores de desempeño",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El punto de equilibrio es un indicador que permite conocer el nivel de ventas necesario para cubrir costos sin generar ganancias ni pérdidas.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Correcto. Este indicador permite identificar el volumen mínimo de ventas necesario para sostener el negocio y es clave para la planificación financiera.",
            "justificationIncorrect": "Incorrecto. El punto de equilibrio no mide rentabilidad sino el nivel en el que los ingresos se igualan a los costos totales."
          }
        },
        {
          "question": "Los indicadores deben analizarse solo una vez al año para evaluar el desempeño del negocio.",
          "answer": {
            "correct": false,
            "justificationCorrect": "Correcto. El seguimiento debe ser periódico (mensual, trimestral, etc.) para detectar desvíos y aplicar mejoras a tiempo.",
            "justificationIncorrect": "Incorrecto. Analizar indicadores únicamente al final del año dificulta la detección temprana de problemas y limita la capacidad de corrección."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c1",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Branding",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El branding consiste principalmente en diseñar un logo atractivo y elegir colores llamativos.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El branding es un proceso estratégico integral que incluye identidad visual, identidad verbal, promesa de valor, experiencia del cliente y posicionamiento. El logo es solo una parte del sistema.",
            "justificationIncorrect": "Reducir el branding al diseño gráfico limita la construcción estratégica de marca y afecta el posicionamiento a largo plazo."
          }
        },
        {
          "question": "Una marca fuerte permite justificar precios más altos porque genera confianza y diferenciación.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Cuando una marca transmite profesionalismo, coherencia y valor diferencial, el cliente percibe mayor calidad y está dispuesto a pagar más. En el mercado argentino actual, la confianza reduce la sensibilidad al precio.",
            "justificationIncorrect": "Si la marca no genera valor percibido, el precio se convierte en el único factor competitivo."
          }
        },
        {
          "question": "La identidad verbal debe adaptarse al público objetivo y al posicionamiento de la marca.",
          "answer": {
            "correct": true,
            "justificationCorrect": "El tono, el vocabulario y la forma de comunicación deben ser coherentes con el segmento al que se dirige el emprendimiento. Una marca premium no puede comunicar igual que una marca juvenil y accesible.",
            "justificationIncorrect": "Una comunicación incoherente genera confusión y debilita la percepción de profesionalismo."
          }
        },
        {
          "question": "El posicionamiento ideal de una marca es intentar ser la más económica, la más innovadora y la más personalizada al mismo tiempo.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El posicionamiento implica ocupar un lugar claro y específico en la mente del consumidor. Intentar abarcar todo diluye el mensaje y genera falta de claridad estratégica.",
            "justificationIncorrect": "Una marca sin foco pierde diferenciación y dificulta la toma de decisiones del cliente."
          }
        },
        {
          "question": "Si un emprendimiento tiene una estética cuidada en redes sociales pero responde tarde los mensajes y no cumple plazos, su branding se ve afectado negativamente.",
          "answer": {
            "correct": true,
            "justificationCorrect": "La experiencia del cliente es parte central del branding. La percepción de marca se construye en cada punto de contacto, especialmente en la venta digital.",
            "justificationIncorrect": "El branding no termina en la comunicación visual; se confirma en la experiencia real del cliente."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c2",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Comunicación estratégica para emprendedores",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "La comunicación en un emprendimiento consiste principalmente en responder mensajes y publicar en redes sociales.",
          "answer": {
            "correct": false,
            "justificationCorrect": "La comunicación estratégica implica transmitir con claridad quién sos, qué ofrecés y por qué deberían elegirte. No es solo responder mensajes, sino construir imagen, posicionamiento y reputación.",
            "justificationIncorrect": "Reducir la comunicación a tareas operativas impide comprender su impacto en la percepción de marca y en las ventas."
          }
        },
        {
          "question": "Una comunicación clara reduce objeciones y facilita la decisión de compra del cliente.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Cuando la información es precisa, completa y fácil de entender, disminuyen dudas e inseguridades. Esto acelera el proceso de decisión y mejora la conversión.",
            "justificationIncorrect": "Los mensajes ambiguos generan fricción, consultas repetidas y desconfianza."
          }
        },
        {
          "question": "Usar palabras técnicas y complejas siempre transmite mayor profesionalismo.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El lenguaje claro demuestra dominio del tema. En contextos digitales y ventas por redes sociales, la simplicidad mejora la comprensión y la experiencia del cliente.",
            "justificationIncorrect": "El exceso de tecnicismos puede generar confusión, distancia y pérdida de oportunidades comerciales."
          }
        },
        {
          "question": "El estilo de comunicación debe adaptarse según el público y el canal utilizado.",
          "answer": {
            "correct": true,
            "justificationCorrect": "No es lo mismo comunicar en Instagram que en LinkedIn o en una ronda de negocios. El tono, vocabulario y enfoque deben ajustarse al interlocutor para mantener coherencia y efectividad.",
            "justificationIncorrect": "Un estilo único para todos los públicos puede generar desconexión y afectar el posicionamiento."
          }
        },
        {
          "question": "El Elevator Pitch debe durar aproximadamente entre 30 y 60 segundos y tener una estructura clara.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Un buen elevator pitch incluye gancho, problema, solución, diferenciador y cierre. Su objetivo es generar interés y abrir una oportunidad concreta.",
            "justificationIncorrect": "Si el elevator pitch es improvisado o demasiado extenso, pierde claridad e impacto, reduciendo oportunidades de negocio."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c3",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Marketing estratégico para emprendedores",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El marketing consiste principalmente en hacer publicaciones en redes sociales y publicidad.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El marketing es una estrategia integral que incluye conocer el mercado, definir el público objetivo, crear una propuesta de valor, elegir canales y medir resultados. La publicidad es solo una parte del proceso.",
            "justificationIncorrect": "Reducir el marketing a publicaciones o anuncios lleva a acciones improvisadas sin planificación ni objetivos claros."
          }
        },
        {
          "question": "Si un emprendimiento dice que su producto es para todos, tiene más posibilidades de vender.",
          "answer": {
            "correct": false,
            "justificationCorrect": "Definir un público objetivo específico permite comunicar mejor, elegir canales adecuados y diferenciarse. Cuando se intenta hablarle a todos, el mensaje pierde efectividad.",
            "justificationIncorrect": "La falta de segmentación genera mensajes genéricos que no conectan con ningún cliente en particular."
          }
        },
        {
          "question": "La propuesta de valor se centra en el beneficio que obtiene el cliente y no solo en el producto que se vende.",
          "answer": {
            "correct": true,
            "justificationCorrect": "La propuesta de valor explica por qué alguien debería elegir ese emprendimiento y qué problema resuelve para el cliente.",
            "justificationIncorrect": "Hablar solo del producto sin mostrar beneficios reduce el impacto del mensaje y la diferenciación."
          }
        },
        {
          "question": "Las promociones deberían usarse constantemente para mantener ventas altas.",
          "answer": {
            "correct": false,
            "justificationCorrect": "Las promociones son herramientas tácticas y deben utilizarse estratégicamente. Usarlas todo el tiempo puede bajar la percepción de valor y acostumbrar al cliente a comprar solo con descuento.",
            "justificationIncorrect": "Genera dependencia del precio y afecta la rentabilidad del emprendimiento."
          }
        },
        {
          "question": "Medir resultados como alcance, consultas o ventas permite mejorar la estrategia de marketing.",
          "answer": {
            "correct": true,
            "justificationCorrect": "El marketing estratégico se basa en datos para ajustar acciones y tomar decisiones informadas.",
            "justificationIncorrect": "Sin medición no es posible saber qué funciona y qué debe mejorarse."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c4",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Venta digital",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "La venta digital consiste simplemente en publicar un producto en redes sociales y esperar que el cliente compre.",
          "answer": {
            "correct": false,
            "justificationCorrect": "La venta digital es un proceso estructurado que incluye atracción, contacto, presentación de oferta, resolución de dudas, cierre, cobro y seguimiento. Requiere estrategia y gestión activa.",
            "justificationIncorrect": "Pensar que la venta ocurre sola lleva a la falta de seguimiento, baja conversión y ventas inestables."
          }
        },
        {
          "question": "Responder rápido en entornos digitales aumenta las probabilidades de concretar una venta.",
          "answer": {
            "correct": true,
            "justificationCorrect": "En canales como Instagram y WhatsApp, la inmediatez es clave. Si el cliente no recibe respuesta en un plazo breve, suele consultar a otro proveedor.",
            "justificationIncorrect": "La demora transmite desorganización y reduce la confianza del cliente."
          }
        },
        {
          "question": "Ofrecer múltiples medios de pago facilita el cierre de ventas.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Cuanto más simple y flexible sea el pago (transferencia, tarjetas, cuotas, link de pago), mayor será la tasa de conversión.",
            "justificationIncorrect": "Limitar los medios de pago puede generar abandono de la compra, incluso si el cliente está interesado."
          }
        },
        {
          "question": "El proceso correcto de venta digital es: Oferta → Contacto → Cobro → Seguimiento.",
          "answer": {
            "correct": false,
            "justificationCorrect": "Primero se genera la conversación, luego se presenta la propuesta, se formaliza el pago y finalmente se realiza seguimiento.",
            "justificationIncorrect": "Presentar la oferta sin comprender primero la necesidad del cliente reduce la efectividad de la venta."
          }
        },
        {
          "question": "El seguimiento postventa es opcional, ya que la venta finaliza cuando el cliente paga.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El seguimiento fideliza, genera confianza y puede impulsar recompras o recomendaciones. Es una parte estratégica del proceso.",
            "justificationIncorrect": "No realizar seguimiento implica perder oportunidades de fidelización y construcción de reputación."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c5",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Packaging y presentación",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El packaging tiene como única función envolver y proteger el producto durante la entrega.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El packaging también comunica valor, posicionamiento e identidad de marca. Es una experiencia que refuerza la percepción del cliente y puede influir en la recompra.",
            "justificationIncorrect": "Reducir el packaging solo a protección desaprovecha su potencial estratégico como herramienta de branding y marketing."
          }
        },
        {
          "question": "Un packaging coherente con la identidad de marca ayuda a generar confianza y reconocimiento.",
          "answer": {
            "correct": true,
            "justificationCorrect": "La coherencia visual entre marca y presentación fortalece la percepción profesional y facilita que el cliente recuerde el emprendimiento.",
            "justificationIncorrect": "La incoherencia entre producto y presentación puede generar desconfianza o confusión sobre el posicionamiento de la marca."
          }
        },
        {
          "question": "Para que el packaging transmita valor, siempre debe ser costoso o lujoso.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El packaging puede ser económico y, al mismo tiempo, estético y estratégico. Lo importante es el diseño y la coherencia, no el gasto elevado.",
            "justificationIncorrect": "Un costo elevado sin estrategia puede afectar la rentabilidad sin mejorar la experiencia del cliente."
          }
        },
        {
          "question": "Incluir etiquetas, información de contacto o mensajes de agradecimiento puede fortalecer el vínculo con el cliente.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Estos elementos humanizan la experiencia, facilitan el contacto futuro y aportan profesionalismo.",
            "justificationIncorrect": "Omitir esta información puede reducir la recordación de marca y las posibilidades de recompra o recomendación."
          }
        },
        {
          "question": "En ventas digitales, el packaging no influye en la estrategia de marketing porque el cliente ya decidió comprar.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El packaging puede generar contenido compartido en redes, recomendaciones y experiencias positivas (unboxing), convirtiéndose en promoción gratuita.",
            "justificationIncorrect": "La experiencia postventa también impacta en la reputación y fidelización del cliente."
          }
        }
      ]
     },
     {
      "idAccess": "m5_c6",
      "header": {
        "title": {
          "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
          "evaluationTitle": "Networking",
          "subtitle": "Actividad de comprobación - Verdadero o falso"
        },
        "instructions": {
          "instructionText": ["Determinar si las siguientes afirmaciones son verdaderas o falsas."]
        }
      },
      "type": "true-false",
      "passingScore": 0,
      "questions": [
        {
          "question": "El networking consiste principalmente en vender tus productos o servicios cada vez que conocés a alguien nuevo.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El networking se basa en construir relaciones profesionales de confianza y generar oportunidades mutuas. La venta puede surgir después, pero no es el objetivo inicial.",
            "justificationIncorrect": "Enfocarse solo en vender puede generar rechazo y evitar la creación de vínculos duraderos."
          }
        },
        {
          "question": "El networking puede generar oportunidades como alianzas, clientes, proveedores o recomendaciones.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Las redes profesionales permiten acceder a información, colaboraciones y oportunidades de crecimiento que muchas veces no surgen por publicidad tradicional.",
            "justificationIncorrect": "Ignorar el potencial del networking limita las posibilidades de expansión del emprendimiento."
          }
        },
        {
          "question": "Asistir a eventos es suficiente para hacer networking efectivo, aunque no participes activamente.",
          "answer": {
            "correct": false,
            "justificationCorrect": "El networking requiere participación activa: presentarse, conversar, hacer preguntas y generar vínculos. Solo asistir no garantiza resultados.",
            "justificationIncorrect": "Sin interacción no se crean relaciones ni oportunidades reales."
          }
        },
        {
          "question": "Escuchar y hacer preguntas genuinas ayuda a fortalecer las relaciones en networking.",
          "answer": {
            "correct": true,
            "justificationCorrect": "La escucha activa demuestra interés real y facilita la construcción de confianza, base de cualquier relación profesional sólida.",
            "justificationIncorrect": "Hablar únicamente de uno mismo dificulta el vínculo y reduce la calidad de las conexiones."
          }
        },
        {
          "question": "El seguimiento posterior a un encuentro profesional es importante para mantener y fortalecer la red de contactos.",
          "answer": {
            "correct": true,
            "justificationCorrect": "Enviar un mensaje posterior, agradecer e iniciar continuidad transforma un contacto ocasional en una relación profesional.",
            "justificationIncorrect": "Sin seguimiento, la mayoría de los contactos se pierden y no generan oportunidades futuras."
          }
        }
      ]
     },
  ],
  "quizMO": [
    {
      "idAccess": "m4_c1",
        "header": {
          "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Comprendiendo los costos",
            "subtitle": "Actividad de comprobación - Cuestionario de opción múltiple"
          },
          "instructions": {
            "instructionText": [
              "Seleccionar la respuesta correcta."
            ]
          }
        },
        "type": "multi-choice",
        "passingScore": 0,
        "questions": [
          {
            "question": "¿Cuál es el objetivo principal del control de stock?",
            "options": [
              {
                "answer": "Comprar más",
                "isCorrect": false,
                "justification": "Respuesta incorrecta. El control de stock no busca comprar más, pagar menos impuestos ni definir el canal de venta. Su función principal es mantener el equilibrio en la cantidad de productos disponibles."
              },
              {
                "answer": "Evitar faltantes y excesos",
                "isCorrect": true,
                "justification": "¡Correcto! El control de stock tiene como objetivo evitar faltantes y excesos de productos. Para lograrlo, se realiza el recuento físico y se lo compara con la planilla o sistema de stock, lo que permite tomar mejores decisiones de compra, organización y atención al cliente."
              },
              {
                "answer": "Pagar menos impuestos",
                "isCorrect": false,
                "justification": "Respuesta incorrecta. El control de stock no busca comprar más, pagar menos impuestos ni definir el canal de venta. Su función principal es mantener el equilibrio en la cantidad de productos disponibles."
              },
              {
                "answer": "Vender sólo online",
                "isCorrect": false,
                "justification": "Respuesta incorrecta. El control de stock no busca comprar más, pagar menos impuestos ni definir el canal de venta. Su función principal es mantener el equilibrio en la cantidad de productos disponibles."
              }
            ]
          }
        ]
    },
    {
      "idAccess": "m4_c2",
      "header": {
        "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Compras inteligentes",
            "subtitle": "Actividad de comprobación - Cuestionario de opción múltiple"
          },
          "instructions": {
            "instructionText": [
              "Seleccionar la respuesta correcta."
            ]
          }
      },
      "type": "multi-choice",
      "passingScore": 0,
      "questions": [
        {
          "title": "Caso práctico",
          "question": "Situación:\nTenés un insumo que vendés 100 unidades por mes.\nTu proveedor tarda 20 días en entregar.\nTu stock actual es de 40 unidades.\n\nPregunta:\n ¿La compra es urgente, normal o puede esperar?",
          "options": [
            {
              "answer": "Urgente",
              "isCorrect": true,
              "justification": "¡Correcto! La compra es urgente, ya que el consumo mensual (100 unidades) es mayor que el stock disponible (40 unidades).\n Además, el proveedor tarda 20 días en entregar, lo que implica un riesgo de quedarse sin insumos antes de la reposición, afectando la continuidad de la actividad."
            },
            {
              "answer": "Normal",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. La compra no es normal ni puede esperar, porque el stock actual no alcanza para cubrir el consumo durante el tiempo que tarda el proveedor en entregar.\nNo realizar la compra a tiempo puede generar faltantes, interrupciones en la venta y pérdidas económicas."
            },
            {
              "answer": "Puede esperar",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. La compra no es normal ni puede esperar, porque el stock actual no alcanza para cubrir el consumo durante el tiempo que tarda el proveedor en entregar.\nNo realizar la compra a tiempo puede generar faltantes, interrupciones en la venta y pérdidas económicas."
            }
          ]
        }
      ]
    },
    {
      "idAccess": "m4_c3",
      "header": {
        "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Logística/Distribución",
            "subtitle": "Actividad de comprobación - Cuestionario de opción múltiple"
          },
          "instructions": {
            "instructionText": [
              "Seleccionar la respuesta correcta."
            ]
          }
      },
      "type": "multi-choice",
      "passingScore": 0,
      "questions": [
        {
          "question": "¿Cuál es una etapa de la logística?",
          "options": [
            {
              "answer": "Facturación",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. La facturación, la publicidad y la contabilidad pertenecen a áreas administrativas o comerciales, pero no son etapas de la logística.\nLa logística se centra en el movimiento, almacenamiento y distribución de los productos."
            },
            {
              "answer": "Almacenamiento",
              "isCorrect": true,
              "justification": "Correcto! El almacenamiento es una de las etapas de la logística.\nJunto con el abastecimiento (compras), la preparación de pedidos, la distribución y la entrega, forma parte del proceso logístico que permite que los productos lleguen en tiempo y forma."
            },
            {
              "answer": "Publicidad",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. La facturación, la publicidad y la contabilidad pertenecen a áreas administrativas o comerciales, pero no son etapas de la logística.\nLa logística se centra en el movimiento, almacenamiento y distribución de los productos."
            },
            {
              "answer": "Contabilidad",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. La facturación, la publicidad y la contabilidad pertenecen a áreas administrativas o comerciales, pero no son etapas de la logística.\nLa logística se centra en el movimiento, almacenamiento y distribución de los productos."
            }
          ]
        }
      ]
    },
    {
      "idAccess": "m4_c4",
      "header": {
        "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Cash Flow (Flujo de caja)",
            "subtitle": "Actividad de comprobación - Cuestionario de opción múltiple"
          },
          "instructions": {
            "instructionText": [
              "Seleccionar una de las posibles respuestas correctas."
            ]
          }
      },
      "type": "multi-choice",
      "passingScore": 0,
      "questions": [
        {
          "question": "¿Qué ayuda a mejorar el cash flow?",
          "options": [
            {
              "answer": "Cobrar más rápido",
              "isCorrect": true,
              "justification": "¡Correcto! Cobrar más rápido y tener una proyección de cobros y pagos ayuda a mejorar el cash flow.\nEsto permite contar con mayor liquidez, anticiparse a posibles faltantes de dinero y asegurar el buen desarrollo de la actividad."
            },
            {
              "answer": "Pagar todo por adelantado",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. Pagar todo por adelantado puede generar falta de liquidez, e ignorar gastos pequeños provoca desorden financiero.\nPara un buen cash flow es clave planificar ingresos y egresos y administrar el dinero de forma consciente."
            },
            {
              "answer": "Tener proyección de cobros y pagos",
              "isCorrect": true,
              "justification": "¡Correcto! Cobrar más rápido y tener una proyección de cobros y pagos ayuda a mejorar el cash flow.\nEsto permite contar con mayor liquidez, anticiparse a posibles faltantes de dinero y asegurar el buen desarrollo de la actividad."
            },
            {
              "answer": "Ignorar gastos pequeños",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. Pagar todo por adelantado puede generar falta de liquidez, e ignorar gastos pequeños provoca desorden financiero.\nPara un buen cash flow es clave planificar ingresos y egresos y administrar el dinero de forma consciente."
            },
          ]
        }
      ]
    },
    {
      "idAccess": "m4_c5",
      "header": {
        "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Impuesto a los ingresos brutos",
            "subtitle": "Actividad de comprobación - Cuestionario de opción múltiple"
          },
          "instructions": {
            "instructionText": [
              "Seleccionar una de las posibles respuestas correctas."
            ]
          }
      },
      "type": "multi-choice",
      "passingScore": 0,
      "questions": [
        {
          "question": "¿Qué afirmaciones son correctas?",
          "options": [
            {
              "answer": "IIBB es provincial",
              "isCorrect": true,
              "justification": "¡Correcto! El Impuesto a los Ingresos Brutos (IIBB) es un impuesto provincial, por lo que su aplicación depende de cada jurisdicción.\nAdemás, el porcentaje que se paga por este impuesto debe considerarse dentro del costo del producto o servicio, por lo tanto impacta directamente en el precio de venta."
            },
            {
              "answer": "Se paga solo si hay ganancia",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. El impuesto a los Ingresos Brutos no se paga solo si hay ganancia, ya que grava la actividad y la facturación, no el resultado final.\nTampoco es un impuesto que el Monotributo absorba automáticamente, ya que se trata de un tributo provincial que se paga de forma independiente."
            },
            {
              "answer": "Impacta en el precio de venta",
              "isCorrect": true,
              "justification": "¡Correcto! El Impuesto a los Ingresos Brutos (IIBB) es un impuesto provincial, por lo que su aplicación depende de cada jurisdicción.\nAdemás, el porcentaje que se paga por este impuesto debe considerarse dentro del costo del producto o servicio, por lo tanto impacta directamente en el precio de venta."
            },
            {
              "answer": "Monotributo lo absorbe automáticamente",
              "isCorrect": false,
              "justification": "Respuesta incorrecta. El impuesto a los Ingresos Brutos no se paga solo si hay ganancia, ya que grava la actividad y la facturación, no el resultado final.\nTampoco es un impuesto que el Monotributo absorba automáticamente, ya que se trata de un tributo provincial que se paga de forma independiente."
            }
          ]
        }
      ]
    }
  ],
  "groupTable": [
    {
      "idAccess": "m3_c2",
        "header": {
          "title": {
            "courseTitle": "FORMACIÓN INTEGRAL PARA EL EMPRENDEDORISMO",
            "evaluationTitle": "Costos del emprendimiento",
            "subtitle": "Actividad de comprobación - Clasificar y agrupar"
          },
          "instructions": {
            "instructionText": [
              "Relacioná cada gasto con el tipo de costo correspondiente según su comportamiento frente a la producción o las ventas."
            ]
          }
        },
      "type": "group-table",
      "passingScore": 0,
      "labels": [
        {
          "label": "Costo fijo", 
          "key": "cf"
        },
        {
          "label": "Costo variable",
          "key": "cv"
        }
      ],
      "items": [
        {
          "content": "Alquiler del local",
          "keyLabel": "cf"
        },
        {
          "content": "Internet mensual",
          "keyLabel": "cf"
        },
        {
          "content": "Materia prima",
          "keyLabel": "cv"
        },
        {
          "content": "Envases por producto",
          "keyLabel": "cv"
        },
        {
          "content": "Comisión por venta",
          "keyLabel": "cv"
        }
      ],
      "feedback": {
        "resultOk": [
          "La clasificación puede ayudarte a comprender cómo impacta el nivel de ventas en la estructura económica del emprendimiento."
        ],
        "resultNotOk": [
          "Podría resultar útil volver a analizar qué gastos cambian con la producción y cuáles permanecen relativamente constantes."
        ]
      }
    }
  ]
}