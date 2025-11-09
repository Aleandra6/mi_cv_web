// Mostrar/ocultar secciones
document.querySelectorAll("section h2").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const contenido = titulo.nextElementSibling;
    contenido.style.display = contenido.style.display === "none" ? "block" : "none";
  });
});

// Efecto DOM en habilidades
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("mouseover", () => item.style.transform = "scale(1.05)");
  item.addEventListener("mouseout", () => item.style.transform = "scale(1)");
});

