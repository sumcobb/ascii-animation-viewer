/* Summer Turner
 * CSCI 342: Web Scripting, Fall 2017
 *
 * ASCII Animation Viewer to test understandning of JavaScript and its
 * interaction with HTML user interfaces.
 */

"use strict";

var intervalId = null;
var index = null;
var frames = null;

var speed = 250;

/* On click event handler function for start and stop buttons. */
$("#startButton").on('click', start);
$("#stopButton").on('click', stop);

/* Start
 * When clicked the animation begins, start button and select box are disabled.
 */
function start() {
	document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
	document.getElementById("selectAnimation").disabled = true;

    if(frames == null) {
        frames = document.getElementById("textarea").value.split("=====\n");
    }

    intervalId = setInterval(loop, speed);
}

/* Stop
 * When clicked the animation stops, stop button is disabled.
 */
function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("selectAnimation").disabled = false;

    clearInterval(intervalId);
    intervalId = 0;
}

/* Loop
 * Function to loop the animation and change the text area to the value.
 */
function loop() {
    if(index < frames.length-1) {
        index++;
    } else {
        index = 0;
    }
    document.getElementById("textarea").value = frames[index];
}

/* Select Animation
 * Attach an event handler function for changing the animation selection box.
 */
$("#selectAnimation").on('change', function () {
    var animation = $("#selectAnimation").val();
    var text = ANIMATIONS[animation];
    $("textarea").html(text);
    frames = text.split("=====\n");
});

/* Select Font Size
 * Attach an event handler function for changing the font selection box.
 */
$("#selectFontSize").on('change', function () {
    var size = $("textarea").css('font-size');
    var newSize = $("#selectFontSize").val();
    $("textarea").css('font-size', newSize);
});

/* Select Turbo
 * Attach an event handler function for clicking the turbo checkbox.
 */
$("#check").on('click', function () {
    if($('input[type=checkbox]').prop('checked')) {
        speed = 50;
    } else {
        speed = 250;
    }

    // ensure checking turbo doesn't start animation if not going
    if(intervalId != null && intervalId != 0) {
        stop();
        start();
    }
});
