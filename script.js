// Attempt to close the window after 3 seconds
setTimeout(() => {
  console.log("Attempting to close the window...");
  window.close(); // Will work only if this page was opened by JavaScript
}, 7000);
