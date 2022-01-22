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
}

export function PasswordInput({ iconName, ...rest }: Props) {
  const theme = useTheme();
  const[isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.color.text_detail} />
      </IconContainer>

      <InputText
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
