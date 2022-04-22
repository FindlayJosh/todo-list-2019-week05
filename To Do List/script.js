document.querySelector(".addToList").addEventListener("click", add);
document.querySelector(".clearBtn").addEventListener("click", clear);
document
  .querySelector(".completeBtn")
  .addEventListener("click", clearCompleted);
function add(e) {
  e.preventDefault();
  let data = document.querySelector(".toDoValue").value;
  let completeNumber = document.querySelectorAll(".completed").length;
  const li = document.createElement("li");
  
  li.innerText = data;
  document.querySelector(".unorganizedList").appendChild(li);
  let incompleteNumber = document.querySelectorAll("li").length;
  document.querySelector(".toDoListLeft").innerText =
  incompleteNumber - completeNumber;
  
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    incompleteNumber = document.querySelectorAll("li").length;
    completeNumber = document.querySelectorAll(".completed").length;
    document.querySelector(".toDoListLeft").innerText =
      incompleteNumber - completeNumber;
  });
  document.querySelector('.toDoValue').value = ''
}
function clear() {
  document.querySelectorAll("li").forEach((li) => {
    li.remove();
  });
}
function clearCompleted() {
  document.querySelectorAll(".completed").forEach((li) => {
    li.remove();
  });
}
