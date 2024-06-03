import React from 'react';
import { View, Text,} from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';

const UserProfile = () => {
  return (
    <View>
      <View>
        <Text>@Fulana de Tal</Text>
        <Text>11/04/1998</Text>
        <Text>(19) 456-7890</Text>
        <Text>Fulana.detal@gmail.com</Text>
      </View>
      <Image style={styles.logo} source={NeuroLogo} />
      <View>
        <Text>Fulana de tal</Text>
        <Text>Meu filho tem daltonismo. Um médico nos recomendou um par de óculos especiais e, desde que ele começou a usá-los, não para de sorrir e brincar. Agora ele consegue ver as cores!</Text>
      </View>
    </View>
  );
};
