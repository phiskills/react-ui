import React, { forwardRef, useEffect, Fragment, useRef, useReducer, useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'basic';

Accordion.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  open: PropTypes.bool
};
function Accordion(_ref) {
  var header = _ref.header,
      body = _ref.body,
      open = _ref.open;
  return React.createElement("details", {
    className: "accordion",
    open: open
  }, React.createElement("summary", {
    className: "accordion-header"
  }, header, React.createElement("strong", {
    style: {
      "float": 'right'
    },
    className: "tooltip",
    "data-tooltip": "Expand"
  }, React.createElement("i", {
    className: "icon icon-arrow-down mr-1"
  }))), React.createElement("div", {
    className: "accordion-body"
  }, body));
}

var color = {
  darker: '#1E1F26',
  dark: '#283655',
  light: '#4D648D',
  lighter: '#D0E1F0',
  info: '#2196f3',
  success: '#00e676',
  error: '#ff1744'
};
var avatar = {
  color: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    dark: 'bg-dark',
    gray: 'bg-gray',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error'
  },
  sizes: {
    smallest: 'avatar avatar-xs',
    small: 'avatar avatar-sm',
    "default": 'avatar',
    large: 'avatar avatar-lg',
    largest: 'avatar avatar-xl'
  },
  status: {
    success: 'avatar-presence online',
    error: 'avatar-presence busy',
    warning: 'avatar-presence away',
    "default": 'avatar-presence offline'
  }
};
var divider = {
  type: {
    horizontal: 'divider',
    vertical: 'divider-vert'
  }
};
var button = {
  types: {
    "default": 'btn',
    primary: 'btn btn-primary',
    link: 'btn btn-link',
    success: 'btn btn-success',
    error: 'btn btn-error',
    clear: 'btn btn-clear'
  },
  sizes: {
    small: 'btn-sm',
    "default": '',
    large: 'btn-lg',
    block: 'btn-block'
  },
  "float": {
    none: '',
    left: 'float-left',
    right: 'float-right'
  }
};
var message = {
  types: {
    "default": 'label',
    primary: 'label label-primary',
    secondary: 'label label-secondary',
    success: 'label label-success',
    warning: 'label label-warning',
    error: 'label label-error'
  },
  round: 'label-rounded'
};
var modal = {
  sizes: {
    small: 'modal modal-sm',
    "default": 'modal',
    large: 'modal modal-lg'
  }
};
var notification = {
  types: {
    "default": 'toast',
    primary: 'toast toast-primary',
    success: 'toast toast-success',
    warning: 'toast toast-warning',
    error: 'toast toast-error'
  }
};
var popover = {
  types: {
    top: 'popover',
    right: 'popover popover-right',
    bottom: 'popover popover-bottom',
    left: 'popover popover-left'
  }
};

Avatar.propTypes = {
  color: PropTypes.oneOf(Object.keys(avatar.color)),
  initial: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(avatar.sizes)),
  url: PropTypes.string,
  alt: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(avatar.status))
};
function Avatar(_ref) {
  var color = _ref.color,
      initial = _ref.initial,
      children = _ref.children,
      status = _ref.status,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size;
  var className = [avatar.sizes[size] || avatar.sizes["default"], avatar.color[color] || avatar.color.primary].join(' ');
  return React.createElement("figure", {
    className: className,
    "data-initial": initial
  }, children, status && React.createElement("i", {
    className: avatar.status[status]
  }));
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

Box.propTypes = {
  border: PropTypes.number,
  width: PropTypes.array,
  height: PropTypes.array,
  children: PropTypes.node.isRequired
};
Box.style = {
  margin: 10,
  padding: 10,
  whiteSpace: 'normal'
};
function Box(_ref) {
  var _ref$border = _ref.border,
      border = _ref$border === void 0 ? null : _ref$border,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      children = _ref.children;

  var style = _objectSpread2({}, Box.style);

  if (border !== null) {
    style.border = "".concat(border, "px solid ").concat(color.darker);
    style.borderRadius = 5;
  }

  if (width !== null) {
    var _width = _slicedToArray(width, 3),
        min = _width[0],
        max = _width[1],
        overflow = _width[2];

    style.minWidth = min;
    style.maxWidth = max;
    style.overflowX = overflow;
  }

  if (height !== null) {
    var _height = _slicedToArray(height, 3),
        _min = _height[0],
        _max = _height[1],
        _overflow = _height[2];

    style.minHeight = _min;
    style.maxHeight = _max;
    style.overflowY = _overflow;
  }

  return React.createElement("div", {
    style: style
  }, children);
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(button.types)),
  size: PropTypes.oneOf(Object.keys(button.sizes)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  "float": PropTypes.oneOf(Object.keys(button["float"])),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};
Button.style = {
  boxSizing: 'border-box'
};
function Button(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$float = props["float"],
      _float = _props$float === void 0 ? 'none' : _props$float,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["type", "size", "disabled", "loading", "float", "onClick", "children", "className"]);

  var classes = [className, button.types[type], button.sizes[size], disabled && 'disabled', loading && 'loading', button["float"][_float]].filter(function (c) {
    return !!c;
  }).join(' ');
  return React.createElement("button", _extends({
    style: Button.style,
    className: classes,
    onClick: onClick
  }, rest), children);
}

Card.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    effect: PropTypes.func.isRequired,
    type: PropTypes.oneOf(Object.keys(button.types))
  })),
  children: PropTypes.node
};

var key = function key(i) {
  return "".concat(i * new Date().getTime());
};

function Card(_ref) {
  var _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      title = _ref.title,
      subtitle = _ref.subtitle,
      className = _ref.className,
      children = _ref.children,
      expandable = _ref.expandable;
  var cardClass = className ? "".concat(className, " card") : 'card';

  if (expandable) {
    return React.createElement("div", {
      className: cardClass
    }, React.createElement("details", {
      className: "accordion"
    }, React.createElement("summary", {
      className: "accordion-header"
    }, React.createElement("div", {
      className: "card-header"
    }, React.createElement("div", {
      className: "btn-group float-right"
    }, !!actions.length && actions.map(function (action, i) {
      return React.createElement(Button, {
        key: key(i),
        type: action.type || 'default',
        onClick: action.effect
      }, action.title);
    })), React.createElement("div", {
      className: "card-title h5"
    }, React.createElement("strong", {
      className: "tooltip",
      "data-tooltip": "Expand"
    }, React.createElement("i", {
      className: "icon icon-arrow-right mr-1"
    })), title), subtitle && React.createElement("div", {
      className: "card-subtitle text-gray"
    }, subtitle))), React.createElement("div", {
      className: "card-body"
    }, children)));
  }

  return React.createElement("div", {
    className: cardClass
  }, React.createElement("div", {
    className: "card-header"
  }, !!actions.length && React.createElement("div", {
    className: "btn-group float-right"
  }, actions.map(function (action, i) {
    return React.createElement(Button, {
      key: key(i),
      type: action.type || 'default',
      onClick: action.effect
    }, action.title);
  })), React.createElement("div", {
    className: "card-title h5"
  }, title), subtitle && React.createElement("div", {
    className: "card-subtitle text-gray"
  }, subtitle)), React.createElement("div", {
    className: "card-body"
  }, children));
}

Chip.propTypes = {
  avatar: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.func
};
function Chip(_ref) {
  var color = _ref.color,
      avatar = _ref.avatar,
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? '' : _ref$initial,
      children = _ref.children,
      close = _ref.close;
  return React.createElement("span", {
    className: "chip"
  }, React.createElement(Avatar, {
    color: color,
    size: "small",
    initial: initial
  }, avatar), children, close && React.createElement(Button, {
    type: "clear",
    "float": "right",
    onClick: close
  }));
}

var options = divider.type;
var optionKeys = Object.keys(options);
Divider.propTypes = {
  type: PropTypes.oneOf(optionKeys),
  name: PropTypes.string
};
function Divider(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? optionKeys[0] : _ref$type,
      name = _ref.name;
  return name ? React.createElement("div", {
    className: "".concat(options[type], " text-center"),
    "data-content": name
  }) : React.createElement("div", {
    className: options[type]
  });
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};
function Icon(_ref) {
  var name = _ref.name,
      description = _ref.description;
  return description ? React.createElement("i", {
    className: "fas fa-".concat(name, " tooltip mx-2"),
    "data-tooltip": description
  }) : React.createElement("i", {
    className: "fas fa-".concat(name, " mx-2")
  });
}

Empty.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  action: PropTypes.node
};
function Empty(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      subtitle = _ref.subtitle,
      action = _ref.action;
  return React.createElement("div", {
    className: "empty"
  }, React.createElement("div", {
    className: "empty-icon h1"
  }, React.createElement(Icon, {
    name: icon
  })), React.createElement("p", {
    className: "empty-title h5"
  }, title), subtitle && React.createElement("p", {
    className: "empty-subtitle"
  }, subtitle), action && React.createElement("div", {
    className: "empty-action"
  }, action));
}

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

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module) {
module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e});},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=13)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r);},function(t,n){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,n){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r);},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,n){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)};},function(t,n,r){var e=r(32)("wks"),o=r(9),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e;},function(t,n,r){var e=r(0),o=r(2),i=r(8),u=r(22),c=r(10),f=function(t,n,r){var a,s,p,l,v=t&f.F,y=t&f.G,h=t&f.S,d=t&f.P,x=t&f.B,g=y?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});y&&(r=n);for(a in r)s=!v&&g&&void 0!==g[a],p=(s?g:r)[a],l=x&&s?c(p,e):d&&"function"==typeof p?c(Function.call,p):p,g&&u(g,a,p,t&f.U),m[a]!=p&&i(m,a,l),d&&b[a]!=p&&(b[a]=p);};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f;},function(t,n,r){var e=r(16),o=r(21);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t};},function(t,n){var r=0,e=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))};},function(t,n,r){var e=r(24);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}};},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,n,r){var e=r(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0};},function(t,n,r){n.__esModule=!0,n.default=function(t,n){if(t&&n){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return r.some(function(t){var n=t.trim();return "."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n})}return !0},r(14),r(34);},function(t,n,r){r(15),t.exports=r(2).Array.some;},function(t,n,r){var e=r(7),o=r(25)(3);e(e.P+e.F*!r(33)([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}});},function(t,n,r){var e=r(17),o=r(18),i=r(20),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return "value"in r&&(t[n]=r.value),t};},function(t,n,r){var e=r(1);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t};},function(t,n,r){t.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a});},function(t,n,r){var e=r(1),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}};},function(t,n,r){var e=r(1);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},function(t,n){t.exports=function(t,n){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}};},function(t,n,r){var e=r(0),o=r(8),i=r(23),u=r(9)("src"),c=Function.toString,f=(""+c).split("toString");r(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[u]||c.call(this)});},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)};},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,n,r){var e=r(10),o=r(26),i=r(27),u=r(12),c=r(29);t.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p,v=n||c;return function(n,c,y){for(var h,d,x=i(n),g=o(x),m=e(c,y,3),b=u(g.length),_=0,w=r?v(n,b):f?v(n,0):void 0;b>_;_++)if((l||_ in g)&&(h=g[_],d=m(h,_,x),t))if(r)w[_]=d;else if(d)switch(t){case 3:return !0;case 5:return h;case 6:return _;case 2:w.push(h);}else if(s)return !1;return p?-1:a||s?s:w}};},function(t,n,r){var e=r(5);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==e(t)?t.split(""):Object(t)};},function(t,n,r){var e=r(11);t.exports=function(t){return Object(e(t))};},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)};},function(t,n,r){var e=r(30);t.exports=function(t,n){return new(e(t))(n)};},function(t,n,r){var e=r(1),o=r(31),i=r(6)("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n};},function(t,n,r){var e=r(5);t.exports=Array.isArray||function(t){return "Array"==e(t)};},function(t,n,r){var e=r(0),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})};},function(t,n,r){var e=r(4);t.exports=function(t,n){return !!t&&e(function(){n?t.call(null,function(){},1):t.call(null);})};},function(t,n,r){r(35),t.exports=r(2).String.endsWith;},function(t,n,r){var e=r(7),o=r(12),i=r(36),u="".endsWith;e(e.P+e.F*r(38)("endsWith"),"String",{endsWith:function(t){var n=i(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=o(n.length),c=void 0===r?e:Math.min(o(r),e),f=String(t);return u?u.call(n,f,c):n.slice(c-f.length,c)===f}});},function(t,n,r){var e=r(37),o=r(11);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))};},function(t,n,r){var e=r(1),o=r(5),i=r(6)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))};},function(t,n,r){var e=r(6)("match");t.exports=function(t){var n=/./;try{"/./"[t](n);}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return !0};}]);
});

var accepts = unwrapExports(dist);

// that MIME type will always be accepted

function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || accepts(file, accept);
}
function fileMatchSize(file, maxSize, minSize) {
  return file.size <= maxSize && file.size >= minSize;
}
function allFilesAccepted(files, accept) {
  return files.every(function (file) {
    return fileAccepted(file, accept);
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$1(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties$1(_ref, ["children"]);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties$1(_useDropzone, ["open"]);

  useEffect(function () {
    if (typeof ref === 'function') {
      ref({
        open: open
      });
    } else if (_typeof(ref) === 'object' && ref !== null) {
      ref.current = {
        open: open
      };
    }

    return function () {
      if (typeof ref === 'function') {
        ref(null);
      } else if (_typeof(ref) === 'object' && ref !== null) {
        ref.current = null;
      }
    };
  }, [ref]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return React.createElement(Fragment, null, children(_objectSpread({}, props, {
    open: open
  })));
});
Dropzone.displayName = 'Dropzone';
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {File[]} params.rejectedFiles Rejected files
   */
  children: PropTypes.func,

  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are droppped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {File[]} rejectedFiles
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {object[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func
};
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {File[]} rejectedFiles List of rejected files
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state and some helper functions.
 *
 * @typedef {object} DropzoneState
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} draggedFiles Files in active drag
 * @property {File[]} acceptedFiles Accepted files
 * @property {File[]} rejectedFiles Rejected files
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  rejectedFiles: []
  /**
   * A React hook that creates a drag 'n' drop area.
   *
   * ```jsx
   * function MyDropzone(props) {
   *   const {getRootProps, getInputProps} = useDropzone({
   *     onDrop: acceptedFiles => {
   *       // do something with the File objects, e.g. upload to some server
   *     }
   *   });
   *   return (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag and drop some files here, or click to select files</p>
   *     </div>
   *   )
   * }
   * ```
   *
   * @function useDropzone
   *
   * @param {object} props
   * @param {string|string[]} [props.accept] Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
   * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
   * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
   * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
   * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
   * @param {number} [props.minSize=0] Minimum file size (in bytes)
   * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
   * @param {boolean} [props.disabled=false] Enable/disable the dropzone
   * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
   * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
   * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
   * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
   * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
   * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are droppped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   * @param {dropAcceptedCb} [props.onDropAccepted]
   * @param {dropRejectedCb} [props.onDropRejected]
   *
   * @returns {DropzoneState}
   */

};
function useDropzone() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      accept = _ref2.accept,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
      getFilesFromEvent = _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
      _ref2$maxSize = _ref2.maxSize,
      maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
      _ref2$minSize = _ref2.minSize,
      minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
      onDragEnter = _ref2.onDragEnter,
      onDragLeave = _ref2.onDragLeave,
      onDragOver = _ref2.onDragOver,
      onDrop = _ref2.onDrop,
      onDropAccepted = _ref2.onDropAccepted,
      onDropRejected = _ref2.onDropRejected,
      onFileDialogCancel = _ref2.onFileDialogCancel,
      _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
      preventDropOnDocument = _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
      _ref2$noClick = _ref2.noClick,
      noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
      _ref2$noKeyboard = _ref2.noKeyboard,
      noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
      _ref2$noDrag = _ref2.noDrag,
      noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
      _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
      noDragEventsBubbling = _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

  var rootRef = useRef(null);
  var inputRef = useRef(null);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray$1(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

  var openFileDialog = function openFileDialog() {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      });
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }; // Update file dialog active state when the window is focused on


  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  useEffect(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = useCallback(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = useCallback(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = useCallback(function () {
    dispatch({
      type: 'blur'
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = useCallback(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick]);

  var _useState = useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      dragTargets = _useState2[0],
      setDragTargets = _useState2[1];

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    setDragTargets([]);
  };

  useEffect(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event); // Count the dropzone and any children that are entered.

    if (dragTargets.indexOf(event.target) === -1) {
      setDragTargets([].concat(_toConsumableArray(dragTargets), [event.target]));
    }

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        dispatch({
          draggedFiles: draggedFiles,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [dragTargets, getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (isEvtWithFiles(event) && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = _toConsumableArray(dragTargets.filter(function (target) {
      return target !== event.target && rootRef.current && rootRef.current.contains(target);
    }));

    setDragTargets(targets);

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, dragTargets, onDragLeave, noDragEventsBubbling]);
  var onDropCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    setDragTargets([]);
    dispatch({
      type: 'reset'
    });

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var rejectedFiles = [];
        files.forEach(function (file) {
          if (fileAccepted(file, accept) && fileMatchSize(file, maxSize, minSize)) {
            acceptedFiles.push(file);
          } else {
            rejectedFiles.push(file);
          }
        });

        if (!multiple && acceptedFiles.length > 1) {
          rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0))); // Reject everything and empty accepted files
        }

        dispatch({
          acceptedFiles: acceptedFiles,
          rejectedFiles: rejectedFiles,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(acceptedFiles, rejectedFiles, event);
        }

        if (rejectedFiles.length > 0 && onDropRejected) {
          onDropRejected(rejectedFiles, event);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(acceptedFiles, event);
        }
      });
    }
  }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          onKeyDown = _ref3.onKeyDown,
          onFocus = _ref3.onFocus,
          onBlur = _ref3.onBlur,
          onClick = _ref3.onClick,
          onDragEnter = _ref3.onDragEnter,
          onDragOver = _ref3.onDragOver,
          onDragLeave = _ref3.onDragLeave,
          onDrop = _ref3.onDrop,
          rest = _objectWithoutProperties$1(_ref3, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

      return _objectSpread(_defineProperty$1({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
      }, refKey, rootRef), rootRef.current && rootRef.current.tagName === 'LABEL' ? {
        htmlFor: 'noop'
      } : {}, !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}, rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function () {
    return function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
          onChange = _ref4.onChange,
          onClick = _ref4.onClick,
          disabled = _ref4.disabled,
          rest = _objectWithoutProperties$1(_ref4, ["refKey", "onChange", "onClick", "disabled"]);

      var inputProps = _defineProperty$1({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1,
        disabled: disabled !== undefined ? disabled : noClick
      }, refKey, inputRef);

      return _objectSpread({}, inputProps, rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled, noClick]);
  var fileCount = draggedFiles.length;
  var isMultipleAllowed = multiple || fileCount <= 1;
  var isDragAccept = fileCount > 0 && allFilesAccepted(draggedFiles, accept);
  var isDragReject = fileCount > 0 && (!isDragAccept || !isMultipleAllowed);
  return _objectSpread({}, state, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case 'focus':
      return _objectSpread({}, state, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread({}, state, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread({}, state, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread({}, state, {
        acceptedFiles: action.acceptedFiles,
        rejectedFiles: action.rejectedFiles
      });

    case 'reset':
      return _objectSpread({}, state, {
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: []
      });

    default:
      return state;
  }
}

var simplify = function simplify(format, onChange) {
  return function (_ref) {
    var target = _ref.target;
    var value = format ? format(target.value) : target.value;
    onChange && onChange(value);
  };
};

var containerPropTypes = {
  children: PropTypes.node.isRequired
};

function preventSubmit(e) {
  e.preventDefault();
  return false;
}

Form.propTypes = containerPropTypes;
function Form(_ref2) {
  var children = _ref2.children;
  return React.createElement("form", {
    onSubmit: preventSubmit
  }, children);
}
Form.FieldSet = FieldSet;
FieldSet.propTypes = containerPropTypes;

function FieldSet(_ref3) {
  var children = _ref3.children;
  return React.createElement("fieldset", null, children);
}

Form.Footer = Footer;
Footer.propTypes = containerPropTypes;

function Footer(_ref4) {
  var children = _ref4.children;
  return React.createElement("div", {
    className: "text-center"
  }, children);
}

Form.Group = Group;
Group.propTypes = containerPropTypes;

function Group(_ref5) {
  var children = _ref5.children;
  return React.createElement("div", {
    className: "form-group"
  }, children);
}

Form.Inputs = Inputs;
Inputs.propTypes = containerPropTypes;

function Inputs(_ref6) {
  var children = _ref6.children;
  return React.createElement("div", {
    className: "input-group"
  }, children);
}

Form.Input = Input;
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.func
};

function Input(_ref7) {
  var format = _ref7.format,
      onChange = _ref7.onChange,
      props = _objectWithoutProperties(_ref7, ["format", "onChange"]);

  return React.createElement("input", _extends({
    className: "form-input",
    onChange: simplify(format, onChange)
  }, props));
}

Form.Addon = Addon;
Addon.propTypes = {
  children: PropTypes.node.isRequired
};

function Addon(_ref8) {
  var children = _ref8.children;
  return React.createElement("span", {
    className: "input-group-addon"
  }, children);
}

Form.Select = Select;
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

function Select(_ref9) {
  var placeholder = _ref9.placeholder,
      options = _ref9.options,
      onChange = _ref9.onChange,
      multiple = _ref9.multiple,
      props = _objectWithoutProperties(_ref9, ["placeholder", "options", "onChange", "multiple"]);

  return React.createElement("select", _extends({
    className: "form-select",
    onChange: simplify(onChange),
    multiple: multiple
  }, props), placeholder && React.createElement("option", {
    key: 'option_empty',
    value: ""
  }, placeholder), options.map(function (_ref10) {
    var label = _ref10.label,
        value = _ref10.value;
    return React.createElement("option", {
      key: "option_".concat(value),
      value: value
    }, label);
  }));
}

Form.Button = Button$1;
Button$1.propTypes = _objectSpread2({}, containerPropTypes, {
  type: PropTypes.oneOf(Object.keys(button.types))
});

function Button$1(_ref11) {
  var _ref11$type = _ref11.type,
      type = _ref11$type === void 0 ? 'default' : _ref11$type,
      children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["type", "children"]);

  return React.createElement("button", _extends({
    className: "".concat(button.types[type], " input-group-btn")
  }, props), children);
}

Form.Switch = Switch;
Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  offLabel: PropTypes.string.isRequired,
  onLabel: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

function Switch(_ref12) {
  var on = _ref12.on,
      offLabel = _ref12.offLabel,
      onLabel = _ref12.onLabel,
      onSwitch = _ref12.onSwitch;
  return React.createElement("label", {
    className: "form-switch"
  }, React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: function onChange(_ref13) {
      var target = _ref13.target;
      return onSwitch({
        on: target.checked
      });
    }
  }), React.createElement("i", {
    className: "form-icon"
  }), on ? React.createElement("strong", null, onLabel) : offLabel);
}

Form.Label = Label;
Label.propTypes = containerPropTypes;

function Label(_ref14) {
  var children = _ref14.children;
  return React.createElement("label", {
    className: "form-label"
  }, children);
}

Form.FileInput = FileInput;
FileInput.styles = {
  base: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: color.darker,
    borderStyle: 'dashed',
    backgroundColor: color.lighter,
    color: color.darker,
    outline: 'none',
    transition: 'border .24s ease-in-out'
  },
  active: {
    borderColor: color.info
  },
  accept: {
    borderColor: color.success
  },
  reject: {
    borderColor: color.error
  }
};
FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

function FileInput(_ref15) {
  var placeholder = _ref15.placeholder,
      _ref15$multiple = _ref15.multiple,
      multiple = _ref15$multiple === void 0 ? false : _ref15$multiple,
      _ref15$accept = _ref15.accept,
      accept = _ref15$accept === void 0 ? null : _ref15$accept,
      onChange = _ref15.onChange;

  var _useDropzone = useDropzone({
    multiple: multiple,
    accept: accept
  }),
      acceptedFiles = _useDropzone.acceptedFiles,
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  onChange(acceptedFiles);
  var styles = FileInput.styles;
  var style = useMemo(function () {
    return _objectSpread2({}, styles.base, {}, isDragActive ? styles.active : {}, {}, isDragAccept ? styles.accept : {}, {}, isDragReject ? styles.reject : {});
  }, [isDragActive, isDragReject]);
  var content = acceptedFiles.length > 0 ? React.createElement("ul", null, acceptedFiles.map(function (file) {
    return React.createElement("li", {
      key: file.path
    }, file.path, " - ", file.size, " bytes");
  })) : React.createElement("div", null, placeholder);
  return React.createElement("section", {
    className: "container"
  }, React.createElement("div", getRootProps({
    style: style
  }), React.createElement("input", getInputProps()), content));
}

var sizes = Range({
  start: 1,
  end: 12
}).toArray();
var containerPropTypes$1 = {
  children: PropTypes.node.isRequired
};
Grid.propTypes = containerPropTypes$1;
Row.propTypes = containerPropTypes$1;
Column.propTypes = _objectSpread2({}, containerPropTypes$1, {
  size: PropTypes.oneOf(sizes)
});
function Grid(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "container"
  }, children);
}
Grid.Row = Row;

function Row(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: "columns"
  }, children);
}

Grid.Column = Column;

function Column(_ref3) {
  var size = _ref3.size,
      children = _ref3.children;
  return React.createElement("div", {
    className: "column col-".concat(size)
  }, children);
}

Layout.style = {
  header: {
    backgroundImage: "linear-gradient(to bottom right, ".concat(color.dark, ", ").concat(color.light, ")"),
    color: color.lighter,
    padding: '0 2rem'
  },
  tab: function tab(active) {
    return {
      width: '5rem',
      color: active ? color.lighter : color.darker
    };
  },
  body: {
    padding: 0
  }
};
Layout.propTypes = {
  actions: PropTypes.array.isRequired,
  navigation: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired
};
function Layout(_ref) {
  var title = _ref.title,
      navigation = _ref.navigation,
      actions = _ref.actions;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _navigation$selection = _slicedToArray(navigation[selection], 2),
      active = _navigation$selection[0],
      Body = _navigation$selection[1];

  var _title = _slicedToArray(title, 2),
      text = _title[0],
      logo = _title[1];

  useEffect(function () {
    document.title = "".concat(text.props.children, ": ").concat(active);
  });
  var nav = navigation.length === 1 ? React.createElement("span", {
    className: "navbar-brand"
  }, text) : React.createElement("ul", {
    className: "tab tab-block"
  }, navigation.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 1),
        label = _ref3[0];

    return React.createElement("li", {
      key: "navigation_".concat(label),
      className: "tab-item",
      style: Layout.style.tab(index === selection)
    }, React.createElement("a", {
      href: "#".concat(label),
      onClick: function onClick() {
        return setSelection(index);
      }
    }, label));
  }));
  return React.createElement("div", null, React.createElement("header", {
    className: "navbar",
    style: Layout.style.header
  }, React.createElement("section", {
    className: "navbar-section"
  }, React.createElement("span", {
    className: "navbar-brand"
  }, React.createElement("i", {
    className: "fab fa-".concat(logo, " h1")
  }))), React.createElement("section", {
    className: "navbar-center"
  }, nav), React.createElement("section", {
    className: "navbar-section"
  }, React.createElement("div", {
    className: "dropdown dropdown-right"
  }, React.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    tabIndex: "0"
  }, React.createElement("i", {
    className: "icon icon-menu"
  })), React.createElement("div", {
    className: "menu"
  }, actions.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        label = _ref5[0],
        onClick = _ref5[1];

    return React.createElement("li", {
      className: "menu-item bg-secondary",
      key: "action_".concat(label)
    }, React.createElement("button", {
      className: "menu-item btn btn-link btn-block",
      style: {},
      onClick: onClick
    }, label));
  }))))), React.createElement("section", {
    style: Layout.style.body
  }, React.createElement(Body, null)));
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  Item: PropTypes.func.isRequired,
  Empty: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    effect: PropTypes.func.isRequired
  })),
  info: PropTypes.node,
  single: PropTypes.bool,
  expandable: PropTypes.bool,
  horizontal: PropTypes.bool
};
function List(_ref) {
  var items = _ref.items,
      name = _ref.name,
      icon = _ref.icon,
      Item = _ref.Item,
      Empty$1 = _ref.Empty,
      actions = _ref.actions,
      info = _ref.info,
      single = _ref.single,
      expandable = _ref.expandable,
      horizontal = _ref.horizontal;

  var Container = function Container(_ref2) {
    var children = _ref2.children;
    return horizontal ? React.createElement("div", {
      style: {
        display: 'inline-block'
      }
    }, children) : React.createElement("div", null, children);
  };

  var Elements = function Elements(_ref3) {
    var Body = _ref3.Body;
    return items && items.length ? items.map(function (props, i) {
      return React.createElement(Container, {
        key: "".concat(name, "_").concat(i)
      }, React.createElement(Body, null, React.createElement(Item, _extends({
        index: i
      }, props))));
    }) : Empty$1 ? React.createElement(Empty$1, null) : React.createElement(Empty, {
      icon: icon,
      title: "No ".concat(name)
    });
  };

  var style = horizontal ? {
    overflowX: 'scroll',
    whiteSpace: 'nowrap'
  } : {};

  var ListBody = function ListBody(_ref4) {
    var children = _ref4.children;
    return React.createElement("div", {
      style: style
    }, children);
  };

  var Content = function Content(_ref5) {
    var Body = _ref5.Body;
    return React.createElement(ListBody, null, React.createElement(Elements, {
      Body: Body
    }));
  };

  var Div = function Div(_ref6) {
    var children = _ref6.children,
        props = _objectWithoutProperties(_ref6, ["children"]);

    return React.createElement("div", props, children);
  };

  var _ref7 = single ? [React.createElement(Content, {
    Body: Div
  }), null] : [null, React.createElement(Content, {
    Body: Card
  })],
      _ref8 = _slicedToArray(_ref7, 2),
      inside = _ref8[0],
      outside = _ref8[1];

  return React.createElement(React.Fragment, null, React.createElement(Card, {
    title: React.createElement("div", {
      className: "d-inline-block"
    }, React.createElement("div", {
      className: "d-inline-block",
      style: {
        width: 300
      }
    }, React.createElement(Icon, {
      name: icon,
      description: name
    }), React.createElement("span", null, name.toUpperCase(), ":")), React.createElement("div", {
      className: "d-inline-block"
    }, info)),
    actions: actions,
    expandable: expandable
  }, inside), outside);
}

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

var css = ".Loader_lds-container__3EVAY {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Loader_lds-ripple__2AfwM {\n    display: inline-block;\n    position: relative;\n    width: 128px;\n    height: 128px;\n}\n.Loader_lds-ripple__2AfwM div {\n    position: absolute;\n    border: 4px solid #283655;\n    opacity: 1;\n    border-radius: 50%;\n    animation: Loader_lds-ripple__2AfwM 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.Loader_lds-ripple__2AfwM div:nth-child(2) {\n    animation-delay: -0.5s;\n}\n@keyframes Loader_lds-ripple__2AfwM {\n    0% {\n        top: 56px;\n        left: 56px;\n        width: 0;\n        height: 0;\n        opacity: 1;\n    }\n    100% {\n        top: -1px;\n        left: -1px;\n        width: 116px;\n        height: 116px;\n        opacity: 0;\n    }\n}\n";
styleInject(css);

function Loader() {
  return React.createElement("div", {
    className: "lds-container"
  }, React.createElement("div", {
    className: "lds-ripple"
  }, React.createElement("div", null), React.createElement("div", null)));
}
function PageLoader() {
  useEffect(function () {
    var styles = [['display', 'flex'], ['alignItems', 'center'], ['justifyContent', 'center']];
    styles.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      document.body.style[key] = value;
    });
    return function () {
      var styles = [['display', 'initial'], ['alignItems', 'initial'], ['justifyContent', 'initial']];
      styles.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        document.body.style[key] = value;
      });
    };
  });
  return React.createElement(Loader, null);
}

Message.propTypes = {
  type: PropTypes.oneOf(Object.keys(message.types)),
  round: PropTypes.bool,
  children: PropTypes.node.isRequired
};
function Message(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      _ref$round = _ref.round,
      round = _ref$round === void 0 ? false : _ref$round,
      children = _ref.children;
  var classNames = [message.types[type], round && message.round].filter(function (c) {
    return !!c;
  }).join(' ');
  return React.createElement("label", {
    className: classNames
  }, children);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(modal.sizes))
};
Modal.style = {
  backgroundColor: 'rgba(0, 0, 0, .3)'
};
function Modal(_ref) {
  var title = _ref.title,
      close = _ref.close,
      children = _ref.children,
      footer = _ref.footer,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size;
  return React.createElement("div", {
    className: "".concat(modal.sizes[size], " active"),
    style: Modal.style
  }, React.createElement("div", {
    className: "modal-container"
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement(Button, {
    type: "clear",
    "float": "right",
    onClick: close
  }), React.createElement("div", {
    className: "modal-title h5"
  }, title)), React.createElement("div", {
    className: "modal-body"
  }, React.createElement("div", {
    className: "content"
  }, children)), footer && React.createElement("div", {
    className: "modal-footer"
  }, footer)));
}

Notification.prototype = {
  type: PropTypes.oneOf(Object.keys(notification.types)),
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
function Notification(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      close = _ref.close,
      children = _ref.children;
  return React.createElement("div", {
    className: notification.types[type]
  }, React.createElement("button", {
    className: "btn btn-clear float-right",
    onClick: close
  }), children);
}

Popover.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired
};
function Popover(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'bottom' : _ref$type,
      children = _ref.children,
      details = _ref.details;
  return React.createElement("div", {
    className: popover.types[type]
  }, children, React.createElement("div", {
    className: "popover-container"
  }, details));
}

Space.propTypes = {
  size: PropTypes.number
};
function Space(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size;
  return React.createElement("div", {
    className: "d-inline-block mx-".concat(size)
  });
}

Tile.propTypes = {
  avatar: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  actions: PropTypes.node
};
function Tile(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      subtitle = _ref.subtitle,
      actions = _ref.actions;
  return React.createElement("div", {
    className: "tile"
  }, avatar && React.createElement("div", {
    className: "tile-icon"
  }, avatar), React.createElement("div", {
    className: "tile-content"
  }, React.createElement("div", {
    className: "tile-title"
  }, title), React.createElement("div", {
    className: "tile-subtitle"
  }, subtitle)), actions && React.createElement("div", {
    className: "tile-action"
  }, actions));
}

Welcome.propTypes = {
  error: PropTypes.instanceOf(Error),
  login: PropTypes.func.isRequired
};
Welcome.style = {
  margin: '5rem'
};
function Welcome(_ref) {
  var login = _ref.login;
  return React.createElement("div", {
    style: Welcome.style
  }, React.createElement(Empty, {
    icon: "user-astronaut",
    title: "Administration access only",
    subtitle: "You need to log in as an administrator",
    action: React.createElement(Button, {
      type: "primary",
      onClick: login
    }, "Login")
  }));
}

export { Accordion, Avatar, Box, Button, Card, Chip, Divider, Empty, Form, Grid, Icon, Layout, List, Loader, Message, Modal, Notification, PageLoader, Popover, Space, Tile, Welcome };
//# sourceMappingURL=index.esm.js.map
