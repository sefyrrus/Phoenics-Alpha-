if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';

}
    //The transcript of the user's voice.

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript.toLowerCase();
        var output = document.getElementById('ido');
        output.textContent = transcript;

        var saythis = "i solemnly swear";


        if (transcript == saythis) {
            document.getElementById('proceed').disabled = false;

        }   else {
            document.getElementById('proceed').disabled = true;
            document.getElementById('activate').textContent = 'Try again?';
        }
        
    };

    //The function to start the recognition.
    
    document.getElementById('activate').addEventListener('click', function() {

        var buttext = document.getElementById('activate');
        buttext.textContent = 'Speak now!'

        recognition.start();

    });

