// i-Reporter (350:炉中洩れ検査日報, XXX:炉中出口検査日報) の起動
async function answer(_Id, _data) {
    var nowQ = _data.substring(0,2);
    var allQ = _data.substring(2,4);
    var okQ = _data.substring(4,6);

    var targetElement = document.getElementById(_Id);
    var clientRect = targetElement.getBoundingClientRect();
    var x = clientRect.left;// 画面内の位置
    var y = clientRect.top; // 画面内の位置	
    var url = "";
    
    // 判定
    if (_Id == "ans_ok") {
        okQ = ("00" + (Number(okQ) + 1)).slice(-2);
        document.getElementById("result").innerHTML = "お見事、正解です！！";
        url = "../img/correct.png";
    } else {
        document.getElementById("result").innerHTML = "<font color='red'>残念、不正解です！！</font>";
        url = "../img/wrong.png"
    }

    // 〇Ｘ画像上乗せ
    var image = new Image();
    image.src = url;
    image.setAttribute("src", url);
    image.width = 80;
    image.style.position = "absolute";
    image.style.left = (x - 8) + "px";
    image.style.top = (y + 40) + "px";
    var pic = document.getElementById("picture");
    pic.appendChild(image);

    // 次ページ遷移
    if (nowQ == allQ) {
        document.getElementById("question_next").value = "最終結果発表へ";
        const sleepByPromise = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await sleepByPromise(2000);
        document.getElementById("result").innerHTML = "";
        pic.removeChild(image);
        location.href = "result.html?" + nowQ + allQ + okQ;
    } else {
        nowQ = ("00" + (Number(nowQ) + 1)).slice(-2);
        document.getElementById("question_next").value = "次の問題へ";
        const sleepByPromise = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await sleepByPromise(2000);
        document.getElementById("result").innerHTML = "";
        pic.removeChild(image);
        location.href = "question" + nowQ + ".html?" + nowQ + allQ + okQ;
    }
}
