import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: #2d2b2b;

    overflow: auto;

    padding: 10% 30px 50px 50px;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        'image info'
        'genre info';


    position: relative;

    @media (max-height: 750px) {
        padding: 200px 30px 50px 50px;
    }

`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 85%;
    min-height: 500px ;

    box-shadow: 0px 0px 11px 0px #232020;

    grid-area: image;

    align-self: center;

    position: relative;
`;

export const MovieImage = styled.img<{src: string}>`
    width: 100%;
    height: 100%;
`;

export const InfoWrapper = styled.div`
    height: 100%;

    grid-area: info;

    padding: 10px 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    align-self: center;

`;

export const Title = styled.span`
    font-size: 1em;
    font-weight: bold;

    margin-bottom: 50px;
    color: #fff;
`;

export const OverView = styled.p`
    text-align: justify;
    color: #fff;
`;

export const GenreWrapper = styled.div`
    width: 100%;
    height: 50%;

    display: flex;

    grid-area: genre;
    align-self: center;

    
`;

export const Genre = styled.span`
    color: #fff;

    & + span::before {
        content: " | ";
        margin: 0 10px;
    }
`;

export const Note = styled.div`
    width: 35px;
    height: 35px;

    margin: 5px;
    color: #222;
    background: ${({color}) => color};

    border: 1px solid #fff;
    border-radius: 50%;

    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

