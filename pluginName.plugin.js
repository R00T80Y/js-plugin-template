/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file JavaScript Plugin Template
 * @since 04-02-2022
 * @updated 09-02-2022
 * @version 0.1.0
 */

import './utils.js';

const defaultOptions = {
  // Plugin options here...

  // Plugin Hooks
  init: false,
  destroy: false,
};

function Plugin($rootElement, pluginOptions) {

  // Private variables
  let $root = $rootElement;

  // Plugin code here...

  // Hook init
  Utils.type(pluginOptions.init) === 'function' && pluginOptions.init();

  // Public method for destroying a plugin
  function destroy() {
    // Remove events
    // Remove created tags
    // Hook destroy
    Utils.type(pluginOptions.destroy) === 'function' && pluginOptions.destroy();
    return true;
  }

  return {
    // Public methods
    get pluginOptions() { return pluginOptions; },
    destroy,
  }
}

export default function PluginName(element, customOptions) {
  const nodeList = [];
  const instances = [];

  return (function init() {
    if (element && element instanceof HTMLElement) {
      nodeList.push(element);
    } else if (element && typeof element === 'string') {
      const elementsList = document.querySelectorAll(element);
      for (let i = 0, l = elementsList.length; i < l; ++i) {
        if (elementsList[i] instanceof HTMLElement) {
          nodeList.push(elementsList[i]);
        }
      }
    } else if (element && element.length) {
      for (let i = 0, l = element.length; i < l; ++i) {
        if (element[i] instanceof HTMLElement) {
          nodeList.push(element[i]);
        }
      }
    }

    for (let i = 0, l = nodeList.length; i < l; ++i) {
      instances.push(Plugin(nodeList[i], Object.assign({}, defaultOptions, customOptions, {
        name: 'PluginName'
      })));
    }

    return instances;
  }());
}
