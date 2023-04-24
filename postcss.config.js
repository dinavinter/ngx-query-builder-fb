module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-url')([
            {filter: 'src/**/*', url: 'inline'},
            {filter: '**/content/Base/baseLib/**/*', url: ({url}) => `https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/${
                    url.replace(/^.*\/content\/Base\/baseLib\//, '')
                }`}
        ])
    ]
}

