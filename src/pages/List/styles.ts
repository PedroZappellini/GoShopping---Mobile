import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.textColor};
`;

export const BelowHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.View``;

export const AddItemButtonContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddItemButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const AddItemButtonConfirmText = styled.Text`
  color: ${defaultTheme.colors.initialColor};
  font-family: ${defaultTheme.fonts.rounded_bold};
  font-size: 14px;
  margin-right: 10px;
`;

export const ChangeWayButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const InputContainer = styled.View``;

export const DropdownContainer = styled.View`
  margin-top: 16px;
`;

export const ProductRows = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-color: ${defaultTheme.colors.rowColor};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const DeleteIconContainer = styled.TouchableOpacity``;

export const ProductRowsText = styled.Text`
  font-size: 16px;
  font-family: ${defaultTheme.fonts.rounded_medium};
  color: ${defaultTheme.colors.white};
`;

export const ListContainer = styled.View`
  background-color: ${defaultTheme.colors.backgroundButton};
  border-radius: 8px;
  width: 100%;
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${defaultTheme.colors.initialColor};
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const EmptyListText = styled.Text`
  font-size: 16px;
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.emptyTextColor};
`;

export const EmptyListContainer = styled.View`
  margin-top: 250px;
  align-items: center;
`;
