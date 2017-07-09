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

  render (game) {
    const { ctx, offsetX } = game

    ctx.fillRect(this.getLeft() - offsetX, this.getTop(), this.width, this.height)
  }
}
