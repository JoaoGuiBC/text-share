import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Anton_400Regular } from '@expo-google-fonts/anton';
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { COLORS } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={COLORS.BLACK_SECONDARY} />
      <Home />
    </>
  );
}
