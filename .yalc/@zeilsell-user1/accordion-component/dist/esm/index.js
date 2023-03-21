"use client";

import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".accordion-container {\n  width: 95%;\n  height: auto;\n}\n\n.accordion-item-container {\n  display: grid;\n  grid-template-columns: 9fr 1fr;\n  align-items: center;\n  line-height: 0px;\n}\n\n.accordion-dropdown-container {\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  align-items: center;\n  line-height: 0px;\n}\n\n.accordion-dropdown-text {\n  place-self: start;\n  color: black;\n}\n\n.accordion-button {\n  place-self: centre;\n  color: black;\n  cursor: pointer;\n}\n";
styleInject(css_248z,{"insertAt":"top"});

const AccordionNode = ({ item }) => {
    var _a;
    const [isVisible, setIsVisible] = useState(false);
    const renderSubMenu = (subItem) => {
        if (!(subItem === null || subItem === void 0 ? void 0 : subItem.enabled) || !(subItem === null || subItem === void 0 ? void 0 : subItem.url)) {
            return jsx("div", {});
        }
        if (subItem.description === undefined || subItem.description === null) {
            subItem.description = "";
        }
        return (jsxs("div", Object.assign({ className: "accordion-dropdown-container" }, { children: [jsx("p", { className: "accordion-dropdown-text" }), jsx("p", Object.assign({ className: "accordion-tropdown-text" }, { children: jsx("a", Object.assign({ href: subItem.url }, { children: subItem.title.substring(0, 15) })) }))] }), subItem.key));
    };
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };
    return (jsxs("div", { children: [jsxs("div", Object.assign({ className: "accordion-item-container" }, { children: [jsx("p", Object.assign({ className: "accordion-dropdown-text" }, { children: item.url ? (jsx("a", Object.assign({ href: item.url }, { children: item.title.substring(0, 15) }))) : (jsx("a", { children: item.title.substring(0, 15) })) })), (((_a = item === null || item === void 0 ? void 0 : item.subItems) === null || _a === void 0 ? void 0 : _a.length) != 0) && (jsx("div", Object.assign({ className: "accordian-button", onClick: toggleVisible }, { children: isVisible ? "▲" : "▼" })))] })), jsx("div", { children: isVisible && item.subItems && (jsx("div", { children: item.subItems.map((subItem) => renderSubMenu(subItem)) })) })] }));
};

const renderItem = (item) => {
    if (!(item === null || item === void 0 ? void 0 : item.enabled)) {
        return jsx("div", {});
    }
    return (jsx("div", { children: jsx(AccordionNode, { item: item }) }, item.key));
};
const Accordion = ({ items }) => {
    return (jsx("div", Object.assign({ className: "accordion-container" }, { children: items ? items.map((item) => renderItem(item)) : jsx("div", {}) })));
};

export { Accordion };
//# sourceMappingURL=index.js.map
