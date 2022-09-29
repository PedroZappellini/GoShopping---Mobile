import React from 'react';

import * as S from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <S.Container onPress={onPress}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
