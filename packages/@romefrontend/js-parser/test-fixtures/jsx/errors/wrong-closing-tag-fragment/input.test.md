# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > wrong-closing-tag-fragment`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
		end: Object {
			column: 0
			index: 15
			line: 2
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
				filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXFragment {
				children: Array []
				loc: Object {
					filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
					end: Object {
						column: 14
						index: 14
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
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			location: Object {
				filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 2
					index: 2
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected JSX closing fragment tag"}]}
				advice: Array [
					log {
						category: "info"
						text: MARKUP {parts: Array [RAW_MARKUP {value: "Originated from this opening tag"}]}
					}
					frame {
						location: Object {
							filename: "jsx/errors/wrong-closing-tag-fragment/input.jsx"
							end: Object {
								column: 2
								index: 2
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
			}
		}
	]
}
```

### `diagnostics`

```

 jsx/errors/wrong-closing-tag-fragment/input.jsx:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected JSX closing fragment tag

  ℹ Originated from this opening tag

    <></something>
    ^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
