import sprite from './sprite'
import Mob from '../Mob'

export default class Player extends Mob {
  constructor (left, top) {
    super(left, top)
    this.acceleration = 35
    this.maxSpeed = 256
    this.width = 32
    this.height = 32
    this.jumpSpeed = 650
    this.sprite = sprite(this)
  }

  jump (game, mod) {
    if (this.supported) {
      console.log(mod)
      this.speedV = this.jumpSpeed * (mod / 8)
    }
  }

  render (game) {
    const { ctx, offsetX } = game

    this.image = this.sprite.next().value
    ctx.drawImage(this.image, this.x - offsetX, this.y)
//    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
}
