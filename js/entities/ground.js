import settings from '../settings'

export default {
  x: 0,
  y: 400,
  width: settings.canvas.width,
  init: function () {},
  render: function (ctx) {
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.width, this.y)
    ctx.strokeStyle = 'rgb(0, 0, 0)'
    ctx.stroke()
  },
  reset: function () {}
}
