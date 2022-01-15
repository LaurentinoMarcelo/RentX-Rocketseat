import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlide';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessorys,
  Footer
} from './styles';

export function CarDetails() {
   const navigation = useNavigation();


   function handleConfirmRental(){
    navigation.navigate('Schedules')
   }

  return (
    <Container>
        <Header>
            <BackButton onPress={() => {}}/>
        </Header>

    <CarImage>
        <ImageSlide
            imagesUrl={['https://img2.gratispng.com/20180605/bjy/kisspng-2018-audi-r8-5-2-v10-plus-coupe-car-audi-coupe-gt-5b168420457462.4266803615282022722845.jpg']}
        />
    </CarImage>

    <Content>
        <Details>
            <Description>
                <Brand>Lamborguini</Brand>
                <Name>Huracan</Name>
            </Description>

            <Rent>
                <Period>Ao dia</Period>
                <Price>R$580</Price>
            </Rent>
        </Details>

        <Acessorys>
            <Acessory name='380km/h' icon={speedSvg}/>
            <Acessory name='3,2s' icon={accelerationSvg}/>
            <Acessory name='800 HP' icon={forceSvg}/>
            <Acessory name='Gasolina' icon={gasolineSvg}/>
            <Acessory name='Auto' icon={exchangeSvg}/>
            <Acessory name='2 pessoas' icon={peopleSvg}/>
        </Acessorys>
        

        <About>
        No Teste do Leitor, proprietários de automóveis opinam sobre seus carros, suas qualidades e defeitos, manutenção e assistência técnica. Lançada com pioneirismo pelo Best Cars em 1998, a seção presta um serviço de orientação essencial ao permitir que os proprietários contem em detalhes sua experiência com os carros.
        </About>
    </Content>

    <Footer>
        <Button 
            title="Escolher período do aluguel"
            onPress={handleConfirmRental}
        />
    </Footer>
        
    </Container>
  );
}