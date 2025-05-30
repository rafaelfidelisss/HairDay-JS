import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

const selectedDate = document.getElementById("date");

// Função que renderiza os horários disponíveis e os agendamentos do dia.
export async function schedulesDay() {
  // Obtém a data do input.
  const date = selectedDate.value;

  // Busca os agendamentos na API.
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos na tela.
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules });
}
