/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file JavaScript Plugin Template
 * @since 04-02-2022
 * @updated 24-02-2022
 * @version 0.2.0
 */

import Utils from './utils.js';

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
  Utils.isFunction(pluginOptions.init) && pluginOptions.init();

  // Public method for destroying a plugin
  function destroy() {
    // Remove events
    // Remove created tags
    // Hook destroy
    Utils.isFunction(pluginOptions.destroy) && pluginOptions.destroy();
    return true;
  }

  return {
    // Public methods
    get options() { return pluginOptions; },
    destroy,
  }
}

function PluginName(element, customOptions) {
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

export { PluginName };
