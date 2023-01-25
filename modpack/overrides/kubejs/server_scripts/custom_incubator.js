onEvent('recipes', event => {
  event.shaped('easy_villagers:incubator', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:black_iron_block',
	C: 'minecraft:iron_block',
	D: 'supplementaries:cage'
  })
  event.remove({output: 'easy_villagers:incubator', mod: 'easy_villagers'})
})