# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > regression > async-arrow-generic-9560`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/regression/async-arrow-generic-9560/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/regression/async-arrow-generic-9560/input.ts"
		end: Object {
			column: 1
			index: 80
			line: 8
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Cl"
				loc: Object {
					filename: "typescript/regression/async-arrow-generic-9560/input.ts"
					identifierName: "Cl"
					end: Object {
						column: 8
						index: 8
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "typescript/regression/async-arrow-generic-9560/input.ts"
				end: Object {
					column: 1
					index: 80
					line: 8
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "typescript/regression/async-arrow-generic-9560/input.ts"
					end: Object {
						column: 1
						index: 80
						line: 8
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									identifierName: "a"
									end: Object {
										column: 3
										index: 14
										line: 2
									}
									start: Object {
										column: 2
										index: 13
										line: 2
									}
								}
							}
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 13
									line: 2
								}
							}
						}
						value: JSArrowFunctionExpression {
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 49
									line: 4
								}
								start: Object {
									column: 6
									index: 17
									line: 2
								}
							}
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									end: Object {
										column: 19
										index: 30
										line: 2
									}
									start: Object {
										column: 6
										index: 17
										line: 2
									}
								}
								typeParameters: TSTypeParameterDeclaration {
									loc: Object {
										filename: "typescript/regression/async-arrow-generic-9560/input.ts"
										end: Object {
											column: 14
											index: 25
											line: 2
										}
										start: Object {
											column: 11
											index: 22
											line: 2
										}
									}
									params: Array [
										TSTypeParameter {
											name: "T"
											constraint: undefined
											default: undefined
											loc: Object {
												filename: "typescript/regression/async-arrow-generic-9560/input.ts"
												end: Object {
													column: 13
													index: 24
													line: 2
												}
												start: Object {
													column: 12
													index: 23
													line: 2
												}
											}
										}
									]
								}
							}
							body: JSBlockStatement {
								directives: Array []
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									end: Object {
										column: 3
										index: 49
										line: 4
									}
									start: Object {
										column: 20
										index: 31
										line: 2
									}
								}
								body: Array [
									JSExpressionStatement {
										loc: Object {
											filename: "typescript/regression/async-arrow-generic-9560/input.ts"
											end: Object {
												column: 12
												index: 45
												line: 3
											}
											start: Object {
												column: 4
												index: 37
												line: 3
											}
										}
										expression: JSAwaitExpression {
											loc: Object {
												filename: "typescript/regression/async-arrow-generic-9560/input.ts"
												end: Object {
													column: 11
													index: 44
													line: 3
												}
												start: Object {
													column: 4
													index: 37
													line: 3
												}
											}
											argument: JSNumericLiteral {
												value: 0
												format: undefined
												loc: Object {
													filename: "typescript/regression/async-arrow-generic-9560/input.ts"
													end: Object {
														column: 11
														index: 44
														line: 3
													}
													start: Object {
														column: 10
														index: 43
														line: 3
													}
												}
											}
										}
									}
								]
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "typescript/regression/async-arrow-generic-9560/input.ts"
							end: Object {
								column: 4
								index: 50
								line: 4
							}
							start: Object {
								column: 2
								index: 13
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 13
								line: 2
							}
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 13
									line: 2
								}
							}
						}
					}
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "b"
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									identifierName: "b"
									end: Object {
										column: 3
										index: 55
										line: 6
									}
									start: Object {
										column: 2
										index: 54
										line: 6
									}
								}
							}
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 55
									line: 6
								}
								start: Object {
									column: 2
									index: 54
									line: 6
								}
							}
						}
						value: JSArrowFunctionExpression {
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 77
									line: 7
								}
								start: Object {
									column: 6
									index: 58
									line: 6
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									end: Object {
										column: 3
										index: 77
										line: 7
									}
									start: Object {
										column: 20
										index: 72
										line: 6
									}
								}
							}
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: Object {
									filename: "typescript/regression/async-arrow-generic-9560/input.ts"
									end: Object {
										column: 19
										index: 71
										line: 6
									}
									start: Object {
										column: 6
										index: 58
										line: 6
									}
								}
								typeParameters: TSTypeParameterDeclaration {
									loc: Object {
										filename: "typescript/regression/async-arrow-generic-9560/input.ts"
										end: Object {
											column: 14
											index: 66
											line: 6
										}
										start: Object {
											column: 11
											index: 63
											line: 6
										}
									}
									params: Array [
										TSTypeParameter {
											name: "T"
											constraint: undefined
											default: undefined
											loc: Object {
												filename: "typescript/regression/async-arrow-generic-9560/input.ts"
												end: Object {
													column: 13
													index: 65
													line: 6
												}
												start: Object {
													column: 12
													index: 64
													line: 6
												}
											}
										}
									]
								}
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "typescript/regression/async-arrow-generic-9560/input.ts"
							end: Object {
								column: 4
								index: 78
								line: 7
							}
							start: Object {
								column: 2
								index: 54
								line: 6
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 54
								line: 6
							}
							loc: Object {
								filename: "typescript/regression/async-arrow-generic-9560/input.ts"
								end: Object {
									column: 3
									index: 55
									line: 6
								}
								start: Object {
									column: 2
									index: 54
									line: 6
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
