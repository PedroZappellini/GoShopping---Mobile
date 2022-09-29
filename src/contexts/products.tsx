import React, {createContext, ReactNode, useEffect, useState} from 'react';
import api from '../services/api';
import {Models} from '../interfaces/modules';

interface ChildrenProps {
  children: ReactNode;
}

export const ProductsContext = createContext<Models.ProductProps>(
  {} as Models.ProductProps,
);

const ProductsProvider: React.FC<ChildrenProps> = ({children}) => {
  const [products, setProducts] = useState<Models.ProductInfo[]>([]);
  const [userList, setUserList] = useState<Models.UserList[]>([]);
  const [collections, setCollections] = useState<Models.Collections[]>([]);

  const loadApi = async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  };

  const loadListUserApi = async () => {
    const response = await api.get('/list');
    setUserList(response.data);
  };

  const loadCollectionsApi = async () => {
    const response = await api.get('/collections');
    setCollections(response.data);
  };

  useEffect(() => {
    loadApi();
    loadListUserApi();
    loadCollectionsApi();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        userList,
        collections,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
