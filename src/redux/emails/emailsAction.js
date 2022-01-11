
export const EMAILS = "EMAILS";
export const TOTAL = "TOTAL"
export const DELETE = "DELETE"




export const emailsAction = (value) => ({
    type: EMAILS,
    payload: value
})

export const totalAction = (value) => ({
    type: TOTAL,
    payload: value
    
})

export const emailsDeleteAction = (uid, password) => ({
    type: DELETE,
    uid,
    password
    
})