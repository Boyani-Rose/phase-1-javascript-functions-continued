// code your solution here
function saturdayFun (activity= 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun ()

const mondayWork = function (activity ="go to the office") {
    return (`This Monday, I will ${activity}.`)

}
mondayWork('work from home')

function wrapAdjective (flair = "*") {
    return function (something = "special") {
        return `You are ${flair}${something}${flair}!`

    }
}