"use client";

import { jsxs, jsx } from 'react/jsx-runtime';

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

var css_248z = ".backdrop-show {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: grey;\n  opacity: 0.5;\n  top: 0;\n  right: 0;\n  z-index: 100;\n  animation: fade-in 1s;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 0.5;\n  }\n}\n\n.backdrop-hide {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: grey;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  z-index: -100;\n  animation: fade-out 1s;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 0.5;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.drawer-close {\n  position: fixed;\n  width: 40%;\n  height: 98%;\n  color: black;\n  top: 1%;\n  right: -40%;\n  z-index: 200;\n  transform: translateX(100%);\n  transition: transform 1s ease-in;\n}\n\n.drawer-open {\n  position: fixed;\n  width: 40%;\n  height: 98%;\n  opacity: 1;\n  color: black;\n  top: 1%;\n  right: -40%;\n  z-index: 200;\n  transform: translateX(-100%);\n  transition: transform 1s ease-out;\n}\n";
styleInject(css_248z,{"insertAt":"top"});

const SlidingDrawer = ({ show, background, color, callback, children, }) => {
    return (jsxs("div", { children: [jsx("div", { children: jsxs("div", Object.assign({ style: { background: background, color: color }, className: show ? "drawer-open" : "drawer-close" }, { children: [jsx("button", Object.assign({ onClick: () => {
                                callback();
                            } }, { children: "make the slider close" })), jsx("p", { children: "SNAKES" }), children] })) }), jsx("div", { className: show ? "backdrop-show" : "backdrop-hide" })] }));
};

export { SlidingDrawer };
//# sourceMappingURL=index.js.map
