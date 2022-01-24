import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { 
  Container,
  IconContainer,
  InputText 
} from "./styles";

import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {

const theme = useTheme();

const[isFocused, setIsFocused] = useState(false);
const[isFilied, setIsFilied] = useState(false);

function handleInputFocus(){
  setIsFocused(true);
}

function handleInputBlur(){
  setIsFocused(false);
  setIsFilied(!!value)
}

  return (
    <Container >
      <IconContainer
        isFocused={isFocused}
      >
        <Feather name={iconName} size={24} color={(isFocused || isFilied) ? theme.color.main : theme.color.text_detail}
         />
      </IconContainer>
      
    
      <InputText
        onBlur={handleInputBlur}
        onFocus={handleInputFocus} 
        isFocused={isFocused}
        {...rest}
      />
    </Container>
  );
}
