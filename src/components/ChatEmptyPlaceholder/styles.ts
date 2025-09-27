import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
      gap: theme.spacing.default,
    },
    title: {
      color: theme.colors.onSurface,
      textAlign: 'center',
      marginBottom: 8,
      ...theme.fonts.titleMedium,
    },
    description: {
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
      ...theme.fonts.bodyMedium,
    },
    button: {
      minWidth: 200,
    },
    f1CarContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    f1CarEmoji: {
      fontSize: 80,
      marginBottom: 10,
    },
    racingTrack: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: 200,
      height: 20,
      alignItems: 'center',
    },
    trackLine: {
      width: 40,
      height: 3,
      borderRadius: 2,
    },
  });
