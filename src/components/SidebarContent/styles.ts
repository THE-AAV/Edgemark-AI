import {StyleSheet} from 'react-native';

import {MD3Theme} from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    sidebarContainer: {
      flex: 1,
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
      color: '#C0C0C0', // Match the icon color
    },
    versionText: {
      color: '#C0C0C0', // Match the icon color
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
      color: '#C0C0C0', // Match the icon color
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
