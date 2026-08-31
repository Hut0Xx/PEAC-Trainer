(function () {
  "use strict";

  const STORE = "peac-trainer-pro-v2";
  const modules = [
    {
      id: "0223",
      code: "ECP0223_3",
      title: "Configurar y explotar sistemas informaticos",
      proof: "Superado en certificado MasterD.",
      baseline: "SO, hardware, red, almacenamiento, usuarios, permisos, seguridad, copias, diagnostico y documentacion.",
      must: [
        "Explicar arquitectura de un sistema y relacionar CPU, RAM, disco, red y perifericos.",
        "Configurar usuarios, grupos, permisos y politicas basicas con criterio de minimo privilegio.",
        "Diagnosticar incidencias siguiendo capas: enlace, IP, gateway, DNS, servicio y logs.",
        "Planificar copias de seguridad, restauracion, retencion y verificacion.",
        "Documentar una intervencion tecnica con sintomas, pruebas, solucion y prevencion."
      ],
      lessons: [
        ["Sistema operativo", "Administra recursos, usuarios, procesos, servicios, dispositivos y almacenamiento. Debes poder explicar como lo compruebas, no solo definirlo."],
        ["Red basica", "IP identifica la interfaz, mascara define la red, gateway permite salir y DNS resuelve nombres. Diagnostica siempre por capas."],
        ["Permisos", "Distingue propietario, grupo, ACL, herencia y privilegios administrativos. En evaluacion conviene justificar cada permiso."],
        ["Backup", "Una copia vale cuando se puede restaurar. Diferencia completa, incremental y diferencial; incluye RPO, RTO y prueba de restauracion."],
        ["Incidencias", "Reproduce, acota, revisa evidencias, cambia una variable, verifica y documenta. Es peor improvisar que tardar un minuto en pensar."]
      ],
      evidence: [
        "Certificado MasterD donde conste la superacion relacionada con ECP0223_3.",
        "Capturas o documento de una instalacion/configuracion de sistema.",
        "Ejemplo de diagnostico de red o servicio con comandos y conclusion.",
        "Politica o prueba de copia de seguridad y restauracion.",
        "Informe de incidencia tecnica redactado por ti."
      ]
    },
    {
      id: "0226",
      code: "ECP0226_3",
      title: "Programar bases de datos relacionales",
      proof: "Superado en certificado MasterD.",
      baseline: "Modelo relacional, E/R, normalizacion, DDL, DML, JOIN, GROUP BY, transacciones, indices, vistas y seguridad.",
      must: [
        "Interpretar entidades, atributos, claves, relaciones y cardinalidades.",
        "Crear tablas con PK, FK, UNIQUE, NOT NULL y CHECK cuando proceda.",
        "Resolver consultas con JOIN, agregaciones, HAVING, subconsultas y ordenacion.",
        "Usar transacciones y consultas parametrizadas para evitar inconsistencias e inyeccion SQL.",
        "Justificar indices y verificar resultados con datos de prueba."
      ],
      lessons: [
        ["Claves", "La primaria identifica filas; la foranea conserva integridad referencial. Una relacion N:M necesita tabla intermedia."],
        ["SELECT", "Orden mental: FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT."],
        ["JOIN", "INNER exige coincidencia; LEFT conserva la izquierda. Muchos errores nacen de un ON incompleto."],
        ["Transacciones", "Agrupan operaciones atomicas. COMMIT confirma y ROLLBACK revierte; piensa en ACID."],
        ["Indices", "Aceleran lecturas concretas, pero cuestan escritura y espacio. Se justifican con consultas reales."]
      ],
      evidence: [
        "Certificado MasterD donde conste la superacion relacionada con ECP0226_3.",
        "Modelo E/R o esquema relacional hecho por ti.",
        "Script SQL con creacion de tablas, claves e integridad.",
        "Consultas complejas documentadas con resultado esperado.",
        "Ejemplo de transaccion o acceso parametrizado a base de datos."
      ]
    },
    {
      id: "0491",
      code: "ECP0491_3",
      title: "Desarrollar elementos software en el entorno cliente",
      proof: "Pendiente de defender con evidencias, practica y entrevista.",
      baseline: "HTML semantico, CSS responsive, JavaScript, DOM, eventos, formularios, validacion, fetch, JSON, accesibilidad y seguridad cliente.",
      must: [
        "Construir interfaces con HTML semantico, etiquetas correctas y formularios accesibles.",
        "Aplicar CSS responsive sin depender de anchos fijos fragiles.",
        "Manipular DOM y eventos con JavaScript de forma mantenible.",
        "Consumir APIs con fetch, manejar errores, loading y renderizado seguro.",
        "Evitar XSS usando textContent o sanitizacion cuando corresponda."
      ],
      lessons: [
        ["HTML", "Estructura el contenido: label asociado, button para acciones, jerarquia de encabezados y alt util."],
        ["CSS", "Flexbox resuelve una dimension; Grid resuelve dos. Usa constraints y revisa overflow en movil."],
        ["DOM", "Selecciona, crea y actualiza nodos. Separa estado, render y eventos cuando el componente crece."],
        ["Eventos", "addEventListener y delegacion reducen repeticion. preventDefault solo cuando tenga sentido."],
        ["Fetch", "Comprueba r.ok, maneja JSON, estados de carga, errores y renderiza datos no confiables como texto."]
      ],
      evidence: [
        "Proyecto web con HTML, CSS y JavaScript propio.",
        "Capturas responsive en movil y escritorio.",
        "Formulario con validacion cliente y estados de error.",
        "Consumo de API o datos JSON con fetch.",
        "Breve explicacion de medidas contra XSS y accesibilidad."
      ]
    },
    {
      id: "0492",
      code: "ECP0492_3",
      title: "Desarrollar elementos software en el entorno servidor",
      proof: "Pendiente de defender con evidencias, practica y entrevista.",
      baseline: "Backend, rutas, controladores, validacion, autenticacion, autorizacion, sesiones, APIs, errores, seguridad, logs y persistencia.",
      must: [
        "Disenar endpoints con metodos HTTP, codigos de estado y respuestas coherentes.",
        "Validar entrada en servidor aunque exista validacion cliente.",
        "Autenticar, autorizar y comprobar permisos por objeto.",
        "Acceder a datos con parametros, transacciones y control de errores.",
        "Registrar errores sin filtrar secretos y exponer mensajes seguros."
      ],
      lessons: [
        ["API", "Un endpoint debe tener contrato claro: metodo, URL, body, validaciones, status y respuesta."],
        ["Validacion", "El cliente ayuda a la experiencia; el servidor protege el sistema."],
        ["Auth", "Autenticacion sabe quien eres; autorizacion decide que puedes hacer."],
        ["Persistencia", "No concatener SQL. Usa parametros, transacciones y restricciones de base de datos."],
        ["Errores", "El usuario ve un mensaje seguro; los detalles tecnicos quedan en logs protegidos."]
      ],
      evidence: [
        "API o backend desplegado o ejecutable localmente.",
        "Rutas documentadas con ejemplos de peticion/respuesta.",
        "Validacion de entrada y manejo de errores.",
        "Autenticacion/autorizacion o justificacion de seguridad.",
        "Acceso a base de datos o persistencia con consultas seguras."
      ]
    },
    {
      id: "0493",
      code: "ECP0493_3",
      title: "Implementar, verificar y documentar aplicaciones web en entornos Internet, Intranet y Extranet",
      proof: "Pendiente de defender con evidencias, practica y entrevista.",
      baseline: "Git, pruebas, despliegue, CI, documentacion, configuracion, entornos, logs, incidencias, rollback y mantenimiento.",
      must: [
        "Explicar flujo Git con ramas, commits, revision, merge y resolucion de conflictos.",
        "Diferenciar pruebas unitarias, integracion, E2E y smoke test.",
        "Preparar despliegue con configuracion, variables, build, checks y rollback.",
        "Documentar instalacion, uso, cambios, incidencias y verificacion.",
        "Responder ante un fallo postdeploy con mitigacion, diagnostico y mejora."
      ],
      lessons: [
        ["Git", "Antes de integrar: status, diff, tests, commit claro, actualizacion, revision y merge controlado."],
        ["Pruebas", "Unitarias aislan funciones; integracion prueba colaboracion; E2E recorre flujos reales."],
        ["Deploy", "No es solo subir archivos: build reproducible, variables, health checks, logs y rollback."],
        ["Documentacion", "Debe permitir que otra persona instale, ejecute, verifique y mantenga."],
        ["Incidentes", "Mitiga impacto, correlaciona version/logs, rollback si procede y redacta RCA."]
      ],
      evidence: [
        "Repositorio GitHub con historial de commits.",
        "Despliegue en Vercel u otro entorno accesible.",
        "README con instalacion, uso, pruebas y despliegue.",
        "Capturas o logs de verificacion.",
        "Ejemplo de incidencia/rollback o checklist de release."
      ]
    }
  ];

  const questions = [
    q("0223", "test", "Un equipo tiene IP correcta pero no resuelve nombres. Que capa revisas primero?", ["DNS configurado o servidor DNS", "Cable de red", "Permisos NTFS", "Temperatura CPU"], 0, "Si llega por IP pero no por nombre, el foco inicial es DNS."),
    q("0223", "test", "Que afirmacion sobre RAID y backup es correcta?", ["RAID no sustituye una copia de seguridad", "RAID 1 evita borrados accidentales", "RAID 5 reemplaza la restauracion", "Un snapshot siempre equivale a backup"], 0, "RAID mejora disponibilidad, pero replica tambien errores logicos."),
    q("0223", "oral", "Explica como diagnosticarias que un servicio interno no responde desde un cliente.", [], 0, "Respuesta fuerte: alcance, DNS, conectividad, puerto, firewall, servicio, logs y una sola variable por cambio."),
    q("0223", "practice", "Prepara una checklist para crear un usuario con acceso de solo lectura a una carpeta compartida.", [], 0, "Incluye grupo, ACL, herencia, prueba con usuario real y documentacion."),
    q("0223", "contingency", "Un servidor esta al 100 % de disco y no puedes borrar datos de negocio. Que haces?", [], 0, "Identificar consumo, logs/temporales seguros, rotacion, ampliacion, alertas y registro de cambios."),

    q("0226", "test", "En SQL, HAVING se usa para...", ["Filtrar grupos despues de GROUP BY", "Filtrar filas antes de agrupar", "Crear claves foraneas", "Ordenar alfabeticamente"], 0, "WHERE filtra filas; HAVING filtra grupos."),
    q("0226", "test", "Una relacion muchos a muchos se implementa normalmente con...", ["Una tabla intermedia con claves foraneas", "Un campo de texto con ids separados", "Dos claves primarias en la misma tabla sin relacion", "Una vista temporal"], 0, "La tabla puente materializa la N:M y puede incluir atributos de la relacion."),
    q("0226", "oral", "Defiende por que usarias consultas parametrizadas.", [], 0, "Debe aparecer prevencion de SQL injection, separacion codigo/datos y soporte del driver."),
    q("0226", "practice", "Escribe conceptualmente una transaccion para transferir saldo entre dos cuentas.", [], 0, "Restar, sumar, comprobar reglas, COMMIT o ROLLBACK dentro de una unidad atomica."),
    q("0226", "contingency", "Te piden ejecutar un DELETE masivo en produccion. Que condiciones pones antes?", [], 0, "SELECT previo, backup, transaccion, criterio validado, filas afectadas y plan de recuperacion."),

    q("0491", "test", "Para insertar texto no confiable recibido de una API debes preferir...", ["textContent", "innerHTML", "eval", "document.write"], 0, "textContent evita interpretar HTML y reduce riesgo de XSS."),
    q("0491", "test", "Que atributo asocia correctamente un label a un input?", ["for con el id del input", "name con la clase", "data-label", "title obligatorio"], 0, "label[for] apunta al id del control."),
    q("0491", "oral", "Explica como haces un formulario accesible y validado en cliente.", [], 0, "Debe incluir labels, required/type, mensajes, foco, checkValidity y validacion servidor aparte."),
    q("0491", "practice", "Crea mentalmente una lista de tareas desde JSON y marca una tarea usando delegacion de eventos.", [], 0, "fetch, render seguro, ul listener, closest, data-id, PATCH y estado de error."),
    q("0491", "contingency", "Funciona en Chrome pero falla en Firefox. Como actuas?", [], 0, "Reproducir, consola/network, compatibilidad de APIs, fallback/polyfill, prueba cruzada."),

    q("0492", "test", "Autenticacion y autorizacion significan...", ["Quien eres y que puedes hacer", "Lo mismo", "Solo cifrar contrasenas", "Solo usar HTTPS"], 0, "Primero identidad, despues permisos."),
    q("0492", "test", "Ante un error interno con datos sensibles, el cliente deberia recibir...", ["Mensaje generico e id de correlacion", "Stack trace completo", "Query SQL", "Variables de entorno"], 0, "Los detalles tecnicos van a logs protegidos."),
    q("0492", "oral", "Disena un endpoint PATCH para cambiar email de usuario.", [], 0, "Metodo, ruta, auth, autorizacion, validacion, conflicto, update parametrizado, respuesta y logs."),
    q("0492", "practice", "Evita doble reserva cuando dos peticiones compran la ultima plaza.", [], 0, "Transaccion, bloqueo o update condicional y comprobar filas afectadas."),
    q("0492", "contingency", "Un token aparece en logs de produccion. Que haces?", [], 0, "Rotar/revocar, restringir logs, mascarado, evaluar alcance y prevenir repeticion."),

    q("0493", "test", "Que prueba recorre un flujo real en navegador?", ["E2E", "Unitaria", "Lint", "Normalizacion"], 0, "E2E valida comportamiento completo desde la perspectiva del usuario."),
    q("0493", "test", "Un rollback de codigo puede no bastar si...", ["Hubo migracion irreversible de datos", "El README esta largo", "Hay muchos commits", "La app usa CSS"], 0, "Cambios de esquema/datos pueden requerir migracion compensatoria o backup."),
    q("0493", "oral", "Describe tu flujo antes de mezclar una rama en main.", [], 0, "status, diff, tests, actualizar, resolver conflictos, PR/revision, CI y merge."),
    q("0493", "practice", "Prepara una checklist de release para Vercel.", [], 0, "Build, variables, README, commit, deploy, smoke test, logs y rollback."),
    q("0493", "contingency", "CI esta verde pero produccion falla por variable ausente. Actua.", [], 0, "Validar configuracion, mitigar, rollback si impacto, paridad de entornos y checks previos.")
  ];

  questions.push(
    q("0223", "test", "Que comando usarias primero para comprobar conectividad IP basica?", ["ping", "format", "chmod", "git merge"], 0, "ping ayuda a comprobar alcance IP, aunque no prueba todos los servicios."),
    q("0223", "test", "Si un servicio arranca y se detiene al instante, que revisas?", ["Logs del servicio y dependencias", "Cambiar el monitor", "Borrar usuarios", "Desactivar DNS"], 0, "Los logs y dependencias dan evidencias antes de tocar configuracion."),
    q("0223", "test", "Principio de minimo privilegio significa...", ["Dar solo permisos necesarios", "Usar siempre administrador", "Compartir contrasenas", "Quitar todos los permisos"], 0, "Reduce impacto de errores o compromisos."),
    q("0223", "test", "Una copia incremental guarda...", ["Cambios desde la ultima copia", "Todo siempre", "Solo metadatos sin datos", "Nada hasta restaurar"], 0, "La incremental ahorra espacio, pero depende de la cadena de copias."),
    q("0223", "oral", "Explica diferencia entre proceso, servicio y aplicacion de usuario.", [], 0, "Proceso es ejecucion; servicio trabaja en segundo plano; aplicacion suele interactuar con usuario."),
    q("0223", "oral", "Como justificarias una politica de backups para una pyme?", [], 0, "Habla de criticidad, frecuencia, retencion, ubicacion, cifrado, pruebas y responsabilidad."),
    q("0223", "practice", "Disena un procedimiento de restauracion de un archivo borrado por error.", [], 0, "Confirmar version, restaurar a zona segura, verificar integridad y documentar."),
    q("0223", "practice", "Prepara una ficha de inventario para un equipo de oficina.", [], 0, "Equipo, SO, IP, hardware, software clave, usuario, garantia, incidencias y mantenimiento."),
    q("0223", "contingency", "Un usuario no puede acceder a una carpeta que ayer si abria.", [], 0, "Comprobar alcance, identidad, grupos, ACL, herencia, ruta, servidor y logs."),
    q("0223", "contingency", "Tras una actualizacion, una impresora de red deja de funcionar.", [], 0, "Revisar cola, driver, IP, conectividad, permisos, rollback controlado y prueba."),

    q("0226", "test", "Que restriccion evita emails repetidos?", ["UNIQUE", "ORDER BY", "LIMIT", "LEFT JOIN"], 0, "UNIQUE impide duplicados segun la regla definida."),
    q("0226", "test", "Que operador comprueba ausencia de valor?", ["IS NULL", "= NULL", "LIKE NULL", "NOT 0"], 0, "NULL se compara con IS NULL / IS NOT NULL."),
    q("0226", "test", "Una clave foranea sirve para...", ["Mantener integridad entre tablas", "Aumentar siempre velocidad", "Eliminar columnas", "Ordenar resultados"], 0, "Referencia una clave de otra tabla y controla relaciones validas."),
    q("0226", "test", "Que clausula ordena resultados?", ["ORDER BY", "GROUP BY", "HAVING", "CREATE"], 0, "ORDER BY ordena el conjunto final."),
    q("0226", "oral", "Explica primera, segunda y tercera forma normal con un ejemplo sencillo.", [], 0, "Valores atomicos, dependencias completas y evitar dependencias transitivas."),
    q("0226", "oral", "Cuando crearias una vista y cuando una tabla real?", [], 0, "Vista para consulta/logica reutilizable; tabla si necesitas persistir datos, rendimiento o historico."),
    q("0226", "practice", "Consulta clientes con mas de 3 pedidos.", [], 0, "JOIN pedidos, GROUP BY cliente y HAVING COUNT(*) > 3."),
    q("0226", "practice", "Crea una tabla pedidos con cliente obligatorio y fecha.", [], 0, "Incluye id PK, cliente_id FK NOT NULL, fecha NOT NULL y restricciones utiles."),
    q("0226", "contingency", "Una consulta que antes iba bien ahora tarda 20 segundos.", [], 0, "Revisar plan, volumen, indices, estadisticas, filtros, locks y cambios recientes."),
    q("0226", "contingency", "Una importacion CSV falla a mitad y deja datos parciales.", [], 0, "Usar staging, transaccion, validacion previa, rollback y reporte de errores."),

    q("0491", "test", "Que metodo registra un manejador de evento?", ["addEventListener", "queryTable", "httpListen", "sqlJoin"], 0, "addEventListener separa comportamiento de estructura."),
    q("0491", "test", "Que propiedad cambia una clase CSS?", ["classList", "localStorage", "navigator", "datasetSQL"], 0, "classList permite add, remove, toggle y contains."),
    q("0491", "test", "Que comprueba response.ok en fetch?", ["Estado HTTP 200-299", "Que JSON existe siempre", "Que no hay red", "Que CSS cargo"], 0, "fetch solo rechaza por fallo de red; HTTP 500 necesita comprobacion."),
    q("0491", "test", "Para layouts de dos dimensiones conviene...", ["CSS Grid", "Solo br", "Tablas para todo", "eval"], 0, "Grid es adecuado para filas y columnas."),
    q("0491", "oral", "Como explicarias la delegacion de eventos?", [], 0, "Un listener en contenedor detecta eventos de hijos usando bubbling y closest."),
    q("0491", "oral", "Que estados debe tener un formulario que envia datos a una API?", [], 0, "Idle, validacion, loading, exito, error recuperable y error de servidor."),
    q("0491", "practice", "Implementa conceptualmente un buscador que filtra tarjetas mientras escribes.", [], 0, "input event, normalizar texto, filtrar datos, render seguro y mensaje sin resultados."),
    q("0491", "practice", "Haz una tabla responsive que no rompa en movil.", [], 0, "Replantear columnas, overflow controlado, cards en movil o grid con minmax."),
    q("0491", "contingency", "Un usuario pulsa guardar dos veces y se duplican datos.", [], 0, "Deshabilitar boton, estado loading, idempotencia con servidor y feedback claro."),
    q("0491", "contingency", "Una imagen sin alt es clave para entender la pantalla.", [], 0, "Anadir alt descriptivo o texto equivalente; si decorativa, alt vacio."),

    q("0492", "test", "Que codigo HTTP encaja al crear un recurso?", ["201", "301", "404", "500 siempre"], 0, "201 Created indica creacion correcta."),
    q("0492", "test", "Que cookie reduce acceso desde JavaScript?", ["HttpOnly", "Pretty", "Wide", "JSON"], 0, "HttpOnly mitiga robo de cookie por XSS."),
    q("0492", "test", "Que respuesta encaja con falta de autenticacion?", ["401", "204", "302 siempre", "100"], 0, "401 indica que falta o falla autenticacion."),
    q("0492", "test", "Que protege frente a SQL injection?", ["Parametros del driver", "Concatenar strings", "Ocultar formulario", "Cambiar color"], 0, "Los parametros separan datos de codigo SQL."),
    q("0492", "oral", "Explica como manejarias subida de archivos en servidor.", [], 0, "Validar tipo/tamano, nombre seguro, almacenamiento, permisos, antivirus si procede y errores."),
    q("0492", "oral", "Como registrarias logs utiles sin exponer secretos?", [], 0, "Nivel, requestId, contexto tecnico, usuario pseudonimizado y enmascarado de tokens."),
    q("0492", "practice", "Disena login con sesion segura.", [], 0, "Validar, hash seguro, rotar sesion, cookie Secure/HttpOnly/SameSite y rate limit."),
    q("0492", "practice", "Crea contrato para GET /api/proyectos/:id.", [], 0, "Auth, autorizacion por proyecto, 200 con JSON, 401/403/404, errores consistentes."),
    q("0492", "contingency", "Suben intentos de login de golpe.", [], 0, "Rate limit, alertas, logs, bloqueo progresivo, MFA y mensajes que no enumeren usuarios."),
    q("0492", "contingency", "Usuario A ve datos de usuario B cambiando el id.", [], 0, "Fallo IDOR: comprobar ownership/ACL en servidor y anadir pruebas."),

    q("0493", "test", "Que archivo suele fijar versiones npm?", ["package-lock.json", "index.html", "robots.txt", "favicon.ico"], 0, "El lockfile hace instalaciones reproducibles."),
    q("0493", "test", "Smoke test significa...", ["Comprobacion rapida de que lo esencial funciona", "Test de todos los casos", "Borrar logs", "Cambiar DNS"], 0, "Tras deploy valida flujos criticos sin cubrir todo."),
    q("0493", "test", "Una variable secreta debe guardarse...", ["En entorno seguro del proveedor", "En README publico", "En codigo fuente", "En comentario HTML"], 0, "Nunca en repos publicos ni artefactos cliente."),
    q("0493", "test", "Un buen README debe incluir...", ["Instalacion, uso, pruebas y despliegue", "Solo una foto", "Solo licencia", "Nada si la app funciona"], 0, "La documentacion tambien se evalua como capacidad profesional."),
    q("0493", "oral", "Explica como resolverias un conflicto Git sin perder trabajo.", [], 0, "Entender ambos cambios, integrar comportamiento, tests, diff y commit de merge."),
    q("0493", "oral", "Como documentarias una incidencia de produccion?", [], 0, "Impacto, hora, sintomas, causa, solucion, verificacion, prevencion y responsables."),
    q("0493", "practice", "Prepara un plan de rollback para una app desplegada en Vercel.", [], 0, "Identificar version estable, revert/deploy previo, variables compatibles, smoke test y comunicacion."),
    q("0493", "practice", "Disena un pipeline minimo para una app web.", [], 0, "Checkout, dependencias con lockfile, lint, tests, build, artefacto y deploy condicionado."),
    q("0493", "contingency", "Hay que desplegar rapido pero los tests fallan.", [], 0, "Valorar impacto, no ignorar fallo sin entenderlo, hotfix acotado o retrasar con comunicacion."),
    q("0493", "contingency", "Tras deploy suben errores 500 al 20 %.", [], 0, "Pausar, mirar logs/metricas, rollback si impacto, verificar recuperacion y RCA.")
  );

  const phases = [
    ["Semana 1", "Fundamentos reales", ["Leer una leccion de cada ECP", "Completar diagnostico inicial", "Responder 25 test basicos", "Crear carpeta de evidencias"]],
    ["Semana 2", "Practica guiada", ["Resolver 2 casos practicos por modulo", "Escribir respuestas orales", "Corregir todos los fallos", "Preparar README/dossier"]],
    ["Semana 3", "Nivel tribunal", ["Simulacro exigente completo", "Explicar decisiones tecnicas en voz alta", "Cubrir evidencias flojas", "Practicar contingencias"]],
    ["Semana 4", "Cierre", ["Repetir fallos", "Simular entrevista final", "Exportar progreso", "Revisar documentos y enlaces"]]
  ];

  const state = load();
  let deferredInstall = null;
  let currentExam = null;

  const $ = (id) => document.getElementById(id);
  const els = {
    title: $("viewTitle"),
    streak: $("streakText"),
    readyRing: $("readyRing"),
    readyText: $("readyText"),
    readyLabel: $("readyLabel"),
    answered: $("mAnswered"),
    accuracy: $("mAccuracy"),
    practices: $("mPractices"),
    evidence: $("mEvidence"),
    mastery: $("masteryList"),
    diagnostic: $("diagnosticResult"),
    phaseBoard: $("phaseBoard"),
    moduleSelect: $("moduleSelect"),
    moduleDetail: $("moduleDetail"),
    trainMode: $("trainMode"),
    trainModule: $("trainModule"),
    activityBox: $("activityBox"),
    examBox: $("examBox"),
    evidenceBoard: $("evidenceBoard"),
    installBtn: $("installBtn")
  };

  function q(ecp, type, prompt, options, answer, explain) {
    return { id: `${ecp}-${type}-${prompt.slice(0, 18)}`, ecp, type, prompt, options, answer, explain };
  }

  function load() {
    const base = { answered: 0, correct: 0, lastStudy: "", streak: 0, q: {}, confidence: {}, oral: {}, practice: {}, contingency: {}, evidence: {}, phases: {} };
    try {
      return Object.assign(base, JSON.parse(localStorage.getItem(STORE) || "{}"));
    } catch (_) {
      return base;
    }
  }

  function save() {
    localStorage.setItem(STORE, JSON.stringify(state));
    renderAll();
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  function todayStudy() {
    const d = new Date().toISOString().slice(0, 10);
    if (state.lastStudy === d) return;
    if (!state.lastStudy) state.streak = 1;
    else {
      const diff = Math.round((new Date(d) - new Date(state.lastStudy)) / 86400000);
      state.streak = diff === 1 ? state.streak + 1 : 1;
    }
    state.lastStudy = d;
  }

  function modById(id) {
    return modules.find((m) => m.id === id) || modules[0];
  }

  function scoreModule(id) {
    const qs = questions.filter((item) => item.ecp === id && state.q[item.id]);
    const answered = qs.reduce((sum, item) => sum + state.q[item.id].a, 0);
    const correct = qs.reduce((sum, item) => sum + state.q[item.id].c, 0);
    const testScore = answered ? correct / answered : 0;
    const confidence = avg((modById(id).must || []).map((_, i) => state.confidence[`${id}-${i}`] || 0)) / 4;
    const activity = (Math.min(state.oral[id] || 0, 4) + Math.min(state.practice[id] || 0, 4) + Math.min(state.contingency[id] || 0, 3)) / 11;
    const ev = evidenceScore(id);
    return Math.round((testScore * .34 + Math.min(answered / 12, 1) * .12 + confidence * .22 + activity * .18 + ev * .14) * 100);
  }

  function avg(arr) {
    return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  }

  function evidenceScore(id) {
    const mod = modById(id);
    const done = mod.evidence.filter((_, i) => state.evidence[`${id}-${i}`]).length;
    return done / mod.evidence.length;
  }

  function globalScore() {
    const scores = modules.map((m) => scoreModule(m.id));
    return Math.round(Math.min(...scores) * .55 + avg(scores) * .45);
  }

  function renderAll() {
    const totalPractices = modules.reduce((n, m) => n + (state.practice[m.id] || 0), 0);
    const evidencePct = Math.round(avg(modules.map((m) => evidenceScore(m.id))) * 100);
    const ready = globalScore();
    els.streak.textContent = `${state.streak || 0} dias seguidos`;
    els.answered.textContent = state.answered;
    els.accuracy.textContent = state.answered ? `${Math.round((state.correct / state.answered) * 100)}%` : "-";
    els.practices.textContent = totalPractices;
    els.evidence.textContent = `${evidencePct}%`;
    els.readyText.textContent = `${ready}%`;
    els.readyRing.style.strokeDashoffset = String(314 - (314 * ready / 100));
    els.readyLabel.textContent = ready >= 85 ? "Vas con margen, sigue repasando fallos." : ready >= 60 ? "Base seria, faltan huecos por cerrar." : "Todavia hay que construir base y evidencias.";
    els.mastery.innerHTML = modules.map((m) => masteryRow(m)).join("");
    renderModule();
    renderEvidence();
  }

  function masteryRow(m) {
    const s = scoreModule(m.id);
    return `<div class="masteryRow"><b>${esc(m.code)}</b><div class="barTrack"><div class="barFill" style="width:${s}%"></div></div><strong>${s}%</strong></div>`;
  }

  function renderPhases() {
    els.phaseBoard.innerHTML = phases.map(([period, title, tasks], pi) => `
      <article class="phase">
        <small>${period}</small>
        <h3>${title}</h3>
        ${tasks.map((task, ti) => {
          const key = `${pi}-${ti}`;
          return `<label class="taskLine"><button class="checkBtn ${state.phases[key] ? "done" : ""}" data-phase="${key}">✓</button><span>${esc(task)}</span></label>`;
        }).join("")}
      </article>
    `).join("");
  }

  function renderModule() {
    const id = els.moduleSelect.value || modules[0].id;
    const mod = modById(id);
    els.moduleDetail.innerHTML = `
      <div class="moduleGrid">
        <article class="moduleCard">
          <div class="panelHead"><div><h2>${esc(mod.code)}</h2><p class="muted">${esc(mod.title)}</p></div><span class="statusBadge">${scoreModule(id)}%</span></div>
          <p>${esc(mod.baseline)}</p>
          <p class="notice">${esc(mod.proof)}</p>
          <div class="tagLine">${mod.must.map((t, i) => `<span class="tag">Criterio ${i + 1}</span>`).join("")}</div>
        </article>
        <article class="moduleCard">
          <h3>Autodiagnostico por criterio</h3>
          <div class="rubricList">
            ${mod.must.map((item, i) => rubric(id, i, item)).join("")}
          </div>
        </article>
      </div>
      <div class="split" style="margin-top:14px">
        <section class="panel"><div class="panelHead"><h2>Lecciones esenciales</h2></div><div class="lessonList">${mod.lessons.map(([a, b]) => `<div class="lesson"><strong>${esc(a)}</strong><p>${esc(b)}</p></div>`).join("")}</div></section>
        <section class="panel"><div class="panelHead"><h2>Que debes poder defender</h2></div><div class="lessonList">${mod.must.map((x) => `<div class="lesson">${esc(x)}</div>`).join("")}</div></section>
      </div>
    `;
  }

  function rubric(id, i, item) {
    const key = `${id}-${i}`;
    const value = state.confidence[key] || 0;
    return `<div class="rubric"><span>${esc(item)}</span><div class="scoreBtns">${[1,2,3,4].map((n) => `<button class="${value === n ? "active" : ""}" data-score="${key}" data-value="${n}">${n}</button>`).join("")}</div></div>`;
  }

  function renderEvidence() {
    els.evidenceBoard.innerHTML = modules.map((m) => `
      <section class="moduleCard">
        <div class="panelHead"><h2>${esc(m.code)}</h2><span class="tag">${Math.round(evidenceScore(m.id) * 100)}%</span></div>
        <div class="evidenceBoard">
          ${m.evidence.map((item, i) => {
            const key = `${m.id}-${i}`;
            return `<label class="evidenceItem"><button class="checkBtn ${state.evidence[key] ? "done" : ""}" data-evidence="${key}">✓</button><span><strong>${esc(item)}</strong>Defiendelo con fecha, contexto, que hiciste tu y resultado.</span></label>`;
          }).join("")}
        </div>
      </section>
    `).join("");
  }

  function pickActivity() {
    const mode = els.trainMode.value;
    const moduleId = els.trainModule.value;
    const pool = questions.filter((item) => item.type === mode && (moduleId === "all" || item.ecp === moduleId));
    const sorted = pool.slice().sort((a, b) => ((state.q[a.id]?.c || 0) / Math.max(state.q[a.id]?.a || 1, 1)) - ((state.q[b.id]?.c || 0) / Math.max(state.q[b.id]?.a || 1, 1)));
    renderActivity(sorted[Math.floor(Math.random() * Math.min(sorted.length, 6))] || pool[0]);
  }

  function renderActivity(item) {
    const mod = modById(item.ecp);
    if (item.options.length) {
      els.activityBox.innerHTML = `
        <article class="activityCard" data-qid="${esc(item.id)}">
          <div class="tagLine"><span class="tag">${esc(mod.code)}</span><span class="tag">Test tecnico</span></div>
          <h2>${esc(item.prompt)}</h2>
          <div class="optionList">${item.options.map((opt, i) => `<button class="optionBtn" data-answer="${i}">${esc(opt)}</button>`).join("")}</div>
          <div class="feedback hidden">${esc(item.explain)}</div>
        </article>`;
    } else {
      els.activityBox.innerHTML = `
        <article class="activityCard" data-open="${esc(item.id)}">
          <div class="tagLine"><span class="tag">${esc(mod.code)}</span><span class="tag">${labelType(item.type)}</span></div>
          <h2>${esc(item.prompt)}</h2>
          <textarea placeholder="Escribe tu respuesta como si estuvieras delante del asesor/evaluador"></textarea>
          <div class="rowActions">
            <button class="primaryBtn compact" data-open-done="${esc(item.type)}" data-module="${esc(item.ecp)}">La defenderia bien</button>
            <button class="secondaryBtn compact" data-show-feedback>Ver respuesta esperada</button>
          </div>
          <div class="feedback hidden">${esc(item.explain)}</div>
        </article>`;
    }
  }

  function labelType(type) {
    return { test: "Test", oral: "Entrevista", practice: "Caso practico", contingency: "Contingencia" }[type] || type;
  }

  function answerQuestion(card, selected) {
    const item = questions.find((q) => q.id === card.dataset.qid);
    if (!item || card.dataset.done) return;
    card.dataset.done = "1";
    todayStudy();
    const ok = selected === item.answer;
    state.answered += 1;
    state.correct += ok ? 1 : 0;
    const stat = state.q[item.id] || { a: 0, c: 0 };
    stat.a += 1;
    stat.c += ok ? 1 : 0;
    stat.last = Date.now();
    state.q[item.id] = stat;
    card.querySelectorAll(".optionBtn").forEach((btn) => {
      const n = Number(btn.dataset.answer);
      btn.classList.toggle("correct", n === item.answer);
      btn.classList.toggle("wrong", n === selected && !ok);
    });
    card.querySelector(".feedback").classList.remove("hidden");
    save();
  }

  function markOpen(type, moduleId) {
    todayStudy();
    if (type === "oral") state.oral[moduleId] = (state.oral[moduleId] || 0) + 1;
    if (type === "practice") state.practice[moduleId] = (state.practice[moduleId] || 0) + 1;
    if (type === "contingency") state.contingency[moduleId] = (state.contingency[moduleId] || 0) + 1;
    save();
    pickActivity();
  }

  function startDiagnostic() {
    let idx = 0;
    let right = 0;
    const pool = modules.flatMap((m) => questions.filter((q) => q.ecp === m.id && q.type === "test").slice(0, 3));
    const show = () => {
      const item = pool[idx];
      if (!item) {
        els.diagnostic.innerHTML = `<strong>Resultado: ${right}/${pool.length}</strong><p>${right >= 8 ? "Buen arranque. Pasa a casos practicos y entrevista." : "Conviene empezar por fundamentos y repetir test por modulo."}</p>`;
        save();
        return;
      }
      els.diagnostic.innerHTML = `<strong>${idx + 1}/${pool.length} · ${esc(modById(item.ecp).code)}</strong><p>${esc(item.prompt)}</p><div class="optionList">${item.options.map((o, i) => `<button class="optionBtn" data-diag="${i}">${esc(o)}</button>`).join("")}</div>`;
    };
    els.diagnostic.onclick = (ev) => {
      const btn = ev.target.closest("[data-diag]");
      if (!btn) return;
      if (Number(btn.dataset.diag) === pool[idx].answer) right += 1;
      idx += 1;
      show();
    };
    show();
  }

  function startExam() {
    currentExam = { i: 0, right: 0, items: shuffle(questions).slice(0, 30) };
    renderExam();
  }

  function renderExam() {
    const ex = currentExam;
    if (!ex) return;
    const item = ex.items[ex.i];
    if (!item) {
      const pct = Math.round((ex.right / ex.items.length) * 100);
      els.examBox.innerHTML = `<div class="resultBox"><h2>Resultado: ${pct}%</h2><p>${pct >= 85 ? "Resultado fuerte. Ahora repite solo fallos y prepara evidencias." : pct >= 65 ? "Vas bien, pero aun hay margen. Refuerza los modulos con menor seguridad." : "No lo fuerces todavia: vuelve a fundamentos y practica oral."}</p></div>`;
      save();
      return;
    }
    const hasOptions = item.options.length > 0;
    els.examBox.innerHTML = `
      <div class="examHeader"><strong>${ex.i + 1}/${ex.items.length}</strong><span>${esc(modById(item.ecp).code)} · ${labelType(item.type)}</span></div>
      <article class="activityCard" data-exam="${esc(item.id)}">
        <h2>${esc(item.prompt)}</h2>
        ${hasOptions ? `<div class="optionList">${item.options.map((o, i) => `<button class="optionBtn" data-exam-answer="${i}">${esc(o)}</button>`).join("")}</div>` : `<textarea placeholder="Respuesta oral/practica"></textarea><button class="primaryBtn compact" data-exam-open>La defenderia bien</button>`}
        <div class="feedback hidden">${esc(item.explain)}</div>
      </article>`;
  }

  function finishExamQuestion(selected) {
    const ex = currentExam;
    const item = ex.items[ex.i];
    todayStudy();
    if (item.options.length) {
      const ok = selected === item.answer;
      ex.right += ok ? 1 : 0;
      state.answered += 1;
      state.correct += ok ? 1 : 0;
      const stat = state.q[item.id] || { a: 0, c: 0 };
      stat.a += 1;
      stat.c += ok ? 1 : 0;
      state.q[item.id] = stat;
    } else {
      ex.right += 1;
      if (item.type === "oral") state.oral[item.ecp] = (state.oral[item.ecp] || 0) + 1;
      if (item.type === "practice") state.practice[item.ecp] = (state.practice[item.ecp] || 0) + 1;
      if (item.type === "contingency") state.contingency[item.ecp] = (state.contingency[item.ecp] || 0) + 1;
    }
    ex.i += 1;
    renderExam();
  }

  function shuffle(arr) {
    return arr.slice().sort(() => Math.random() - .5);
  }

  function exportProgress() {
    const lines = [
      "PEAC Trainer Pro - Progreso",
      `Fecha: ${new Date().toLocaleString("es-ES")}`,
      `Preparacion global: ${globalScore()}%`,
      "",
      ...modules.map((m) => `${m.code}: ${scoreModule(m.id)}% · Evidencias ${Math.round(evidenceScore(m.id) * 100)}%`),
      "",
      "Evidencias marcadas:",
      ...modules.flatMap((m) => m.evidence.map((e, i) => state.evidence[`${m.id}-${i}`] ? `- ${m.code}: ${e}` : null).filter(Boolean))
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "progreso-peac.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function init() {
    modules.forEach((m) => {
      els.moduleSelect.add(new Option(`${m.code} · ${m.title}`, m.id));
      els.trainModule.add(new Option(`${m.code}`, m.id));
    });
    els.trainModule.add(new Option("Todas", "all"), 0);
    els.trainModule.value = "all";
    renderPhases();
    renderAll();
    pickActivity();

    document.querySelectorAll(".navItem").forEach((btn) => btn.addEventListener("click", () => showView(btn.dataset.view)));
    document.body.addEventListener("click", (ev) => {
      const nav = ev.target.closest("[data-view-target]");
      if (nav) showView(nav.dataset.viewTarget);
      const jump = ev.target.closest("[data-jump]");
      if (jump) document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: "smooth" });
      const score = ev.target.closest("[data-score]");
      if (score) { state.confidence[score.dataset.score] = Number(score.dataset.value); save(); }
      const phase = ev.target.closest("[data-phase]");
      if (phase) { state.phases[phase.dataset.phase] = !state.phases[phase.dataset.phase]; renderPhases(); save(); }
      const evd = ev.target.closest("[data-evidence]");
      if (evd) { state.evidence[evd.dataset.evidence] = !state.evidence[evd.dataset.evidence]; save(); }
      const answer = ev.target.closest("[data-answer]");
      if (answer) answerQuestion(answer.closest("[data-qid]"), Number(answer.dataset.answer));
      const openDone = ev.target.closest("[data-open-done]");
      if (openDone) markOpen(openDone.dataset.openDone, openDone.dataset.module);
      const feed = ev.target.closest("[data-show-feedback]");
      if (feed) feed.closest(".activityCard").querySelector(".feedback").classList.remove("hidden");
      const examAnswer = ev.target.closest("[data-exam-answer]");
      if (examAnswer) finishExamQuestion(Number(examAnswer.dataset.examAnswer));
      const examOpen = ev.target.closest("[data-exam-open]");
      if (examOpen) finishExamQuestion(0);
    });

    els.moduleSelect.addEventListener("change", renderModule);
    els.trainMode.addEventListener("change", pickActivity);
    els.trainModule.addEventListener("change", pickActivity);
    $("nextActivityBtn").addEventListener("click", pickActivity);
    $("startTodayBtn").addEventListener("click", () => { showView("trainer"); todayStudy(); save(); });
    $("diagnosticBtn").addEventListener("click", startDiagnostic);
    $("markDayBtn").addEventListener("click", () => { todayStudy(); save(); });
    $("weakBtn").addEventListener("click", () => {
      const weakest = modules.slice().sort((a, b) => scoreModule(a.id) - scoreModule(b.id))[0];
      els.moduleSelect.value = weakest.id;
      renderModule();
    });
    $("startExamBtn").addEventListener("click", startExam);
    $("exportBtn").addEventListener("click", exportProgress);
    $("copyEvidenceBtn").addEventListener("click", exportProgress);
    $("resetBtn").addEventListener("click", () => {
      if (confirm("Borrar todo el progreso local de este dispositivo?")) {
        localStorage.removeItem(STORE);
        location.reload();
      }
    });

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstall = event;
      els.installBtn.classList.remove("hidden");
    });
    els.installBtn.addEventListener("click", async () => {
      if (!deferredInstall) return;
      deferredInstall.prompt();
      await deferredInstall.userChoice;
      deferredInstall = null;
      els.installBtn.classList.add("hidden");
    });
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
  }

  function showView(id) {
    document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === id));
    document.querySelectorAll(".navItem").forEach((b) => b.classList.toggle("active", b.dataset.view === id));
    els.title.textContent = ({ dashboard: "Panel de mando", roadmap: "Ruta de estudio", modules: "Modulos ECP", trainer: "Entrenamiento", exam: "Simulacro", evidence: "Evidencias" })[id] || "PEAC Trainer";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  init();
})();
