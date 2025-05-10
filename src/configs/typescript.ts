import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function typescript(): Promise<TypedFlatConfigItem[]> {

  const [
    pluginTs,
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)

  return [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      languageOptions: {
        parser: parserTs,
      },
      plugins: {
        "@typescript-eslint": pluginTs,
      },
      rules: {
        'no-dupe-class-members': 'off',
        'no-redeclare': 'error',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
      }
    },
  ];
}
