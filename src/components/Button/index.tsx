import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import {
  Container,
  Title
} from './styles';

interface Props{
    title: string;
    color?: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
}

export function Button({
    title,
    color,
    onPress,
    disabled = true,
    loading = false,
}: Props) {

  const theme = useTheme();

  return (
    <Container 
      color={color ? color : theme.color.main} 
      onPress={onPress}
      disabled={disabled}
      style={{opacity: ( disabled === true || loading === true) ? .5 : 1}}
      >
        {
          loading
          ? <ActivityIndicator color={theme.color.shape}/>
          : <Title>{title}</Title>
        }
        
    </Container>
  );
}