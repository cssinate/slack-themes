import styled from 'styled-components';
import theme from '../../theme'

export const Badge = styled.div`
  display: inline-block;
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.rootBg};
  line-height: 1;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.disabled};
  font-size: .875em;
  border: 1px solid;
  box-shadow: 0px 2px 4px 1px rgba(0,0,0, .14);
  font-size: 1.4rem;
  user-select: none;
`;