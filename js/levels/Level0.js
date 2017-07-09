import Level from './Level'
import Platform from '../entities/Platform'
import Gem from '../entities/Gem'

export default class Level0 extends Level {
  constructor () {
    super()
    this.spawnX = 50
    this.spawnY = 0
  }

  resetEntities () {
    this.entities = [
      new Platform(0, 400, 150, 24),
      new Platform(150, 360, 175, 64),
      new Platform(400, 380, 275, 44),
      new Platform(500, 310, 50, 5),
      new Platform(0, 300, 600, 5),
      new Platform(700, 300, 600, 5),
      new Gem(100, 170)
    ]
  }
  spawnGem (game) {
    const randomLeftLocation = (gem) => {
      return Math.floor(Math.random() * (this.width - gem.width) + 1)
    }
    var gem = new Gem()
    gem.setTop(170)
    gem.setLeft(randomLeftLocation.call(this, gem))

    while (gem.getLeft() - game.player.getLeft() < 100 && gem.getLeft() - game.player.getLeft() > -100) {
      gem.setLeft(randomLeftLocation(gem))
    }
    this.entities.push(gem)
  }
}
