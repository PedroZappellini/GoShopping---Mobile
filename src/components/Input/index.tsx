import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  labelText?: string;
  onChange: () => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  labelText,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <S.LabelContainer {...rest}>
        <S.LabelText>{labelText}</S.LabelText>
      </S.LabelContainer>
      <S.Container>
        <TextInput
          onChangeText={onChange}
          style={{paddingLeft: 10}}
          placeholder={placeholder}
        />
      </S.Container>
    </>
  );
};

export default Input;
