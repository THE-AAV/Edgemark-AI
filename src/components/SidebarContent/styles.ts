import {StyleSheet} from 'react-native';

import {MD3Theme} from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    sidebarContainer: {
      flex: 1,
<<<<<<< HEAD
      backgroundColor: '#0A0A0A', // F1 Dark racing background
    },
    // F1 Racing Header
    racingHeader: {
      backgroundColor: 'transparent',
      paddingVertical: 20,
      paddingHorizontal: 16,
      alignItems: 'flex-start',
      borderBottomWidth: 0,
      marginTop: 10,
    },
    racingTitle: {
      fontSize: 20,
      fontWeight: '800',
      color: '#FF6B35', // F1 Orange
      textAlign: 'left',
      marginBottom: 4,
      textShadowColor: 'rgba(255, 107, 53, 0.3)',
      textShadowOffset: {width: 0, height: 2},
      textShadowRadius: 4,
    },
    racingSubtitle: {
      fontSize: 12,
      color: '#C0C0C0', // Silver
      textAlign: 'left',
      fontWeight: '500',
=======
      backgroundColor: '#000000',
    },
    // F1 Racing Header
    racingHeader: {
      backgroundColor: '#E10600',
      paddingVertical: 20,
      paddingHorizontal: 16,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#00E5FF',
    },
    racingTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 4,
    },
    racingSubtitle: {
      fontSize: 12,
      color: '#00E5FF',
      textAlign: 'center',
    },
    // Speed Lines Background
    speedLinesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.05,
    },
    speedLine: {
      position: 'absolute',
      height: 1,
      backgroundColor: '#E10600',
      transform: [{rotate: '15deg'}],
>>>>>>> 083e201e01c56783e564228be2039e30f46fe19c
    },
    divider: {
      marginHorizontal: 16,
      backgroundColor: theme.colors.onSurfaceVariant,
      height: 1,
      opacity: 0.1,
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    sessionDrawerItem: {
      height: 40,
    },
    menuDrawerItem: {
      height: 44,
    },
    versionText: {
      color: theme.colors.onSurfaceVariant,
      opacity: 0.7,
      fontSize: 12,
      fontWeight: '500',
    },
    drawerSection: {
      marginTop: 10,
    },
    dateLabel: {
      paddingLeft: 16,
      paddingVertical: 10,
    },
    scrollViewContent: {
      flexGrow: 1,
      minHeight: '100%',
    },
    mainContent: {
      flex: 1,
    },
    menu: {
      width: 170,
    },
    sessionItem: {
      position: 'relative',
    },
    sessionTouchable: {
      flex: 1,
    },
  });
