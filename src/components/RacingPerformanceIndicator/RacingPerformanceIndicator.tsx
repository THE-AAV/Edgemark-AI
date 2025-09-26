import React from 'react';
import {View, Text, Animated} from 'react-native';
import {createStyles} from './styles';

interface RacingPerformanceIndicatorProps {
  value: number;
  maxValue: number;
  label: string;
  unit: string;
  color?: string;
}

export const RacingPerformanceIndicator: React.FC<RacingPerformanceIndicatorProps> = ({
  value,
  maxValue,
  label,
  unit,
  color = '#E10600',
}) => {
  const styles = createStyles();
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>
          {value.toFixed(1)} <Text style={styles.unit}>{unit}</Text>
        </Text>
      </View>
      
      <View style={styles.meterContainer}>
        <View style={styles.meterTrack}>
          <View 
            style={[
              styles.meterFill, 
              { 
                width: `${percentage}%`,
                backgroundColor: color,
              }
            ]} 
          />
        </View>
        
        {/* Racing speed lines */}
        <View style={styles.speedLines}>
          {Array.from({length: 5}, (_, i) => (
            <View 
              key={i} 
              style={[
                styles.speedLine, 
                { 
                  left: `${i * 20}%`,
                  opacity: percentage > (i * 20) ? 0.8 : 0.2,
                }
              ]} 
            />
          ))}
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.percentage}>{percentage.toFixed(0)}%</Text>
        <Text style={styles.maxValue}>Max: {maxValue.toFixed(1)}</Text>
      </View>
    </View>
  );
};
