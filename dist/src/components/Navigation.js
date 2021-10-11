"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navigation_1 = require("mineral-ui/Navigation");
const Navigation = () => {
    return (react_1.default.createElement(Navigation_1.PrimaryNav, null,
        react_1.default.createElement(Navigation_1.NavItem, { selected: true, href: "/" }, "Home"),
        react_1.default.createElement(Navigation_1.NavItem, { href: "/" }, "Authors"),
        react_1.default.createElement(Navigation_1.NavItem, { href: "/" }, "Explore"),
        react_1.default.createElement(Navigation_1.NavItem, { href: "/" }, "Blog"),
        react_1.default.createElement(Navigation_1.NavItem, { href: "/" }, "Contact")));
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map