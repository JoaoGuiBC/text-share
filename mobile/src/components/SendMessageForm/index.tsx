import React, { useState } from 'react';
import { Keyboard, TextInput, View } from 'react-native';
import Alert from 'react-native-awesome-alerts';

import { api } from '../../services/api';
import { Button } from '../Button';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  async function handleSendMessage() {
    const formattedMessage = message.trim();

    if (formattedMessage.length > 0) {
      setIsSendingMessage(true);

      await api.post('messages', { message: formattedMessage });

      setMessage('');
      Keyboard.dismiss();
      setIsSendingMessage(false);
    } else {
      setShowAlert(true);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual mensagem deseja conpartilhar?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!isSendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={isSendingMessage}
        onPress={handleSendMessage}
      />

      <Alert
        show={showAlert}
        showProgress={false}
        title="ATENÇÃO"
        message="Por favor, digite uma mensagem."
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton
        confirmText="CONFIRMAR"
        onConfirmPressed={() => setShowAlert(false)}
        contentContainerStyle={{
          backgroundColor: COLORS.BLACK_TERTIARY,
          borderRadius: 0,
        }}
        confirmButtonStyle={{
          backgroundColor: COLORS.PINK,
          borderRadius: 0,
        }}
        titleStyle={{ color: COLORS.WHITE }}
        messageStyle={{ color: COLORS.GRAY_SECONDARY }}
      />
    </View>
  );
}
