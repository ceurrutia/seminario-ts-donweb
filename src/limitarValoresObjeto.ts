interface User {
    id: number
    firstName: string
    lastName: string
    isAdmin:boolean
    role: "admin" | "user" | "guest" //union type

}

const defaultUser: User = {
    id: 34,
    firstName: "Ceci",
    lastName: "Urrs",
    isAdmin: true,
    role: "user"
    
}

export function getUserId(user: User){
    return user.id, user.isAdmin
}

//directiva @ts-expect-error

const menuItems =[
    {
        id: 'home',
        href: '/home'
    },
    {
        id:'about',
        href: '/about'
    }
    
]