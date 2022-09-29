import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import {ProductsContext} from '../../contexts/products';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as S from './styles';
import defaultTheme from '../../theme';

interface DropDownProps {
  text: string;
  onChangeSelected: (value: string) => void;
  onResult: (value: string) => void;
  collectionList: boolean;
}

const Dropdown: React.FC<DropDownProps> = ({
  text,
  onChangeSelected,
  onResult,
  collectionList,
}) => {
  const {collections, products} = useContext(ProductsContext);
  const [value, setValue] = useState(text);
  const [visible, setVisible] = useState(false);

  return (
    <S.Container onPress={() => setVisible(state => !state)}>
      {visible ? (
        <S.ModalContainer>
          {collectionList ? (
            <FlatList
              data={collections}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <S.DropdownLine
                    onPress={() => {
                      onChangeSelected(item.collection), setVisible(false);
                    }}>
                    <S.DropdownLineText>{item.collection}</S.DropdownLineText>
                  </S.DropdownLine>
                );
              }}
            />
          ) : (
            <FlatList
              data={products}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <S.DropdownLine
                    onPress={() => {
                      onChangeSelected(item.name), setVisible(false);
                    }}>
                    <S.DropdownLineText>{item.name}</S.DropdownLineText>
                  </S.DropdownLine>
                );
              }}
            />
          )}
        </S.ModalContainer>
      ) : (
        ''
      )}
      <S.selectedText>{onResult || 'Selecione uma coleção'}</S.selectedText>
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
