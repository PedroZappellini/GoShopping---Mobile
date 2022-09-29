import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import defaultTheme from '../../theme';
import * as S from './styles';

const List: React.FC = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.ButtonsContainer onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          size={25}
          color={defaultTheme.colors.textColor}
        />
      </S.ButtonsContainer>
      <S.ButtonsContainer>
        <AntDesign
          name="setting"
          size={25}
          color={defaultTheme.colors.textColor}
        />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default List;
