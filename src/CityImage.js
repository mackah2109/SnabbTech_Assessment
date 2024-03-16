import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Text } from 'react-native-animatable';

const CityImage = ({ source,name,width,left ,textleft}) => {
  const [imageColor, setImageColor] = useState('#948A8A');

  const handlePressIn = () => {
    setImageColor('#003A68');
  };

  const handlePressOut = () => {
    setImageColor('#948A8A');
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Image
        source={source}
        style={{
          height: 45,
          width: width,
          left:left,
          tintColor: imageColor
        }}
      />
      <Text style={{
        left:textleft
      }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CityImage;
