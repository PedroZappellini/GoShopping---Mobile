import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import defaultTheme from '../../theme';

import * as S from './styles';
import Input from '../Input';
import Button from '../Button';

interface LabelProps {
  title?: string;
  onPress: () => void;
  type: string;
  backgroundColor: string;
}

const CarrouselLabel: React.FC<LabelProps> = ({
  title,
  onPress,
  type,
  backgroundColor,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalQuitButton onPress={() => setVisible(false)}>
              <AntDesign name="close" size={20} />
            </S.ModalQuitButton>
            <S.ModalTitle>
              Tem certeza de que deseja excluir esta lista?
            </S.ModalTitle>
            <S.ModalDescription>
              Para excluir digite o nome da lista selecionada e pressione
              confirmar!
            </S.ModalDescription>

            <Input placeholder="nome-da-lista" />
            <S.ModalButtonContainer>
              <Button
                onPress={() => {
                  setVisible(false);
                }}
                title="CONFIRMAR"
              />
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      </Modal>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 70,
          borderRadius: 10,
          marginBottom: 24,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: backgroundColor,
        }}
        onPress={onPress}>
        {type === 'Food' ? (
          <S.TypeIconContainer>
            <MaterialCommunityIcons
              name="food"
              size={30}
              color={defaultTheme.colors.background}
            />
          </S.TypeIconContainer>
        ) : (
          <S.TypeIconContainer>
            <AntDesign
              name="home"
              size={30}
              color={defaultTheme.colors.background}
            />
          </S.TypeIconContainer>
        )}

        <S.InsideCardContainer>
          <S.LabelText>{title}</S.LabelText>
          <S.ConfigButtonsContainer>
            <S.ConfigButtons onPress={() => setVisible(true)}>
              <Ionicons
                name="remove-circle"
                size={25}
                color={defaultTheme.colors.initialColor}
                style={{marginBottom: 5}}
              />
            </S.ConfigButtons>
            <S.ConfigButtons>
              <Feather
                name="edit"
                size={20}
                color={defaultTheme.colors.grayLighterText}
              />
            </S.ConfigButtons>
          </S.ConfigButtonsContainer>
        </S.InsideCardContainer>
      </TouchableOpacity>
    </>
  );
};

export default CarrouselLabel;
