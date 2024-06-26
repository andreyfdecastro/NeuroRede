import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080', 
    paddingTop: 40, 
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40, 
    backgroundColor: '#fff', 
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff', 
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 10,
  },
  button: {
    backgroundColor: '#0000FF', 
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;