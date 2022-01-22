import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({theme}) => theme.color.background_secondary};
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.color.background_secondary};
  flex: 1;
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`;