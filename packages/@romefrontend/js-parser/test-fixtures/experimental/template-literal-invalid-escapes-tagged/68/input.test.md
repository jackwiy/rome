# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-tagged > 68`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
		end: Object {
			column: 38
			index: 38
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
				filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
				end: Object {
					column: 38
					index: 38
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSTaggedTemplateExpression {
				typeArguments: undefined
				loc: Object {
					filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
					end: Object {
						column: 38
						index: 38
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				tag: JSReferenceIdentifier {
					name: "sampleTag"
					loc: Object {
						filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
						identifierName: "sampleTag"
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
				}
				quasi: JSTemplateLiteral {
					loc: Object {
						filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
						end: Object {
							column: 38
							index: 38
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					expressions: Array [
						JSNumericLiteral {
							value: 0
							format: undefined
							loc: Object {
								filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
								end: Object {
									column: 17
									index: 17
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
						JSNumericLiteral {
							value: 1
							format: undefined
							loc: Object {
								filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 30
									index: 30
									line: 1
								}
							}
						}
					]
					quasis: Array [
						JSTemplateElement {
							cooked: "left"
							raw: "left"
							tail: false
							loc: Object {
								filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
								end: Object {
									column: 14
									index: 14
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
						}
						JSTemplateElement {
							cooked: "\\u{110000}"
							raw: "\\u{110000}"
							tail: false
							loc: Object {
								filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 18
									index: 18
									line: 1
								}
							}
						}
						JSTemplateElement {
							cooked: "right"
							raw: "right"
							tail: true
							loc: Object {
								filename: "experimental/template-literal-invalid-escapes-tagged/68/input.js"
								end: Object {
									column: 37
									index: 37
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
						}
					]
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
