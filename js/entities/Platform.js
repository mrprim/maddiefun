import SolidEntity from './SolidEntity'

export default class Platform extends SolidEntity {
  constructor (left, top, width, height) {
    super()
    this.setLeft(left)
    this.setTop(top)
    this.width = width
    this.height = height
    this.hover = true
    this.immovable = true
  }

  onCollidedWithTop (collider) {
    collider.supported = true
    collider.setBottom(this.getTop())
    collider.speedV = collider.speedV * -0.6
  }

  render (game) {
    const { ctx } = game

    ctx.fillRect(this.getLeft(), this.getTop(), this.width, this.height)
  }
}
