// /execute as @e[type=minecraft:villager] run data get entity @s


txt.split('\n')
	.map(it => it.slice(it.indexOf(': ') + 2))
	.map(it => {
	    const data = it.slice(it.indexOf('data: ') + 6);
	    const type = /\w+\b/.exec(it)[0];
	    return {type, data};
	});
