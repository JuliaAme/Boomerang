// Враг.
const play = require('play-sound')({ player: 'afplay' }); // Use 'afplay' for macOS, 'aplay' for Linux, 'cmdmp3' for Windows

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 40;
  }

  generateSkin() {
    const skins = ['🚽'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.skin = '💀';
    play.play('./src/sounds/puk.wav');
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
