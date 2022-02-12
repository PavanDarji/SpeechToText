let speechRecognition = window.webkitSpeechRecognition

let recognition = new speechRecognition()

let textbox = $("#textbox")

let instruction = $("#instruction")

let content = ' '

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
    let current = event.resultIndex;
    let tarnscript = event.results[current][0].tarnscript
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