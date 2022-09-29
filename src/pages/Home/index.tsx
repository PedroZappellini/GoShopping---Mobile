import React, {useState, useContext, useEffect} from 'react';
import {FlatList, Modal, StatusBar} from 'react-native';
import {ProductsContext} from '../../contexts/products';
import CarrouselLabel from '../../components/CarrouselLabel';
import SmallButton from '../../components/SmallButton';
import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/Input';
import _default from 'react-native-safe-area-context/lib/typescript/specs/NativeSafeAreaView';
import api from '../../services/api';
import {Models} from '../../interfaces/modules';
import TabColors from '../../components/TabColors';

const Home: React.FC = () => {
  const {collections, userList} = useContext(ProductsContext);
  const [list, setList] = useState<Models.UserList[]>([]);
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [newList, setNewList] = useState({});

  const createNewList = async () => {
    const finded = collections.filter(item => item.collection === selected);

    const response = await api.post(`/list/${finded.map(item => item.id)}`, {
      name: inputValue,
      collection: selected,
      color: selectedColor,
    });

    setNewList(response);
    return response;
  };

  const listing = async () => {
    const response = await api.get('/list');
    setList(response.data);
  };

  useEffect(() => {
    listing();
  }, [newList]);

  return (
    <S.Container>
      <StatusBar
        backgroundColor={visible ? 'rgba(0, 0, 0, 0.2)' : 'transparent'}
      />
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalHeader>
              <S.ModalTitle>Crie sua lista</S.ModalTitle>
              <S.ModalQuitButton onPress={() => setVisible(false)}>
                <AntDesign name="close" size={20} />
              </S.ModalQuitButton>
            </S.ModalHeader>
            <S.InputContainer>
              <Input
                placeholder="digite aqui"
                onChange={setInputValue}
                labelText="Nome da lista"
              />
            </S.InputContainer>
            <S.DropdownContainer>
              <Dropdown
                collectionList
                onChangeSelected={setSelected}
                onResult={selected}
              />
            </S.DropdownContainer>
            <S.ColorDropdownContainer>
              <TabColors onChangeSelected={setSelectedColor} />
            </S.ColorDropdownContainer>
            <Button
              onPress={() => {
                createNewList(), setVisible(false);
              }}
              title="CRIAR"
            />
          </S.ModalContainer>
        </S.ModalBackground>
      </Modal>
      <Header />
      <S.HeaderContainer>
        <S.Title>Minhas listas</S.Title>
        <SmallButton title="Criar lista" onPress={() => setVisible(true)} />
      </S.HeaderContainer>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        style={{height: 50}}
        renderItem={({item}) => (
          <CarrouselLabel
            backgroundColor={item.color}
            type={item.collection}
            onPress={() =>
              navigation.navigate('List', {
                name: item.name,
                id: item.id,
                collection: item.collection,
                collectionId: item.collectionId,
              })
            }
            title={item.name}
          />
        )}
        ListEmptyComponent={() => (
          <S.EmptyListContainer>
            <S.EmptyListText>Você ainda nao possui uma lista!</S.EmptyListText>
          </S.EmptyListContainer>
        )}
      />
    </S.Container>
  );
};

export default Home;
