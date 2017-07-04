import Entity from './Entity'
import settings from '../settings'

export default class Player extends Entity {
  constructor () {
    super()
    this.speed = 256
    this.width = 32
    this.height = 32
    this.jumpSpeed = 256
    this.image = new Image()
    this.image.src = 'assets/player.png'
  }

  render (game) {
    const { ctx } = game
    ctx.drawImage(this.image, this.x, this.y)
  }

  reset () {
    this.x = settings.canvas.width / 2
    this.y = settings.canvas.height / 2
    this.speedH = 0
    this.speedV = 0
  }
  jump (game) {
    if (this.supported) {
      this.speedV = this.jumpSpeed
      game.score += 1
    }
  }

  goLeft () {
    this.speedH = -this.speed
  }

  goRight () {
    this.speedH = this.speed
  }
}
