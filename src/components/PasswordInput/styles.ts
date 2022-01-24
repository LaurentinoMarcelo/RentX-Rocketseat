import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface ContainerProps{
  isFocused: true;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${({isFocused, theme}) =>isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.color.main};;
  `}
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
