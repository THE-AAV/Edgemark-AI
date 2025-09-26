import {Platform, StyleSheet} from 'react-native';
import type {Theme} from '../../utils/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    scrollView: {
      flex: 1,
      padding: 16,
    },
    card: {
      marginBottom: 16,
      backgroundColor: '#0F0F10',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#E10600',
      shadowColor: '#E10600',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    // F1 Racing Header
    racingHeader: {
      backgroundColor: '#E10600',
      paddingVertical: 20,
      paddingHorizontal: 16,
      marginBottom: 20,
      borderRadius: 12,
      alignItems: 'center',
    },
    racingTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 8,
    },
    racingSubtitle: {
      fontSize: 14,
      color: '#00E5FF',
      textAlign: 'center',
      fontWeight: '600',
    },
    // Speed Lines Background
    speedLinesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
    },
    speedLine: {
      position: 'absolute',
      height: 2,
      backgroundColor: '#E10600',
      transform: [{rotate: '15deg'}],
    },
    // F1 Button Styles
    f1Button: {
      backgroundColor: '#E10600',
      borderRadius: 12,
      paddingVertical: 16,
      marginVertical: 8,
      shadowColor: '#E10600',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 8,
    },
    f1ButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    // Racing Grid Layout
    racingGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 16,
    },
    gridItem: {
      width: '48%',
      backgroundColor: '#1A1A1A',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#2A2A2A',
    },
    gridItemTitle: {
      color: '#00E5FF',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    gridItemValue: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    // Performance Meter
    performanceMeter: {
      backgroundColor: '#1A1A1A',
      borderRadius: 12,
      padding: 16,
      marginVertical: 12,
      borderWidth: 1,
      borderColor: '#2A2A2A',
    },
    meterLabel: {
      color: '#00E5FF',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    meterBar: {
      height: 8,
      backgroundColor: '#2A2A2A',
      borderRadius: 4,
      overflow: 'hidden',
    },
    meterFill: {
      height: '100%',
      backgroundColor: '#E10600',
      borderRadius: 4,
    },
    // Racing Stats
    racingStats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#1A1A1A',
      borderRadius: 12,
      padding: 16,
      marginVertical: 12,
      borderWidth: 1,
      borderColor: '#2A2A2A',
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      color: '#E10600',
      fontSize: 20,
      fontWeight: 'bold',
    },
    statLabel: {
      color: '#00E5FF',
      fontSize: 12,
      marginTop: 4,
    },
    description: {
      flex: 1,
      color: theme.colors.onSurfaceVariant,
      paddingRight: 8,
      fontSize: 12,
    },
    warning: {
      color: theme.colors.error,
      marginVertical: 8,
      textAlign: 'center',
    },
    button: {
      marginVertical: 6,
    },
    loadingContainer: {
      alignItems: 'center',
      marginVertical: 8,
    },
    loadingText: {
      marginTop: 8,
      color: theme.colors.onSurfaceVariant,
    },
    modelSelectorContent: {
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    presetContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: 8,
    },
    presetButton: {
      flex: 1,
      minWidth: 100,
      marginHorizontal: 4,
    },
    slidersContainer: {
      marginTop: 16,
    },
    sliderDescriptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingItem: {
      marginBottom: 16,
    },
    settingLabel: {
      color: theme.colors.primary,
      marginBottom: 0,
    },
    settingValue: {
      textAlign: 'right',
      color: theme.colors.onSurface,
      marginTop: 0,
      minWidth: 40,
      marginLeft: 8,
    },
    slider: {
      //height: 40,
      ...Platform.select({
        android: {
          marginLeft: -12,
          marginRight: -10,
        },
      }),
    },
    sectionTitle: {
      color: theme.colors.primary,
      marginBottom: 8,
    },
    advancedButton: {
      marginBottom: 6,
    },
    advancedDescription: {
      marginBottom: 16,
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
    },
    warningContainer: {
      backgroundColor: theme.colors.errorContainer,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    warningList: {
      marginTop: 8,
      paddingLeft: 8,
    },
    warningText: {
      color: theme.colors.error,
      marginVertical: 4,
    },
    resultsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    resultsCard: {
      marginTop: 16,
      padding: 0,
    },
    resultItem: {
      marginBottom: 16,
    },
    errorText: {
      marginTop: 16,
      color: theme.colors.error,
    },
    dialogList: {
      marginVertical: 10,
      paddingLeft: 8,
    },
    dialogSection: {
      marginTop: 16,
      marginBottom: 8,
      fontWeight: '600',
    },
    link: {
      textDecorationLine: 'underline',
    },
    detailsButton: {
      marginTop: 16,
      alignSelf: 'flex-start',
    },
    detailsContainer: {
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 8,
      padding: 12,
      marginTop: 8,
    },
    codeBlock: {
      fontFamily: Platform.select({ios: 'Menlo', android: 'monospace'}),
      fontSize: 11,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24,
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: theme.colors.surfaceVariant,
    },
    checkboxLabel: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      marginLeft: 12,
      flex: 1,
    },
    maxValueHint: {
      color: theme.colors.onSurfaceVariant,
      fontStyle: 'italic',
    },
  });
