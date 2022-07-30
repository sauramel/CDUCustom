onEvent('recipes', event => {
  event.shaped('easy_villagers:trader', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:black_iron_block',
	C: 'wandering_bag:ingot_from_other_world',
	D: 'lightmanscurrency:trading_core'
  })
  event.remove({output: 'easy_villagers:trader', mod: 'easy_villagers'})
})