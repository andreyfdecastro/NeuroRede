import React from 'react';
import { View, Text, Image } from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';

const Message = ({sender, message}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={styles.logo} source={NeuroLogo} />
      <View>
        <Text>{sender}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const MessagingApp = () => {
  return (
    <View>
      <Message sender="Doutor de tal" message="Hoje atendi uma criança e bla bla bla" />
      <Message sender="Fulana de tal" message="Meu filho foi no médico e bla bla bla" />
    </View>
  );
};