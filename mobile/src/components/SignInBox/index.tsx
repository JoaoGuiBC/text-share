import React from 'react';
import { View } from 'react-native';

import { Button } from '../Button';
import { useAuth } from '../../hooks/Auth';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SignInBox() {
  const { signIn, isSigning } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigning}
      />
    </View>
  );
}
