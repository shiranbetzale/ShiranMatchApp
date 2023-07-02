import React, { useState } from 'react';
import { View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { styles } from './CustomRange.style';
import { CustomRangeType } from './CustomRange.type';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CustomRange = (props: CustomRangeType) => {
  const { text, minRange = 0, maxRange = 10, step = 1 } = props;
  const [rangeValues, setRangeValues] = useState([minRange, maxRange]);

  const handleRangeChange = (values: any) => {
    setRangeValues(values);
  };

  return (
    <View style={styles.container}>
      <CustomText text={text} />
      <View style={styles.rangeContainer}>
        <CustomText text={rangeValues[0]} />
        <View style={styles.range}>
          <MultiSlider
            values={rangeValues}
            sliderLength={160}
            onValuesChange={handleRangeChange}
            min={minRange}
            max={maxRange}
            step={step}
            allowOverlap={false}
            snapped
            markerStyle={styles.markerStyle}
            pressedMarkerStyle={styles.pressedMarkerStyle}
            selectedStyle={styles.selectedStyle}
          />
        </View>
        <CustomText text={rangeValues[1]} />
      </View>
    </View>
  );
};

export default CustomRange;
