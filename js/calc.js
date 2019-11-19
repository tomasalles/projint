$(function() {
    $('#btntest').click(function(){
        $('#calc').toggle();
    });
});

var result;

$(function() {
    $('#plus').click(function() {
        var num1 = parseFloat(document.getElementById("num1").value.replace(",","."));
        var num2 = parseFloat(document.getElementById("num2").value.replace(",","."));
        plus(num1,num2);
    });
});

$(function() {
    $('#minus').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        minus(num1,num2);
    });
});

$(function() {
    $('#multi').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        multi(num1,num2);
    });
});

$(function() {
    $('#divide').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        divide(num1,num2);
    });
});

function plus(num1,num2){
    var result = num1+num2;
    $('#result').text(result);
}

function minus(num1,num2){
    var result = num1-num2;
    $('#result').text(result);
}

function multi(num1,num2){
    var result = num1*num2;
    $('#result').text(result);
}

function divide(num1,num2){
    var result = num1/num2;
    $('#result').text(result);
}

