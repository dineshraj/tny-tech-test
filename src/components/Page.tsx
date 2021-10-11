import React from 'react';
import { PageProps, Article }  from '../types'
import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';
import Grid, { GridItem } from 'mineral-ui/Grid';
import { ClassNames } from '@emotion/core';

const Page: React.FunctionComponent<PageProps> = ({ articles }) => {
  return (
    <div className="page">
      <Grid>
        {articles.map(({ title, content, urlToImage, description}: Article, i: number) => {
          return (
              <GridItem span={4} marginBottom={"20px"}>
                <Card key={i}>
                  <CardTitle className="card-title">{title}</CardTitle>
                  <CardImage src={urlToImage} alt={description} />
                </Card> 
              </GridItem>
            )
          }
        )}
      </Grid>
    </div>
  );
}

export default Page;





