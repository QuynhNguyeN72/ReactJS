import styled from "styled-components";
import Demo from "../Demo";

function Body (){
    return(
        <BodyBar>
                <LeftWap>   
                    <h1> About Me </h1>
                    <p style={{border: "solid", height: "150px", background: "lightgray"}}> Fake Img </p>
                    <p> Some text about me </p>
                    <Demo/>
                </LeftWap>
                <RightWap>
                    <h1> TITLE HEADING </h1>
                    <p> Title description, July 1, 2024</p>
                    <p style={{border: "solid", height: "150px", background: "lightgray"}}> Fake Img </p>
                    <p> Some Text ... </p>
                    <p> Don’t cry because it’s over, smile because it happened.</p>
                </RightWap>
        </BodyBar>
    )
}
export default Body;

const BodyBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const LeftWap = styled.div`
    display: flex;
    width: 400px;
    flex-direction: column;
`
const RightWap = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`

