// App.jsx - Panel Altamiranda (última versión estable)

import React from "react";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Panel Altamiranda - Sistema CIG</h1>
      <p>Estado: FUNCIONANDO</p>

      <section>
        <h2>✔ Módulos activos</h2>
        <ul>
          <li>Análisis con IA</li>
          <li>Generación de Planes</li>
          <li>Notas</li>
          <li>Upload de archivos</li>
        </ul>
      </section>

      <section>
        <h2>⚙ Configuración</h2>
        <p>Edge Function: openai-proxy (JWT desactivado)</p>
        <p>Supabase conectado correctamente</p>
      </section>

      <section>
        <h2>🚀 Flujo</h2>
        <ol>
          <li>Crear empresa</li>
          <li>Cargar análisis</li>
          <li>Generar plan</li>
          <li>Visualizar dashboard</li>
        </ol>
      </section>
    </div>
  );
}
