// Наш герой.
const play = require('play-sound')({ player: 'afplay' }); // Use 'afplay' for macOS, 'aplay' for Linux, 'cmdmp3' for Windows

class Hero {
  constructor({ position }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
