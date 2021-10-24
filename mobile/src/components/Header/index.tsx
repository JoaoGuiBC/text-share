import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '../../hooks/Auth';
import { styles } from './styles';
import { Logo } from '../Logo';
import { UserPhoto } from '../UserPhoto';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.logoutButton}>
        {!!user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
