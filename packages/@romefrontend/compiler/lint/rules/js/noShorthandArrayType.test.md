# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noShorthandArrayType`

### `0`

```

 lint/js/noShorthandArrayType/reject/1/file.ts:2:13 lint/js/noShorthandArrayType  FIXABLE  ━━━━━━━━━

  ✖ Use Array<T> syntax instead of shorthand T[] syntax.

    1 │ let valid: Array<foo>;
  > 2 │ let invalid: bar[];
      │              ^^^^^

  ℹ Recommended fix

  - bar[]
  + Array<bar>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
let valid: Array<foo>;
let invalid: Array<bar>;

```
