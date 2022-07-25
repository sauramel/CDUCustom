onEvent('recipes', event => {
  event.recipes.createMechanicalCrafting('refinedstorage:controller', [
    'ABCBA',
    'BDEDB',
    'GEFEG',
	'BDEDB',
	'ABCBA'
  ], {
    A: '#forge:roostgetquartzenrichediron',
    B: '#forge:ingots/steel',
    C: '#forge:plates/electrum',
    D: '#forge:wires/gold',
    E: 'refinedstorage:advanced_processor',
    F: 'createaddition:tesla_coil',
    G: 'createaddition:electric_motor'
  })
  event.remove({output: 'refinedstorage:controller', mod: 'refinedstorage'})
})