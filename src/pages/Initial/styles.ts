import styled from 'styled-components/native';
import defaultTheme from '../../theme/index';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: ${defaultTheme.fonts.rounded_bold};
  color: ${defaultTheme.colors.textColor};
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  font-family: ${defaultTheme.fonts.rounded_medium};
  color: ${defaultTheme.colors.textColor};
  margin-bottom: 20px;
`;
