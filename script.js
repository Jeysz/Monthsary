function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.toggle('open');
}

function startConfetti() {
    let confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed for each heart
        confetti.style.opacity = Math.random();
        confettiContainer.appendChild(confetti);
    }
}

