    

const hands = ['グー', 'チョキ', 'パー'];
const resultText = ['あなたの勝ちです', 'あなたの負けです', 'あいこです'];

const count = document.getElementById(`gameCount`);
let countResult = count.innerHTML;
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const myHandType = document.getElementById('myHand');
const enemyHandType = document.getElementById('enemyHand');
const result = document.getElementById('result');
const winCount = document.getElementById('winCount');
const loseCount = document.getElementById('loseCount');
const winRate = document.getElementById('winRate');
let result_hand;

// 試合数、勝ち負け数
let gameCount = 0;
let winResult = 0;
let loseResult = 0;

// 試合数の書き換え
const gameCountReplace = (gameCount) => {
    countResult = countResult.replace(countResult, gameCount);
    count.textContent = countResult;
}

const alert = (winResult, loseResult) => {
    if (winResult > loseResult) {
      window.alert('勝ち越しました！');
    } else if (winResult < loseResult) {
      window.alert('負け越しました！');
    } else {
      window.alert('引き分けでした！');
    }
}

// リセットボタン
const resetClick = () => {
    const resetBtn = document.createElement('input');
    resetBtn.type = 'button';
    resetBtn.value = '更新';
    reset.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
        location.reload();
    })
}

// 10回 押したらボタンを非活性化
const inactive = () => {
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
}

// 勝率計算
const winRateCalc = (gameCount, winCount) => {
    const winRateResult = (winCount / gameCount) * 100;
    winRate.textContent = `${winRateResult}%`;
}

// ボタン
const onClick = (event) => {
    const myHand = Number(event.target.value);
    const enemyHand = Math.floor(Math.random() * hands.length);

    myHandType.textContent = `自分の出した手：${hands[myHand]}`;
    enemyHandType.textContent = `相手の出した手：${hands[enemyHand]}`;

    // 勝敗
    const handResult  = (myHand - enemyHand + 3) % hands.length;

    if (handResult == 2) {
        result.textContent = resultText[0];
        gameCount++;
        winResult++;
        gameCountReplace(gameCount);

    } else if (handResult == 1) {
        result.textContent = resultText[1];
        gameCount++;
        loseResult++;
        gameCountReplace(gameCount);

    } else {
        result.textContent = resultText[2];
    }

    if (gameCount == 10) {
        winCount.textContent = `${winResult}回`;
        loseCount.textContent = `${loseResult}回`;
        winRateCalc(gameCount, winResult);
        alert(winResult, loseResult);
        inactive();
        resetClick();
    }
}

rock.addEventListener('click', onClick);
scissors.addEventListener('click', onClick);
paper.addEventListener('click', onClick);