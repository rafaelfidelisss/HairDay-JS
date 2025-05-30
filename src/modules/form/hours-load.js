import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

// Função que verifica os horários disponíveis.
export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários.
  hours.innerHTML = "";

  // Obtém a lista de horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  // Itera sobre o array com as horas de funcionamento.
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Verifica se a hora está ocupada ou no passado.
    const available = !unavailableHours.includes(hour) && !isHourPast;

    // Retorna as horas disponíveis.
    return {
      hour,
      available,
    };
  });

  // Renderiza os elementos de cada horário, disponível e ocupado.
  opening.forEach(({ hour, available }) => {
    // Renderiza as horas verificando se estão disponíveis.
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    // Adiciona o título dos períodos, acima de cada primeiro horário de cada período.
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    
    // Adiciona a hora na lista dos horários na tela.
    hours.append(li);
  });

  // Adiciona o evento de clique para selecionar horários disponíveis.
  hoursClick();
}

// Função que adiciona o título dos períodos.
function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
