var todasSugestoes = [
  { nome: "Exame de Urina", caminho: "exames.html" },
  // Adicione outros exames aqui
  // { nome: 'Outro Exame', caminho: 'outroExame.html' }
];

document.getElementById("searchInput").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var suggestionsDiv = document.getElementById("searchSuggestions");
  suggestionsDiv.innerHTML = "";

  if (searchValue) {
    suggestionsDiv.style.display = "block";

    // Filtrar sugestões que contêm pelo menos uma palavra do termo de pesquisa
    var sugestoesFiltradas = todasSugestoes.filter(function (sugestao) {
      return sugestao.nome.toLowerCase().includes(searchValue);
    });

    // Adicionar sugestões filtradas à div
    sugestoesFiltradas.forEach(function (sugestao) {
      var divItem = document.createElement("div");
      divItem.classList.add("search-suggestion-item");
      divItem.textContent = sugestao.nome;
      divItem.onclick = function () {
        window.location.href = sugestao.caminho;
      };
      suggestionsDiv.appendChild(divItem);
    });

    // Se não houver sugestões, esconder a div
    if (sugestoesFiltradas.length === 0) {
      suggestionsDiv.style.display = "none";
    }
  } else {
    suggestionsDiv.style.display = "none";
  }
});
