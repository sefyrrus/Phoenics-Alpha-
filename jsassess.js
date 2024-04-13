if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';

}
    //The transcript of the user's voice.

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var output = document.getElementById('answer');
        output.textContent = transcript;

        document.getElementById('next').disabled = false;
        
    };

    //The function to start the recognition.
    
    document.getElementById('say').addEventListener('click', function() {

        (document.getElementById('say')).textContent = 'Speak now!'

        recognition.start();

    });

