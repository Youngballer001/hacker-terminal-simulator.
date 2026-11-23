# Dennoh Hacker Terminal Simulator

A fictional, interactive terminal experience built with **HTML, CSS and vanilla JavaScript**. It runs entirely in the browser and is designed as a front-end learning project.

> **Important:** This is a visual simulation, not a real operating-system terminal. It does not execute shell commands, scan real networks, or access external devices.

## Features

- Animated startup sequence
- Terminal-style command prompt
- Command history with the Up and Down arrow keys
- `help`, `whoami`, `date`, `about`, `projects`, `scan`, `matrix`, `echo`, `history` and `clear` commands
- Simulated network-scan output (fictional)
- Responsive layout for desktop and mobile
- Live clock

## Project structure

```text
hacker-terminal-simulator/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## Run locally

No framework, package installation or build process is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/hacker-terminal-simulator.git
   ```

2. Open the project folder:

   ```bash
   cd hacker-terminal-simulator
   ```

3. Open `index.html` in your browser.

   Alternatively, open the folder in VS Code and use the Live Server extension.

## Available commands

| Command | Description |
|---|---|
| `help` | Lists available commands |
| `whoami` | Displays the fictional operator profile |
| `date` | Displays the current date and time |
| `about` | Describes the simulator |
| `projects` | Displays sample projects |
| `scan` | Runs a fictional network-scan animation |
| `matrix` | Prints a short Matrix-style character effect |
| `echo <message>` | Prints the supplied message |
| `history` | Displays commands entered in this session |
| `clear` | Clears terminal output |

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM manipulation and browser events
- `setTimeout` / asynchronous functions

## GitHub workflow

Initialize Git in the project directory:

```bash
git init
git add .
git commit -m "Initial commit: build hacker terminal simulator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hacker-terminal-simulator.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and create the repository on GitHub before adding the remote.

For future changes:

```bash
git add .
git commit -m "feat: add new terminal command"
git push
```

## Ideas for future improvements

- Add command autocomplete
- Add multiple terminal themes
- Add a help menu with clickable commands
- Add a command for changing the terminal username
- Add a more advanced Matrix animation using Canvas
- Add sound effects with a mute toggle
- Add persistent command history using `localStorage`

## License

This project is open source and available under the MIT License. Add a `LICENSE` file if you choose to distribute it under that license.
