import {StyleSheet} from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#1A1A1A',
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      borderWidth: 1,
      borderColor: '#2A2A2A',
      shadowColor: '#E10600',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    label: {
      color: '#00E5FF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    value: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    unit: {
      color: '#E10600',
      fontSize: 12,
      fontWeight: 'normal',
    },
    meterContainer: {
      position: 'relative',
      height: 20,
      marginBottom: 8,
    },
    meterTrack: {
      height: 8,
      backgroundColor: '#2A2A2A',
      borderRadius: 4,
      overflow: 'hidden',
    },
    meterFill: {
      height: '100%',
      borderRadius: 4,
      shadowColor: '#E10600',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.6,
      shadowRadius: 4,
      elevation: 2,
    },
    speedLines: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    speedLine: {
      position: 'absolute',
      width: 2,
      height: '100%',
      backgroundColor: '#E10600',
      transform: [{rotate: '15deg'}],
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    percentage: {
      color: '#E10600',
      fontSize: 14,
      fontWeight: 'bold',
    },
    maxValue: {
      color: '#FFFFFF',
      fontSize: 12,
      opacity: 0.7,
    },
  });
