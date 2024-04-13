if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.lang = 'en-US';

    document.getElementById('proceed').addEventListener('click', () => {

        if (document.getElementById('proceed').disabled) {
            alert('You have not tested your microphone. We\'re very positive that using a broken microphone won\'t give you the best results.');
        
    }});
    
   

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var output = document.getElementById('outputmictest');
        output.textContent = "Did you say: " + transcript + "?";

        document.getElementById('proceed').disabled = false;
    };


    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
    };

    document.getElementById('mictest').addEventListener('click', function() {

        recognition.start();
    });
} else {
  
    alert('Speech recognition is not supported in this browser.');

}