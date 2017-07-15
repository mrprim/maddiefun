import Level from './Level'
import Platform from '../entities/Platform'
import Gem from '../entities/Gem'
import Chicken from '../entities/Chicken/Chicken'

export default class Level1 extends Level {
  constructor () {
    super()
    this.spawnX = 50
    this.spawnY = 0
  }

  resetEntities () {
    this.entities = [
      new Platform(0, 400, 1750, 24),
      new Chicken(30, 170),
      new Chicken(60, 170),
      new Chicken(90, 170),
      new Chicken(120, 170),
      new Chicken(150, 170),
      new Chicken(180, 170),
      new Chicken(210, 170),
      new Chicken(240, 170)
    ]
  }
}
