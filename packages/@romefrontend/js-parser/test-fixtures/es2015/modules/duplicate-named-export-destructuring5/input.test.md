# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring5`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
		end: Object {
			column: 0
			index: 52
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclarationStatement {
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
						end: Object {
							column: 25
							index: 25
							line: 1
						}
						start: Object {
							column: 7
							index: 7
							line: 1
						}
					}
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingArrayPattern {
								rest: undefined
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
									end: Object {
										column: 18
										index: 18
										line: 1
									}
									start: Object {
										column: 13
										index: 13
										line: 1
									}
								}
								elements: Array [
									JSBindingIdentifier {
										name: "foo"
										loc: Object {
											filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
											identifierName: "foo"
											end: Object {
												column: 17
												index: 17
												line: 1
											}
											start: Object {
												column: 14
												index: 14
												line: 1
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
												end: Object {
													column: 17
													index: 17
													line: 1
												}
												start: Object {
													column: 14
													index: 14
													line: 1
												}
											}
										}
									}
								]
							}
							loc: Object {
								filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
								end: Object {
									column: 24
									index: 24
									line: 1
								}
								start: Object {
									column: 13
									index: 13
									line: 1
								}
							}
							init: JSReferenceIdentifier {
								name: "bar"
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
									identifierName: "bar"
									end: Object {
										column: 24
										index: 24
										line: 1
									}
									start: Object {
										column: 21
										index: 21
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
				end: Object {
					column: 24
					index: 50
					line: 2
				}
				start: Object {
					column: 0
					index: 26
					line: 2
				}
			}
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "foo"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
						identifierName: "foo"
						end: Object {
							column: 19
							index: 45
							line: 2
						}
						start: Object {
							column: 16
							index: 42
							line: 2
						}
					}
				}
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
					end: Object {
						column: 24
						index: 50
						line: 2
					}
					start: Object {
						column: 7
						index: 33
						line: 2
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
						end: Object {
							column: 24
							index: 50
							line: 2
						}
						start: Object {
							column: 22
							index: 48
							line: 2
						}
					}
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
						end: Object {
							column: 21
							index: 47
							line: 2
						}
						start: Object {
							column: 19
							index: 45
							line: 2
						}
					}
				}
			}
		}
		JSEmptyStatement {
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring5/input.js"
				end: Object {
					column: 25
					index: 51
					line: 2
				}
				start: Object {
					column: 24
					index: 50
					line: 2
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
