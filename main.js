// 1 create a function (buyClay) with no parameters that returns an empty (makePottery) object{}
// 1 create a function (makePottery) that accepts 1 parameter 



// returns A pottery object (empty)
const buyClay = () => { return {} };


// Adds {shape: Bowl} to A pottery object
const makePottery = (aPotteryObject) => {
    aPotteryObject.shape = "Bowl"
    return aPotteryObject
}

// Adds {readyForGlazing: true} to A pottery object
const bisqueFire = (aPotteryObject) => {
    aPotteryObject.readyForGlazing = true
    return aPotteryObject
}

const glazePottery = (aPotteryObject) => {
    if (aPotteryObject.readyForGlazing === true) {
        aPotteryObject.glazed = "Midnight Blue"
        return aPotteryObject
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

const finalFiring = (aPotteryObject, temperature) => {
    if (temperature >= 1200) {
        aPotteryObject.cracked = true
        return aPotteryObject
    } else {
        return aPotteryObject.cracked = false
    }
}




// IMPLEMENTATION
let thePotteryObject = buyClay()
makePottery(thePotteryObject)
bisqueFire(thePotteryObject)
glazePottery(thePotteryObject)
console.log(thePotteryObject)


const firedPottery1400 = finalFiring(thePotteryObject, 1400)
console.log(firedPottery1400)