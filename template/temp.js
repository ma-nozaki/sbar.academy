//問題文配列
let Question = 
[
    ["観察した状況をSBARに従って報告する際のS（Situation）として適切な内容を選択せよ",
 "Aさんが一人で着替えをしました。",
 "Aさんが一人でトイレに歩きました。",
 "Aさんがベッドから転落して腰を打ちました。",
 "Aさんがベッドに座っていました。",
 "3"],
 ["観察した状況をSBARに従って報告する際のB（Background）として適切な内容を選択せよ",
 "Aさんは排尿の間隔が短いです。",
 "Aさんには糖尿病の持病があります。",
 "Aさんには右麻痺があります。",
 "Aさんは耳が遠いです。",
 "3"],
 ["観察した状況をSBARに従って報告する際のA（Assessment）として適切な内容を選択せよ",
 "AさんはADLが自立してきたと判断します。",
 "Aさんは大丈夫だと言っているので問題ないと思います。",
 "Aさんは麻痺側からベッドを降りようとしてバランスを崩し転倒したようです。",
 "Aさんは看護師に遠慮しているようです。",
 "3"],
 ["観察した状況をSBARに従って報告する際のR（Recomendation）として適切な内容を選択せよ",
 "緊急手術が必要と考えます。",
 "鎮痛剤の投与が必要と考えます。",
 "一度診察していただけませんか？",
 "退院は延期にしていただけませんか？",
 "3"]
];

 // 初期変数定義
 // 問題を表示するオブジェクトを取得する
 let Q = document.getElementById('_question');
 // 問題を表示するオブジェクトを取得する
 let A1 = document.getElementById('_ans1');
 let A2 = document.getElementById('_ans2');
 let A3 = document.getElementById('_ans3');
 let A4 = document.getElementById('_ans4');

 // 正解数を保持する値
 let Correct = 0;
 let Q1 = "";
 let Q2 = "";
 let Q3 = "";
 let Q4 = "";

// 現在の問題数
let Qcnt = 0;
// 問題を画面に表示する処理
function Q_Set() {
Q.textContent = Question[Qcnt][0];
A1.textContent = Question[Qcnt][1];
A2.textContent = Question[Qcnt][2];
A3.textContent = Question[Qcnt][3];
A4.textContent = Question[Qcnt][4];
};
// 画面に表示
Q_Set();
// 問題を画面に表示する処理
function Q_Set() {
Q.textContent = Question[Qcnt][0];
A1.textContent = Question[Qcnt][1];
A2.textContent = Question[Qcnt][2];
A3.textContent = Question[Qcnt][3];
A4.textContent = Question[Qcnt][4];
};
// 画面に表示
Q_Set();
// 回答ボタンを押したときの処理
function Answer_Check(ans) {
    if(ans == Question[Qcnt][5]) {
        Correct++;
        if (Qcnt == 0){
            Q1 = "正解";
        }else if (Qcnt == 1){
            Q2 = "正解";
        }else if (Qcnt == 2){
            Q3 = "正解";
        }else if (Qcnt == 3){
            Q4 = "正解";
        }
    } else {
        if (Qcnt == 0){
            Q1 = "不正解";
        }else if (Qcnt == 1){
            Q2 = "不正解";
        }else if (Qcnt == 2){
            Q3 = "不正解";
        }else if (Qcnt == 3){
            Q4 = "不正解";
        }
    }
    Qcnt++;
    if (Qcnt == Question.length) {
         A1.textContent = "解説文";
         A2.textContent = "解説文";
         A3.textContent = "解説文";
         A4.textContent = "解説文";
        Q.textContent = "問題は以上です。正解数は" + Correct + "でした。解説は以下をご覧ください。";
        A1.textContent += Q1 + "です。今回の問題は●●のため正解は●●です。";
        A2.textContent += Q2 + "です。今回の問題は●●のため正解は●●です。";
        A3.textContent += Q3 + "です。今回の問題は●●のため正解は●●です。";
        A4.textContent += Q4 + "です。今回の問題は●●のため正解は●●です。";
        } else {
        Q_Set();
    }
}