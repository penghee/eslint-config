import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function react(): Promise<TypedFlatConfigItem[]> {
  const [
    pluginReact,
    parserJsx,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      files: ["**/*.jsx", "**/*.tsx"],
      languageOptions: {
        parser: parserJsx,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        react: pluginReact,
      },
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-spreading': 'error'
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ];
}