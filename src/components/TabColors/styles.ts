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
  position: relative;
  z-index: 50;
`;

export const selectedText = styled.Text`
  padding-left: 10px;
`;

export const ModalContainer = styled.View`
  position: absolute;
  top: 60px;
  width: 100%;
  height: 100px;
  background-color: ${defaultTheme.colors.grayInput};
  border-radius: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 50;
`;

export const SquareColor = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${defaultTheme.colors.backgroundButton};
`;
