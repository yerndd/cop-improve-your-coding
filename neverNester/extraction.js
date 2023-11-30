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
    let check
 
    if(check = checkUser(userId)) {
        users[check-1].username = username
    } else {
        users.push({ userId, username })
    }
}
 
function checkUser(userId) {
    for(let i=0; i < users.length; i++) {
        const el = users[i]
        if(el.userId === userId) {
            return i+1
        }
    }
 
    return false
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
