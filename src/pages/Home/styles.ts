import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  margin-top: 50px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.textColor};
  margin-bottom: 30px;
`;

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: white;
  width: 80%;
  height: 400px;
  padding: 20px;
  border-radius: 8px;
`;

export const ModalHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.backgroundButton};
`;

export const ModalQuitButton = styled.TouchableOpacity``;

export const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export const DropdownContainer = styled.View`
  z-index: 200;
`;

export const ColorDropdownContainer = styled.View`
  margin-bottom: 50px;
  margin-top: 20px;
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
