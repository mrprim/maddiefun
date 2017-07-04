import Entity from './Entity'
import settings from '../settings'

export default class Ground extends Entity {
  constructor () {
    super()
    this.y = 400
    this.hover = true
    this.height = 5
    this.width = settings.canvas.width
  }

  render (game) {
    const { ctx } = game

    ctx.beginPath()
    ctx.rect(this.x, this.y, this.x + this.width, this.y + this.height)
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fill()
  }
}
