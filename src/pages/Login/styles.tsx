import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgb(34,34,34);
    background: linear-gradient(117deg, rgba(34,34,34,1) 0%, rgba(121,9,9,1) 100%, rgba(0,212,255,1) 100%);

`;

export const Form = styled.div`
    width: 600px;
    height: 600px;
    background: #fff;

    padding: 20px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100px;
`;

export const FormInput = styled.input`
    height: 50px;
    width: 100%;

    padding: 5px;

    border:1px solid #222;
    border-radius: 10px;


`;

export const LoginButton = styled.button`
    width: 50%;
    height: 50px;

    background: rgba(121,9,9,1);
    color: #fff;
    outline: 0;
    border: 0;
    border-radius: 10px;

    &:focus {
        background: #fff;
        background:rgba(121,9,9,1);
    }

    cursor: pointer;
`;

