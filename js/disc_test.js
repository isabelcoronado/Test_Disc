// ================================
// DISC TEST – LÓGICA PRINCIPAL
// ================================

// Cada grupo tiene 4 palabras con su símbolo DISC
// ● = D (Dominancia), ▲ = I (Influencia), ✚ = S (Estabilidad), ■ = C (Cumplimiento)

const grupos = [
  { id: 1, opciones: [
    { texto: "Decidido", simbolo: "●", factor: "D" },
    { texto: "Optimista", simbolo: "▲", factor: "I" },
    { texto: "Paciente", simbolo: "✚", factor: "S" },
    { texto: "Preciso", simbolo: "■", factor: "C" }
  ]},
  { id: 2, opciones: [
    { texto: "Competitivo", simbolo: "●", factor: "D" },
    { texto: "Entusiasta", simbolo: "▲", factor: "I" },
    { texto: "Sereno", simbolo: "✚", factor: "S" },
    { texto: "Analítico", simbolo: "■", factor: "C" }
  ]},
  { id: 3, opciones: [
    { texto: "Valiente", simbolo: "●", factor: "D" },
    { texto: "Alegre", simbolo: "▲", factor: "I" },
    { texto: "Amable", simbolo: "✚", factor: "S" },
    { texto: "Organizado", simbolo: "■", factor: "C" }
  ]},
  { id: 4, opciones: [
    { texto: "Directo", simbolo: "●", factor: "D" },
    { texto: "Sociable", simbolo: "▲", factor: "I" },
    { texto: "Calmo", simbolo: "✚", factor: "S" },
    { texto: "Responsable", simbolo: "■", factor: "C" }
  ]},
  { id: 5, opciones: [
    { texto: "Competente", simbolo: "●", factor: "D" },
    { texto: "Persuasivo", simbolo: "▲", factor: "I" },
    { texto: "Leal", simbolo: "✚", factor: "S" },
    { texto: "Detallista", simbolo: "■", factor: "C" }
  ]},
  { id: 6, opciones: [
    { texto: "Seguro", simbolo: "●", factor: "D" },
    { texto: "Comunicativo", simbolo: "▲", factor: "I" },
    { texto: "Estable", simbolo: "✚", factor: "S" },
    { texto: "Cauteloso", simbolo: "■", factor: "C" }
  ]},
  { id: 7, opciones: [
    { texto: "Independiente", simbolo: "●", factor: "D" },
    { texto: "Animado", simbolo: "▲", factor: "I" },
    { texto: "Complaciente", simbolo: "✚", factor: "S" },
    { texto: "Disciplinado", simbolo: "■", factor: "C" }
  ]},
  { id: 8, opciones: [
    { texto: "Persistente", simbolo: "●", factor: "D" },
    { texto: "Entusiasta", simbolo: "▲", factor: "I" },
    { texto: "Comprensivo", simbolo: "✚", factor: "S" },
    { texto: "Consciente", simbolo: "■", factor: "C" }
  ]},
  { id: 9, opciones: [
    { texto: "Determinado", simbolo: "●", factor: "D" },
    { texto: "Simpático", simbolo: "▲", factor: "I" },
    { texto: "Tranquilo", simbolo: "✚", factor: "S" },
    { texto: "Exacto", simbolo: "■", factor: "C" }
  ]},
  { id: 10, opciones: [
    { texto: "Competidor", simbolo: "●", factor: "D" },
    { texto: "Amigable", simbolo: "▲", factor: "I" },
    { texto: "Pacificador", simbolo: "✚", factor: "S" },
    { texto: "Metódico", simbolo: "■", factor: "C" }
  ]},
  { id: 11, opciones: [
    { texto: "Energético", simbolo: "●", factor: "D" },
    { texto: "Carismático", simbolo: "▲", factor: "I" },
    { texto: "Tolerante", simbolo: "✚", factor: "S" },
    { texto: "Ordenado", simbolo: "■", factor: "C" }
  ]},
  { id: 12, opciones: [
    { texto: "Audaz", simbolo: "●", factor: "D" },
    { texto: "Entregado", simbolo: "▲", factor: "I" },
    { texto: "Cooperativo", simbolo: "✚", factor: "S" },
    { texto: "Precavido", simbolo: "■", factor: "C" }
  ]},
  { id: 13, opciones: [
    { texto: "Resuelto", simbolo: "●", factor: "D" },
    { texto: "Inspirador", simbolo: "▲", factor: "I" },
    { texto: "Constante", simbolo: "✚", factor: "S" },
    { texto: "Rigurosamente lógico", simbolo: "■", factor: "C" }
  ]},
  { id: 14, opciones: [
    { texto: "Arriesgado", simbolo: "●", factor: "D" },
    { texto: "Convincente", simbolo: "▲", factor: "I" },
    { texto: "Apacible", simbolo: "✚", factor: "S" },
    { texto: "Cuidadoso", simbolo: "■", factor: "C" }
  ]}
];

// Cargar dinámicamente los grupos en el formulario
const form = document.getElementById("discForm");

grupos.forEach(grupo => {
  const div = document.createElement("div");
  div.classList.add("grupo");
  div.innerHTML = `<h3>Grupo ${grupo.id}</h3>`;
  
  grupo.opciones.forEach((op, index) => {
    div.innerHTML += `
      <div class="opcion" data-grupo="${grupo.id}" data-factor="${op.factor}">
        <span class="simbolo">${op.simbolo}</span>
        <span>${op.texto}</span>
        <div>
          <button type="button" class="mas" onclick="seleccionar('${grupo.id}', '${op.factor}', 'mas', this)">Más</button>
          <button type="button" class="menos" onclick="seleccionar('${grupo.id}', '${op.factor}', 'menos', this)">Menos</button>
        </div>
      </div>
    `;
  });

  form.appendChild(div);
});

// Guardar las selecciones
let respuestas = {};

// Control de selección
function seleccionar(grupoId, factor, tipo, boton) {
  if (!respuestas[grupoId]) {
    respuestas[grupoId] = { mas: null, menos: null };
  }

  // Quitar selección previa del mismo tipo
  document.querySelectorAll(`.grupo:nth-child(${grupoId}) .${tipo}`).forEach(btn => btn.classList.remove("selected"));

  // Asignar nuevo valor
  respuestas[grupoId][tipo] = factor;
  boton.classList.add("selected");
}

// Calcular y guardar resultados
function enviarRespuestas() {
  const totalGrupos = Object.keys(respuestas).length;
  if (totalGrupos < grupos.length) {
    alert("Por favor, completa los 14 grupos antes de continuar.");
    return;
  }

  // Inicializar conteo de factores
  let conteo = { D: 0, I: 0, S: 0, C: 0 };

  for (let g in respuestas) {
    const { mas, menos } = respuestas[g];
    if (mas) conteo[mas]++;
    if (menos) conteo[menos]--;
  }

  // Guardar resultados en localStorage
  localStorage.setItem("resultadoDISC", JSON.stringify(conteo));

  // Redirigir a resultados
  window.location.href = "results_disc.html";
}
