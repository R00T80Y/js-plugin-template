/**
 * @author r00t80y<https://github.com/R00T80Y>
 * @since 10.02.2022
 * @modify 10-02-2022
 * @version 0.1.0
 */

const path = require('path');

export default {
  // Source files
  source: path.resolve(__dirname, '../src'),

  // Build files
  build: path.resolve(__dirname, '../build'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public')
};
