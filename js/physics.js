import settings from './settings'

const gravityMod = 500
const frictionMod = 20

export const move = (entity, mod, game) => {
  const origin = entity.getPosition()
  if (entity.immovable) {
    return
  }
  moveHorizontal(entity, mod)
  moveVertical(entity, mod)
  detectCollisions(entity, origin, game)
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
  if (!entity.supported) {
    return
  }
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

export const detectCollisions = (entity, origin, game) => {
  detectHorizontalCollisions(entity, origin, game)
  detectVerticalCollisions(entity, origin, game)
}

export const detectHorizontalCollisions = (entity, origin, game) => {
  const { entities } = game

  entities.forEach((e, game) => {
    if (e === entity) {
      return
    }

    if (origin.top > e.getBottom() || origin.bottom < e.getTop()) {
      return
    }

    if (origin.right <= e.getLeft() && entity.getRight() >= e.getLeft()) {
      entity.onCollision('right', e)
      e.onCollidedWith('left', entity)
    }

    if (origin.left >= e.getRight() && entity.getLeft() <= e.getRight()) {
      entity.onCollision('left', e)
      e.onCollidedWith('right', entity)
    }
  })
}

export const detectVerticalCollisions = (entity, origin, game) => {
  const { entities } = game

  entity.supported = false
  entities.forEach((e, game) => {
    if (e === entity) {
      return
    }

    if (origin.left > e.getRight() || origin.right < e.getLeft()) {
      return
    }

    if (origin.bottom <= e.getTop() && entity.getBottom() >= e.getTop()) {
      entity.onCollision('bottom', e)
      e.onCollidedWith('top', entity)
    }

    if (origin.top >= e.getBottom() && entity.getTop() <= e.getBottom()) {
      entity.onCollision('top', e)
      e.onCollidedWithV('bottom', entity)
    }
  })
}

export default (entity, mod, game) => {
  const { player } = game
  move(entity, mod, game)
  fall(entity, mod)
  friction(entity, mod)

  if (player.x < 0) {
    player.x = settings.canvas.width
  }

  if (player.x > settings.canvas.width) {
    player.x = 0
  }
}