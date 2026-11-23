const input = document.querySelector("#command-input");
const output = document.querySelector("#terminal-output");
const bootLines = document.querySelector("#boot-lines");
const bootScreen = document.querySelector("#boot-screen");
const clearButton = document.querySelector("#clear-button");
const clock = document.querySelector("#clock");

const commandHistory = [];
let historyIndex = 0;
let isReady = false;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function updateClock() {
  clock.textContent = new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

async function bootTerminal() {
  const messages = [
    "[ OK ] Initializing terminal environment...",
    "[ OK ] Loading interface modules...",
    "[ OK ] Checking local simulation status...",
    "[ OK ] Terminal ready."
  ];

  for (const message of messages) {
    const line = document.createElement("p");
    line.className = "boot-line";
    line.textContent = message;
    bootLines.append(line);
    await sleep(450);
  }

  isReady = true;
  input.disabled = false;
  input.focus();
  printOutput("Welcome, operator. This is a browser-based terminal simulation.", "success");
  printOutput('Type "help" to view the available commands.');
}
bootTerminal();

function printOutput(message, type = "") {
  const entry = document.createElement("div");
  entry.className = "output-entry";

  const text = document.createElement("p");
  text.className = `output-text ${type}`.trim();
  text.textContent = message;
  entry.append(text);
  output.append(entry);
  entry.scrollIntoView({ block: "end", behavior: "smooth" });
}

function printCommand(command) {
  const entry = document.createElement("div");
  entry.className = "output-entry";

  const echo = document.createElement("p");
  echo.className = "command-echo";
  echo.textContent = `DENNOH@SYSTEM:~$ ${command}`;
  entry.append(echo);
  output.append(entry);
}

function clearTerminal() {
  output.replaceChildren();
  input.focus();
}

function showHelp() {
  return [
    "AVAILABLE COMMANDS",
    " help       Show this command list",
    " whoami     Display the current operator",
    " date       Display the current date and time",
    " about      About this terminal",
    " projects   Display sample projects",
    " scan       Run a simulated network scan",
    " matrix     Display a short Matrix-style effect",
    " echo       Repeat text (example: echo Hello world)",
    " history    Show previously entered commands",
    " clear      Clear the terminal",
    "",
    "Tip: Use the UP and DOWN arrow keys to browse command history."
  ].join("\n");
}

async function runScan() {
  printOutput("Starting LOCAL DEMONSTRATION scan...", "warning");
  const targets = ["192.168.1.1", "192.168.1.10", "192.168.1.25", "192.168.1.40"];
  for (const target of targets) {
    await sleep(500);
    printOutput(`[SIMULATED] Checking ${target} ... response received`, "success");
  }
  printOutput("Demo scan complete. No devices were contacted; this is fictional output.", "warning");
}

async function runMatrix() {
  const characters = "01アイウエオカキクケコ";
  const lines = Array.from({ length: 5 }, () =>
    Array.from({ length: 34 }, () => characters[Math.floor(Math.random() * characters.length)]).join("")
  );
  for (const line of lines) {
    printOutput(line, "success");
    await sleep(130);
  }
  printOutput("Matrix effect complete.", "success");
}

async function executeCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return;

  printCommand(rawCommand);
  const [action, ...args] = command.split(/\s+/);
  const argumentText = args.join(" ");

  switch (action.toLowerCase()) {
    case "help":
      printOutput(showHelp());
      break;
    case "whoami":
      printOutput("Operator: DENNOH\nRole: System explorer\nEnvironment: Browser simulation", "success");
      break;
    case "date":
      printOutput(new Date().toString());
      break;
    case "about":
      printOutput("DENNOH TERMINAL v1.0.0\nA fictional terminal interface built with HTML, CSS and vanilla JavaScript.\nIt does not execute operating-system commands.");
      break;
    case "projects":
      printOutput("PROJECT DIRECTORY\n[01] Hacker Terminal Simulator\n[02] Interactive Particle Universe\n[03] Cyber Escape Room\n[04] Network Attack Simulator");
      break;
    case "scan":
      await runScan();
      break;
    case "matrix":
      await runMatrix();
      break;
    case "echo":
      printOutput(argumentText || "Usage: echo <message>");
      break;
    case "history":
      printOutput(commandHistory.length ? commandHistory.map((item, index) => `${index + 1}  ${item}`).join("\n") : "No commands in history yet.");
      break;
    case "clear":
      clearTerminal();
      break;
    default:
      printOutput(`Command not found: ${action}\nType "help" to see available commands.`, "error");
  }
}

input.addEventListener("keydown", async (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) historyIndex--;
    input.value = commandHistory[historyIndex] || "";
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < commandHistory.length) historyIndex++;
    input.value = commandHistory[historyIndex] || "";
    return;
  }

  if (event.key === "Enter" && isReady) {
    const command = input.value;
    if (command.trim()) {
      commandHistory.push(command);
      historyIndex = commandHistory.length;
      input.value = "";
      input.disabled = true;
      await executeCommand(command);
      input.disabled = false;
      input.focus();
    }
  }
});

clearButton.addEventListener("click", clearTerminal);

document.querySelector(".terminal-screen").addEventListener("click", () => {
  if (isReady) input.focus();
});
