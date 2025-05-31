document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function(event) {
    card.classList.toggle('flipped');
    event.stopPropagation(); // Evita que el click se propague al documento
  });
});

document.addEventListener('click', function(event) {
  document.querySelectorAll('.card.flipped').forEach(function(card) {
    // Si el click NO fue dentro de la tarjeta, la cierra
    if (!card.contains(event.target)) {
      card.classList.remove('flipped');
    }
  });
});
