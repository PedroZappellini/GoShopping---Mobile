import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const LabelContainer = styled.View``;

export const LabelText = styled.Text`
  font-size: 12px;
  font-family: ${defaultTheme.fonts.rounded_medium};
  color: ${defaultTheme.colors.textColor};
`;

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${defaultTheme.colors.grayInput};
  border-radius: 8px;
`;
