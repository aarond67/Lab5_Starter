// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', function () {
    const utterance = new SpeechSynthesisUtterance(textArea.value);

    const selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice;

    utterance.addEventListener('start', function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}