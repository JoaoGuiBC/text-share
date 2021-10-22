import React from 'react';
import { Text, View } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.message}>{text}</Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={user.avatar_url} sizes="small" />

        <Text style={styles.useName}>{user.name}</Text>
      </View>
    </View>
  );
}
