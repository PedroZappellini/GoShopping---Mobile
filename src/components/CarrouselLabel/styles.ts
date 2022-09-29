import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${defaultTheme.colors.backgroundButton};
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;

export const LabelText = styled.Text`
  font-size: 16px;
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.white};
`;

export const TypeIconContainer = styled.View`
  border-right-width: 2px;
  height: 70px;
  justify-content: center;
  border-right-color: ${defaultTheme.colors.background};
  margin-left: 10px;
  margin-right: 10px;
  padding-right: 10px;
`;

export const ConfigButtonsContainer = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const ConfigButtons = styled.TouchableOpacity``;

export const InsideCardContainer = styled.View`
  width: 80%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  align-self: center;
  width: 80%;
  height: 300px;
  padding: 20px;
  margin-bottom: 30%;
  border-radius: 8px;
  background-color: white;
`;

export const ModalTitle = styled.Text`
  font-family: ${defaultTheme.fonts.rouned_extraBold};
  color: ${defaultTheme.colors.initialColor};
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalDescription = styled.Text`
  font-family: ${defaultTheme.fonts.rounded_medium};
  color: ${defaultTheme.colors.backgroundButton};
  font-size: 12px;
`;

export const ModalButtonContainer = styled.View`
  margin-top: 30px;
`;

export const ModalQuitButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin-bottom: 10px;
`;
