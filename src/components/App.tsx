import React from 'react';
import { AppProps, Article, Articles }  from '../types'
import { ThemeProvider } from 'mineral-ui/themes';

import Navigation from './Navigation';
import Page from './Page';

function stripBrokenImages(articles: Articles) {
  return articles.filter((article: Article) => {
    return article.urlToImage !== '';
  }
  );
}

const App: React.FunctionComponent<AppProps> = ({ articles }) => {
  return (
    <ThemeProvider>
      <>
        <h1 className="title">The New Yorker</h1>
        <Navigation/>
        <Page articles={stripBrokenImages(articles)} />
      </>
    </ThemeProvider>
  )
}

export default App;
