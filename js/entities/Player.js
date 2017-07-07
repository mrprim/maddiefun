import SolidEntity from './SolidEntity'
import { canvasWidth } from '../canvas'

export default class Player extends SolidEntity {
  constructor () {
    super()
    this.acceleration = 35
    this.maxSpeed = 256
    this.width = 32
    this.height = 32
    this.jumpSpeed = 650
    this.image = new Image()
    this.image.src = 'assets/player.png'
  }

  reset () {
    this.x = canvasWidth / 2
    this.y = -40
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
    }
  }

  goRight () {
    if (this.supported) {
      this.speedH = this.speedH + this.acceleration
      this.speedH = this.speedH > this.maxSpeed ? this.maxSpeed : this.speedH
    }
  }
}
