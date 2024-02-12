function Detect_sound() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
       classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/Ee7HCzXwl/.jason", modelReady);
}

function model_ready() {
    classifier.classify( gotResults);
}

function Name_of_animals(error, results) {
   console.log('Name the animals')
}