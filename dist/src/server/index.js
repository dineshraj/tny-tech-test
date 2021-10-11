"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const https_1 = __importDefault(require("https"));
const config_1 = require("../../config");
const App_1 = __importDefault(require("../components/App"));
const port = process.env.PORT || 8080;
const app = express_1.default();
function handleRender(req, res) {
    https_1.default.get(`${config_1.newsApiUrl}&apiKey=${config_1.newsApiKey}`, (response) => {
        let data;
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            // removed 'undefined' at the beginning of the string
            const dataObject = JSON.parse(data.substring(9));
            const html = server_1.renderToString(react_1.default.createElement(App_1.default, { articles: dataObject.articles }));
            fs_1.default.readFile('./public/index.html', 'utf8', (err, data) => {
                if (err)
                    throw err;
                const document = data.replace(/<div id="app-root"><\/div>/, `<div id="app-root">${html}</div>`);
                res.send(document);
            });
        });
    });
}
app.use(express_1.default.static('dist'));
app.get('/', handleRender);
app.listen(port, () => console.log(`listening on port ${port}`));
//# sourceMappingURL=index.js.map