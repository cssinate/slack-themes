import styled from 'styled-components';

export const Badge = styled.div`
  display: inline-block;
  padding: 0.6rem 1rem;
  background: linear-gradient(to top, ${({ theme }) => theme.subtle}, ${({ theme }) => theme.rootBg}, ${({ theme }) => theme.rootBg});
  line-height: 1;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.rootColor};
  font-size: .875em;
  border: 1px solid;
  box-shadow: 0px 2px 4px 1px rgba(0,0,0, .14);
  font-size: 1.3rem;
  user-select: none;
  font-weight: 600;
`;