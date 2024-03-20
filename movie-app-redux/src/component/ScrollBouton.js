import { Button } from "react-bootstrap";

function ScrollBouton(){

    return( 
        <>
        <Button variant='outline-secondary' 
        id='scrollButtonUP'
        onClick={()=>{window.scrollTo({top:0, behaviour :"smooth"})}}
        >↑</Button>
        <Button variant='outline-secondary' 
        id='scrollButtonDown'
        onClick={()=>{window.scrollTo({top:document.body.scrollHeight, behaviour :"smooth"})}}
        >↓</Button>
        </>
    )
}
export default ScrollBouton;