//! コマンド追加
import { runHelp } from './cmd/help.js';
import { runClear } from './cmd/clear.js';
import { runEcho } from './cmd/echo.js';
import { setPlanet} from './cmd/planet.js';

const cliInput = document.getElementById('cli');
const output = document.getElementById('output');
const commands = new Map();

//! コマンド追加
const commandDefinitions = {
    help: {
        description: '使用可能なコマンドを表示します',
        handler: runHelp,
    },
    clear: {
        description: 'ログの表示をクリアします',
        handler: runClear,
    },
    echo: {
        description: '指定されたメッセージで返答します',
        handler: runEcho,
    },
    planet: {
        description: '惑星を変更します',
        handler: setPlanet,
    },
};

function addLog(message, type = 'cmd') {
    const command = message.trim();
    const newLog = document.createElement('div');
    newLog.textContent = `${command}`;
    newLog.className = `log-${type}`;
    output.appendChild(newLog);
    output.scrollTop = output.scrollHeight;

    setTimeout(() => {
        newLog.classList.add('fade-out');

        setTimeout(() => {
            newLog.remove();
        }, 1000);
    }, 3000);
}

function registerCommands(definitions) {
    Object.entries(definitions).forEach(([name, definition]) => {
        commands.set(name, definition);
    });
}

function processCommand(input) {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
        return;
    }

    const [commandName, ...args] = trimmedInput.split(/\s+/);
    const command = commands.get(commandName);

    if (command) {
        command.handler(args, {
            addLog,
            output,
            args,
            commandName,
            input: trimmedInput,
            commandDefinitions,
            context: {
                addLog,
                output,
                args,
                commandName,
                input: trimmedInput,
                commandDefinitions,
            },
        });
    } else {
        addLog(`不明なコマンド: ${commandName}`, 'error');
    }
}

registerCommands(commandDefinitions);

// 起動時
addLog('Welcome to the Dagik Earth FKS Ver!', 'message');

cliInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addLog('>' + cliInput.value.trim(), 'cmd');
        processCommand(cliInput.value);
        cliInput.value = '';
    }
});
