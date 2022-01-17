import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlide';
import { Acessory } from '../../components/Acessory';
import { TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button';

import { getAccessoryIcon } from  '../../utils/getAccessoryIcon'

import { useNavigation, useRoute } from '@react-navigation/native';

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
  Accessories,
  Footer
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';

interface Params{
    car: CarDTO
}

export function CarDetails() {
   const navigation = useNavigation();
    const route = useRoute();
    const{ car } = route.params as Params;

   function handleConfirmRental(){
    navigation.navigate('Schedules', {car})
   }

   function handleBack(){
       navigation.goBack();   
   }

  return (
    <Container>
        <Header>
            <TouchableOpacity onPress={handleBack}>
                <BackButton
                color='black'/>
            </TouchableOpacity>
        </Header>

    <CarImage>
       
        <ImageSlide
            imagesUrl={car.photos}
        />
    </CarImage>

    <Content>
        <Details>
            <Description>
                <Brand>{car.brand}</Brand>
                <Name>{car.name}</Name>
            </Description>

            <Rent>
                <Period>{car.rent.period}</Period>
                <Price>R$ {car.rent.price}</Price>
            </Rent>
        </Details>

        <Accessories>
            {
                car.accessories.map(accessory => (
                    <Acessory
                        key={accessory.type}  
                        name={accessory.name}
                        icon={getAccessoryIcon(accessory.type)}
                    />
                ))
            }
        </Accessories>
        

        <About>{car.about}</About>
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