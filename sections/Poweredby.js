import React from 'react'
import styled from 'styled-components'

import axelarlogo from './icon/axelarlogo.svg'
import axelarname from './icon/axelarname.svg'
import moralislogo from './icon/moralislogo.svg'
import moralisname from './icon/moralisname.svg'
import covalentlogo from './icon/covalentlogo.svg'
import covalentname from './icon/covalentname.svg'
import fantom from './icon/fantom.svg'
import polygon from './icon/polygon.svg'
import binance from './icon/binance.svg'
import Eye7 from '../public/Eye7.png'
import Image from 'next/image'




const Container = styled.div` ; 
background-color: #1F2937; 
height: 100vh;
width: 100%;
justify-content: center;

@media screen and (min-width:640px) {
 
    background-color: #1F2937; 
    height: 1503px;
    width: 100%;
    justify-content: center;
}



`

const BoxTittle = styled.div`
text-align: center; 
padding-top: 4px;

margin-top: 10px;
@media screen and (min-width:640px) {
text-align: center;
margin-top: 99px;   
height: 110px;
}

`

const Title = styled.h1`
font-family: 'Chenla';
font-style: normal;
font-weight: normal;
font-size: 32px;
color: #B0F6FF;


@media screen and (min-width:640px) {
font-family: 'Chenla';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 110px;
color: #B0F6FF;
}

`

const BoxSubtitle = styled.div`


@media screen and (min-width:640px) {
    height: 57px;
width: 100%;
text-align: center;
margin-top: 60px;
}
 



`


const Subtitle = styled.h2`
text-align: center;
font-family: 'Roboto';
font-style: italic;
font-size: 14px;


@media screen and (min-width:640px) {
font-family: 'Roboto';
font-style: italic;
margin-top: 10px;
text-align: center;
}

`

const BoxBlockchain = styled.div`
display: flex;
justify-content: center; 


@media screen and (min-width:640px) {

    margin-left: 1rem;
    margin-top: 4rem;
}



`

const Boximg = styled.div`
width: 36px;
height: 36px;
margin-left: 1rem;
margin-top: 1rem;

@media screen and (min-width:640px) {
margin-top: 1rem;
width: 128px;
height: 128px;


}


`

const BoxPoweredby = styled.div`
display: flex;
justify-content: space-between;


@media screen and (min-width:640px) {
display: flex;
width: 100%;
justify-content: center;
margin-top: 0px;
}

`

const BoxPowerdbyContent = styled.div`
align-items: center;
justify-content: center;
width: 100%;
box-sizing: border-box;
background: #111111;
border: 1px solid #3E3E3E;
border-radius: 5px;
margin-left: 10px;
margin-right: 10px;
margin-top: 2rem;


@media screen and (min-width:640px) {
align-items: center;
justify-content: center;
margin-left: 1rem;
width: 387px;
height: 431px;
box-sizing: border-box;
background: #111111;
border: 1px solid #3E3E3E;
border-radius: 5px;
}

`

const BoxPoweredbyimg = styled.div`
width: 100%;
margin-top: 1rem;
justify-content: center;
display: flex;


@media screen and (min-width:640px) {
display: flex;
width: 100%;
height: 265px;
margin-top: 7px;
justify-content: center;
}
`
const BoxPoweredbyname = styled.div`
width: 100%;
height: 50px;


@media screen and (min-width:640px) {
display: flex;
width: 100%;
height: 103px;
margin-top: 1rem;
justify-content: center;
}

`

const BoxEye = styled.div`
margin-top: 3rem;


@media screen and (min-width:640px) {
justify-content: center;
margin-top: 274px;
padding-bottom : 6rem;

}

`   

const BoxEyeimg = styled.div`


@media screen and (min-width:640px) {
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 182px;
]
`
/*

    const Box = styled.div`
    position: relative;
    width: 300px;
    height: 420px;
    background: #fff;
    margin: 20px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    transition: 0.5s;
    `

    const Boximg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    clip-path: circle(180px at center 0);
    text-align: center;
    `

    const Boxtext = styled.div`
    position: absolute;
    bottom: 10px;
    padding: 50px;
    text-align: center;
    `
    */
function Poweredby() {
    return (



    <Container>
        <BoxTittle>
            <Title>Powered by</Title>
        </BoxTittle>
        <BoxSubtitle>
            <Subtitle>
                Cross Chain crowndfunding 5x cheaper than Kickstarter thanks to the blockchain technology
            </Subtitle>
        </BoxSubtitle>

        <BoxBlockchain>
            <Boximg>
                <Image src={polygon} alt="polygon" 
                width="100px" height="100px"   
                   />
            </Boximg>
            <Boximg>
                <Image src={fantom} alt="fantom" border="0" 
                   width="100px"
                   height="100px"
                   />
            </Boximg>
            <Boximg>
                <Image src={binance} alt="axelar"  
                   width="100px"
                   height="100px"
                   />
            </Boximg>
        </BoxBlockchain>
      

        <BoxPoweredby>
            <BoxPowerdbyContent>
                <BoxPoweredbyimg>
                   <Image src={moralislogo} alt="moralislogo" 
                      width="142.48px"
                      height="141.49px"/>
                </BoxPoweredbyimg>

                <BoxPoweredbyname>
                    <Image src={moralisname} alt="moralisname"
                          width="225px"
                          height="103px" />
                </BoxPoweredbyname>
            </BoxPowerdbyContent>
   

            <BoxPowerdbyContent>
                <BoxPoweredbyimg>
                     <Image src={covalentlogo} alt="covalentlogo"
                      width="142.48px"
                      height="141.49px"
                      />
                </BoxPoweredbyimg>

                <BoxPoweredbyname>
                    <Image src={covalentname} alt="covalentname"
                       width="225px"
                       height="103px" />
                </BoxPoweredbyname>
            </BoxPowerdbyContent>


            <BoxPowerdbyContent>
                <BoxPoweredbyimg>
                    <Image src={axelarlogo} alt="axelarlogo"
                          width="225px"
                            height="103" />

                </BoxPoweredbyimg>


                <BoxPoweredbyname>
                <Image src={axelarname} alt="covalentname"
                       width="225px"
                       height="103px" />
                </BoxPoweredbyname>
            </BoxPowerdbyContent>



        </BoxPoweredby>

        <BoxEye>
            <BoxEyeimg>
            <Image src={Eye7} alt="eye" border="0" 
               width="839px"
               height="80px"
            /></BoxEyeimg>
        </BoxEye>
   

    </Container>
    )
}

export default Poweredby