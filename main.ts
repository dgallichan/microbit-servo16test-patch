input.onButtonPressed(Button.A, function () {
    if (adjust < 25) {
        adjust += 1
        kitronik_i2c_16_servo.adjustServos(adjust)
    }
})
input.onButtonPressed(Button.B, function () {
    if (adjust > -25) {
        adjust += -1
        kitronik_i2c_16_servo.adjustServos(adjust)
    }
})
let adjust = 0
adjust = -16
basic.showLeds(`
    . . # . .
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    basic.showNumber(adjust)
    basic.pause(100)
})
basic.forever(function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 0)
    basic.pause(1000)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    basic.pause(1000)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 180)
    basic.pause(1000)
})
