import React from 'react';

import { PrimaryNav, NavItem } from 'mineral-ui/Navigation';

const Navigation: React.FunctionComponent = () => {
  return (
    <PrimaryNav>
      <NavItem selected href="/">Home</NavItem>
      <NavItem href="/">Authors</NavItem>
      <NavItem href="/">Explore</NavItem>
      <NavItem href="/">Blog</NavItem>
      <NavItem href="/">Contact</NavItem>
    </PrimaryNav>
  );
}

export default Navigation;
