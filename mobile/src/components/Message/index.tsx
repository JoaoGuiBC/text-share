import React from 'react';
import { Text, View } from 'react-native';
import { MotiView } from 'moti';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function Message({ id, text, user }: MessageProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>{text}</Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={user.avatar_url} sizes="small" />

        <Text style={styles.useName}>{user.name}</Text>
      </View>
    </MotiView>
  );
}
