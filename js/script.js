window.addEventListener("load", function () {
  let elem_preloader = document.getElementById("preloader");
  let elem_loader = document.getElementById("loader");

  setTimeout(function () {
    if (elem_preloader) elem_preloader.style.display = "none"; // Remover o preloader da visualização
    if (elem_loader) elem_loader.style.display = "none"; // Remover o loader da visualização
  }, 1280); // Ajuste o tempo conforme necessário
});
