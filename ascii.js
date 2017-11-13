"use strict";

var startBtn = $("#startButton");
var stopBtn = $("#stopButton");
var animationSelection = $("#selectAnimation");
var fontSize = $("#selectFontSize");

$(startBtn).on('click', function () {
    alert("start");
});

$(stopBtn).on('click', function () {
    alert("stop");
});

$(animationSelection).on('change', function () {
    var animation = $("#selectAnimation").val();
    var text = ANIMATIONS[animation];
    $("textarea").html(text);
});
