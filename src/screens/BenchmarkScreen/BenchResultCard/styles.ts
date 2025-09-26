import {StyleSheet} from 'react-native';
import type {Theme} from '../../../utils/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    resultCard: {
      backgroundColor: '#1A1A1A',
      borderRadius: 16,
      borderWidth: 2,
      borderColor: '#E10600',
      shadowColor: '#E10600',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 8,
    },
    // F1 Racing Header
    racingHeader: {
      backgroundColor: '#E10600',
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    racingTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    racingSubtitle: {
      fontSize: 12,
      color: '#00E5FF',
      textAlign: 'center',
      marginTop: 4,
    },
    // Performance Grid
    performanceGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 16,
    },
    gridItem: {
      width: '48%',
      backgroundColor: '#0F0F10',
      borderRadius: 12,
      padding: 12,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#2A2A2A',
      alignItems: 'center',
    },
    gridValue: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#E10600',
      marginBottom: 4,
    },
    gridLabel: {
      fontSize: 11,
      color: '#00E5FF',
      textAlign: 'center',
    },
    gridUnit: {
      fontSize: 10,
      color: '#FFFFFF',
      opacity: 0.7,
    },
    resultHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16,
    },
    headerLeft: {
      flex: 1,
      marginRight: 16,
    },
    modelName: {
      color: theme.colors.onSurface,
      marginBottom: 4,
      //fontSize: 18,
      //fontWeight: '500',
    },
    modelMeta: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
    },
    configContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.surfaceVariant,
      marginVertical: 8,
      paddingHorizontal: 12,
    },
    configBar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingVertical: 8,
      gap: 4,
    },
    configText: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
      flex: 1,
    },
    configTextContainer: {
      gap: 4,
      width: '100%',
    },
    resultsContainer: {
      marginBottom: 16,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 12,
      padding: 16,
    },
    resultRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginBottom: 16,
    },
    resultItem: {
      flex: 1,
      paddingHorizontal: 8,
    },
    resultValue: {
      fontSize: 16,
      color: theme.colors.onSurface,
      fontWeight: '500',
      marginBottom: 2,
    },
    resultUnit: {
      fontSize: 13,
      color: theme.colors.onSurfaceVariant,
      fontWeight: 'normal',
    },
    resultLabel: {
      fontSize: 11,
      color: theme.colors.onSurfaceVariant,
      marginBottom: 1,
      letterSpacing: 0.1,
    },
    resultStd: {
      fontSize: 10,
      color: theme.colors.onSurfaceVariant,
    },
    deleteButton: {
      marginTop: -8,
      marginRight: -8,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 12,
      borderTopWidth: 1,
      borderColor: theme.colors.surfaceVariant,
    },
    timestamp: {
      fontSize: 11,
      color: theme.colors.onSurfaceVariant,
    },
    submitButton: {
      borderColor: theme.colors.primary,
      borderRadius: 16,
    },
    errorText: {
      color: theme.colors.error,
      marginTop: 8,
      fontSize: 12,
    },
    submittedText: {
      color: theme.colors.primary,
      fontSize: 12,
    },
    tooltipContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    infoIcon: {
      fontSize: 14,
      opacity: 0.6,
    },
    disabledText: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      fontStyle: 'italic',
    },
    shareContainer: {
      alignItems: 'center',
      gap: 8,
    },
    actionContainer: {
      flex: 1,
      alignItems: 'center',
      gap: 8,
    },
    shareTextContainer: {
      flex: 1,
      marginRight: 16,
    },
    sharePrompt: {
      color: theme.colors.primary,
      fontWeight: '500',
      marginBottom: 2,
    },
    shareSubtext: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 11,
    },
    leaderboardLink: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
    errorContainer: {
      marginTop: 10,
      padding: 10,
      borderRadius: 6,
      borderWidth: 1,
      backgroundColor: theme.colors.errorContainer,
      borderColor: theme.colors.error,
    },
    errorNetwork: {
      backgroundColor: theme.colors.errorContainer || '#FFF9C4',
      borderColor: theme.colors.error || '#FBC02D',
    },
    errorAppCheck: {
      backgroundColor: theme.colors.errorContainer,
      borderColor: theme.colors.error,
    },
    errorServer: {
      backgroundColor: theme.colors.surfaceVariant,
      borderColor: theme.colors.onSurfaceVariant,
    },
    errorGeneric: {
      backgroundColor: theme.colors.errorContainer,
      borderColor: theme.colors.error,
    },
    retryButton: {
      marginTop: 5,
      alignSelf: 'flex-end',
    },
  });
