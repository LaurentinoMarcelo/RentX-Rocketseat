import React from "react";
import { BackButton } from "../../../components/BackButton";
import { Input } from "../../../components/Input";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

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
} from "react-native";

export function SignUpFirstStep() {
  const { navigate } = useNavigation();

  function handleBack() {
    navigate("Signin");
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
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Cria sua {"\n"} conta</Title>
          <Subtitle>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>1.Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" />
            <Input iconName="mail" placeholder="Email" />
            <Input iconName="credit-card" placeholder="CNH" />
          </Form>

          <Button title="Próximo" disabled={false} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
