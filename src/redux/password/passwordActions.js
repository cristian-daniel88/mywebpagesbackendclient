
export const PASSWORD = "PASSWORD";
export const ERROR = "ERROR"




export const passwordAction = (value) => ({
    type: PASSWORD,
    payload: value
})

export const ErrorAction = () => ({
    type: ERROR,
    
})