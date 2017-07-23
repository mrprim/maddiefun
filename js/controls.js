import { PLAY, PAUSE } from './constants/gameModes'
import * as kc from './constants/keyCodes'

export const registerControls = function (game) {
  const { keysDown } = game
  window.addEventListener('keydown', function (e) {
    e.preventDefault()
    keysDown[e.keyCode] = true
  }, false)

  window.addEventListener('keyup', function (e) {
    e.preventDefault()
    delete keysDown[e.keyCode]
  }, false)

  document.getElementById('game').addEventListener('touchstart', function (e) {
    e.preventDefault()
    keysDown.touch = e.targetTouches[0]
  }, false)

  document.getElementById('game').addEventListener('touchmove', function (e) {
    e.preventDefault()
    keysDown.touchLast = keysDown.touch
    keysDown.touch = e.targetTouches[0]
  }, false)

  document.getElementById('game').addEventListener('touchend', function (e) {
    e.preventDefault()
    delete keysDown.touch
    delete keysDown.touchLast
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
    [kc.UP, kc.SPACE].forEach(x => {
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

    if (keysDown.touch) {
      const canvasLeft = document.getElementById('game').getBoundingClientRect().left

      const touchX = keysDown.touch.pageX - canvasLeft
      const playerX = player.x - game.offsetX

      if (keysDown.touchLast) {
        if (keysDown.touchLast.pageY - keysDown.touch.pageY > 10) {
          player.jump(game, 8)
        }
      }

      if (touchX < playerX) {
        player.moveLeft()
      }

      if (touchX > playerX) {
        player.moveRight()
      }
    }
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
