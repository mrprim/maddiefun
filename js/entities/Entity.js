export default class Entity {
  constructor (left = 0, top = 0) {
    this.setLeft(left)
    this.setTop(top)
    this.speed = 0
    this.speedV = 0
    this.speedH = 0
    this.height = 0
    this.width = 0
  }
  reset (game) {}
  destroy () {
    this.inactive = true
  }
  onCollision (side, collidedWith, game) {}
  onCollidedWith (side, collider, game) {}
  getTop () { return this.y }
  setTop (pos) { this.y = pos }

  getBottom () { return this.y + this.height }
  setBottom (pos) { this.y = pos - this.height }
  getLeft () { return this.x }
  setLeft (pos) { this.x = pos }

  getRight () { return this.x + this.width }
  setRight (pos) { this.x = pos - this.width }

  getPosition () {
    return {
      top: this.getTop(),
      bottom: this.getBottom(),
      left: this.getLeft(),
      right: this.getRight()
    }
  }

  render (game) {
    const { ctx, offsetX } = game
    ctx.drawImage(this.image, this.x - offsetX, this.y)
//    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
}
