
let movement = (p, brd) => {
	console.log("-----------------------------------------------------------")
	brd.player[p].move(brd)

	if (p < brd.player.length-1 && brd.player[p].getPosition() < brd.box.length-1) {
		p++
		movement(p, brd)
	}
	else if(p >= brd.player.length-1 && brd.player[p].getPosition() < brd.box.length-1){
		p = 0
		movement(p, brd)
	}
}

let brd = new Board()
let p1 = new Player(1)
let p2 = new Player(2)
let p3 = new Player(3)

p1.setName("Francisco")
p2.setName("Pablo")
p3.setName("Juan")

brd.setPlayer(p1)
brd.setPlayer(p2)
brd.setPlayer(p3)


console.log(brd.box)
movement(0, brd)