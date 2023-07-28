input.onButtonPressed(Button.A, function () {
    if (logging == 0) {
        datalogger.deleteLog(datalogger.DeleteType.Full)
        datalogger.mirrorToSerial(false)
        datalogger.setColumnTitles("T_AIR")
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        logging = 1
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (logging == 1) {
        logging = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let logging = 0
basic.showString("A TO START")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(2000)
basic.clearScreen()
basic.showString("B TO STOP")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(2000)
basic.clearScreen()
logging = 0
loops.everyInterval(500, function () {
    if (logging == 1) {
        datalogger.log(datalogger.createCV("T_AIR", input.temperature()))
    }
})
