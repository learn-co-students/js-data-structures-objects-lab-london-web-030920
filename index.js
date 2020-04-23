// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = Object.assign({}, driver, {[key]: value})

    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let newDriver = Object.assign(driver, {[key]: value})

    return newDriver
}

function deleteFromDriverByKey(driver, key){
    let newCopy = Object.assign({}, driver)
    delete newCopy[key]
   return newCopy
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}