# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > issue-2083`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "jsx/regression/issue-2083/input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "jsx/regression/issue-2083/input.jsx"
		end: Object {
			column: 0
			index: 28
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
				filename: "jsx/regression/issue-2083/input.jsx"
				end: Object {
					column: 27
					index: 27
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSConditionalExpression {
				loc: Object {
					filename: "jsx/regression/issue-2083/input.jsx"
					end: Object {
						column: 26
						index: 26
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				test: JSBooleanLiteral {
					value: true
					loc: Object {
						filename: "jsx/regression/issue-2083/input.jsx"
						end: Object {
							column: 4
							index: 4
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				alternate: JSXElement {
					name: JSXIdentifier {
						name: "div"
						loc: Object {
							filename: "jsx/regression/issue-2083/input.jsx"
							end: Object {
								column: 23
								index: 23
								line: 1
							}
							start: Object {
								column: 20
								index: 20
								line: 1
							}
						}
					}
					attributes: Array []
					children: Array []
					selfClosing: true
					typeArguments: undefined
					loc: Object {
						filename: "jsx/regression/issue-2083/input.jsx"
						end: Object {
							column: 26
							index: 26
							line: 1
						}
						start: Object {
							column: 19
							index: 19
							line: 1
						}
					}
				}
				consequent: JSXElement {
					name: JSXIdentifier {
						name: "div"
						loc: Object {
							filename: "jsx/regression/issue-2083/input.jsx"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
					attributes: Array []
					children: Array []
					selfClosing: true
					typeArguments: undefined
					loc: Object {
						filename: "jsx/regression/issue-2083/input.jsx"
						end: Object {
							column: 15
							index: 15
							line: 1
						}
						start: Object {
							column: 8
							index: 8
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
