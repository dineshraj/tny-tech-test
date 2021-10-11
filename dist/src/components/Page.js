"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_1 = __importStar(require("mineral-ui/Card"));
const Grid_1 = __importStar(require("mineral-ui/Grid"));
const Page = ({ articles }) => {
    return (react_1.default.createElement("div", { className: "page" },
        react_1.default.createElement(Grid_1.default, null, articles.map(({ title, content, urlToImage, description }, i) => {
            return (react_1.default.createElement(Grid_1.GridItem, { span: 4, marginBottom: "20px" },
                react_1.default.createElement(Card_1.default, { key: i },
                    react_1.default.createElement(Card_1.CardTitle, { className: "card-title" }, title),
                    react_1.default.createElement(Card_1.CardImage, { src: urlToImage, alt: description }))));
        }))));
};
exports.default = Page;
//# sourceMappingURL=Page.js.map