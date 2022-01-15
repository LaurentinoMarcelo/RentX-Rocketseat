import React from 'react';
import { TouchableOpacity } from 'react-native'

import GasolineSvg from '../../assets/gasoline.svg'

import { CarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';


interface Props extends TouchableOpacity{
    data: CarDTO;
}

export function Car({ data, ...rest } : Props){
  return (
    <Container {...rest}>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <GasolineSvg/>
                </Type>
            </About> 
        </Details>

        <CarImage 
            source={{ uri: data.thumbnail }}
            resizeMode='contain'
        />       
    </Container>
  );
}