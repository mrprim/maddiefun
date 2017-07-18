import sprite from './sprite'
import Mob from '../Mob'
import Player from '../Player/Player'
import follow from '../../ai/follow'
import hop from '../../ai/hop'

export default class Chicken extends Mob {
  constructor (left, top) {
    super(left, top)

    this.acceleration = 100
    this.maxSpeed = 160
    this.jumpSpeed = 50
    this.width = 16
    this.height = 16
    this.sprite = sprite(this)
    this.gravityMod = 5
  }

  runAi (game) {
    const { player } = game

    follow(this, player)
    hop(this)
  }

  render ({ ctx, offsetX }) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x - offsetX, this.y, this.width, this.height)
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
}
