import {Platform, StyleSheet} from 'react-native';
import type {Theme} from '../../utils/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0A0A0A', // F1 Dark racing background
    },
    scrollView: {
      flex: 1,
      padding: 16,
    },
    card: {
      marginBottom: 16,

      backgroundColor: 'rgba(255, 107, 53, 0.05)', // F1 Orange tint
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'rgba(255, 107, 53, 0.2)', // F1 Orange border
      shadowColor: '#FF6B35',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,

      shadowRadius: 8,
      elevation: 8,
    },
    // F1 Racing Header
    racingHeader: {

      backgroundColor: 'transparent',
      paddingVertical: 16,
      paddingHorizontal: 8,
      marginBottom: 20,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'rgba(255, 107, 53, 0.3)',
      paddingBottom: 16,
    },
    racingTitle: {
      fontSize: 28,
      fontWeight: '900',
      color: '#FF6B35', // F1 Orange
      textAlign: 'center',
      textShadowColor: 'rgba(255, 107, 53, 0.5)',
      textShadowOffset: {width: 0, height: 2},
      textShadowRadius: 4,
    },
    racingSubtitle: {
      fontSize: 14,
      color: '#C0C0C0', // Silver
      textAlign: 'center',
      marginTop: 6,
      fontWeight: '600',

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
      marginVertical: 12,
      borderRadius: 16,
      paddingVertical: 18,
      shadowColor: '#FF6B35',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
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
      marginBottom: 16,
    },
    resultsTitle: {
      fontSize: 20,
      fontWeight: '800',
      textShadowColor: 'rgba(255, 107, 53, 0.3)',
      textShadowOffset: {width: 0, height: 1},
      textShadowRadius: 2,
    },
    resultsCard: {
      marginTop: 20,
      padding: 16,
      backgroundColor: 'rgba(255, 107, 53, 0.05)', // F1 Orange tint
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'rgba(255, 107, 53, 0.2)', // F1 Orange border
      shadowColor: '#FF6B35',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
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
