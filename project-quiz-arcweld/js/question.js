window.onload = function(){
    var data = location.href.split("?")[1];
    var nowQ = data.substring(0,2);
    var allQ = data.substring(2,4);
    var okQ = data.substring(4,6);
    
    document.getElementById("ans_ok").onclick = function(){
        location.href = "javascript:answer('ans_ok', '" + data + "01');";
    }

    document.getElementById("ans_ng1").onclick = function(){
        location.href = "javascript:answer('ans_ng1', '" + data + "02');";
    }

    document.getElementById("ans_ng2").onclick = function(){
        location.href = "javascript:answer('ans_ng2', '" + data + "02')";
    }

    document.getElementById("ans_ng3").onclick = function(){
        location.href = "javascript:answer('ans_ng3', '" + data + "02')";
    }
}
