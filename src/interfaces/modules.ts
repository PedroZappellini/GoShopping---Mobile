export declare module Models {
  interface ProductProps {
    products: ProductInfo[];
    userList: UserList[];
    collections: Collections[];
  }

  interface ProductInfo {
    id: string;
    name: string;
  }

  interface UserList {
    id: string;
    name: string;
    collection: string;
    collectionId: string;
    color: string;
    count: UserListCount[];
  }

  interface UserListCount {
    id: string;
    name: string;
    collection: string;
    collectionId: string;
  }

  interface Collections {
    id: string;
    collection: string;
  }

  interface Products {
    id: string;
    name: string;
    collection: string;
    collectionId: string;
  }
}
