// Automatisch gegenereerde code. Niet bewerken.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201010101010101010101010101010202010102020202020101020202020102020101010101010201010101010201020201010101010101010101010102010202010102010101010101020101020102020101020202020201010201010201020201010101010101010102010102010202010101010101010101020101020102020101020101010101010201010201020201010201010101010102010101010202010102020202020201020202010102020101010101010101010101010101020201010101010101010101010101010202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 . . 2 2 2 2 . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . 2 
2 . . . . . . . . . 2 . . 2 . 2 
2 . . . . . . . . . 2 . . 2 . 2 
2 . . 2 . . . . . . 2 . . 2 . 2 
2 . . 2 . . . . . . 2 . . . . 2 
2 . . 2 2 2 2 2 2 . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Automatisch gegenereerde code. Niet bewerken.
