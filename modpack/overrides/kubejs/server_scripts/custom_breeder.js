onEvent('recipes', event => {
  event.shaped('easy_villagers:breeder', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:black_iron_block',
	C: 'wandering_bag:ingot_from_other_world',
	D: 'easy_villagers:villager'
  })
  event.remove({output: 'easy_villagers:breeder', mod: 'easy_villagers'})
})