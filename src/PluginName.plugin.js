/* eslint-disable import/prefer-default-export */
/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file JavaScript Plugin Template
 * @since 04-02-2022
 * @updated 25-02-2022
 * @version 0.3.2
 */

import Utils from './utils';

const defaultOptions = {
  // Plugin options here...

  // Plugin Hooks
  init: false,
  destroy: false
};

function Plugin($rootElement, pluginOptions) {
  // Plugin methods...

  // Plugin init...
  if (Utils.isFunction(pluginOptions.init)) {
    pluginOptions.init();
  }

  // Plugin code here...

  // Plugin interface
  return {
    // Public attributes
    get options() {
      return pluginOptions;
    },

    // Public method for destroying a plugin
    destroy() {
      if (Utils.isFunction(pluginOptions.destroy)) {
        pluginOptions.destroy();
      }

      // Delete created tags and events

      return true;
    }
  };
}

function PluginName(element, customOptions) {
  const nodeList = [];
  const instances = [];

  return (function init() {
    if (element && element instanceof HTMLElement) {
      nodeList.push(element);
    } else if (element && typeof element === 'string') {
      const elementsList = document.querySelectorAll(element);
      for (let i = 0, l = elementsList.length; i < l; i += 1) {
        if (elementsList[i] instanceof HTMLElement) {
          nodeList.push(elementsList[i]);
        }
      }
    } else if (element && element.length) {
      for (let i = 0, l = element.length; i < l; i += 1) {
        if (element[i] instanceof HTMLElement) {
          nodeList.push(element[i]);
        }
      }
    }

    for (let i = 0, l = nodeList.length; i < l; i += 1) {
      instances.push(
        new Plugin(
          nodeList[i],
          {
            ...defaultOptions,
            ...customOptions,
            name: 'PluginName'
          }
        )
      );
    }

    return instances;
  }());
}

export { PluginName };
