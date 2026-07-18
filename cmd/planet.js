export function setPlanet(args, context) {
    const planetName = args[0];
    if (!planetName) {
        context.addLog('引数 <planet_name> が必要です', 'error');
        return;
    }
    context.addLog(`✓ 惑星の変更に成功しました: ${planetName}`, 'cmd');


}
