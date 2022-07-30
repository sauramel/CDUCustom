onEvent('recipes', event => {
  event.shaped('easy_villagers:converter', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'extendedcrafting:black_iron_block',
	C: 'wandering_bag:ingot_from_other_world',
	D: 'minecraft:zombie_spawn_egg'
  })
  event.remove({output: 'easy_villagers:converter', mod: 'easy_villagers'})
})