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
  position: relative;

`;

export const HeaderWrapper = styled.div`
  /* position absolute relativo ao pai, que está com position relative */
  position: absolute;

  /* Consumindo o elemento inteiro de content */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* faz com que todos os header não saiam de seus respectivos pais.
  * fazendo com que mantenha a cor de cada content, como no site original
  */
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  /* sobrepondo tudo */
  z-index: 3;
  background: var(--bg-color);

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

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