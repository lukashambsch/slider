import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

var Handle = function (_React$Component) {
  _inherits(Handle, _React$Component);

  function Handle() {
    _classCallCheck(this, Handle);

    return _possibleConstructorReturn(this, (Handle.__proto__ || Object.getPrototypeOf(Handle)).apply(this, arguments));
  }

  _createClass(Handle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          restProps = _objectWithoutProperties(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value']);

      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = _extends({}, style, postionStyle);
      var ariaProps = {};
      if (value !== undefined) {
        ariaProps = _extends({}, ariaProps, {
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-disabled': !!disabled
        });
      }
      return React.createElement('div', _extends({
        role: 'slider',
        tabIndex: '0'
      }, ariaProps, restProps, {
        className: className,
        style: elStyle
      }));
    }
  }]);

  return Handle;
}(React.Component);

export default Handle;


Handle.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};