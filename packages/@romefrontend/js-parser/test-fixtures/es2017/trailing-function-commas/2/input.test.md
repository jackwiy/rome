# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > trailing-function-commas > 2`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/trailing-function-commas/2/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/trailing-function-commas/2/input.js"
		end: Object {
			column: 29
			index: 29
			line: 1
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
				name: "log"
				loc: Object {
					filename: "es2017/trailing-function-commas/2/input.js"
					identifierName: "log"
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
			loc: Object {
				filename: "es2017/trailing-function-commas/2/input.js"
				end: Object {
					column: 29
					index: 29
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "es2017/trailing-function-commas/2/input.js"
					end: Object {
						column: 29
						index: 29
						line: 1
					}
					start: Object {
						column: 26
						index: 26
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2017/trailing-function-commas/2/input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 12
						index: 12
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "n"
						loc: Object {
							filename: "es2017/trailing-function-commas/2/input.js"
							identifierName: "n"
							end: Object {
								column: 14
								index: 14
								line: 1
							}
							start: Object {
								column: 13
								index: 13
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2017/trailing-function-commas/2/input.js"
								end: Object {
									column: 14
									index: 14
									line: 1
								}
								start: Object {
									column: 13
									index: 13
									line: 1
								}
							}
						}
					}
					JSBindingIdentifier {
						name: "op"
						loc: Object {
							filename: "es2017/trailing-function-commas/2/input.js"
							identifierName: "op"
							end: Object {
								column: 18
								index: 18
								line: 1
							}
							start: Object {
								column: 16
								index: 16
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2017/trailing-function-commas/2/input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
					}
					JSBindingIdentifier {
						name: "val"
						loc: Object {
							filename: "es2017/trailing-function-commas/2/input.js"
							identifierName: "val"
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
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2017/trailing-function-commas/2/input.js"
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
