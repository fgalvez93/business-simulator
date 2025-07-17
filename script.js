// Mostrar RUT del estudiante
document.getElementById('rutSpan').textContent = localStorage.getItem('rut') || 'No definido';

document.getElementById('form-ronda').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((val, key) => data[key] = val);

  // Guardar resultados en localStorage simulando "base de datos"
  const rut = localStorage.getItem('rut');
  const resultados = JSON.parse(localStorage.getItem('resultados')) || {};
  resultados[rut] = resultados[rut] || [];
  resultados[rut].push({ ronda: 1, ...data });
  localStorage.setItem('resultados', JSON.stringify(resultados));

  alert("✅ Ronda 1 guardada. Pasando a la siguiente ronda...");
  // Aquí deberías redirigir a ronda 2 (o actualizar game.html con la nueva ronda)
});
