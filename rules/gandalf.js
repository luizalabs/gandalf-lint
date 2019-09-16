module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 0,
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-location': ['error', 'property'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['off', 1],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-div-regex': 'off',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-native-reassign': 'off',
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: false,
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
    'no-unused-labels': 'error',
    'no-use-before-define': ['error', {
      'functions': true,
      'classes': true,
      'variables': true
    }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'require-await': 'off',
    'vars-on-top': 'error',
    yoda: 'error',
    'prefer-destructuring': [
      'error',
      {
        'VariableDeclarator': {
          'array': false,
          'object': true,
        },
        'AssignmentExpression': {
          'array': true,
          'object': true,
        },
      }, {
        'enforceForRenamedProperties': false,
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'prefer-template': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'expression',
      { 'allowArrowFunctions': true }
    ],
    'wrap-iife': [
      'error',
      'any',
      {
        'functionPrototypeMethods': true
      }
    ],
    'prefer-rest-params': 'error',
    'no-new-func': 'error',
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'function-paren-newline': [
      'error',
      'consistent'
    ],
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': true
    }],
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-iterator': 'error',
    'no-restricted-syntax': 'error',
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'dot-notation': 'error',
    'no-undef': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'operator-linebreak': [
      'error',
      'after'
    ],
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'eqeqeq': [
      'error',
      'always'
    ],
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'brace-style': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'spaced-comment': [
      'error',
      'always'
    ],
    'no-new-wrappers': 'error',
    'radix': 'error',
    'id-length': 'error',
    'camelcase': 'error',
    'new-cap': [
      'error',
      {
        'newIsCap': true
      }
    ],
    'no-underscore-dangle': 'error',
    'no-restricted-globals': [
      'error',
      'event'
    ],
    'complexity': [
      'error',
      4
    ],
    'no-var': 'error',
    'no-useless-call': 'error',
    'strict': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': ['error', {
      'newlines-between': 'never',
      'groups': [
        [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      ]
    }],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-internal-modules': 'off',
    'import/no-anonymous-default-export': ['error',
      {
        'allowArray': false,
        'allowArrowFunction': false,
        'allowAnonymousClass': false,
        'allowAnonymousFunction': false,
        'allowLiteral': false,
        'allowObject': true
      }
    ],
    'import/no-useless-path-segments': ['error', {
      'noUselessIndex': true
    }],
    'import/no-relative-parent-imports': 'off'
  }
}
