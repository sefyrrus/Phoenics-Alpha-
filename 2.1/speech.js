class SpeechRecognizer {
    constructor() {
        // Check if browser supports Web Speech API
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            // Create an instance of SpeechRecognition object
            this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new this.SpeechRecognition();

            // Set recognition parameters
            this.recognition.lang = 'en-US'; // Specify the language

            // Define the event handler for the 'result' event
            this.recognition.onresult = this.onSpeechResult.bind(this);

            // Define the event handler for the 'error' event

            // Add click event listener to the button to start recognition
            document.getElementById('micbut').addEventListener('click', () => {
                // Start speech recognition
                this.recognition.start();
            });
        } else {
            // Browser does not support speech recognition
            alert('Speech recognition is not supported in this browser.');
        }
    }

    onSpeechResult(event) {
        var transcript = event.results[0][0].transcript;
        var output = document.getElementById('output');
        output.textContent = "Did you say: " + transcript + "?";
        
        document.getElementsById('confirm').style.display = 'block';
    }
}

class Assessment {  
        constructor() {
           
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                // Create an instance of SpeechRecognition object
                this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                this.recognition = new this.SpeechRecognition();
    
                // Set recognition parameters
                this.recognition.lang = 'en-US'; // Specify the language
    
                this.recognition.assessresult = this.onSpeechAssess.bind(this);
    
                // Define the event handler for the 'error' event
                this.recognition.onerror = this.onSpeechError
    
                // Add click event listener to the button to start recognition
                document.getElementById('micsay').addEventListener('click', () => {
                    // Start speech recognition
                    this.recognition.start();
                });
            } else {
                
                alert('Speech recognition is not supported in this browser.');
            }
        }
    onSpeechAssess(event) {
        var said = event.result[0][0].said;
        var what = document.getElementById('firstword');
        what.textContent = said;
    }
}

    


const speechRecognizer = new SpeechRecognizer();
    
