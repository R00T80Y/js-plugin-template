# How to use?
```
import PluginName from 'pluginName.plugin.js';
```

## Init
```
PluginName(document.getElementById('id'), {
  // Plugin options here
});
```

```
PluginName(document.querySelectorAll('.selector'), {
  // Plugin options here
});
```

## Examples
- [Event: Mouse Click](https://github.com/R00T80Y/js-plugin-template/blob/example-events/pluginName.plugin.js)

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
