import React, { useEffect, useState } from 'react';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { TouchableOpacity, StatusBar, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { Load } from '../../components/Load';
import { Car } from '../../components/Car'
import { AntDesign } from '@expo/vector-icons';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
} from './styles';
import { useTheme } from 'styled-components';

interface CarProps{
    id: string;
    user_id: string;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

export function MyCars() {
    const[cars, setCars] = useState<CarProps[]>([]);
    const[loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const theme = useTheme();

    function handleBack(){
        navigation.goBack();   
    }

    useEffect(() => {
       async function fetchCars(){
           try {
               const response = await api.get(`/schedules_byuser?user_id=1`);
               setCars(response.data)
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
        <Header>
         <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent' 
         />
         <TouchableOpacity onPress={handleBack}>
           <BackButton 
              color={theme.color.shape}
            />
         </TouchableOpacity>
            
            <Title>
                Seus agendamentos, {'\n'}
                estão aqui. {'\n'}
            </Title>  

            <SubTitle>
                Conforto, segurança e praticidade.
            </SubTitle>   
        </Header>

        { loading ? <Load/> :
        <Content>
            <Appointments>
                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>  
                <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
            </Appointments>

            <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.color.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
        }
    </Container>
  );
}