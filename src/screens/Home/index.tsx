import React from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
 Container,
 Header,
 HeaderContent,
 TotalCars
} from './styles';

export function Home(){
const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120,
    },
    thumbnail:'https://img2.gratispng.com/20180605/bjy/kisspng-2018-audi-r8-5-2-v10-plus-coupe-car-audi-coupe-gt-5b168420457462.4266803615282022722845.jpg',
    
}

const carDataTwo = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120,
    },
    thumbnail:'https://img2.gratispng.com/20180605/bjy/kisspng-2018-audi-r8-5-2-v10-plus-coupe-car-audi-coupe-gt-5b168420457462.4266803615282022722845.jpg',
    
}

     return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo 
                    width={RFValue(108)}
                    height={RFValue(12)}     
                    />

                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <Car data={carDataOne}/>
            <Car data={carDataTwo}/>
        </Container>
    );
}