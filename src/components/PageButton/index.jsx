import React from 'react';
import { useHistory} from 'react-router-dom';
import { Button } from './style';

const PageButton = (props)=>{
    const history = useHistory()

    function changePage(page){
        history.push(`/${page}`)
    }

    return(
        <Button href='#' onClick={()=>changePage(props.page)}>{props.children}</Button>
    )
}

export default PageButton