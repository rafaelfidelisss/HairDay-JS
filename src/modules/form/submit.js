import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
// inputs
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Gera a data atual para colocar no input com o formato correto.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Coloca a data atual no input e define a data mínima disponível como sendo a data atual. Para evitar agendamentos no passado.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

// Captura o evento de submit do form.
form.onsubmit = async (event) => {
  // Previne o comportamento padrão de recarregar a página.
  event.preventDefault();

  try {
    // Recupera o nome do cliente, removendo os espaços indesejados.
    const name = clientName.value.trim();

    // Exibe um alerta caso o nome não for definido.
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    // Alerta se nenhum horário for selecionado.
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data selecionada.
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID.
    const id = new Date().getTime().toString();

    // Faz uma requisição para enviar os dados do agendamento para a API.
    await scheduleNew({ id, name, when });

    // Recarrega os agendamentos e as horas disponíveis.
    await schedulesDay();

    // Limpa o input do nome após fazer um agendamento.
    clientName.value = "";

  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
