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

var css_248z = ".accordion-container {\r\n  width: 95%;\r\n  height: auto;\r\n}\r\n\r\n.accordion-item-container {\r\n  display: grid;\r\n  grid-template-columns: 9fr 1fr;\r\n  align-items: center;\r\n  line-height: 0px;\r\n}\r\n\r\n.accordion-dropdown-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 9fr;\r\n  align-items: center;\r\n  line-height: 0px;\r\n}\r\n\r\n.accordion-dropdown-text {\r\n  place-self: start;\r\n  color: black;\r\n}\r\n\r\n.accordion-button {\r\n  place-self: centre;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n";
styleInject(css_248z,{"insertAt":"top"});

const AccordionItem = ({ item, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const renderSubMenu = (subItem, index) => {
        if (!(subItem === null || subItem === void 0 ? void 0 : subItem.enabled) || !(subItem === null || subItem === void 0 ? void 0 : subItem.url)) {
            return (jsx("div", { children: jsx("p", { children: index }) }));
        }
        if (subItem.description === undefined || subItem.description === null) {
            subItem.description = "";
        }
        return (jsxs("div", Object.assign({ className: "accordion-dropdown-container" }, { children: [jsx("p", { className: "accordion-dropdown-text" }), jsx("p", Object.assign({ className: "accordion-tropdown-text" }, { children: jsx("a", Object.assign({ href: subItem.url }, { children: subItem.title.substring(0, 15) })) }))] }), subItem.key));
    };
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };
    return (jsxs("div", { children: [item.url ? (jsx("div", Object.assign({ className: "accordion-item-container" }, { children: jsx("p", Object.assign({ className: "accordion-dropdown-text" }, { children: jsx("a", Object.assign({ href: item.url }, { children: item.title.substring(0, 15) })) })) }))) : (jsxs("div", Object.assign({ className: "accordion-item-container" }, { children: [jsx("p", Object.assign({ className: "accordion-dropdown-text" }, { children: item.title.substring(0, 15) })), jsx("div", Object.assign({ className: "accordian-button", onClick: toggleVisible }, { children: isVisible ? "▲" : "▼" }))] }))), jsx("div", { children: isVisible && item.subItems && (jsx("div", { children: item.subItems.map((subItem, index) => renderSubMenu(subItem, index)) })) })] }));
};

const renderItem = (item, index) => {
    if (!(item === null || item === void 0 ? void 0 : item.enabled)) {
        return (jsx("div", { children: jsx("p", { children: index }) }));
    }
    return (jsx("div", { children: jsx(AccordionItem, { item: item }) }, item.key));
};
const Accordion = ({ items, }) => {
    return (jsx("div", Object.assign({ className: "accordion-container" }, { children: items.map((item, index) => renderItem(item, index)) })));
};

export { Accordion };
//# sourceMappingURL=index.js.map
