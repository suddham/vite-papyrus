module.exports = {
    globals: {
        Vue: true,
        axios: true
    },
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
        }],
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                vue: 'never',
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ]
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
