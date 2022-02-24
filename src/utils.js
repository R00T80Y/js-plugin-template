/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file Utils used in plugin
 * @since 09-02-2022
 * @updated 14-02-2022
 * @version 0.2.1
 */

const Utils = {
  // Data Type
  type(data) {
    return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
  },

  isFunction(func) {
    return (Utils.type(func) === 'function');
  }
};

export default Utils;
