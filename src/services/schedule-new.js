import { apiConfig } from "./api-config.js";

// Função que registra um agendamento na API.
export async function scheduleNew({ id, name, when }) {
  try {
    // Faz uma requisição para enviar os dados do agendamento para a API.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente mais tarde.");
  }
}
