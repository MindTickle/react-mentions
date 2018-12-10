var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { defaultStyle } from 'substyle';

var styled = defaultStyle({
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
  return React.createElement(
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
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,

  renderSuggestion: PropTypes.func,

  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),

  isLoading: PropTypes.bool
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

export default Mention;