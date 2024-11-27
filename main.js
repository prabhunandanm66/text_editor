// Format Text Function
function formatText(command) {
  document.execCommand(command, false, null);
}

// Change Text or Background Color
function changeColor(command, value) {
  document.execCommand(command, false, value);
}

// Change Font Size
function changeFontSize(size) {
  document.execCommand("fontSize", false, size);
}

// Prevent Default Drag and Drop Behavior in Editor
document.getElementById("editor").addEventListener("drop", (e) => {
  e.preventDefault();
});
