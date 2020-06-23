module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    "test": {
      "presets": [["@babel/env", { "targets": { "node": "current" } }]]
    }
  }
};
