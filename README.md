# Wagyu UIkit

Wagyu UIkit is a set of React components and hooks used to build pages on Wagyu's apps. It also contains a theme file for dark mode.

## Install

`yarn add @wagyuswap/uikit`

## Setup

### Theme

Before using Wagyu UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { dark } from '@pancakeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@wagyuswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://wagyuswap.github.io/pancake-uikit/)
