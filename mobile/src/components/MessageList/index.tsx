import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message
        id="1"
        text="Mensagem usada para testar"
        user={{
          name: 'John Doe',
          avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        }}
      />
      <Message
        id="1"
        text="Mensagem usada para testar"
        user={{
          name: 'John Doe',
          avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        }}
      />
      <Message
        id="1"
        text="Mensagem usada para testar"
        user={{
          name: 'John Doe',
          avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        }}
      />
    </ScrollView>
  );
}
