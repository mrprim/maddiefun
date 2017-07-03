import settings from '../settings'

export default {
  speed: 256,
  x: 0,
  y: 0,
  width: 32,
  height: 32,
  jumpSpeed: 256,
  init: function () {
    this.ready = false
    this.image = new Image()
    this.image.src = 'assets/player.png'
  },
  render: function (ctx) {
    ctx.drawImage(this.image, this.x, this.y)
  },
  reset: function () {
    this.x = settings.canvas.width / 2
    this.y = settings.canvas.height / 2
    this.horizontalSpeed = 0
    this.verticalSpeed = 0
  },
  jump: function () {
    this.verticalSpeed = this.jumpSpeed
  },
  goLeft: function () {
    this.horizontalSpeed = -this.speed
  },
  goRight: function () {
    this.horizontalSpeed = this.speed
  }
}
