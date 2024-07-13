import styled from "styled-components";
function Header (){
    return(
    <HeaderBar>
        <span style={{marginRight: "30px", fontWeight: "bold"}}> Navbar </span>
        <span> Link1 Link2 Link3 </span>
    </HeaderBar>
    )
}

export default Header;

const HeaderBar = styled.div`
    color: white;
    display: flex;
    background: black;
    margin: 10px;
`