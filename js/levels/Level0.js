import Level from './Level'
import Platform from '../entities/Platform'

export default class Level0 extends Level {
  constructor () {
    super()
    const p0 = new Platform(0, 400, 150, 24)
    const p1 = new Platform(150, 360, 175, 64)
    const p2 = new Platform(400, 380, 275, 44)
    const p3 = new Platform(500, 310, 50, 5)

    this.entities.push(p0)
    this.entities.push(p1)
    this.entities.push(p2)
    this.entities.push(p3)
  }
}
