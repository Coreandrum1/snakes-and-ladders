//Board class for board object that will contain player objects
class Board{
	constructor(){
		this.box=generateBoard(20,8)
		this.player=[]
	}


	setPlayer(plyr){
		this.player.push(plyr)
	}

	getPlayer(num){
		return this.player[num]
	}
	getBoard(){
		return this.board
	}
}

/*a function that allows a board to be generated randomly
	*ladders will be generated until box number 90
	*snakes will be generated after box number 10
	*snakes and ladders cant lead to other snake or a ladder
	*board array have a 100 length
	*Function allows to add different amount of ladders and snakes 
*/
let generateBoard = (snk, ladd) => {
	let board = []
	for (let i = 0; i < 100; i++) {
		board.push(0)
	}
	//serpientes

	for (let i = 0; i < snk; i++) {
		let temp = Math.floor(Math.random() * 90) + 1

		board.splice(temp, 1, Math.floor(Math.random() * 10) + 1)
	}


	let i = 0
	while(i < ladd){
		let temp = Math.floor(Math.random() * 99) + 10

		if (board[temp] == 0) {
			board.splice(temp, 1, -(Math.floor(Math.random() * 10) + 1))
			i++
		}
	}

	return board
}