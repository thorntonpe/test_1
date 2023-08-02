datalogger.onLogFull(function () {
    logging = 3
})
input.onButtonPressed(Button.A, function () {
    if (logging == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        datalogger.deleteLog(datalogger.DeleteType.Full)
        datalogger.mirrorToSerial(true)
        datalogger.setColumnTitles(
        "T_AIR",
        "LIGHT",
        "ACCEL"
        )
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        logging = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (logging == 1) {
        logging = 2
    }
})
let logging = 0
logging = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
loops.everyInterval(1000, function () {
    if (logging == 1) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        datalogger.log(
        datalogger.createCV("T_AIR", input.temperature()),
        datalogger.createCV("LIGHT", input.lightLevel()),
        datalogger.createCV("ACCEL", input.acceleration(Dimension.Strength))
        )
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (logging == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (logging == 3) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    }
})
