function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (f = "*") {
    const innerFunction = function (emphatic = 'special') {
        return `You are ${f} ${emphatic}${f}!`
    }
    return innerFunction
}