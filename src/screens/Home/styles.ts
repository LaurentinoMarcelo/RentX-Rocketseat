import styled from 'styled-components/native';

export const Container = styled.View`
    flex : 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.color.background_primary};
`;

export const Text = styled.Text`
    font-size: 50px;
    font-family: ${({theme}) => theme.fonts.secondary_600};
`;
