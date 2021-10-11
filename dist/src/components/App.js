"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const themes_1 = require("mineral-ui/themes");
const Navigation_1 = __importDefault(require("./Navigation"));
const Page_1 = __importDefault(require("./Page"));
function stripBrokenImages(articles) {
    return articles.filter((article) => {
        return article.urlToImage !== '';
    });
}
const App = ({ articles }) => {
    return (react_1.default.createElement(themes_1.ThemeProvider, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h1", { className: "title" }, "The New Yorker"),
            react_1.default.createElement(Navigation_1.default, null),
            react_1.default.createElement(Page_1.default, { articles: stripBrokenImages(articles) }))));
};
exports.default = App;
//# sourceMappingURL=App.js.map