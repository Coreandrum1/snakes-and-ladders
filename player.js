//Player class for player objects that will move around the board during a snakes and ladders game
class Player{
	constructor(value){
		this.playerNum = value
		this.position = 0
		this.name = null
	}
	setPosition(pos){this.position=pos}
	setName(name){this.name=name}

	getName(){return this.name}
	getPosition(){return this.position}

	//player must roll a dice
	rollDice(){
		let number = Math.floor(Math.random() * 6) + 1
		console.log(`El dado cayó en ${number}`)
		return number
	}

	//players move during a their turn
	move(brd){
		let temp = this.getPosition()
		console.log(`Jugador ${this.playerNum}: ${this.getName()} estás en la casilla número ${temp}`)	//shows the current information of the current player object
		let dado = this.rollDice()	//gets the number of a sible dice
		console.log(`Avanzarás ${dado} casillas`)
		temp += dado

		if (temp >= brd.box.length-1) { //this if will display a congratulations message to the winner
			temp = brd.box.length-1
			alert(`Felicidades ${this.getName()} haz llegado a la meta`)
		}

		//these if's show the number of boxes you need to move forward or move backwards when you reach a snake or a ladder 
		if (brd.box[temp] > 0) {
			console.log(`Caiste en una escalera, avanzarás ${Math.abs(brd.box[temp])} casillas`)
		}
		else if (brd.box[temp] < 0) {
			console.log(`Caiste en una serpiente, retrocederás ${Math.abs(brd.box[temp])} casillas`)
		}

		let pos = brd.box[temp]
		temp += pos
		this.setPosition(temp)
		console.log(`Ahora estás en ${temp}`) //shows the current box before ending your turn
	}

}

