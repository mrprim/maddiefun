import settings from './settings'

const gravityMod = 256
const frictionMod = 20

export const move = (entity, mod) => {
  moveHorizontal(entity, mod)
  moveVertical(entity, mod)
}

export const moveHorizontal = (entity, mod) => {
  entity.x += entity.speedH * mod
}

export const moveVertical = (entity, mod) => {
  entity.y -= entity.speedV * mod
}

export const fall = (entity, mod) => {
  if (entity.hover) return
  if (entity.supported) {
    entity.speedV = entity.speedV > 0 ? entity.speedV : 0
    return
  }
  entity.speedV -= gravityMod * mod
}

export const friction = (entity, mod) => {
  const direction = entity.speedH > 0 ? 1 : entity.speedH < 0 ? -1 : 0

  if (direction === 1) {
    entity.speedH -= frictionMod
    if (entity.speedH < 0) entity.speedH = 0
  }

  if (direction === -1) {
    entity.speedH += frictionMod
    if (entity.speedH > 0) entity.speedH = 0
  }
}

export const detectCollisions = (entity, mod, game) => {
  detectVerticalCollisions(entity, mod, game)
}

export const detectVerticalCollisions = (entity, mod, game) => {
  const { entities } = game

  entity.supported = false
  entities.forEach((e, game) => {
    const entityTop = entity.y
    const entityBottom = entity.y + entity.height
    const entityLeft = entity.x
    const entityRight = entity.x + entity.width

    if (e === entity) {
      return
    }

    if (entityBottom >= e.y && entityTop <= e.y && entityLeft > e.x && entityRight < e.x + e.width) {
      entity.supported = true
      entity.y = e.y - entity.height
    }
  })
}

export default (entity, mod, game) => {
  const { player } = game
  detectCollisions(entity, mod, game)
  move(entity, mod)
  fall(entity, mod)
  friction(entity, mod)

  if (player.x < 0) {
    player.x = settings.canvas.width
  }

  if (player.x > settings.canvas.width) {
    player.x = 0
  }
}
