import React, { useEffect, useState } from 'react';

import { Container } from './styles';

// limite de scroll para ocultar o menu lateral
const scrollThreshold = 300;

declare global {
  interface Window {
    // adicionando a função toggleActiveMenu ao windows
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  // para exibir o menu lateral no clique
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      // quando o usuario usar o scroll, o painel lateral é oculto
      setIsActive(false);
    }

    // registrando um evento de scroll
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // para representar os modos de operação do menu lateral
  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];

  const className = classes.join(' ').trim();

  // muda o estado de aberto ou fechado do menu
  function toggleActiveMenu() {
    // alternando resultado entre true e false
    setIsActive((prev) => !prev);
  }

  // passando a função para dentro da window
  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
