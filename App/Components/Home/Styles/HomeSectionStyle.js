import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 10
  },
  headerTitle: {
    fontWeight: '500',
  },
  listItem: {
    flexDirection: 'column',
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    marginLeft: 0,
    borderBottomWidth: 0
  },
  item: {
    alignSelf: 'stretch'
  },
  itemImage: {
    height: 200,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ccc'
  },
  itemCaption: {
    position: 'absolute',
    bottom: 10,
    color: '#fff',
    alignSelf: 'flex-start',
    paddingLeft: 10
  }
})
