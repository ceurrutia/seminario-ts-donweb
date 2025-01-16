interface User {
    id: number
    firstName: string
    lastName: string
    isAdmin:boolean

}

const defaultUser: User = {
    id: 34,
    firstName: "Ceci",
    lastName: "Urrs",
    isAdmin: true
}

export function getUserId(user: User){
    return user.id, user.isAdmin
}

