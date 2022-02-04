/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @file
 * @since 04-02-2022
 * @updated 04-02-2022
 * @version 0.0.1
 */

const defaultOptions = {
  // Plugin options here
};

function Plugin($element, pluginOptions) {

  // Private variables
  let $root = $element;

  init();

  // Plugin code here

  function init() {
    // Plugin init code here
  }

  // Public method for destroying a plugin
  function destroy() {
    // Remove events
    // Remove created tags
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
