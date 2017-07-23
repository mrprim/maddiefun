import Overlay from './Overlay'

export default class Scoreboard extends Overlay {
  render (game) {
    const { ctx, score } = game

    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.font = '24px VT323'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Score: ' + score, 0, 0)
  }
}
