import React from 'react';
import {ImageBackground} from 'react-native';
import BackgroundImg from '../../assets/background-image.png';

interface Children {
  children: React.ReactNode;
}

const Background: React.FC<Children> = ({children}) => {
  return (
    <ImageBackground
      style={{flex: 1, width: '100%', height: '100%', zIndex: 100}}
      source={BackgroundImg}
      defaultSource={BackgroundImg}>
      {children}
    </ImageBackground>
  );
};

export default Background;
