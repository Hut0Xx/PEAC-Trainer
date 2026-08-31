# PEAC Blindado

Aplicacion estatica preparada para Vercel y pensada para entrenar desde cero los 5 ECP solicitados:

- `ECP0223_3` - Configurar y explotar sistemas informaticos.
- `ECP0226_3` - Programar bases de datos relacionales.
- `ECP0491_3` - Desarrollar elementos software en el entorno cliente.
- `ECP0492_3` - Desarrollar elementos software en el entorno servidor.
- `ECP0493_3` - Implementar, verificar y documentar aplicaciones web en entornos Internet, Intranet y Extranet.

## Que incluye

- Logo propio y nueva interfaz optimizada para movil.
- Inicio sencillo con accesos a temario, pruebas y simulacro.
- Ruta de estudio en 4 fases, desde fundamentos hasta entrevista final.
- Temario de lectura por temas, con ideas clave reales, practicas relacionadas y evidencias posibles.
- Test del tema despues de estudiar, para practicar justo lo que acabas de leer.
- Seccion de respuesta escrita sin opciones, con textarea largo y solucion guia.
- Entrenamiento mixto: test tecnico, pregunta escrita, entrevista, caso practico, contingencia y minijuego tecnico.
- Simulacro realista con preguntas mezcladas de todos los formatos.
- Semaforo "Apto PEAC" con requisitos estrictos: temario, test, escritas, oral, practica, contingencias y evidencias.
- Dossier de evidencias por modulo.
- Exportacion del progreso en texto.
- PWA instalable y cache offline.

## Despliegue

El proyecto no necesita build. En Vercel:

- Framework Preset: `Other`.
- Build Command: vacio.
- Output Directory: vacio.

Cada push a `main` redepliega automaticamente si el repositorio esta conectado a Vercel.

## Nota importante

La app ayuda a reducir mucho el riesgo de llegar flojo a la acreditacion, pero la decision final depende del procedimiento PEAC, las evidencias aportadas, la entrevista y la valoracion oficial.

El progreso se guarda localmente en el navegador mediante `localStorage`.
