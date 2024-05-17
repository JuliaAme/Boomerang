// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const play = require('play-sound')({ player: 'afplay' }); // Use 'afplay' for macOS, 'aplay' for Linux, 'cmdmp3' for Windows

class Boomerang {
  constructor() {
    this.skin = '💩';
    this.position = 1;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
