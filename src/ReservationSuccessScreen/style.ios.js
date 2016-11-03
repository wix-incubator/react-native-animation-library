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
    fontSize: 23,
    fontWeight: '300',
    color: appStyle.text.defaultColor,
    marginTop: 46
  },
  message: {
    fontSize: 17,
    fontWeight: '300',
    color: appStyle.text.secondaryColor,
    width: 240,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24
  },
  button: {
    fontSize: 17,
    fontWeight: 'normal',
    color: appStyle.text.linkColor,
    marginTop: 27
  }
});