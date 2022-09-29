import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';
import defaultTheme from '../../theme';
import {FlatList} from 'react-native';
import api from '../../services/api';
import {Models} from '../../interfaces/modules';
import SmallButton from '../../components/SmallButton';

interface RouteParams {
  key: string;
  name: string;
  params: Params;
  path: string;
}

interface Params {
  id: string;
  name: string;
  collection: Models.Collections[];
  collectionId: string;
}

const List: React.FC = () => {
  const route = useRoute<RouteParams>();
  const [visible, setVisible] = useState(false);
  const [turnWay, setTurnWay] = useState(false);
  const [productsList, setProductsList] = useState<Models.Products[]>([]);
  const [newProductList, setNewProductList] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [deleteItems, setDeleteItems] = useState(false);

  const AddProductToList = async () => {
    const response = await api.post(`/list/products/${route.params.id}`, {
      name: inputValue,
      collection: route.params.collection,
    });
    setNewProductList(response);
    return response;
  };

  const loadProductsApi = async () => {
    const response = await api.get(`/list/products/${route.params.id}`);
    setProductsList(response.data);
    console.log(productsList, 'aujuhasuhas');
  };

  useEffect(() => {
    loadProductsApi();
  }, [newProductList]);

  return (
    <S.Container>
      <Header />
      <S.BelowHeaderContainer>
        <S.Title>{route.params.name}</S.Title>
        <S.ButtonsContainer>
          {visible ? (
            <S.AddItemButtonContainer>
              <S.ChangeWayButton onPress={() => setTurnWay(state => !state)}>
                <FontAwesome
                  name="exchange"
                  size={25}
                  color={defaultTheme.colors.textColor}
                />
              </S.ChangeWayButton>
              <S.AddItemButton
                onPress={() => {
                  setVisible(state => !state);
                  if (inputValue === '') {
                    return;
                  } else {
                    AddProductToList();
                    setInputValue('');
                  }
                }}>
                <S.AddItemButtonConfirmText>
                  Confirmar
                </S.AddItemButtonConfirmText>
                <AntDesign
                  name="checkcircle"
                  size={25}
                  color={defaultTheme.colors.initialColor}
                />
              </S.AddItemButton>
            </S.AddItemButtonContainer>
          ) : (
            <S.HeaderContainer>
              <S.DeleteButtonContainer
                onPress={() => setDeleteItems(state => !state)}>
                <MaterialIcons
                  name="delete-outline"
                  size={20}
                  color={defaultTheme.colors.white}
                />
              </S.DeleteButtonContainer>
              <S.AddItemButton
                onPress={() => {
                  setVisible(state => !state);
                }}>
                <Entypo
                  name="add-to-list"
                  size={25}
                  color={defaultTheme.colors.textColor}
                />
              </S.AddItemButton>
            </S.HeaderContainer>
          )}
        </S.ButtonsContainer>
      </S.BelowHeaderContainer>
      {visible && !turnWay ? (
        <S.InputContainer>
          <Input onChange={setInputValue} placeholder="Adicione um item" />
        </S.InputContainer>
      ) : (
        ''
      )}
      {visible && turnWay ? (
        <S.DropdownContainer>
          <Dropdown />
        </S.DropdownContainer>
      ) : (
        ''
      )}

      <FlatList
        data={productsList}
        style={{
          backgroundColor: defaultTheme.colors.backgroundButton,
          borderRadius: 8,
          paddingLeft: 20,
          paddingBottom: 20,
          paddingRight: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <S.ProductRows>
            <S.ProductRowsText>{item.name}</S.ProductRowsText>
            <S.DeleteIconContainer>
              {deleteItems ? (
                <AntDesign
                  name="close"
                  size={20}
                  color={defaultTheme.colors.initialColor}
                />
              ) : (
                ''
              )}
            </S.DeleteIconContainer>
          </S.ProductRows>
        )}
        ListEmptyComponent={() => (
          <S.EmptyListContainer>
            <S.EmptyListText>
              Você ainda nao possui itens nessa lista!
            </S.EmptyListText>
          </S.EmptyListContainer>
        )}
      />
    </S.Container>
  );
};

export default List;
