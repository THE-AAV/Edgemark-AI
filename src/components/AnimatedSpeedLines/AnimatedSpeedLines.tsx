import React, {useEffect, useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import {createStyles} from './styles';

interface AnimatedSpeedLinesProps {
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
}

export const AnimatedSpeedLines: React.FC<AnimatedSpeedLinesProps> = ({
  intensity = 'medium',
  color = '#E10600',
}) => {
  const styles = createStyles();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  
  const animatedValues = useRef(
    Array.from({length: 8}, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = animatedValues.map((animValue, index) => {
      const delay = index * 200;
      const duration = intensity === 'high' ? 1000 : intensity === 'medium' ? 1500 : 2000;
      
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      );
    });

    animations.forEach(animation => animation.start());

    return () => {
      animations.forEach(animation => animation.stop());
    };
  }, [animatedValues, intensity]);

  const getLineCount = () => {
    switch (intensity) {
      case 'low': return 4;
      case 'medium': return 6;
      case 'high': return 8;
      default: return 6;
    }
  };

  const getLineOpacity = () => {
    switch (intensity) {
      case 'low': return 0.1;
      case 'medium': return 0.2;
      case 'high': return 0.3;
      default: return 0.2;
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({length: getLineCount()}, (_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.speedLine,
            {
              left: (index * screenWidth) / getLineCount(),
              backgroundColor: color,
              opacity: getLineOpacity(),
              transform: [
                {
                  translateX: animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [-screenWidth, screenWidth],
                  }),
                },
                {rotate: '15deg'},
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};
