

export const SCROLL = 'SCROLL';
export const SCROLL_ERROR = 'SCROLL_ERROR'
export const SCROLL_MENOS5 = 'SCROLL_MENOS5'


export const scrollDownAction = (value) => ({
    type: SCROLL,
    payload: value
})

export const scrollErrorAction = (value) => ({
    type: SCROLL_ERROR,

    
})


export const scrollMenos5 = ()=> ({
    type: SCROLL_MENOS5,

})