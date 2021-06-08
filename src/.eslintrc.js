module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'
        ]
      }
    ], // Support for JSX in JS ( in index.js )
    'no-param-reassign': 0, // Changed the parameter directly
    'max-len': 0, // Max Line Length
    'no-plusplus': ['error',
      {
        allowForLoopAfterthoughts: true
      }
    ], // Allow i++ in loops
    'brace-style': ['error', 'stroustrup',
      {
        allowSingleLine: true
      }
    ], // Allow if/else in single line
    'jsx-a11y/no-onchange': 0, // Allow onChange (instead of onBlur)
    'no-nested-ternary': 0, // Allow nested ternary
    'import/no-extraneous-dependencies': ['error',
      {
        devDependencies: ['** /*.test.js', '**/*.spec.js', '** /*.test.jsx', '**/*setupTests.js'
        ]
      }
    ], // For JEST/Enzyme
    'no-underscore-dangle': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/static-property-placement': [
      'error',
      'static public field',
    ],
    'prefer-object-spread': 0,
    'no-console': [
      "error",
      {
        allow: [
          "info"
        ]
      }
    ]
  },
};
