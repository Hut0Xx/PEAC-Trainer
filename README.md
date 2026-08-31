# PEAC Trainer Pro

Aplicacion estatica preparada para Vercel y pensada para entrenar desde cero los 5 ECP solicitados:

- `ECP0223_3` - Configurar y explotar sistemas informaticos.
- `ECP0226_3` - Programar bases de datos relacionales.
- `ECP0491_3` - Desarrollar elementos software en el entorno cliente.
- `ECP0492_3` - Desarrollar elementos software en el entorno servidor.
- `ECP0493_3` - Implementar, verificar y documentar aplicaciones web en entornos Internet, Intranet y Extranet.

## Que incluye

- Panel de preparacion global con puntuacion por modulo.
- Ruta de estudio en 4 fases, desde fundamentos hasta entrevista final.
- Temario esencial y checklist de dominio por cada ECP.
- Entrenamiento mixto: test tecnico, entrevista, caso practico y contingencia.
- Simulacro exigente con preguntas mezcladas.
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
