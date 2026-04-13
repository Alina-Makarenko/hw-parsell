const listEl = document.querySelector(".list");
// const inputEl = document.querySelectorAll(".input");
// const resultEl = document.querySelectorAll(".texst");
const allItems = document.querySelectorAll(".item");

const correctAnswers = {
  0: "1929", // В якому році утворилася ОУН?
  1: "1775", // Остаточна ліквідація Запорозької Січі?
  2: "1223", // Битва на р. Калка?
};

listEl.addEventListener("click", (event) => {
  const btn = event.target.closest(".btn");
  if (!btn) return;

  const item = btn.closest(".item");
  if (!item) return;

  const index = Array.from(allItems).indexOf(item);

  const inputEl = item.querySelector(".input");
  const resultEl = item.querySelector(".texst");

  const ansver = inputEl.value.trim();

  if (ansver === "") {
    resultEl.textContent = "Будь ласка, введіть число";
    resultEl.classList.add("wrong");
    resultEl.classList.remove("correct");
  } else if (ansver === correctAnswers[index]) {
    resultEl.textContent = "Вітаю! Відповідь правильна";
    resultEl.classList.add("correct");
    resultEl.classList.remove("wrong");
  } else if (ansver !== correctAnswers[index]) {
    resultEl.textContent = "Відповідь неправильна. Спробуйте ще раз";
    resultEl.classList.add("wrong");
    resultEl.classList.remove("correct");
  }



  //   if (ansver === "1929") {
  //     output = "Вітаю! Відповідь правильна";
  //   } else if (ansver !== "1929") {
  //     output = "Нажаль, відповідь неправильна";
  //   }
});
