import SolidEntity from './SolidEntity'

export default class Chicken extends SolidEntity {
  constructor (left, top) {
    super(left, top)
    this.acceleration = 35
    this.maxSpeed = 256
    this.jumpSpeed = 650
  }

  runAi (game) {
    const { player } = game
  }

  render ({ ctx, offsetX }) {
    ctx.fillStyle = 'grey'
    ctx.fillRect(this.x - offsetX, this.y, this.width, this.height)
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

  stomp (game) {
    if (!this.supported && this.speedV < 0) {
      this.speedV = this.jumpSpeed * -2
      this.speedH = 0
    }
  }

  moveLeft () {
    if (this.supported) {
      this.speedH = this.speedH - this.acceleration
      this.speedH = this.speedH < -this.maxSpeed ? -this.maxSpeed : this.speedH
    } else {
      this.speedH = this.speedH - this.acceleration * 0.25
      this.speedH = this.speedH < -this.maxSpeed ? -this.maxSpeed : this.speedH
    }
  }

  moveRight () {
    if (this.supported) {
      this.speedH = this.speedH + this.acceleration
      this.speedH = this.speedH > this.maxSpeed ? this.maxSpeed : this.speedH
    } else {
      this.speedH = this.speedH + this.acceleration * 0.25
      this.speedH = this.speedH > this.maxSpeed ? this.maxSpeed : this.speedH
    }
  }
}
