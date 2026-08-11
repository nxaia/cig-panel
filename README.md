# CIG Panel

Panel de gestión de expedientes y constancias para la Municipalidad de Banda del Río Salí (CIG). React + Vite, sin backend propio en este repo (consumo directo de datos vía el cliente configurado en `src/App.jsx`).

## Funcionalidad principal

- Listado y búsqueda de expedientes/constancias.
- Generación de constancias en PDF (`jspdf`, `html2canvas`) e importación/exportación de planillas (`xlsx`).

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Genera `dist/` para despliegue estático (Vercel).

## Repositorio

`github.com/nxaia/cig-panel`
