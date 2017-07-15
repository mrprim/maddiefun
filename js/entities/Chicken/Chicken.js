import sprite from './sprite'
import SolidEntity from '../SolidEntity'
import Player from '../Player/Player'

export default class Chicken extends SolidEntity {
  constructor (left, top) {
    super()
    this.setLeft(left)
    this.setTop(top)
    this.jumpSpeed = 55
    this.width = 16
    this.height = 16
    this.sprite = sprite(this)
    this.speed = 100
    this.gravityMod = 5
  }

  runAi (game) {
    const { player } = game

    if (this.supported) {
      if (Math.random() > 0.90) {
        this.jump()
      }

      if (this.speedH < 0) {
        if (Math.random() > 0.90) {
          this.goLeft()
        } else {
          this.goRight()
        }
      } else {
        if (Math.random() > 0.90) {
          this.goRight()
        } else {
          this.goLeft()
        }
      }
    }
  }

  render (game) {
    const { ctx, offsetX } = game

    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x - offsetX, this.y, this.width, this.height)
  }

  reset () {
    this.speedH = 0
    this.speedV = 0
  }

  onCollidedWithTop (collider) {
    if (!(collider instanceof Player)) return

    collider.setBottom(this.getTop())
    collider.speedV = 550
    this.speedV = -500
  }

  onCollidedWithRight (collider) {
    if (!(collider instanceof Player)) return

    this.speedV = 200
    this.speedH = -75
  }

  onCollidedWithLeft (collider) {
    if (!(collider instanceof Player)) return

    this.speedV = 200
    this.speedH = 75
  }

  onCollidedWithBottom (collider) {}

  jump (game) {
    if (this.supported) {
      this.speedV = this.jumpSpeed
    }
  }

  goLeft () {
    this.speedH = -this.speed
  }

  goRight () {
    this.speedH = this.speed
  }
}
