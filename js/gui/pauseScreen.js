import { getCanvasWidth, canvasHeight } from '../canvas'

export default function startScreen (game) {
  const { ctx } = game

  ctx.fillStyle = 'white'
  ctx.font = '50px VT323'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText('PAUSE!', getCanvasWidth() / 2, canvasHeight / 2)
}
