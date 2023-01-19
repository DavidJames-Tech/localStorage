import ls from './dist/index.cjs'

const data = {
    username: "James David",
    email: "davidadakole21@gmail.com"
}

const log = {
    data: "This is NASA's log"
}

// // ls.setItem('userprofile', JSON.stringify(data))
// ls.setItem('log', JSON.stringify(['un','deux','trois','quatre']))
console.log(ls.getItem('userprofile'))