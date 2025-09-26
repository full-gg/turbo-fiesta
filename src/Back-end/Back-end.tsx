const sendHp = async (count: number) => {
  try {
    const response = await fetch("http://localhost:3000", {
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