module.exports = {
    env: {
        node: true
    },
    parserOptions: {
        // Required for certain syntax usages
        ecmaVersion: 2020
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'airbnb-base',
        'plugin:vue/vue3-strongly-recommended'
    ],
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'max-len': ['off', {
            code: 100,
            ignoreUrls: true
        }]
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ]
            }
        }
    }
};
