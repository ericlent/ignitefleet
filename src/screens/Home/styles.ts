import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_800};
`;