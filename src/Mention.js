import React from 'react'
import PropTypes from 'prop-types'
import { defaultStyle } from 'substyle'

const styled = defaultStyle({
  fontWeight: 'inherit',
  position: 'relative',
  zIndex:1,
  backgroundColor: '#fff',
  color: "#000",
  padding: '0 2px'
})

const Mention = styled(({ display, style, type,id, onClick }) => (
  <strong {...style} onClick={()=>{
    onClick({display, id, type})
  }}>{display}</strong>
))

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

  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]),

  isLoading: PropTypes.bool,
}

Mention.defaultProps = {
  trigger: '@',

  onAdd: () => null,
  onRemove: () => null,
  onClick: () => null,
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false,
}

export default Mention
