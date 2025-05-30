import { schedulesDay } from "./schedules/load.js";

// Adiciona um evento para quando a página termina de carregar.
document.addEventListener("DOMContentLoaded", function () {
  // Executa a função que renderiza os horários disponíveis e agendamentos do dia.
  schedulesDay();
});
