import React from 'react';

import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars';

LocaleConfig.locales['pt-BR'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}

LocaleConfig.defaultLocal = 'pt-br';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export function Calendar() {
    const theme = useTheme();

  return (
    <CustomCalendar
        renderArrow={(direction) =>
            <Feather
                size={24}
                color={theme.color.shape}
                name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
            />
        }

        headerStyle={{
            backgroundColor: theme.color.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.color.text_detail,
            paddingBottom: 10,
            marginBottom: 10
        }}

        theme={({
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textMonthFontFamily: theme.fonts.secondary_600,
            textMonthFontSize: 20,
            monthTextColor: theme.color.title,
            arrowStyle: {
                marginHorizontal: -15
            }
        })}

        firstDay={1}
        minDate={new Date()}
    />
        
    
  );
}