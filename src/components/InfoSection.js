import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background: rgb(0,27,54);
    background: radial-gradient(circle, rgba(0,27,54,1) 100%, rgba(30,30,97,1) 100%, rgba(0,212,255,1) 100%);
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
        margin-top: 80px!important;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '0' : '1' )};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem , 6vw , 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 768px) {
        display: flex;
    }
`;
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '0' )};
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1' )};
        padding: 0.5rem;
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
                <Button to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home"/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
