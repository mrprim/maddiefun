import { getCanvasWidth, canvasHeight } from '../canvas'

export default function startScreen (game) {
  const { ctx } = game

  ctx.fillStyle = 'white'
  ctx.font = '62px VT323'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText('MADDIEFUN!', getCanvasWidth() / 2, canvasHeight / 2)
  ctx.font = '31px VT323'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText('Click or Press Enter to Begin', getCanvasWidth() / 2, canvasHeight / 2 + 50)
}
