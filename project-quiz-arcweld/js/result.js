window.onload = function() {
    var data = location.href.split("?")[1];
    var nowQ = data.substring(0,2);
    var allQ = data.substring(2,4);
    var okQ = data.substring(4,6);
    var result = (Number(okQ) / Number(allQ)) * 100;
    // alert(allQ + ":" + okQ + ":" + result)
    if(result == 100){
        document.getElementById("result").innerHTML = "すばらしい！！　100点です。";
    }else if(result >= 80){
        document.getElementById("result").innerHTML = "おしい！！　もう1回チャレンジしてね。　" + result + "点です。";
    }else{
        document.getElementById("result").innerHTML = "残念！！　あと3回チャレンジすれば、満点とれるかも。　" + result + "点です。";
    }
}