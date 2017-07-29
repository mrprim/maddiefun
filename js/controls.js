import { PLAY, PAUSE, INTRO } from './constants/gameModes'
import * as kc from './constants/keyCodes'

export const registerControls = function (game) {
  const { keysDown } = game
  window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true
  }, false)

  window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode]
  }, false)

  document.getElementById('game').addEventListener('mousedown', function (e) {
    e.preventDefault()
    keysDown[kc.CLICK] = e
  }, false)

  document.getElementById('game').addEventListener('mouseup', function (e) {
    e.preventDefault()
    delete keysDown[kc.CLICK]
  }, false)

  document.getElementById('game').addEventListener('touchstart', function (e) {
    e.preventDefault()
    keysDown[kc.TOUCH] = e.targetTouches[0]
  }, false)

  document.getElementById('game').addEventListener('touchmove', function (e) {
    e.preventDefault()
    keysDown[kc.LAST_TOUCH] = keysDown.touch
    keysDown[kc.TOUCH] = e.targetTouches[0]
  }, false)

  document.getElementById('game').addEventListener('touchend', function (e) {
    e.preventDefault()
    delete keysDown[kc.TOUCH]
    delete keysDown[kc.LAST_TOUCH]
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

  if (mode === INTRO) {
    [kc.ENTER, kc.SPACE, kc.TOUCH, kc.CLICK].forEach(x => {
      pressOnce(x, keysDown, () => {
        game.mode = PLAY
      })
    })
  }

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

    if (keysDown[kc.TOUCH]) {
      const touch = keysDown[kc.TOUCH]
      const lastTouch = keysDown[kc.LAST_TOUCH]
      const canvasLeft = document.getElementById('game').getBoundingClientRect().left

      const touchX = touch.pageX - canvasLeft
      const playerX = player.x - game.offsetX

      if (lastTouch) {
        if (lastTouch.pageY - touch.pageY > 10) {
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
