import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';

import { styles } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
    </View>
  );
};

export { Home };
