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

  window.addEventListener('touchstart', function (e) {
    console.log(e)
    keysDown['touch'] = true
  }, false)

  window.addEventListener('touchend', function (e) {
    console.log(e)
    delete keysDown['touch']
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
    [kc.UP, kc.SPACE, 'touch'].forEach(x => {
      pressDynamic(x, keysDown, 8, (mod) => {
        player.jump(game, mod)
      })
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
    if (keyCode in keysDown) {
      cb()
    }
  }

  function pressDynamic (keyCode, keysDown, max, cb) {
    const lbl = keyCode + 'Duration'
    let duration = keysDown[lbl] || 0
    if (keyCode in keysDown) {
      duration++
      keysDown[lbl] = duration

      if (duration >= max) {
        cb(duration)
        delete keysDown[lbl]
      }
    } else {
      if (keysDown[lbl]) {
        cb(duration)
      }
      delete keysDown[lbl]
    }
  }
}
