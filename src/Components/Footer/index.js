import styled from "styled-components";

function Footer (){
    return(
    <FooterBar>
        <p style={{textAlign:"center"}}>Footer</p>
    </FooterBar>
    )
}

export default Footer;

const FooterBar = styled.div`
    display: flex;
    background: lightgray;
    justify-content: center;
    align-items: center;
    margin: 10px;
`