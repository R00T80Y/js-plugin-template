/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file Utils used in plugin
 * @since 09-02-2022
 * @updated 09-02-2022
 */

const Utils = {
  // Data Type
  type(data) {
    return Object.prototype.toString.call(data).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
  }
}

export default Utils;
