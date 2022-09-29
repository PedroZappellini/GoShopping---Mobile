import styled from 'styled-components/native';
import defaultTheme from '../../theme';

export const Container = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.TouchableOpacity`
  background-color: ${defaultTheme.colors.backgroundButton};
  width: 60px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
