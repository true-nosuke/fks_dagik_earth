import {changeTexture} from '../main.js';
export function setPlanet(args, context) {
    const planetName = args[0];
    if (!planetName) {
        context.addLog('引数 <planet_name> が必要です', 'error');
        return;
    }
    context.addLog(`✓ 惑星の変更に成功しました: ${planetName}`, 'cmd');
    // 使用可能な惑星リスト
    const availablePlanets = ['earth', "night","moon",'mars', 'jupiter',"mercury"];
    if (!availablePlanets.includes(planetName)) {
        context.addLog(`その惑星は使用できません: ${planetName}`, 'error');
        context.addLog('使用可能な惑星: earth:地球, night:地球夜, moon:月, mars:火星, jupiter:木星, mercury:水星(地形データ)', 'error');
        return;
    }
    changeTexture(`textures/${planetName}.jpg`);
}
