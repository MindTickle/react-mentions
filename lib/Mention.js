'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _substyle = require('substyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styled = (0, _substyle.defaultStyle)({
  fontWeight: 'inherit',
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#fff',
  color: "#000",
  padding: '0 2px'
});

var Mention = styled(function (_ref) {
  var display = _ref.display,
      style = _ref.style,
      type = _ref.type,
      id = _ref.id,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'strong',
    _extends({}, style, { onClick: function onClick() {
        _onClick({ display: display, id: id, type: type });
      } }),
    display
  );
});

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onClick: _propTypes2.default.func,

  renderSuggestion: _propTypes2.default.func,

  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(RegExp)]),

  isLoading: _propTypes2.default.bool
};

Mention.defaultProps = {
  trigger: '@',

  onAdd: function onAdd() {
    return null;
  },
  onRemove: function onRemove() {
    return null;
  },
  onClick: function onClick() {
    return null;
  },
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false
};

exports.default = Mention;
module.exports = exports['default'];