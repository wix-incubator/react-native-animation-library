import {StyleSheet} from 'react-native';
import * as appStyle from '../common/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyle.foregroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: appStyle.text.defaultColor,
    marginTop: 50
  },
  message: {
    fontSize: 16,
    fontWeight: '300',
    color: appStyle.text.secondaryColor,
    width: 280,
    textAlign: 'center',
    marginTop: 10
  },
  button: {
    fontSize: 16,
    fontWeight: '400',
    color: appStyle.text.linkColor,
    marginTop: 25
  }
});