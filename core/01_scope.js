function one(){
    const username = "rohith"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

// hoisting
addOne(1)
function addOne(num){
    console.log(num+1)
}


try{
    addTwo(1)
    const addTwo = function(num){
        console.log(num+2)
    }
} catch(err){
    console.log(err.message)
}