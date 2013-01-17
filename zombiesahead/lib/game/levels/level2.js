ig.module( 'game.levels.level2' )
.requires( 'impact.image','game.entities.levelexit','game.entities.zombie','game.entities.player','game.entities.kill','game.entities.key' )
.defines(function(){
LevelLevel2=/*JSON[*/{"entities":[{"type":"EntityLevelexit","x":388,"y":68,"settings":{"level":"win"}},{"type":"EntityZombie","x":88,"y":222},{"type":"EntityZombie","x":180,"y":114},{"type":"EntityZombie","x":284,"y":66},{"type":"EntityZombie","x":360,"y":142},{"type":"EntityPlayer","x":36,"y":50},{"type":"EntityZombie","x":404,"y":62},{"type":"EntityKill","x":16,"y":304,"settings":{"size":{"x":448,"y":16}}},{"type":"EntityKill","x":128,"y":176,"settings":{"size":{"x":32,"y":8}}},{"type":"EntityKill","x":208,"y":144,"settings":{"size":{"x":64,"y":8}}},{"type":"EntityKill","x":16,"y":80},{"type":"EntityZombie","x":92,"y":162},{"type":"EntityKey","x":208,"y":150}],"layer":[{"name":"main","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/dorm-tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,1],[1,0,5,5,1,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,1],[1,15,32,32,1,0,0,0,0,0,0,0,0,0,0,0,0,1,5,5,0,0,0,0,5,5,0,0,0,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,5,0,0,0,0,0,0,0,5,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,5,5,5,5,0,0,26,1],[1,0,0,0,1,0,0,0,0,0,1,5,5,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,39,0,0,0,0,0,1,32,32,15,15,15,15,1,0,0,0,0,0,0,0,39,0,0,5,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,5,5,0,0,5,0,0,0,1],[1,0,0,0,5,5,5,5,15,15,1,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,39,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,5,5,5,0,0,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,32,32,32,39,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,26,26,26,26,26,26,26,26,26,26,26,26,26,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1]]},{"name":"collision","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,23,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1],[1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,23,23,23,23,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1],[1,0,0,0,1,1,1,1,23,23,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]}]}/*]JSON*/;
LevelLevel2Resources=[new ig.Image('media/dorm-tiles.png')];
});