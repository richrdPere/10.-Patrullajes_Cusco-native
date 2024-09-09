/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

// Props
type SectionProps = PropsWithChildren<{
  title: string;
}>;

// Components
import Header from './src/components/Header';
import OptionsList from './src/components/OptionsList';

function App(): React.JSX.Element {
  const options = [
    {
      iconName: 'home',
      label: 'Inicio',
      onPress: () => Alert.alert('Inicio presionado'),
    },
    {
      iconName: 'settings',
      label: 'Configuraciones',
      onPress: () => Alert.alert('Configuraciones presionado'),
    },
    {
      iconName: 'info',
      label: 'Acerca de',
      onPress: () => Alert.alert('Acerca de presionado'),
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <OptionsList options={options} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
