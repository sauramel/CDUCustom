onEvent('recipes', event => {
  event.shaped('easy_villagers:farmer', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:black_iron_block',
	C: 'minecraft:iron_block',
	D: 'farmingforblockheads:market'
  })
  event.remove({output: 'easy_villagers:farmer', mod: 'easy_villagers'})
})