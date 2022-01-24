import React, { useState, useEffect } from "react";
import {
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
//import { useAuthContext } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";

import { Container, Header, Subtitle, Title, Form, Buttons } from "./styles";
import theme from "../../styles/theme";
import * as Yup from 'yup'

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useNavigation();
  //const { singIn } = useAuthContext();

  async function handleSignin() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail e um campo obrigatório")
          .email("Por favor coloque um e-mail valido"),
        password: Yup.string().required("A senha é obrigatória"),
      });
      await schema.validate({ email, password });
      Alert.alert('Tudo certo')
      //singIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      } else {
        Alert.alert(
          "Aconteceu algum erro nas suas credencias,verifique com atenção o e-mail e a senha"
        );
      }
    }
  }
  function handleNewAccount() {
    navigate('SignUpFirstStep');
  }

  useEffect(() => {
    /*async function load() {
      const userCollection = dataBase.get('users');
      const users = await userCollection.query().fetch();
      console.log(users);
    }
    load();*/
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Buttons>
            <Button
              title="Login"
              onPress={handleSignin}
              disabled={false}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              color={theme.color.background_secondary}
              disabled={false}
              loading={false}
              light={true}
            />
          </Buttons>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
