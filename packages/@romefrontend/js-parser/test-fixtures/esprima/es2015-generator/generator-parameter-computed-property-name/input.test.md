# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-generator > generator-parameter-computed-property-name`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
		end: Object {
			column: 0
			index: 50
			line: 4
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected an identifier"}]}
			}
			location: Object {
				filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 12
					index: 27
					line: 2
				}
				start: Object {
					column: 12
					index: 27
					line: 2
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
				end: Object {
					column: 2
					index: 49
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: undefined
				loc: Object {
					filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
					end: Object {
						column: 1
						index: 48
						line: 3
					}
					start: Object {
						column: 1
						index: 1
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
						filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
						end: Object {
							column: 1
							index: 48
							line: 3
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					body: Array [
						JSFunctionDeclaration {
							id: JSBindingIdentifier {
								name: ""
								loc: Object {
									filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
									identifierName: ""
									end: Object {
										column: 13
										index: 28
										line: 2
									}
									start: Object {
										column: 12
										index: 27
										line: 2
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
								end: Object {
									column: 31
									index: 46
									line: 2
								}
								start: Object {
									column: 4
									index: 19
									line: 2
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
									end: Object {
										column: 31
										index: 46
										line: 2
									}
									start: Object {
										column: 29
										index: 44
										line: 2
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
									filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
									end: Object {
										column: 28
										index: 43
										line: 2
									}
									start: Object {
										column: 13
										index: 28
										line: 2
									}
								}
								params: Array [
									JSBindingObjectPattern {
										rest: undefined
										loc: Object {
											filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
											end: Object {
												column: 27
												index: 42
												line: 2
											}
											start: Object {
												column: 13
												index: 28
												line: 2
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
												end: Object {
													column: 27
													index: 42
													line: 2
												}
												start: Object {
													column: 13
													index: 28
													line: 2
												}
											}
										}
										properties: Array [
											JSBindingObjectPatternProperty {
												key: JSStaticPropertyKey {
													value: JSIdentifier {
														name: ""
														loc: Object {
															filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
															identifierName: ""
															end: Object {
																column: 23
																index: 38
																line: 2
															}
															start: Object {
																column: 22
																index: 37
																line: 2
															}
														}
													}
													loc: Object {
														filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
														end: Object {
															column: 23
															index: 38
															line: 2
														}
														start: Object {
															column: 22
															index: 37
															line: 2
														}
													}
												}
												value: JSBindingIdentifier {
													name: "y"
													loc: Object {
														filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
														identifierName: "y"
														end: Object {
															column: 26
															index: 41
															line: 2
														}
														start: Object {
															column: 25
															index: 40
															line: 2
														}
													}
												}
												loc: Object {
													filename: "esprima/es2015-generator/generator-parameter-computed-property-name/input.js"
													end: Object {
														column: 26
														index: 41
														line: 2
													}
													start: Object {
														column: 22
														index: 37
														line: 2
													}
												}
											}
										]
									}
								]
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

 esprima/es2015-generator/generator-parameter-computed-property-name/input.js:2:12 parse/js ━━━━━━━━

  ✖ Expected an identifier

    1 │ (function*() {
  > 2 │     function({[yield 3]: y}) {}
      │             ^
    3 │ })

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
