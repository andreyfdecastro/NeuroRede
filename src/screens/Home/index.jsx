import { View, Text, Image } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import NeuroLogo from '../../../assets/neuroLogo.png'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />

      <Title title="Home" />

      <Text style={styles.welcomeText}>
        WELCOME TO NEURONET, WHERE DIVERSITY IS OUR STRENGTH AND UNDERSTANDING IS OUR MISSION. WELCOME TO
      </Text>

      <Image
        style={styles.image}
        source={NeuroLogo}
      />

      <TouchButton 
        style={styles.button} 
        textStyle={styles.buttonText} 
        route="SignUp" 
        title="Sign up" 
        data={user} 
      />

      <TouchButton 
        style={styles.button} 
        textStyle={styles.buttonText} 
        route="Login" 
        title="Log in" 
      />
    </View>
  );
};