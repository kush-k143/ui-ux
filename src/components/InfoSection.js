import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import cloud from '../images/bg-img.jpg'
import { IoMdArrowRoundForward } from 'react-icons/io'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-image: linear-gradient(to right top, #001b36, #011d39, #01203c, #022240, #032543, #032543, #032543, #032543, #022240, #01203c, #011d39, #001b36);
`;
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px)/ 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
    

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 300px;
        padding: 0px;
        margin-top: 40px!important;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    margin: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '0' : '1' )};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem , 6vw , 2rem);
        color: #fff;
    }

    p {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;
const ColumnRight = styled.div`
    margin: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '0' )};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 19px 18px 5px 0px rgba(0,0,0,0.52);
    -webkit-box-shadow: 19px 18px 5px 0px rgba(0,0,0,0.52);
    -moz-box-shadow: 19px 18px 5px 0px rgba(0,0,0,0.52);
    
        
    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1' )};
        margin: 0.5rem;
        margin-top: 20px;
        overflow: hidden;
    }

    img{ 
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
            margin-top: 60px;
            box-shadow: 40px 18px 5px 0px rgba(0,0,0,0.52);
        }
    }
`;

const InfoSection = ( {heading, paragraphOne , paragraphTwo , buttonLabel , reverse , image} ) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to='/homes' primary='true'>{buttonLabel}
                    <Arrow />
                </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home"/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
