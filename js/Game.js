import Level0 from './levels/Level0'
import Level1 from './levels/Level1'
import scoreboard from './gui/scoreboard'
import startScreen from './gui/startScreen'
import pauseScreen from './gui/pauseScreen'
import * as canvas from './canvas'
import { INTRO } from './constants/gameModes'

export default class Game {
  constructor (player) {
    this.player = player
    this.ctx = canvas.init()
    this.levels = [
      new Level0(),
      new Level1()
    ]
    this.level = this.levels[0]
    this.score = 0
    this.clock = 0
    this.keysDown = {}
    this.mode = INTRO
  }

  reset () {
    this.score = 0
    this.clock = 0
    this.offsetX = 0
    this.level.reset(this)
  }

  getEntities () {
    return this.level.entities.concat(this.player)
  }

  getActiveEntities () {
    return this.getEntities().filter((e) => !e.inactive)
  }

  render () {
    var g = this
    this['render' + this.mode](g)
  }

  renderintro (g) {
    canvas.clear(this.ctx)
    this.getActiveEntities().forEach(e => e.render(g))
    this.ctx.fillStyle = 'rgba(12, 12, 12, .9)'
    this.ctx.fillRect(0, 0, canvas.getCanvasWidth(), canvas.canvasHeight)
    startScreen(g)
  }

  renderplay (g) {
    canvas.clear(this.ctx)
    this.getActiveEntities().forEach(e => e.render(g))
    scoreboard(g)
  }

  renderpause (g) {
    canvas.clear(this.ctx)
    this.getActiveEntities().forEach(e => e.render(g))
    this.ctx.fillStyle = 'rgba(12, 12, 12, .9)'
    this.ctx.fillRect(0, 0, canvas.getCanvasWidth(), canvas.canvasHeight)
    pauseScreen(g)
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
