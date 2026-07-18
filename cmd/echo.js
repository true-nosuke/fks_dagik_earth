export function runEcho(args, context) {
    const message = (args || []).join(' ');

    if (message) {
        context.addLog(message, 'message');
    } else {
        context.addLog('Usage: echo <message>', 'error');
    }
}
