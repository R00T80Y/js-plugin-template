# How to use?
```
import PluginName from './PluginName.plugin';
```

## Calling the plug-in
```
const pluginInstance = new PluginName(document.getElementById('id'), {
  // Plugin options here
});
```
```
PluginName(document.querySelectorAll('.selector'), {
  // Plugin options here
});
```

Selector (#id, .class, h2:first-child)
```
PluginName(document.querySelectorAll('.class'), {
  // Plugin options here
});
```

## Examples
### Example: adding a mouse click event
```
function Plugin($rootElement, pluginOptions) {
  // ...
  // Plugin code here...
  function onPluginClick(event) {
    const $target = event.target;

    // Process an event for a specific tag
    const tagName = $target.tagName;

    switch (tagName) {
      case 'button':
        event.preventDefault() && event.stopPropagation();
        console.log('Event button press', event);
        break;
      default:
        console.log('Unprocessed mouse click event', event);
        break;
    }
  }

  $rootElement.addEventListener('click', onPluginClick);
  // ...
}
```
```
destroy() {
  // ...
  // Delete created tags and events
  $rootElement.removeEventListener('click', onPluginClick);
  // ...
}
```

## Version 0.3.0
- Added [Rollup.js](https://rollupjs.org/guide/en/)
- Added [ESLint](https://eslint.org/)

## Version 0.2.0
If only one element is found by the selector
Renamed method to retrieve settings: pluginOptions -> options
```
const pluginItem = PluginName(document.getElementById('id'));
// Old: pluginItem[0].pluginOptions
console.log(pluginItem[0].options);
```
Example: Added method Utils.isFunction()
```
console.log(Utils.isFunction(Element.prototype.closest))
```
