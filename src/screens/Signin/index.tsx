import React from "react";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Container, Header, Subtitle, Title, Form, Buttons } from "./styles";
import theme from "../../styles/theme";

export function Signin() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>
          Estamos
          {"\n"}quase lá.
        </Title>
        <Subtitle>
          Faça seu login para começar
          {"\n"} uma experiência incrível.
        </Subtitle>
      </Header>

      <Form>
        <Input 
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <PasswordInput
          iconName="lock"
          placeholder="Senha"
        />
      </Form>

      <Buttons>
        <Button
          title="Login"
          onPress={() => {}}
          disabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          onPress={() => {}}
          color={theme.color.background_secondary}
          disabled={false}
          loading={false}
          light={true}
        />
      </Buttons>
    </Container>
  );
}
