import styled from 'styled-components';

export const Container = styled.div`
  /* ficando por cima de todas as camadas  */
  z-index: 10;
  /* fixado na parte direita da tela */
  position: fixed;
  top: 0;
  right: 0;

  /* para telas menores, ocupa a tela toda */
  width: 100%;
  height: 100%;

  background: var(--color-tertiary);

  /* para telas de computador, o menu ocupa apenas lateralmente  */
  @media (min-width: 1024px) {
    width: calc(100% / 3);
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: 1440px) {
    width: calc(480px + ((100vw - 1440px) / 2));
  }

  /* por padrão a barra lateral fica 100% para direita */
  transform: translateX(100%);

  @media (min-width: 1024px) {
    &.scrollOpen {
      /* quando é usado o scroll para mais de 300px, a barra lateral aparece */
      transform: translateX(0);
    }
  }
`;
