# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > generator`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2020/dynamic-import/generator/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2020/dynamic-import/generator/input.js"
		end: Object {
			column: 0
			index: 42
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: Object {
					filename: "es2020/dynamic-import/generator/input.js"
					identifierName: "a"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2020/dynamic-import/generator/input.js"
				end: Object {
					column: 1
					index: 41
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2020/dynamic-import/generator/input.js"
					end: Object {
						column: 13
						index: 13
						line: 1
					}
					start: Object {
						column: 11
						index: 11
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "es2020/dynamic-import/generator/input.js"
					end: Object {
						column: 1
						index: 41
						line: 3
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "es2020/dynamic-import/generator/input.js"
							end: Object {
								column: 23
								index: 39
								line: 2
							}
							start: Object {
								column: 2
								index: 18
								line: 2
							}
						}
						expression: JSYieldExpression {
							delegate: false
							loc: Object {
								filename: "es2020/dynamic-import/generator/input.js"
								end: Object {
									column: 22
									index: 38
									line: 2
								}
								start: Object {
									column: 2
									index: 18
									line: 2
								}
							}
							argument: JSImportCall {
								loc: Object {
									filename: "es2020/dynamic-import/generator/input.js"
									end: Object {
										column: 22
										index: 38
										line: 2
									}
									start: Object {
										column: 14
										index: 30
										line: 2
									}
								}
								argument: JSStringLiteral {
									value: "http"
									loc: Object {
										filename: "es2020/dynamic-import/generator/input.js"
										end: Object {
											column: 21
											index: 37
											line: 2
										}
										start: Object {
											column: 15
											index: 31
											line: 2
										}
									}
								}
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
✔ No known problems!

```
