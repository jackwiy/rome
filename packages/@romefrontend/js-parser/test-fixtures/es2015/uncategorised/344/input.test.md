# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 344`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/344/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/344/input.js"
		end: Object {
			column: 5
			index: 5
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "super is only allowed in object methods and classes"}]}
			}
			location: Object {
				filename: "es2015/uncategorised/344/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 0
					index: 0
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2015/uncategorised/344/input.js"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSSuper {
				loc: Object {
					filename: "es2015/uncategorised/344/input.js"
					end: Object {
						column: 5
						index: 5
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/344/input.js:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ super is only allowed in object methods and classes

    super
    ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
