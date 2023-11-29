let users = []
 
function registerUser(user) {
    const parts = user.split(':')
 
    if(parts.length !== 2) {
        throw 'Invalid user string'
    }
 
    const userId = parseInt(parts[0])
   
    if(userId < 0) {
        throw 'Invalid user id'
    }
 
    const username = parts[1]
    let userExist = false
 
    for(let i=0; i < users.length; i++) {
        const el = users[i]
        if(el.userId === userId) {
            userExist = i
            break
        }
    }
 
    if(userExist) {
        users[userExist].username = username
    } else {
        users.push({ userId, username })
    }
}
 
try {
  console.log(users)
  registerUser('1234:Rindho')
  registerUser('4321:Nani')
  registerUser('2143:Michael')
  console.log(users)
  registerUser('4321:Ganis')
  console.log(users)
} catch (error) {
  console.error(error)
}