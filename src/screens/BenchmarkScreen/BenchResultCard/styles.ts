import {StyleSheet} from 'react-native';
import type {Theme} from '../../../utils/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    resultCard: {
      backgroundColor: '#FFFFFF', // White background for better text visibility
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'rgba(255, 107, 53, 0.3)', // F1 Orange border
      shadowColor: '#FF6B35',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 8,
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
      color: '#FF6B35', // F1 Orange
      marginBottom: 4,
      fontSize: 18,
      fontWeight: '700',
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
      backgroundColor: '#F8F9FA', // Light grey background for better contrast
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: 'rgba(255, 107, 53, 0.2)',
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
      fontSize: 20,
      color: '#FF6B35', // F1 Orange
      fontWeight: '800',
      marginBottom: 4,
      textShadowColor: 'rgba(255, 107, 53, 0.3)',
      textShadowOffset: {width: 0, height: 1},
      textShadowRadius: 2,
    },
    resultUnit: {
      fontSize: 13,
      color: theme.colors.onSurfaceVariant,
      fontWeight: 'normal',
    },
    resultLabel: {
      fontSize: 14,
      color: '#C0C0C0', // Silver
      marginBottom: 4,
      fontWeight: '600',
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
