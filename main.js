// recursive function 
let turn = (p, brd) => { 
	console.log("-----------------------------------------------------------")
	brd.player[p].move(brd)		//takes the current value of board.box array

	if (p < brd.player.length-1 && brd.player[p].getPosition() < brd.box.length-1) { // if the conditions are meet, this will call the function but with the next number of the board.box array
		p++
		turn(p, brd)
	}
	else if(p >= brd.player.length-1 && brd.player[p].getPosition() < brd.box.length-1){ // if the conditions are meet, this means all player already had their turn and need no start the turn cycle again
		p = 0
		turn(p, brd)
	}
}


//objects initialization

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
turn(0, brd)