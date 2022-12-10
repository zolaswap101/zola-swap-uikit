# Zolaswap UIkit

Zolaswap UIkit is a set of React components and hooks used to build pages on Zolaswap's apps. It also contains a theme file for dark mode.

## Install

`yarn add @zolaswap-libs/uikit`

## Setup

### Theme

Before using Zolaswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { dark } from '@zolaswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@zolaswap-libs/uikit'
...
<ResetCSS />
```
