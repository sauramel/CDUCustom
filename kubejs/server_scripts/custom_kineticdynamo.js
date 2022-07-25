onEvent('recipes', event => {
  event.shaped('immersiveengineering:dynamo', [
    ' A ',
    'CBC',
    'DDD'
  ], {
    A: 'immersiveengineering:coil_lv',
    B: 'createaddition:alternator',
	C: 'minecraft:redstone',
	D: 'alloyed:steel_ingot'
  })
  event.remove({output: 'immersiveengineering:dynamo', mod: 'immersiveengineering'})
})