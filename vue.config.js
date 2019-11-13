module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .options({
                    svgo: {
                        plugins: [{ removeDimensions: true }, { removeViewBox: false }]
                    }
                })
    },
    pwa: {
        themeColor: "#2e2e33"
    }
};