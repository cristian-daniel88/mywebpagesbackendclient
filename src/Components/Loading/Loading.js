import React from 'react'
import { LoadingContainer } from './LoadingStyles'

import './loading.css'
import { useSelector } from 'react-redux';

function Loading() {
    const scroll = useSelector((state) => state.scroll.scrollDown);
    
    return (
       <LoadingContainer scroll={scroll}>
           <div className="lds-ellipsis" ><div></div><div></div><div></div><div></div></div>
       </LoadingContainer>
    )
}

export default Loading
