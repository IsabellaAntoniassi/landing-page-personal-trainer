/* =====================
   CARROSSEL (RESULTADOS / FEEDBACKS)
===================== */

function mudarSlide(id, index) {
  const track = document.getElementById(id);

  if (!track) return;

  track.style.transform = `translateX(-${index * 100}%)`;
}