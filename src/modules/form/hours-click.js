// Função para selecionar a hora clicada.
export function hoursClick() {
  // Seleciona todas as horas disponíveis no momento.
  const hours = document.querySelectorAll(".hour-available");

  // Percorre a lista para selecionar a hora.
  hours.forEach((available) => {
    // Adiciona o evento de clique nas horas disponíveis.
    available.addEventListener("click", (selected) => {
      // Remove a classe hour-selected de todas as li não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe hour-selected na li clicada.
      selected.target.classList.add("hour-selected");
    });
  });
}
