import dayjs from "dayjs";

// Seleciona os períodos: manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

// Função que exibe os agendamentos na tela.
export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      // Adiciona a li com o id do agendamento.
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);

      // Adiciona a hora agendada.
      const time = document.createElement("strong");
      time.textContent = dayjs(schedule.when).format("HH:mm");

      // Adiciona o nome do cliente.
      const name = document.createElement("span");
      name.textContent = schedule.name;

      // Cria o ícone de cancelar o agendamento.
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // Adiciona a hora, nome e ícone de cancelar no item.
      item.append(time, name, cancelIcon);

      // Obtém somente a hora.
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão (manhã, tarde ou noite).
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos");
  }
}
