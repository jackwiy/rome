# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 148`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/148/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/148/input.js"
		end: Object {
			column: 6
			index: 6
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "core/uncategorised/148/input.js"
				end: Object {
					column: 6
					index: 6
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSUnaryExpression {
				operator: "void"
				prefix: true
				loc: Object {
					filename: "core/uncategorised/148/input.js"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				argument: JSReferenceIdentifier {
					name: "x"
					loc: Object {
						filename: "core/uncategorised/148/input.js"
						identifierName: "x"
						end: Object {
							column: 6
							index: 6
							line: 1
						}
						start: Object {
							column: 5
							index: 5
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
