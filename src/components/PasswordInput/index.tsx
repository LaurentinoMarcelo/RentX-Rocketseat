import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import {
  Container,
  IconContainer,
  InputText,
} from "./styles";

import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const theme = useTheme();
  const[isPasswordVisible, setIsPasswordVisible] = useState(true);
  const[isFocused, setIsFocused] = useState(false);
  const[isFilied, setIsFilied] = useState(false);

function handleInputFocus(){
  setIsFocused(true);
}

function handleInputBlur(){
  setIsFocused(false);

  setIsFilied(!!value)
}

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather name={iconName} size={24} color={(isFocused || isFilied) ? theme.color.main : theme.color.text_detail} />
      </IconContainer>

      <InputText
         onFocus={handleInputFocus}
         onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible} 
        {...rest} 
      />

      <TouchableOpacity activeOpacity={.9} onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather 
          name={isPasswordVisible ? "eye" : "eye-off"} 
          size={24} 
          color={theme.color.text_detail} />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  );
}
