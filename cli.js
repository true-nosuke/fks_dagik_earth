const cliInput = document.getElementById('cli');
const output = document.getElementById('output');

//　起動時
addLog("Welcome to the Dagik Earth FKS Ver!", 'message');

function addLog(message, type = 'cmd') {
        
    //　入力内容をoutput²追加
        const command = message.trim();
        const newLog = document.createElement('div');
        newLog.textContent = `${command}`;
        newLog.className = `log-${type}`;
        output.appendChild(newLog);
        output.scrollTop = output.scrollHeight; // スクロールを最新のログに合わせる
        // フェードアウト
        setTimeout(() => {
            newLog.classList.add('fade-out');

            // アニメーションが終わる1秒後に、HTML要素自体を完全に削除
            setTimeout(() => {
                newLog.remove();
            }, 1000);

        }, 3000);

}

cliInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addLog(">" + cliInput.value.trim(), 'cmd'); // 入力内容をログに追加
        cliInput.value = ''; // 入力欄をクリア
        
        // todo
        // if (command) {
        //     // コマンドを処理する関数を呼び出す
        //     processCommand(command);

        // }

    }
});

