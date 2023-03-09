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
let thisAngle = 0
let adjust = 0
// -16 is the correct value for first Tower Pro SG92R servo in position 1
// -13 is correct for a 9g SG90
adjust = -20
kitronik_i2c_16_servo.adjustServos(adjust)
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
    thisAngle = 0
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, thisAngle)
    basic.pause(1000)
    thisAngle = 90
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, thisAngle)
    basic.pause(1000)
    thisAngle = 180
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, thisAngle)
    basic.pause(2000)
})
