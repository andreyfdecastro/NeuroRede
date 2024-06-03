import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import NeuroLogo from '../../../assets/neuroLogo.png'; 


export default function RegistrationForm() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    Alert.alert('Bem-vindo!');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.logo} source={NeuroLogo} />
      </View>

      <View style={styles.formBox}>
        <TextInput 
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Digite seu nome de usuário" 
        />
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail" 
        />
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha" 
          secureTextEntry={true} 
        />
        <TextInput 
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          placeholder="mm/dd/yyyy" 
        />
        <TextInput 
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite seu número de telefone" 
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};