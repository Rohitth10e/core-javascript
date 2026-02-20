const user = {
    username : "Rohith",
    welcomeMessage : function() {
        console.log(`Welcome to ${user.username}!`)
        console.log(this)
    }
}

// user.welcomeMessage()
user.username = "Sneha"
user.welcomeMessage()


const addOne = (a, b) => a+b // implicit return
const addTwo = (a, b) => {
    return a + b
}
const addThree = (a, b) => ({name : "Rohith"})
console.log(addThree())