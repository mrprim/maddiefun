import { PLAY, PAUSE } from './constants/gameModes'
const ESC = 27
const SPACE = 32
const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

const P = 80

export const registerControls = function (game) {
  const { keysDown } = game
  window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true
  }, false)

  window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode]
  }, false)
}

export const handlePlayerInputs = function (game) {
  const { keysDown, player, mode } = game

  pressOnce(P, keysDown, () => {
    game.mode = game.mode === PAUSE ? PLAY : PAUSE
  })

  pressAndHold(ESC, keysDown, () => {
    game.reset()
  })

  if (mode === PLAY) {
    pressOnce(UP, keysDown, () => {
      player.jump(game)
    })

    pressOnce(SPACE, keysDown, () => {
      player.jump(game)
    })

    pressAndHold(LEFT, keysDown, () => {
      player.goLeft()
    })

    pressAndHold(RIGHT, keysDown, () => {
      player.goRight()
    })

    pressAndHold(DOWN, keysDown, () => {
      player.stomp()
    })
  }

  if (mode === PAUSE) {

  }

  function pressOnce (keyCode, keysDown, cb) {
    const lbl = keyCode + 'Pressed'

    if (keyCode in keysDown) {
      if (!keysDown[lbl]) {
        keysDown[lbl] = true
        cb()
      }
    } else {
      delete keysDown[lbl]
    }
  }

  function pressAndHold (keyCode, keysDown, cb) {
    if (mode !== game.mode) return

    if (keyCode in keysDown) {
      cb()
    }
  }
}
