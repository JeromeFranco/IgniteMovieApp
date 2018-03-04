import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles } from '../../Themes/';
const window = Dimensions.get('window');

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  fixedSection: {
    position: 'absolute',
    width: window.width
  },
  fixedSectionHeader: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  stickyHeader: {
    marginBottom: 3,
    backgroundColor: 'transparent'
  },
  stickyHeaderTitle: {
    marginLeft: 45
  },
  poster: {
    position: 'absolute'
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: 15

  },
  avatar: {

  },
  parallaxTitle: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 20
  },
  overview: {
    backgroundColor: '#481211',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 25,
    paddingTop: 20
  },
  overviewHeader: {
    color: '#fff',
    marginBottom: 12,
  },
  overviewContent: {
    color: '#fff'
  },
  featuredCrewHeader: {
    color: '#fff',
    marginTop: 20
  },
  crew: {

  }
});
