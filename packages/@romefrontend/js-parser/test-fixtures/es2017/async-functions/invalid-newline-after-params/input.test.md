# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-newline-after-params`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "es2017/async-functions/invalid-newline-after-params/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/invalid-newline-after-params/input.js"
		end: Object {
			column: 0
			index: 16
			line: 3
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
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unknown start to an "}
						"statement expression"
					]
				}
			}
			location: Object {
				filename: "es2017/async-functions/invalid-newline-after-params/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 9
					index: 9
					line: 1
				}
				start: Object {
					column: 0
					index: 10
					line: 2
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/invalid-newline-after-params/input.js"
				end: Object {
					column: 9
					index: 9
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "es2017/async-functions/invalid-newline-after-params/input.js"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "async"
					loc: Object {
						filename: "es2017/async-functions/invalid-newline-after-params/input.js"
						identifierName: "async"
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
				arguments: Array [
					JSReferenceIdentifier {
						name: "x"
						loc: Object {
							filename: "es2017/async-functions/invalid-newline-after-params/input.js"
							identifierName: "x"
							end: Object {
								column: 8
								index: 8
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
					}
				]
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/invalid-newline-after-params/input.js"
				end: Object {
					column: 2
					index: 12
					line: 2
				}
				start: Object {
					column: 0
					index: 10
					line: 2
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: Object {
					filename: "es2017/async-functions/invalid-newline-after-params/input.js"
					end: Object {
						column: 2
						index: 12
						line: 2
					}
					start: Object {
						column: 0
						index: 10
						line: 2
					}
				}
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: Object {
				filename: "es2017/async-functions/invalid-newline-after-params/input.js"
				end: Object {
					column: 5
					index: 15
					line: 2
				}
				start: Object {
					column: 3
					index: 13
					line: 2
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2017/async-functions/invalid-newline-after-params/input.js:2 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    1 │ async (x)
    2 │ => {}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
