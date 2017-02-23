import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: '#dbddde',
    overflow: 'hidden',
  },
  swipeoutBtnTouchable: {
    flexGrow: 1,
  },
  swipeoutBtn: {
    alignItems: 'center',
    backgroundColor: '#dbddde', //b6bec0
    flexGrow: 1,
    borderRadius:3,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  swipeoutBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  swipeoutBtns: {
    bottom: 0,
    flexGrow: 1,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  swipeoutContent: {
  },
  colorDelete: {
    backgroundColor: '#fb3d38',
  },
  colorPrimary: {
    backgroundColor: '#006fff'
  },
  colorSecondary: {
    backgroundColor: '#fd9427'
  },
})

export default styles;
