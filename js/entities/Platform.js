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

  onCollidedWithLeft (collider) {
    collider.setRight(this.getLeft())
    collider.speedH = collider.speedH * -1
  }

  render (game) {
    const { ctx } = game

    ctx.fillRect(this.getLeft(), this.getTop(), this.width, this.height)
  }
}
