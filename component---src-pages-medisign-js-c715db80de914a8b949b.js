(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EXOr:function(e,t,a){"use strict";a.r(t);a("rGqo"),a("rE2o"),a("ioFf"),a("XfO3"),a("HEwt"),a("f3/d"),a("a1Th"),a("Btvt");var i=a("q1tI"),n=a.n(i),r=a("L12J"),o=a("vrFN"),s=(a("I5cv"),a("EyUk"),a("KXpN")),l=a.n(s),c=a("l54+"),d=a.n(c);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,a;a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i;i=r;function r(t){var a;return(a=e.call(this,t)||this).state={videoVisible:!1},a.toggleVideo=a.toggleVideo.bind(p(a)),a}var o=r.prototype;return o.componentDidMount=function(){var e=this;document.getElementById("fullscreenVideo").addEventListener("fullscreenchange",(function(t){var a=document.getElementById("fullscreenVideo");document.fullscreenElement?(e.setState({videoVisible:!0}),a.muted=!1,a.play()):(e.setState({videoVisible:!1}),a.muted=!0)}))},o.toggleVideo=function(){var e=document.getElementById("fullscreenVideo");e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(),e.muted=!1},o.render=function(){return n.a.createElement("article",{className:"headerMedisign"},n.a.createElement("video",{className:this.state.videoVisible?"":"headerMedisign__hidden",controls:!0,id:"fullscreenVideo"},n.a.createElement("source",{src:d.a,type:"video/mp4"})),n.a.createElement("div",{className:"headerMedisign__wrap"},n.a.createElement("img",{className:"headerMedisign__logo",src:l.a,alt:"Medisign"}),n.a.createElement("h2",{className:"headerMedisign__subtitle"},"Software de administración de consentimientos informados."),n.a.createElement("div",{className:"headerMedisign__btn-wrap"},n.a.createElement("button",{onClick:this.toggleVideo,className:"headerMedisign__btn"},"Ver Demo"))))},r}(n.a.Component),A=a("PK/c"),m=a("ug/9");function g(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Medsys"}),n.a.createElement(u,null),function(){for(var e,t=[],a=g(m.a);!(e=a()).done;){var i=e.value;t.push(n.a.createElement(A.a,{items:i.items,color:i.color,layout:i.layout,title:i.title,description:i.description,list:i.list}))}return t}())}},EyUk:function(e,t,a){},KXpN:function(e,t){e.exports="data:image/png;base64,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"},"PK/c":function(e,t,a){"use strict";a("rGqo"),a("rE2o"),a("ioFf"),a("XfO3"),a("HEwt"),a("f3/d"),a("a1Th"),a("Btvt"),a("I5cv"),a("VVQa");var i=a("q1tI"),n=a.n(i),r=a("cjEz"),o=a.n(r);function s(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var c=function(e){var t,a;a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i;i=r;function r(){return e.apply(this,arguments)||this}var l=r.prototype;return l.getClassName=function(e){var t="";return t="regular"===this.props.layout?e+" "+e+"--regular":e+" "+e+"--reverse",t+=" "+e+"--"+this.props.color},l.getListElements=function(){var e=[];if(this.props.list)for(var t,a=s(this.props.list);!(t=a()).done;){var i=t.value;e.push(n.a.createElement("li",{className:"productDescription__list-description"},i.description))}return e},l.getListItems=function(){var e=[];if(this.props.items)for(var t,a=s(this.props.items);!(t=a()).done;){var i=t.value;e.push(n.a.createElement("li",{className:"productDescription__item"},n.a.createElement("h2",{className:"productDescription__item-title"},i.title),n.a.createElement("p",{className:"productDescription__item-description"},i.description)))}return e},l.render=function(){return n.a.createElement("article",{className:"productDescription"},n.a.createElement("div",{className:this.getClassName("productDescription__wrap")},n.a.createElement("div",{className:this.getClassName("productDescription__content")},n.a.createElement("div",{className:"productDescription__content-wrap"},n.a.createElement("h1",{className:"productDescription__title"},this.props.title),n.a.createElement("p",{className:"productDescription__description"},this.props.description),n.a.createElement("ul",{className:"productDescription__items"},this.getListItems()),n.a.createElement("ul",{className:"productDescription__list"},this.getListElements()))),n.a.createElement("div",{className:"productDescription__line"}),n.a.createElement("div",{className:"productDescription__img-wrap"},n.a.createElement("img",{className:"productDescription__img",src:o.a,alt:"Screenshot"}))))},r}(n.a.Component);t.a=c},VVQa:function(e,t,a){},cjEz:function(e,t,a){e.exports=a.p+"static/11.08.20-16:39:57-7949446826372fbc68ea91821df1a450.png"},"l54+":function(e,t,a){e.exports=a.p+"static/Medisign-e514e52ab2377a69d0f7c8812242bd03.mp4"},"ug/9":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}));var i=[{title:"Agenda",color:"green",layout:"regular",items:[{title:"Multiples agendas",description:"Opción de controlar de manera eficiente múltiples agendas\n        en la misma pantalla"},{title:"Configuración de horarios",description:"Posibilidad de configurar horarios no disponibles por\n        médico y días festivos o no laborales"},{title:"Consulta de citas",description:"Opción para consultar las citas del mes y poder definir\n        fácilmente los espacios disponibles al momento de a signar una cita"},{title:"Agenda semanal",description:"Con esta opción se pueden revisar las citas de una semana\n        en particular, facilitando la asignación de horario disponible"}]},{title:"Historia Clínica",color:"blue",layout:"regular",items:[{title:"Registro Digital de Historia Clínica",description:"El sistema cumple con las regulaciones estatales para la\n        administración de datos clínicos y los estándares de seguridad de la\n        información."},{title:"Impresión de Formatos",description:"Con MedSys® podrá generar reportes impresos para fórmulas\n        médicas, incapacidades, resúmenes de historia clínica, recomendaciones,\n        entre otros."},{title:"Corrector Ortográfico",description:"Incluye corrector ortográfico que puede utilizar al\n        momento de ingresar datos a la historia clínica."},{title:"Seguridad de ingreso por Usuario",description:"El sistema le permite restringir el acceso de ingreso y\n        lectura a determinados usuarios."}]},{title:"Imágenes Diagnósticas y Fotografías",color:"greenlight",layout:"regular",description:" MedSys es la herramienta ideal para organizar las imágenes\n    asociadas a la Historia Clínica de pacientes. Es una de las características\n    más importantes y que dan gran potencial al sistema, puesto que se\n    aprovechan las ventajas de la asociación de la información gráfica con los\n    datos de historia clínica."},{title:"Estadísticas",color:"green",layout:"regular",items:[{title:"De Antecedentes Clínicos",description:"El sistema brinda la posibilidad de obtener un análisis\n        estadístico gráfico de antecedentes por sexo y rangos de edad, muy útil\n        para desarrollar estudios clínicos."},{title:"Pacientes sin asistencia a consulta",description:"Esta información le permitirá hacer seguimiento a los\n        pacientes que no han continuado con procedimientos o tratamientos\n        médicos y mejorará el servicio al cliente de su institución."},{title:"Captación de Pacientes",description:" El sistema le suministra indicadores de la inclusión de\n        nuevos pacientes y le permitirá mejorar las estrategias para aumentar\n        el volumen de pacientes."}]},{title:"Generación de RIPS e informes para el Ministerio de Salud",color:"blue",layout:"regular",description:"Con este sistema de información se facilitan las labores de\n    suministro de datos al Ministerio de Salud, puesto que se pueden generar\n    los RIPS (Registros individuales de prestación de servicios) de manera\n    sencilla y eficiente."}],n=[{title:"Seguridad",color:"purple",layout:"regular",items:[{title:"Servidor de Aplicaciones",description:"Las imágenes de las firmas cumplen el único propósito de\n        integrarse al consentimiento.Todas las imágenes siempre se eliminan del\n        sistema donde se encuentre alojado el Servidor de Aplicaciones."},{title:"Servidor en la nube",description:"Adicional al consentimiento creado, se realizan 2 copias\n        del mismocon el propósito de garantizar la validez legal del\n        consentimiento de acuerdo a lo estipulado en el numeral 4 de la Ley\n        527, artículo 28 de 1999. La primera copia es enviada al paciente a\n        través de correo electrónico con el documento adjunto; la segunda copia\n        es almacenada en un servidor en la nube, propiedad de la empresa MedSys\n        SAS."},{title:"Servicio de alojamiento",description:"Si la persona propietaria del software tiene vínculo con\n        un servicio de alojamiento de archivos (Dropbox, Google Drive,\n          Onedrive, iCloud) la ruta destino de los documentos creados puede\n        ubicarse en una carpeta dentro de este servicio. Los consentimientos\n        creados se sincronizarán automáticamente y el propietario podrá acceder\n        desde cualquier dispositivo y lugar a su información."},{title:"Restauración de datos",description:"En caso de pérdida completa y absoluta de los\n        consentimientos (daño de computador y/o eliminación de cuenta de\n        alojamiento de datos) se podrán restaurar todos los documentos\n        creados a la fecha, siempre y cuando se realice adecuadamente el envío\n        del consentimiento al paciente."}]},{title:"Legalidad",color:"blue",layout:"regular",description:"Medisign ayuda a promover la política de Cero Papel,\n    impulsado por la Presidencia de la República desde el año 2012, cuyo\n    propósito es la gestión pública efectiva, eficiente y eficaz del papel.\n    Medisign cumple con los lineamientos estipulados en el artículo 28 de la\n    Ley 527 de 1999, en relación con la validez de la firma digital ",list:[{description:"La firma es única a la persona que la usa y está bajo su\n        control"},{description:"Las firmas pueden de ser verificadas."},{description:"Está ligada a la información o mensaje, de tal manera\n        que si éstos son cambiados, la firma."},{description:"Medisign está conforme a las reglamentaciones adoptadas por el\n        Gobierno Nacional."}]}]}}]);
//# sourceMappingURL=component---src-pages-medisign-js-c715db80de914a8b949b.js.map