/*
xatto-some v1.0.0
https://github.com/atomita/xatto-some
Released under the MIT License.
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('xatto')) :
    typeof define === 'function' && define.amd ? define(['exports', 'xatto'], factory) :
    (factory((global['xatto-some'] = {}),global.xatto));
}(this, (function (exports,xatto) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var Some = function (_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        var vNode = null;
        xa.slice = '';
        var resolver = resolverProvider(xa);
        if (children.some(function (child) {
            vNode = resolver(child);
            return isValid(vNode);
        })) {
            return vNode;
        }
    };
    function resolverProvider(xa) {
        return function (vNode) {
            if (xatto.x === vNode.name || !('function' === typeof vNode.name)) {
                return vNode;
            }
            return vNode.name(__assign({}, vNode.props, { xa: xa }), vNode.children);
        };
    }
    function isValid(vNode) {
        return vNode != null && vNode !== true && vNode !== false;
    }

    exports.Some = Some;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xatto-some.js.map
