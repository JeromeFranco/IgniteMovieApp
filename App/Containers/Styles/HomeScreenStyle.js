import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background
  },
  fontIcon: {
    color: Colors.fontIcon
  }
})
