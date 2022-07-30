onEvent('recipes', event => {
  event.shaped('easy_villagers:auto_trader', [
    'ABA',
    'ADA',
    'ACA'
  ], {
	A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:enhanced_ender_ingot',
	C: 'minecraft:hopper',
	D: 'easy_villagers:trader'
  })
  event.remove({output: 'easy_villagers:auto_trader', mod: 'easy_villagers'})
})