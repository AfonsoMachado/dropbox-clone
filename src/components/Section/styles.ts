import styled from 'styled-components';
// icone do dropbox do react icons
import { FaDropbox } from 'react-icons/fa'

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  /* usado para quando o site for usado em telas menores */
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  /* dados para a primeira seção */
  &:first-child{
    --padding-top: 130px;
    --heading-font-size: 51px;

    /* somente para computador */
    @media(min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }

  }

  background: var(--bg-color);

`;

export const HeaderWrapper = styled.div``;
export const Header = styled.div``;
export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom);
`;