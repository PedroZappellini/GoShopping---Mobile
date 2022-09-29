import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import * as S from './styles';
import Background from '../../components/Background';

const Initial: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Title>Seja bem vindo</S.Title>
      <S.SubTitle>Garanta a organizacao das suas compras mensais</S.SubTitle>
      <Button onPress={() => navigation.navigate('Home')} title="INICIAR" />
    </S.Container>
  );
};

export default Initial;
