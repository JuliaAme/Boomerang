// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero({ position: 0 });
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!

      if (this.enemy.skin === "💀") {
        this.check();
        this.boomerang.moveLeft();
        this.regenerateTrack();
        this.view.render(this.track);
      } else {
        this.check();
        this.boomerang.moveRight();
        this.regenerateTrack();
        this.view.render(this.track);
      }
      if (this.boomerang.position === 0) {
        console.log("YOU WIN!");
        process.exit()
      }
    }, 100);
  }
}

module.exports = Game;
