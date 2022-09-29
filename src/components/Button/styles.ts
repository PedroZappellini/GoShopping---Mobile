import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #f08080;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: ${defaultTheme.fonts.rounded_bold};
  font-size: 14px;
`;
