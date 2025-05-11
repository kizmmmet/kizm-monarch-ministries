function greetFromCovenant() {
  const data = localStorage.getItem('kizmCovenant');
  const response = document.getElementById('response');

  if (data) {
    const parsed = JSON.parse(data);
    const name = parsed.name;
    const path = parsed.path;
    const greeting = `Welcome back, ${name}, noble ${path}. You are remembered in divine light.`;
    response.innerText = "Queen G: " + greeting;
    speak(greeting);
  } else {
    const generic = "Welcome, Sovereign. Join the covenant to be known.";
    response.innerText = "Queen G: " + generic;
    speak(generic);
  }
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  msg.pitch = 1.2;
  msg.rate = 0.95;
  msg.volume = 1;
  speechSynthesis.speak(msg);
}
