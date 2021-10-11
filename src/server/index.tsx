import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import https from "https";

import { newsApiKey, newsApiUrl } from '../../config';

import App from '../components/App';

const port = process.env.PORT || 8080;
const app = express();

function handleRender(req: express.Request, res: express.Response): void {
  https.get(`${newsApiUrl}&apiKey=${newsApiKey}`, (response) => {
    let data: string;

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      // removed 'undefined' at the beginning of the string
      const dataObject = JSON.parse(data.substring(9));
      const html = renderToString(<App articles={dataObject.articles}/>);

      fs.readFile('./public/index.html', 'utf8', (err, data) => {
        if (err) throw err;
    
        const document = data.replace(
          /<div id="app-root"><\/div>/,
          `<div id="app-root">${html}</div>`
        );
        res.send(document);
      });
    });
  });
}

app.use(express.static('dist'));
app.get('/', handleRender)

app.listen(port, () => console.log(`listening on port ${port}`));
