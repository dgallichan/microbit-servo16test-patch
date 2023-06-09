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
function setAllServos (thisAngle: number) {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo9, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo10, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo11, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo12, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo13, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo14, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo15, thisAngle)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo16, thisAngle)
}
let adjust = 0
kitronik_i2c_16_servo.adjustServos(adjust)
basic.showLeds(`
    . . # . .
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    `)
basic.pause(2000)
let thisAngle = 0
// -16 is the correct value for first Tower Pro SG92R servo in position 1
// -13 is correct for a 9g SG90
adjust = -20
basic.forever(function () {
    basic.showNumber(adjust)
    basic.pause(100)
})
basic.forever(function () {
    setAllServos(90)
    basic.pause(1000)
    setAllServos(180)
    basic.pause(1000)
    setAllServos(0)
    basic.pause(1000)
    setAllServos(90)
    basic.pause(1000)
})
