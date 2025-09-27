import { FULL_BACKEND_URL } from "./constants";

const sendHp = async (count: number) => {
  try {
    const response = await fetch(`${FULL_BACKEND_URL}/hp_update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    });

    const data = await response.json();
    console.log("Ответ от бэка:", data);
  } catch (err) {
    console.error("Ошибка при отправке hp:", err);
  }
};

export default sendHp