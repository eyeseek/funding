import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../sections/Header'
import Footer from '../sections/Footer'



const Container = styled.div`
height: 2234px; 
width: 100%;

`
const Bar = styled.div`

border: 1px solid #B0F6FF;
width: 100%;


`
const FaqTittle = styled.div`
margin-left: 120px;

`

const FaqSubTittle = styled.div`
margin-left: 120px;
padding-bottom: 
`

const FaqContainer = styled.div`
display: flex;
margin-block: 12px;
margin inline-block: 12px;

`

const FaqSub1 = styled.div`


`

const FaqSub2 = styled.div`
width: 447px;    
height: 362px;
background: #000000;
border: 1px solid #4E4E4E;
border-radius: 15px;
box-sizing: border-box;
margin-left: 120px;
`



function Faq() {
    return (
        <div>
            <Header/>
            <Container>   

                <FaqTittle>
                <h1>FAQ</h1>
               </FaqTittle>
               <Bar></Bar>
                <FaqSubTittle>
                <p>Learn about Eyeseek Funding</p>
                </FaqSubTittle>

                <FaqContainer>
                    <FaqSub1>
                        <h2>What is Eyeseek Funding?</h2>
                        </FaqSub1>

                        <FaqSub2>
                            <h1>desgerdgdrs</h1>
                        </FaqSub2>


                </FaqContainer>


            </Container>
            
        </div>
    )
}

export default Faq
