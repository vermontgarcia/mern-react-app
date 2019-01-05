const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

  config = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
      config,
  );
  config = rewireLess.withLoaderOptions({

    modifyVars: {
      "@primary-color":        "#CDDC39",
      "@link-color":           "#CDDC39",                     
      "@success-color":        "#52c41a",                     
      "@warning-color":        "#faad14",                     
      "@error-color":          "#f5222d",                     
      "@font-size-base":       "14px",                        
      "@heading-color":        "rgba(0, 0, 0, .85)",          
      "@text-color":           "rgba(0, 0, 0, .65)",          
      "@text-color-secondary": "rgba(0, 0, 0, .45)",          
      "@disabled-color":       "rgba(0, 0, 0, .25)",          
      "@border-radius-base":   "4px",                         
      "@border-color-base":    "#BDBDBD",                     
      "@box-shadow-base":      "0 2px 8px rgba(0, 0, 0, .15)"

    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};