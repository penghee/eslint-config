# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a **TypeScript ESLint configuration library** built with ESLint Flat Config format. The project is structured as a modular configuration system that can be composed for different project needs.

### Core Architecture

- **Entry Point**: `src/index.ts` - Main API that exports the `config()` function
- **Configuration System**: `src/configs/` - Modular configuration modules
- **Type System**: `src/types.ts` - TypeScript types for ESLint Flat Config
- **Utilities**: `src/utils.ts` - Helper functions for module loading

### Configuration Modules

- **TypeScript Config** (`src/configs/typescript.ts`): Handles TypeScript-specific linting rules
  - Targets `.ts` and `.tsx` files in `src/`
  - Configures `@typescript-eslint` plugin and parser
  - Disables conflicting ESLint rules
  - Uses dynamic imports for plugin loading

### Build System

- **Builder**: `tsup` with dual format output (CJS + ESM)
- **Type Checking**: TypeScript with isolated modules
- **Output**: `dist/` with type definitions (.d.ts) and source maps

## Common Commands

### Development
```bash
pnpm build          # Build the library
pnpm typecheck      # Run TypeScript type checking
pnpm lint           # Lint source files
pnpm lint:fix       # Lint and auto-fix issues
```

### Package Management
```bash
pnpm install        # Install dependencies
```

### Configuration
```bash
# Use this config in other projects:
# 1. Install: pnpm add -D @penghee/eslint-config
# 2. In eslint.config.js: import config from '@penghee/eslint-config'
```

## Key Files

- `eslint.config.ts` - This project's own ESLint configuration (uses itself)
- `tsup.config.ts` - Build configuration for tsup
- `tsconfig.json` - TypeScript configuration extending tsconfig.lib.json