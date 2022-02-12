var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instruction = $("#instruction")

var content = ' '

recognition.continuous = true

// recognition start

recognition.onstart = function () {
    instruction.text("Voice Recognition is on")
}

recognition.onspeechend = function () {
    instruction.text("No Activity")
}

recognition.onerror = function () {
    instruction.text("Please Micriphone is required..!!..... Only if you use the microphone ....Try Again ")
}

recognition.onresult = function (event) {
    var current = event.resultIndex;
    var tarnscript = event.results[current][0].tarnscript
    content += tarnscript
    textbox.val(content)
}


$("#start-btn").click(function (event) {
    if (content.length) {
        content += ''
    }
    recognition.start()
})


textbox.on('input', function () {
    content = $(this).val()
})
