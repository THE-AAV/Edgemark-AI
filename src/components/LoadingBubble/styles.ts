import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E10600',
    shadowColor: '#E10600',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E10600',
  },
  racingText: {
    marginLeft: 8,
  },
  racingLabel: {
    color: '#00E5FF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
