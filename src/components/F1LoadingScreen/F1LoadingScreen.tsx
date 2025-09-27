import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks';

interface F1LoadingScreenProps {
  message?: string;
  showCar?: boolean;
}

export const F1LoadingScreen: React.FC<F1LoadingScreenProps> = ({
  message = 'Loading...',
  showCar = true,
}) => {
  const theme = useTheme();
  const carPosition = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Car racing animation
    const carAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(carPosition, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(carPosition, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    );

    // Pulse animation for loading text
    const pulseAnimationLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );

    carAnimation.start();
    pulseAnimationLoop.start();

    return () => {
      carAnimation.stop();
      pulseAnimationLoop.stop();
    };
  }, [carPosition, pulseAnimation]);

  const carTranslateX = carPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [250, -50], // Changed to right-to-left movement
  });

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.trackContainer}>
        {/* Racing track */}
        <View style={[styles.track, {backgroundColor: '#333333'}]} />

        {/* F1 Car */}
        {showCar && (
          <Animated.View
            style={[
              styles.car,
              {
                transform: [{translateX: carTranslateX}],
              },
            ]}>
            <Text style={styles.carEmoji}>🏎️</Text>
          </Animated.View>
        )}

        {/* Racing lines */}
        <View style={styles.racingLines}>
          {Array.from({length: 4}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.racingLine,
                {
                  left: 20 + index * 70,
                  backgroundColor: theme.colors.primary,
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Loading text */}
      <Animated.View
        style={[
          styles.textContainer,
          {
            transform: [{scale: pulseAnimation}],
          },
        ]}>
        <Text style={[styles.loadingText, {color: theme.colors.primary}]}>
          🏁 {message}
        </Text>
        <Text style={[styles.subText, {color: theme.colors.onSurfaceVariant}]}>
          ApexCore AI Racing
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  trackContainer: {
    width: '100%',
    height: 80,
    position: 'relative',
    marginBottom: 40,
  },
  track: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: '#555555', // Slightly lighter for better visibility
    borderRadius: 10,
    opacity: 0.8, // Make it faint but visible
  },
  car: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, // Make car fully visible
  },
  carEmoji: {
    fontSize: 28, // Larger car emoji
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  racingLines: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    height: 10,
    flexDirection: 'row',
  },
  racingLine: {
    position: 'absolute',
    width: 15,
    height: 2,
    top: 4,
    opacity: 0.6, // Make lines faint but visible
  },
  textContainer: {
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
