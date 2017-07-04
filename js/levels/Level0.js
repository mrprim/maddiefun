import Level from './Level'
import Platform from '../entities/Platform'
import Gem from '../entities/Gem'

export default class Level0 extends Level {
  constructor () {
    super()
    const p0 = new Platform(0, 400, 150, 24)
    const p1 = new Platform(150, 360, 175, 64)
    const p2 = new Platform(400, 380, 275, 44)
    const p3 = new Platform(500, 310, 50, 5)
    const p4 = new Platform(0, 300, 600, 5)

    const g0 = new Gem()
    g0.setLeft(100)
    g0.setTop(170)

    this.entities.push(p0)
    this.entities.push(p1)
    this.entities.push(p2)
    this.entities.push(p3)
    this.entities.push(p4)
    this.entities.push(g0)
  }
}
