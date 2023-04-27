var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("types/jsstyle.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("types/css-props.type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("types/index", ["require", "exports", "types/jsstyle.type", "types/css-props.type"], function (require, exports, jsstyle_type_1, css_props_type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(jsstyle_type_1, exports);
    __exportStar(css_props_type_1, exports);
});
define("interfaces/theme.interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/set-root-atoms-options.interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/theme-changer.interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/index", ["require", "exports", "interfaces/theme-changer.interface", "interfaces/theme.interface", "interfaces/set-root-atoms-options.interface"], function (require, exports, theme_changer_interface_1, theme_interface_1, set_root_atoms_options_interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(theme_changer_interface_1, exports);
    __exportStar(theme_interface_1, exports);
    __exportStar(set_root_atoms_options_interface_1, exports);
});
define("config", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_OPTIONS = exports.THEME_COMMON_TOKEN = exports.THEME_TOKEN = void 0;
    exports.THEME_TOKEN = 'Qtheme';
    exports.THEME_COMMON_TOKEN = 'Qtheme-common';
    exports.DEFAULT_OPTIONS = {
        generateCSS: true,
        token: exports.THEME_TOKEN,
        commonToken: exports.THEME_COMMON_TOKEN,
    };
});
define("helpers/map-to-kebab-case.helper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapToKebabCase = void 0;
    const mapToKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    exports.mapToKebabCase = mapToKebabCase;
});
define("helpers/index", ["require", "exports", "helpers/map-to-kebab-case.helper"], function (require, exports, map_to_kebab_case_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(map_to_kebab_case_helper_1, exports);
});
define("set-root-atoms", ["require", "exports", "helpers/index", "config"], function (require, exports, helpers_1, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setRootAtoms = void 0;
    const setRootAtoms = (atoms, options) => {
        const opts = options ? Object.assign(Object.assign({}, config_1.DEFAULT_OPTIONS), options) : config_1.DEFAULT_OPTIONS; // to ensure that all options are set
        let cssCode = '';
        for (const themeAtom of atoms) {
            const atom = Atom(themeAtom);
            if (!opts.generateCSS) {
                atom.setRootVar();
                continue;
            }
            if (atom.isAtomCompound) {
                cssCode += atom.getCompoundClass();
                continue;
            }
            if (!atom.isValueCSSRule) {
                atom.setRootVar();
                continue;
            }
            const [cssProperty, value] = atom.splitAtomValue();
            if (cssProperty.length) {
                cssCode += CSSVarClassRow(atom.rootVariableName, cssProperty);
            }
            atom.setRootVar(atom.rootVariableName, value);
        }
        if (opts.generateCSS && opts.token) {
            removeStyleTag(opts.token);
            attachStyleTag(cssCode, opts.token);
        }
    };
    exports.setRootAtoms = setRootAtoms;
    function Atom(atom) {
        const [atomName, atomValue] = atom;
        const isAtomCompound = typeof atomValue === 'object';
        const isNameCSSRule = typeof atomName === 'string' && atomName.indexOf(':') !== -1;
        const isValueCSSRule = typeof atomValue === 'string' && atomValue.indexOf(':') !== -1;
        const splitAtomName = () => atomName.split(/:(.*)/s); // split at the first occurrence of ':' and keep the rest
        const splitAtomValue = () => typeof atomValue === 'string' ? atomValue.split(':') : ['', ''];
        const getCompoundClass = () => {
            let styledClass = isNameCSSRule ? `.${atomNameValue}:${atomNameCSSRule} {` : `.${atomName} {`;
            for (const [cssProperty, value] of Object.entries(atomValue)) {
                styledClass += `${(0, helpers_1.mapToKebabCase)(cssProperty)}: ${value};`;
            }
            styledClass += "}\n";
            return styledClass;
        };
        let atomNameValue = atomName;
        let atomNameCSSRule = atomValue;
        if (isNameCSSRule) {
            const [cssKey, rule] = splitAtomName(); // ['bgColor', 'hover']
            atomNameCSSRule = rule; // 'hover'
            atomNameValue = (0, helpers_1.mapToKebabCase)(cssKey); // 'bg'
        }
        const rootVar = isNameCSSRule ? (0, helpers_1.mapToKebabCase)(atomNameValue) : (0, helpers_1.mapToKebabCase)(atomName);
        return {
            rootVariableName: rootVar,
            name: atomName,
            value: atomValue,
            atomNameValue,
            atomNameCSSRule,
            isAtomCompound,
            isNameCSSRule,
            isValueCSSRule,
            splitAtomName,
            splitAtomValue,
            getCompoundClass,
            setRootVar: (property = rootVar, value = atomValue) => {
                typeof value === 'string'
                    ? document.documentElement.style.setProperty(`--${property}`, value)
                    : void 0;
            }
        };
    }
    const attachStyleTag = (cssCode, id = config_1.DEFAULT_OPTIONS.token) => {
        const style = document.createElement('style');
        style.id = id;
        style.innerHTML = cssCode;
        document.head.appendChild(style);
    };
    const removeStyleTag = (id) => {
        const style = document.getElementById(id);
        if (style) {
            document.head.removeChild(style);
        }
    };
    const CSSVarClassRow = (varName, property) => `.${varName} { ${property}: var(--${varName}) }\n`;
});
define("qtheme", ["require", "exports", "set-root-atoms", "config"], function (require, exports, set_root_atoms_1, config_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Qtheme = void 0;
    const cache = {
        get: (key) => {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        },
        set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    };
    exports.Qtheme = {
        init: (defaultTheme, options) => {
            const opts = Object.assign(Object.assign({}, config_2.DEFAULT_OPTIONS), options);
            const savedTheme = exports.Qtheme.getTheme();
            if (savedTheme) {
                exports.Qtheme.setTheme(savedTheme, opts);
            }
            else {
                exports.Qtheme.setTheme(defaultTheme, opts);
            }
            const savedCommonAtoms = exports.Qtheme.getCommonAtoms();
            if (savedCommonAtoms) {
                exports.Qtheme.setCommonAtoms(savedCommonAtoms, opts);
            }
            else if (opts.commonAtoms) {
                exports.Qtheme.setCommonAtoms(opts.commonAtoms, opts);
            }
        },
        setTheme(theme, options) {
            (0, set_root_atoms_1.setRootAtoms)(theme.atoms, options);
            const themeToken = (options === null || options === void 0 ? void 0 : options.token) || config_2.THEME_TOKEN;
            cache.set(themeToken, theme);
        },
        getTheme(themeToken = config_2.THEME_TOKEN) {
            return cache.get(themeToken);
        },
        setCommonAtoms(atoms, options) {
            const commonThemeToken = (options === null || options === void 0 ? void 0 : options.commonToken) || config_2.THEME_COMMON_TOKEN;
            (0, set_root_atoms_1.setRootAtoms)(atoms, Object.assign(Object.assign({}, options), { token: commonThemeToken }));
            cache.set(commonThemeToken, atoms);
        },
        getCommonAtoms(commonThemeToken = config_2.THEME_COMMON_TOKEN) {
            return cache.get(commonThemeToken);
        },
    };
});
define("index", ["require", "exports", "config", "qtheme", "interfaces/index", "types/index"], function (require, exports, config_3, qtheme_1, interfaces_1, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(config_3, exports);
    __exportStar(qtheme_1, exports);
    __exportStar(interfaces_1, exports);
    __exportStar(types_1, exports);
});
