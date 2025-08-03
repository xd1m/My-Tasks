function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task.");
    return;
  }

  const table = document.getElementById("taskTable");

  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = taskName;

  const statusCell = document.createElement("td");
  statusCell.textContent = "❌ Not Started";

  row.appendChild(nameCell);
  row.appendChild(statusCell);

  table.appendChild(row);

  taskInput.value = ""; // clear input
}
