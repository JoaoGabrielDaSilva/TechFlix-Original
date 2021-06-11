import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 300px;

    margin: 30px;

    box-shadow: 0px 0px 11px 0px #232020;
    position: relative;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
        transition: 100ms ease-in-out;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 60%;
    
`

export const CardInfo = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Note = styled.div<{color: string}>`
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

export const Title = styled.span`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: #fff;
`;

export const ReleaseDate = styled.span`
    text-align: center;
    color: #fff;
`;


