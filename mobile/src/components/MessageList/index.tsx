import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const [currentMessages, setCurrentMessage] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function getMessages() {
      const messagesResponse = await api.get<MessageProps[]>(
        'messages/lastTriad'
      );
      setCurrentMessage(messagesResponse.data);
    }

    getMessages();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          user={{
            name: message.user.name,
            avatar_url: message.user.avatar_url,
          }}
        />
      ))}
    </ScrollView>
  );
}
