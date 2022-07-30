onEvent('recipes', event => {
  event.shaped('easy_villagers:iron_farm', [
    'AAA',
    'ABA',
    'CDC'
  ], {
    A: 'forbidden_arcanus:arcane_golden_glass',
    B: 'guardvillagers:iron_golem_spawn_egg',
	C: 'extendedcrafting:black_iron_block',
	D: 'wandering_bag:ingot_from_other_world'
  })
  event.remove({output: 'easy_villagers:iron_farm', mod: 'easy_villagers'})
})