onEvent("player.tick", event => {
	event.server.runCommandSilent('effect give @a[curios={item:{id:"kubejs:snowboarding_gloves"},slot:["hands"]}] ecologics:slippery 2 2 true')
})