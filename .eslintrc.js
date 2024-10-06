module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "no-unused-vars": ["warn"],  // Change unused variables to warnings
      "react/react-in-jsx-scope": "off"  // Example: Turn off this rule if using Next.js or modern React
      // Add more rules as needed
    },
    "settings": {
      "react": {
        "version": "detect"  // Automatically detect the React version
      }
    },
    "letterclass":
    {
        "PropTypes": "string"
    }
  };
  