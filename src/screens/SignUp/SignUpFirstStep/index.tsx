import React, {useState} from "react";
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
  Alert
} from "react-native";

import * as Yup from 'yup';

export function SignUpFirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driveLicense, setDriveLicense] = useState('');

  const { navigate } = useNavigation();

  async function handleNext() {
    try {
      const schema = Yup.object().shape({
        driveLicense: Yup.string().required('CNH é obrigatória'), 
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        name: Yup.string().required('Nome é obrigatório'),
      });

      const data ={ name, email, driveLicense };
      await schema.validate(data);

      navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message);
      }
    }
  }

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
            <Input iconName="user" placeholder="Nome" onChangeText={setName} value={name} />
            <Input iconName="mail" placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email} />
            <Input iconName="credit-card" placeholder="CNH" keyboardType="numeric" onChangeText={setDriveLicense} />
          </Form>

          <Button title="Próximo" disabled={false} onPress={handleNext}/>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
