import sprite from './sprite'
import SolidEntity from '../SolidEntity'
import { canvasWidth } from '../../canvas'

export default class Player extends SolidEntity {
  constructor () {
    super()
    this.acceleration = 35
    this.maxSpeed = 256
    this.width = 32
    this.height = 32
    this.jumpSpeed = 650
    this.sprite = sprite(this)
  }

  render (game) {
    const { ctx, offsetX } = game

    this.image = this.sprite.next().value
    ctx.drawImage(this.image, this.x - offsetX, this.y)
//    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }

  reset () {
    this.speedH = 0
    this.speedV = 0
  }

  jump (game) {
    if (this.supported) {
      this.speedV = this.jumpSpeed
    }
  }

  goLeft () {
    if (this.supported) {
      this.speedH = this.speedH - this.acceleration
      this.speedH = this.speedH < -this.maxSpeed ? -this.maxSpeed : this.speedH
    } else {
      this.speedH = this.speedH - this.acceleration * 0.25
      this.speedH = this.speedH < -this.maxSpeed ? -this.maxSpeed : this.speedH
    }
  }

  goRight () {
    if (this.supported) {
      this.speedH = this.speedH + this.acceleration
      this.speedH = this.speedH > this.maxSpeed ? this.maxSpeed : this.speedH
    } else {
      this.speedH = this.speedH + this.acceleration * 0.25
      this.speedH = this.speedH > this.maxSpeed ? this.maxSpeed : this.speedH
    }
  }
}
