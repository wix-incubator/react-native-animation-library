import {Platform} from 'react-native';

export const text = {
  defaultColor: '#2d4150',
  color: '#43515c',
  linkColor: '#00adf5',
  secondaryColor: '#7a92a5',
  sectionTitleColor: '#b6c1cd',
  disabledText: '#d9e1e8'
};

export const bottomShadow = {
  shadowRadius: 3,
  shadowOpacity: 0.5,
  shadowColor: 'gray',
  shadowOffset: {width: 0, height: 3}
};

export const foregroundColor = '#ffffff';
export const backgroundColor = '#f4f4f4';
export const separatorColor = '#e8e9ec';

export const processedColor = '#a7e0a3';
export const processingColor = '#faad4d';
export const failedColor = 'rgba(246, 126, 126,1)';


export function toPlatformCase(text) {
  if (Platform.OS === 'android') {
    return text.toUpperCase();
  }
  return text;
}