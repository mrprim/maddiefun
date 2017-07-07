import Overlay from './Overlay'

export default class Scoreboard extends Overlay {
  render (game) {
    const { ctx, score, clock } = game

    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.font = '24px Helvetica'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Score: ' + score, 32, 32)
  }
}
