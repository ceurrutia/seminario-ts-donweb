type Name={
    firstName: string,
    lastName?: string //opcional
}


export function getName(

    params: Name
) {
    if(params.lastName){
        return `${params.firstName} ${params.lastName}`
    }

    return params.firstName
}

const name = getName({firstName: "Cecilia", lastName: "urrutia"})