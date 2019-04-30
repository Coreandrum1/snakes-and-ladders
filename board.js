
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