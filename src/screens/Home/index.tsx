import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CardList
} from './styles';


export function Home(){
const [cars, setCars] = useState<CarDTO>([]); 
const [loading, setLoading] = useState(true);
const navigation = useNavigation();

const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120,
    },
    thumbnail:'https://img2.gratispng.com/20180605/bjy/kisspng-2018-audi-r8-5-2-v10-plus-coupe-car-audi-coupe-gt-5b168420457462.4266803615282022722845.jpg',
    
}

function handleCarDetails(){
    navigation.navigate('CarDetails')
}

useEffect(() => {
   async function fetchCars() {
       try {
         const response = await api.get('/cars');
         setCars(response.data);

       } catch (error) {
          console.log(error);
       }finally{
           setLoading(false);
       }
   }

   fetchCars();

},[]);

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

            {loading ? <Load/> :
            <CardList
                data={cars}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                <Car data={item}
                onPress={handleCarDetails}/>}
            />
            }
        </Container>
    );
}

  