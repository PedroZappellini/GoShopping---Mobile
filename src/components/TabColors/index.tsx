import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import defaultTheme from '../../theme';
import {TabColors} from '../../theme';
import * as S from './styles';

interface DropDownProps {
  onChangeSelected: (value: string) => void;
  onResult: (value: string) => void;
}

const Dropdown: React.FC<DropDownProps> = ({onChangeSelected, onResult}) => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState('');

  return (
    <S.Container onPress={() => setVisible(state => !state)}>
      <S.selectedText>
        {onResult || (
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              borderWidth: 2,
              backgroundColor: color,
            }}
          />
        )}
      </S.selectedText>

      {visible ? (
        <S.ModalContainer>
          {TabColors.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setColor(item.color), onChangeSelected(item.color);
                }}
                style={{
                  backgroundColor: item.color,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  margin: 10,
                }}></TouchableOpacity>
            );
          })}
        </S.ModalContainer>
      ) : (
        ''
      )}
      {!visible ? (
        <AntDesign
          style={{paddingRight: 10}}
          name="left"
          size={15}
          color={defaultTheme.colors.textColor}
        />
      ) : (
        <AntDesign
          style={{paddingRight: 10}}
          name="down"
          size={15}
          color={defaultTheme.colors.textColor}
        />
      )}
    </S.Container>
  );
};

export default Dropdown;
