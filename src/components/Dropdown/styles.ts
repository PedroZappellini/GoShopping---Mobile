import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${defaultTheme.colors.grayInput};
  z-index: 100;
`;

export const selectedText = styled.Text`
  padding-left: 10px;
`;

export const ModalContainer = styled.View`
  position: absolute;
  top: 60px;
  width: 100%;
  height: 200px;
  background-color: ${defaultTheme.colors.grayInput};
  border-radius: 8px;
  z-index: 100;
`;

export const DropdownLine = styled.TouchableOpacity`
  width: 100%;
`;
export const DropdownLineText = styled.Text`
  font-size: 14px;
  font-family: ${defaultTheme.fonts.rounded_medium};
  color: ${defaultTheme.colors.grayLighterText};
  padding-left: 20px;
  padding-top: 15px;
`;
