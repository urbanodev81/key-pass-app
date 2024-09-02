import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    width: '100%'

  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonGerar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: '#28a745',
    marginBottom: 10,
    elevation: 3,
    width: '100%',
  },
  textGerar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonCopy: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: '#007bff',
    elevation: 3,
    width: '100%',
  },
  textCopy: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textRadioOption: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  textTituloInput: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    width: '100%',
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,

  },
  inputTextNum: {
    color: 'black',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
  },
});