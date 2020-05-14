import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const LogoAndNameImage = styled.Image`
  width: 328px;
  height: 223px;
  align-self: center;
  margin-top: 60px;
`;
