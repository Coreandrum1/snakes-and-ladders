
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


	rollDice(){
		let number = Math.floor(Math.random() * 6) + 1
		console.log(`El dado cayó en ${number}`)
		return number
	}

	move(brd){
		let temp = this.getPosition()
		console.log(`Jugador ${this.playerNum}: ${this.getName()} estás en la casilla número ${temp}`)
		let dado = this.rollDice()
		console.log(`Avanzarás ${dado} casillas`)
		temp += dado

		if (temp >= brd.box.length-1) {
			temp = brd.box.length-1
			alert(`Felicidades ${this.getName()} haz llegado a la meta`)
		}

		if (brd.box[temp] > 0) {
			console.log(`Caiste en una escalera, avanzarás ${Math.abs(brd.box[temp])} casillas`)
		}
		else if (brd.box[temp] < 0) {
			console.log(`Caiste en una serpiente, retrocederás ${Math.abs(brd.box[temp])} casillas`)
		}

		let pos = brd.box[temp]
		temp += pos
		this.setPosition(temp)
		console.log(`Ahora estás en ${temp}`)
	}

}

