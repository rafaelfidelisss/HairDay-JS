import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    // Faz uma requisição para deletar o elemento pelo id dele.
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso.");
  } catch (error) {
    console.log(error);
    alert("Não foi possíve cancelar o agendamento.");
  }
}
