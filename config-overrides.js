const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

  config = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
      config,
  );
  config = rewireLess.withLoaderOptions({

    modifyVars: {
      "@primary-color":        "#AFB42B",
      "@link-color":           "#CDDC39",                     // link color
      "@success-color":        "#52c41a",                     // success state color
      "@warning-color":        "#faad14",                     // warning state color
      "@error-color":          "#f5222d",                     // error state color
      "@font-size-base":       "14px",                        // major text font size
      "@heading-color":        "rgba(0, 0, 0, .85)",          // heading text color
      "@text-color":           "rgba(0, 0, 0, .65)",          // major text color
      "@text-color-secondary": "rgba(0, 0, 0, .45)",          // secondary text color
      "@disabled-color":       "rgba(0, 0, 0, .25)",          // disable state color
      "@border-radius-base":   "4px",                         // major border radius
      "@border-color-base":    "#BDBDBD",                     // major border color
      "@box-shadow-base":      "0 2px 8px rgba(0, 0, 0, .15)" // major shadow for layers

      //"@darkPrimaryColor":   "#AFB42B",
      //"@primaryColor":       "#CDDC39",
      //"@lightPrimaryColor":  "#F0F4C3",
      //"@textPrimaryColor":   "#212121",
      //"@accentColor":        "#FF4081",
      //"@primaryTextColor":   "#212121",
      //"@secondaryTextColor": "#757575",
      //"@dividerColor":       "#BDBDBD",
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};