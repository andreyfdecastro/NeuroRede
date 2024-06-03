import React from 'react';
import { View, Text, Image } from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';

const Message = ({sender, message}) => {
  return (
    <View style={styles.messageContainer}>
      <Image style={styles.logo} source={NeuroLogo} />
      <View style={styles.messageBox}>
        <Text style={styles.sender}>{sender}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const MessagingApp = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>General</Text>
      </View>
      <Message sender="Doutor de tal" message="Hoje atendi uma criança e bla bla bla" />
      <Message sender="Fulana de tal" message="Meu filho foi no médico e bla bla bla" />
    </View>
  );
};