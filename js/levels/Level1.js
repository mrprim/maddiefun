import Level from './Level'
import Platform from '../entities/Platform'
import Enemy from '../entities/Enemy/Enemy'

export default class Level1 extends Level {
  constructor () {
    super()
    this.spawnX = 50
    this.spawnY = 0
  }

  resetEntities () {
    this.entities = [
      new Platform(-250, 400, 1750, 24),
      new Platform(100, 350, 100, 1),
      new Platform(300, 350, 100, 1),
      new Platform(500, 350, 100, 1),
      new Platform(700, 350, 100, 1),
      new Platform(900, 350, 100, 1),
      new Enemy(30, 170),
      new Enemy(60, 170),
      new Enemy(90, 170),
      new Enemy(120, 170),
      new Enemy(150, 170),
      new Enemy(180, 170),
      new Enemy(210, 170),
      new Enemy(240, 170)
    ]
  }
}
