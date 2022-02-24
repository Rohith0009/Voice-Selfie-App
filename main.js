SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
function start() {
  document.getElementById("text-box").innerHTML = "";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);
  content = event.results[0][0].transcript;
  console.log(content);
  document.getElementById("text-box").innerHTML = content;
  speak();
};

function speak() {
  synth = window.speechSynthesis;
  speak_data = document.getElementById("text-box").value;
  utter_this = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utter_this);
  Webcam.attach(camera);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 100,
});

camera = document.createElement("camera");
