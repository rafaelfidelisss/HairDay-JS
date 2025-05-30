import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera um evento de clique para cada lista (manhã, tarde e noite).
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    // Verifica se o elemento clicado é o ícone de excluir.
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Obtém o id do elemento da lista.
      const { id } = item.dataset;

      // Confirma que o id foi selecionado.
      if (id) {
        // Confirma se o usuário quer cancelar.
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // Cancela o agendamento.
          await scheduleCancel({ id });

          // Recarrega a lista de agendamentos.
          schedulesDay();
        }
      }
    }
  });
});
