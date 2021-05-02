module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser

    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        project: './tsconfig.json',
        sourceType: 'module', // Allows for the use of imports
        //createDefaultProgram: "true" // https://github.com/typescript-eslint/typescript-eslint/issues/967#issuecomment-539091676
    },

    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        //'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
       // 'plugin:prettier/recommended',
        //'koa',
    ],

    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        
        // This should probably go away: 
        //   per https://stackoverflow.com/a/59278705 
        '@typescript-eslint/no-var-requires': 0,
    },

};
