import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Logo } from '../Logo';
import { UserPhoto } from '../UserPhoto';

export function Header() {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://randomuser.me/api/portraits/men/32.jpg" />
      </View>
    </View>
  );
}
