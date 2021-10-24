import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import io from 'socket.io-client';

import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));

socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessage((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );

        messagesQueue.shift();
      }
    }, 2000);

    return () => clearInterval(timer);
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
