import * as React from 'react';

import { FooterLayout } from './FooterLayout';
import { HeaderLayout } from './HeaderLayout';
import ContentsStyles from '@styles/layouts/Contents.module.scss';
import mainStyles from '@styles/layouts/Main.module.scss';
import BackToTopButton from 'components/BackToTopButton/BackToTopButton';

type ContentLayoutProps = {
  children: React.ReactNode;
};
HeaderLayout;
export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <main className={mainStyles.main}>
      <HeaderLayout />
      <div className={ContentsStyles.contents}>{children}</div>
      <FooterLayout />
      <BackToTopButton />
    </main>
  );
};
