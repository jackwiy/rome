# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > for-in > bare-initializer`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/for-in/bare-initializer/input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/for-in/bare-initializer/input.js"
		end: Object {
			column: 0
			index: 26
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Not a valid assignment target"}]}
			}
			location: Object {
				filename: "es2015/for-in/bare-initializer/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 10
					index: 17
					line: 2
				}
				start: Object {
					column: 5
					index: 12
					line: 2
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2015/for-in/bare-initializer/input.js"
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
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "es2015/for-in/bare-initializer/input.js"
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
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "es2015/for-in/bare-initializer/input.js"
								identifierName: "a"
								end: Object {
									column: 5
									index: 5
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
						init: undefined
						loc: Object {
							filename: "es2015/for-in/bare-initializer/input.js"
							end: Object {
								column: 5
								index: 5
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
					}
				]
			}
		}
		JSForInStatement {
			loc: Object {
				filename: "es2015/for-in/bare-initializer/input.js"
				end: Object {
					column: 18
					index: 25
					line: 2
				}
				start: Object {
					column: 0
					index: 7
					line: 2
				}
			}
			body: JSEmptyStatement {
				loc: Object {
					filename: "es2015/for-in/bare-initializer/input.js"
					end: Object {
						column: 18
						index: 25
						line: 2
					}
					start: Object {
						column: 17
						index: 24
						line: 2
					}
				}
			}
			left: JSAssignmentIdentifier {
				name: "X"
				loc: Object {
					filename: "es2015/for-in/bare-initializer/input.js"
					end: Object {
						column: 10
						index: 17
						line: 2
					}
					start: Object {
						column: 5
						index: 12
						line: 2
					}
				}
			}
			right: JSObjectExpression {
				properties: Array []
				loc: Object {
					filename: "es2015/for-in/bare-initializer/input.js"
					end: Object {
						column: 16
						index: 23
						line: 2
					}
					start: Object {
						column: 14
						index: 21
						line: 2
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/for-in/bare-initializer/input.js:2:5 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Not a valid assignment target

    1 │ var a;
  > 2 │ for (a = 0 in {});
      │      ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
