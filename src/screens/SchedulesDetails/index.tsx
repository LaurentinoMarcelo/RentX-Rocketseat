import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlide } from '../../components/ImageSlide';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation, useRoute } from '@react-navigation/native';

import { format } from 'date-fns';

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
  Accessorys,
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

interface Params{
    car: CarDTO;
    dates: string;
}

import { Alert, TouchableOpacity } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { getPlataformDate } from '../../utils/getPlatformDate';
import api from '../../services/api';

interface RentalPeriod {
    start: string;
    end: string;
}

export function SchedulesDetails() {
    const[rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const rentTotal = Number(dates.length * car.rent.price);

    async function handleConfirmRental(){
        const shedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = {
            ...shedulesByCar.data.unavailable_dates,
            ...dates,
        };

        await api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        }).then(response =>  navigation.navigate('SchedulingComplete'))
        .catch(() => Alert.alert('Não foi possível confirmar o agendamento.'))

       
    }

    function handleBack(){
        navigation.goBack();   
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])

  return (
    <Container>
        <Header>
            <TouchableOpacity onPress={handleBack}>
            <BackButton 
                color={theme.color.shape_dark}
                />
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
                <Price>R${car.rent.price}</Price>
            </Rent>
        </Details>

        <Accessorys>
            {
                car.accessories.map(accessory => (
                    <Acessory
                        key={accessory.type}  
                        name={accessory.name}
                        icon={getAccessoryIcon(accessory.type)}
                    />
                ))
                
            }
        </Accessorys>   

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
                <DateValue>{rentalPeriod.start}</DateValue>
            </DateInfo>

            <Feather
                name='chevron-right'
                size={RFValue(10)}
                color={theme.color.text}
            />
        
            <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue>{rentalPeriod.end}</DateValue>
            </DateInfo>

            
        </RentalPeriod>  

        <RentalPrice>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RetalPriceDetails>
                <RentalPriceQuota>R${car.rent.price} x{dates.length} diárias</RentalPriceQuota>
                <RentalPriceTotal>R${rentTotal}</RentalPriceTotal>
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