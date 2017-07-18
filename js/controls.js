import { PLAY, PAUSE } from './constants/gameModes'
import * as kc from './constants/keyCodes'

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

  pressOnce(kc.P, keysDown, () => {
    game.mode = game.mode === PAUSE ? PLAY : PAUSE
  })

  pressAndHold(kc.ESC, keysDown, () => {
    game.reset()
  })

  if (mode === PLAY) {
    pressOnce(kc.UP, keysDown, () => {
      player.jump(game)
    })

    pressOnce(kc.SPACE, keysDown, () => {
      player.jump(game)
    })

    pressAndHold(kc.LEFT, keysDown, () => {
      player.moveLeft()
    })

    pressAndHold(kc.RIGHT, keysDown, () => {
      player.moveRight()
    })

    pressAndHold(kc.DOWN, keysDown, () => {
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
