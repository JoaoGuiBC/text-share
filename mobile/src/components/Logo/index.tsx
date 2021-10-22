import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import { Text } from 'react-native';
import { COLORS } from '../../theme';

import { styles } from './styles';

export function Logo() {
  return (
    <MaskedView
      style={{ height: 35, width: 100 }}
      maskElement={<Text style={styles.title}>TEXTSHARE</Text>}
    >
      <LinearGradient
        colors={[COLORS.PINK, COLORS.ORANGE]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.75, y: 0 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}
