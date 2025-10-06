// Define sounds and descriptions
const sounds = {
  rain: {
    file: 'sounds/rain.mp3',
    title: 'Stress Relief',
    desc: 'Gentle rain and soft tones to calm your mind and reduce tension.'
  },
  forest: {
    file: 'sounds/forest.mp3',
    title: 'Anxiety Relief',
    desc: 'Forest ambience and birdsong to ease restlessness and promote peace.'
  },
  ambient: {
    file: 'sounds/ambient.mp3',
    title: 'Depression Boost',
    desc: 'Warm ambient music to lift your mood and restore energy.'
  },
  ocean: {
    file: 'sounds/ocean.mp3',
    title: 'Panic Attack Relief',
    desc: 'Slow ocean waves to ground and soothe during moments of overwhelm.'
  },
  white_noise: {
    file: 'sounds/white_noise.mp3',
    title: 'Digital Overload Reset',
    desc: 'White noise to mask distractions and help you reset focus.'
  }
};

const sidePanel = document.getElementById('sidePanel');
const openPanelBtn = document.getElementById('openPanel');
const closePanelBtn = document.getElementById('closePanel');
const soundTitle = document.getElementById('soundTitle');
const soundDesc = document.getElementById('soundDesc');
const audioPlayer = document.getElementById('audioPlayer');

openPanelBtn.addEventListener('click', () => sidePanel.classList.add('open'));
closePanelBtn.addEventListener('click', () => sidePanel.classList.remove('open'));

// Play a chosen sound in a continuous loop
function playSound(key) {
  const sound = sounds[key];
  if (sound) {
    // Update text
    soundTitle.textContent = sound.title;
    soundDesc.textContent = sound.desc;

    // Stop any current sound
    audioPlayer.pause();

    // Load new sound and enable looping
    audioPlayer.src = sound.file;
    audioPlayer.loop = true;
    audioPlayer.currentTime = 0;
    audioPlayer.play();

    // Close side panel
    sidePanel.classList.remove('open');
  }
}

// Stop sound when the user leaves the page
window.addEventListener('beforeunload', () => {
  audioPlayer.pause();
  audioPlayer.src = '';
});
