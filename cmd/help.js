export function runHelp(args, context) {
    const entries = Object.entries(context.commandDefinitions || {}).map(
        ([name, definition]) => `${name}: ${definition.description}`
    );

    context.addLog(`使用可能なコマンド: ${entries.join(' | ')}`, 'message');
}