onEvent('recipes', event => {
  event.shaped('easy_villagers:auto_trader', [
    'ACA',
    'ADA',
    'ABA'
  ], {
	A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'minecraft:netherite_ingot',
	C: 'compressium:emerald_3',
	D: 'easy_villagers:trader'
  })
  event.remove({output: 'easy_villagers:auto_trader', mod: 'easy_villagers'})
})