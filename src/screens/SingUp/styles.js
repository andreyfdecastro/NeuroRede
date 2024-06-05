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
  logo: {
    position: 'absolute',
    left: 10, 
  },
  formBox: {
    backgroundColor: '#A9A9A9', 
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#fff', 
    marginBottom: 10,
    paddingLeft: 10,
    color: '#A9A9A9', 
  },
  button: {
    backgroundColor: '#0000FF', 
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;