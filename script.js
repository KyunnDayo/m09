const trainer = {
	name: 'Dio Brando',
	age: 18,
	pokemon: ["dog", "otter", "capybara"],
	friends: {
		friends: ["Rhein","Pela"],
		besties: ["Seele", "Jotaro"]
	},

	talk: function(){
		console.log("Pikachu! I choose you!");
	},
	overview: function(){

		//mix of dot and matrix notations access
		console.log(trainer.name); 
		console.log(trainer.age);
		console.log(trainer['pokemon']);
		console.log(trainer['friends']['friends']);
		console.log(trainer.friends.besties); 
	}
};

trainer.talk()
trainer.overview()

function Pokemon(name, level, health, attack){
	//properties
	this.name = name;
	this.level = level;
	this.health = health;
	this.attack = attack;
	//methods
		this.faint = function(targetPokemon){
		console.log(targetPokemon.name + " has fainted!");
		console.log("")
	}
	this.tackle = function(targetPokemon){
		let attackPower = attack;
    	targetPokemon.health -= attackPower;
		console.log(name + ' used tackle! it was very effective!');
		console.log(targetPokemon.name + "'s health decreased by " + attackPower);
		console.log(targetPokemon.name + "'s current health is " + targetPokemon.health);
		console.log("")

		if (targetPokemon.health <= 0) {
      	this.faint(targetPokemon);
		}
	}
	this.heal = function(targetPokemon){
		let healplus = attack;
		targetPokemon.health += healplus;
		console.log(name + ' used Heal! ');
		console.log(targetPokemon.name + "'s health increased by " + healplus);
		console.log(targetPokemon.name + "'s current health is " + targetPokemon.health);
		console.log("")

	}

};


const dog = new Pokemon('dog', 3, 20, 15)
const otter = new Pokemon('otter', 5, 27, 19)
const capybara = new Pokemon('capybara', 10, 50, 39)

capybara.tackle(dog)
otter.tackle(capybara)
dog.heal(capybara)

//ROMERO
//AN22//202110191