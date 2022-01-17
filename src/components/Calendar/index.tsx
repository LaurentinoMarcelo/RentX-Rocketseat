import React from 'react';
import { ptBR } from './localeConfig'
import { generateInterval } from './generetInterval';
import {
    Calendar as CustomCalendar,
    LocaleConfig,
    CalendarProps 
} from 'react-native-calendars';

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

interface MarkedDateProps{
    [date: string]: {
        color: string;
        textColor: string;
        disable?: boolean;
        disableTouchEvent?: boolean; 
    },
}

interface DayProps {
    day: number;
    month: number;
    year: number;
    timestamp: number;
    dateString: string;
  }

 
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

function Calendar({markedDates, onDayPress} : CalendarProps) {
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
        minDate={String(new Date())}
        markingType='period'
        markedDates={markedDates}
        onDayPress={onDayPress}
    />   
  );
}

export {
    Calendar,
    DayProps,
    CalendarProps,
    CustomCalendar,
    MarkedDateProps,
    generateInterval
  };