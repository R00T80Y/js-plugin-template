/* eslint-disable no-console */
import PluginName from './PluginName.plugin';

// Create three headers
for (let i = 0; i < 3; i += 1) {
  // Create header <h2>
  const $h2 = document.createElement('h2');
  // Add text for header
  $h2.innerText = `Tag <h2> ${i}`;
  // Add a heading to the document
  document.body.appendChild($h2);
}

// Init Plugin
const pluginInstances = new PluginName('h2');

// Get Plugin Options
console.log(pluginInstances[0].options);

// Call Destroy Method for first <h2>
pluginInstances[0].destroy();
