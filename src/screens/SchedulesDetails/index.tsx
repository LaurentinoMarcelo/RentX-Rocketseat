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

import { Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

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
  Acessorys,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RetalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function SchedulesDetails() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingComplete')
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

        <RentalPeriod>
            <CalendarIcon>
                <Feather
                    name='calendar'
                    size={RFValue(24)}
                    color = {theme.color.shape}
                />
            </CalendarIcon>

            <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather
                name='chevron-right'
                size={RFValue(10)}
                color={theme.color.text}
            />
        
            <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue>18/06/2021</DateValue>
            </DateInfo>

            
        </RentalPeriod>  

        <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RetalPriceDetails>
                <RentalPriceQuota>R$580 x3 diárias</RentalPriceQuota>
                <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RetalPriceDetails>
        </RentalPrice> 
    </Content>

    <Footer>
        <Button 
            title="Alugar agora"
            color={theme.color.success}
            onPress={handleConfirmRental}
        />
    </Footer>
        
    </Container>
  );
}