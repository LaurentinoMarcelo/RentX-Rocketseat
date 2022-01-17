import React, { useState } from 'react';
import ArrowSvg from '../../assets/arrow.svg'
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { format } from 'date-fns';
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
  } from './styles';
import { Alert, StatusBar, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import { 
  Calendar, 
  DayProps, 
  generateInterval,
  MarkedDateProps
 } from '../../components/Calendar';

import { useNavigation, useRoute } from '@react-navigation/native';
import { getPlataformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod{
  startFormated: string;
  endFormated: string;
}

interface Params{
  car: CarDTO;
}



export function Schedules() {
  const [lastSectedDate, setLastSecectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod );


  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;


  function handleConfirmRental(){
    if (!rentalPeriod.startFormated || !rentalPeriod.endFormated) {
      Alert.alert('Selecione o intervalo para alugar.');
    }else{
      navigation.navigate('SchedulesDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
    
   }

   function handleBack(){
    navigation.goBack();   
  }

  function handleChangeDate(date: DayProps){
    let start = !lastSectedDate.timestamp ? date : lastSectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSecectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    setRentalPeriod({
      startFormated: format(getPlataformDate(new Date(firstDate)), 'dd//MM/yyyy'),
      endFormated: format(getPlataformDate(new Date(endDate)), 'dd//MM/yyyy'),
    })
  }

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
                Escolha uma {'\n'}
                data de inicio e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
              <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue selected={!!rentalPeriod.startFormated}>
                  {rentalPeriod.startFormated}
                </DateValue>
              </DateInfo>

              <ArrowSvg/>

              <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={!!rentalPeriod.endFormated}>
                {rentalPeriod.endFormated}
                </DateValue>
              </DateInfo>
            </RentalPeriod>            
        </Header>

        <Content>
          <Calendar
            markedDates={markedDates}
            onDayPress={handleChangeDate}
          />

        </Content>

        <Footer>
          <Button 
            title='Confirmar'
            onPress={handleConfirmRental}
            />
        </Footer>
    </Container>
  );
}