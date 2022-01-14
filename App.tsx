
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
  
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { CardDetails } from './src/screens/CarDetails';
import { Schedules } from './src/screens/Schedules';
import { SchedulesDetails } from './src/screens/SchedulesDetails';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulesDetails/>
    </ThemeProvider>
  
  );
}

