import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  list: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})