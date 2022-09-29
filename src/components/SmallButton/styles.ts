import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.initialColor};
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.textColor};
  font-family: ${defaultTheme.fonts.rounded_bold};
  font-size: 14px;
`;
