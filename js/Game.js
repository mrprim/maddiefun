import Level0 from './levels/Level0'
import Level1 from './levels/Level1'
import Scoreboard from './entities/Scoreboard'
import * as canvas from './canvas'
import { PLAY } from './constants/gameModes'

export default class Game {
  constructor (player) {
    this.player = player
    this.scoreboard = new Scoreboard()
    this.ctx = canvas.init()
    this.levels = [
      new Level0(),
      new Level1()
    ]
    this.level = this.levels[0]
    this.score = 0
    this.clock = 0
    this.keysDown = {}
    this.mode = PLAY
  }

  reset () {
    this.score = 0
    this.clock = 0
    this.offsetX = 0
    this.level.reset(this)
  }

  getEntities () {
    return this.level.entities.concat(this.player).concat(this.scoreboard)
  }

  getActiveEntities () {
    return this.getEntities().filter((e) => !e.inactive)
  }

  render () {
    var g = this
    this['render' + this.mode](g)
  }

  renderplay (g) {
    canvas.clear(this.ctx)
    this.getActiveEntities().forEach(e => e.render(g))
  }

  renderpause (g) {
    canvas.clear(this.ctx)
    this.getActiveEntities().forEach(e => e.render(g))
    this.ctx.fillStyle = 'rgba(12, 12, 12, .9)'
    this.ctx.fillRect(0, 0, canvas.getCanvasWidth(), canvas.canvasHeight)
  }

  scroll () {
    const { player } = this
    const { getCanvasWidth } = canvas

    const xCenter = getCanvasWidth() / 2
    this.offsetX = -(xCenter - player.x)

    if (this.offsetX < 0) this.offsetX = 0
    if (this.offsetX < 0) this.offsetX = 0
    if (this.offsetX > this.level.width - getCanvasWidth()) this.offsetX = this.level.width - getCanvasWidth()
  }
}
