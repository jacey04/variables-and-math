input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    total = num
    basic.showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    num = 0
    basic.showNumber(num)
})
let total = 0
let num = 0
basic.showIcon(IconNames.Heart)
num = 0
basic.showNumber(num)
basic.showIcon(IconNames.Sad)
basic.forever(function () {
	
})
