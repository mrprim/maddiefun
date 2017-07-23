export const canvasHeight = 500

export function init () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'game')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = canvasHeight
  document.body.appendChild(canvas)

  return ctx
}

export function clear (ctx) {
  const canvas = document.getElementById('game')
  canvas.width = window.innerWidth
  ctx.clearRect(0, 0, getCanvasWidth(), canvasHeight)
}

export function getCanvasWidth () {
  const canvas = document.getElementById('game')
  if (!canvas) {
    return 0
  }
  const box = canvas.getBoundingClientRect()
  return box.right - box.left
}
