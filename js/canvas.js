export const canvasWidth = 512
export const canvasHeight = 408

export function init () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'game')
  const ctx = canvas.getContext('2d')
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  document.body.appendChild(canvas)

  return ctx
}

export function clear (ctx) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}
