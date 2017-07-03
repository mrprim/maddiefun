// import { requestAnimationFrame } from './shim.js'
import * as canvas from './canvas'
import settings from './settings'

import player from './entities/player'
import ground from './entities/ground'

const entities = []
entities.push(player)

var w = window

var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame

const ctx = canvas.init()

var score = 0

entities.forEach(e => e.init())

var keysDown = {}
window.addEventListener('keydown', function (e) {
  keysDown[e.keyCode] = true
}, false)

window.addEventListener('keyup', function (e) {
  delete keysDown[e.keyCode]
}, false)

function reset () {
  entities.forEach(e => e.reset())
}

var update = function (modifier) {
  player.verticalSpeed -= settings.gravity
  player.y -= player.verticalSpeed * modifier

  if (player.y >= ground.y - player.height) {
    player.y = ground.y - player.height
  }

  if (player.x < 0) {
    player.x = settings.canvas.width
  }

  if (player.x > settings.canvas.width) {
    player.x = 0
  }

  if (38 in keysDown || 32 in keysDown) { // Player holding up
    if (isOnGround(player)) {
      player.verticalSpeed = player.jump
    }
  }

  if (37 in keysDown) { // Player holding left
    player.x -= player.speed * modifier
  }
  if (39 in keysDown) { // Player holding right
    player.x += player.speed * modifier
  }
}

function isOnGround (player) {
  return player.y === ground.y - player.height
}

var render = function () {
  canvas.clear(ctx)
  entities.forEach(e => e.render(ctx))
  ground.render(ctx)

  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.font = '24px Helvetica'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText('Score: ' + score, 32, 32)
}

var main = function () {
  var now = Date.now()
  var delta = now - then

  update(delta / 1000)
  render()

  then = now

  requestAnimationFrame(main)
}

// Let's play this game!
var then = Date.now()
reset()
main()
