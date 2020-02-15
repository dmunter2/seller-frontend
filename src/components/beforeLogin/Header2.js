import React from 'react';
import Style from 'styled-components';



const DIV = Style.div`
border: 1px solid #353878;
background-color: #353878;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-bottom: 2%;
height: 150px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const H1 = Style.h1`
margin-left: 30px;
margin-top: 10px;
font-weight: 600;
text-align: initial;
color: #C3C5CA;
font-size: 3.5rem;
width: 200px;
`

const DIV1 = Style.div`
margin: 0;
display: flex;
margin-right: 5%;
flex-direction: row;
text-align: end;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 60px;

justify-content: space-between;
`



class Header2 extends React.Component {





    render() {



        return (

            <DIV>
                <H1>Post-It</H1>

                <DIV1>
        





                </DIV1>

            </DIV>
        )
    }

}




export default Header2;



