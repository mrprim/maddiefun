import settings from './settings'

export function init () {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'game')
  const ctx = canvas.getContext('2d')
  canvas.width = settings.canvas.width
  canvas.height = settings.canvas.height
  document.body.appendChild(canvas)

  return ctx
}

export function clear (ctx) {
  ctx.clearRect(0, 0, settings.canvas.width, settings.canvas.height)
}
