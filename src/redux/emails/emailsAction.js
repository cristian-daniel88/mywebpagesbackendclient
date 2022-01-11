
export const EMAILS = "EMAILS";
export const TOTAL = "TOTAL"




export const emailsAction = (value) => ({
    type: EMAILS,
    payload: value
})

export const totalAction = (value) => ({
    type: TOTAL,
    payload: value
    
})