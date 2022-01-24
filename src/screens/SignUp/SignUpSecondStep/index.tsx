import React, { useState } from "react";
import { BackButton } from "../../../components/BackButton";
import { PasswordInput } from "../../../components/PasswordInput";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Confirmation } from "../../Confirmation";

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from "./styles";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import theme from "../../../styles/theme";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { navigate } = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmção.");
    }

    if(password != passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }

    navigate("Confirmation", {
      nextScreenRoute: "Signin",
      title: 'Conta Criada!',
      message: `Agora é só fazer o login\n e aproveitar.`
    });
  }

  function handleBack() {
    navigate("SignUpFirstStep");
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <TouchableOpacity onPress={handleBack}>
              <BackButton color="black" />
            </TouchableOpacity>

            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Cria sua {"\n"} conta</Title>
          <Subtitle>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>2.Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={setPassword}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.color.success}
            disabled={false}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
