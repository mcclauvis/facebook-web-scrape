//First things first
// I'ma say all the words inside my head

//No just kiddin'

//So the first thing we gotta do is!
//.. Just Follow me

//So!
//We already know how to get the name so we need to store it into a variable!

//Just press ctrl + v
//Put .innerText at the last
var getNameFromHtml = document.querySelector("#reaction_profile_browser > li:nth-child(1) > div > div > div > div._6a._5j0c > div:nth-child(2) > div > a").innerText

//TASK 1: We need to collect all the names!
//To collect all the names we need to change STATIC -> li:nth-child(1) to DYNAMIC -> li:nth-child(${i})!
//But first let's create a container of names!

//Set a container of names!
var arrOfNames = []

//Let's use function to make our code cleaner!
//Let's make a function called fillArrOfNames that accepts a limit!
function fillArrOfNames(limit){
	//Let's make a for loop!
	for (var i = 1; i <= limit; i++){

		//Let's store the names into the arrOfNames!
		//Change it now! ( STATIC -> li:nth-child(1) to DYNAMIC -> li:nth-child(${i}) ) !

		//Guess how ?
		//Since array starts at 0 we need to i-1!
		arrOfNames[i-1] = document.querySelector(`#reaction_profile_browser > li:nth-child(${i}) > div > div > div > div._6a._5j0c > div:nth-child(2) > div > a`).innerText
	}
}

//Let's finish TASK 1!
fillArrOfNames(50)

//TASK 2:Let's go and find the codes of the heart, like, wow, sad and haha reactions!
//But wait?? where are they located ?
//Follow Me!

//Like = _2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_b11b97
//Heart = _2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_27f980
//Wow = _2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_d3a685
//Haha = _2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_5e644e
//Sad = _2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_f11439

//Now that we've found all of it lets store all of it in variables

var classValueHeart = "_2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_27f980"
var classValueLike = "_2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_b11b97"
var classValueWow = "_2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_d3a685"
var classValueSad = "_2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_f11439"
var classValueHaha = "_2p78 _2p7a _9-- img sp_Ip7XdtW3sur sx_5e644e"

//TASK 3:Let's make a function and a variable name that accepts a name of a person
function getReaction (name){

	//Let's make a for loop!
	for (var i = 1; i <= arrOfNames.length; i++){

		//Let's compare!
		//If the value of the name variable is in the arrOfNames!
		//Since array starts at 0 we need to i-1!
		if (name == arrOfNames[i-1]){

			//Now if the name variable is in the arrOfNames!
			//then we create a reaction variable to store their reaction
			//But wait?? where is the reaction located ??

			var reaction = 
			document.querySelector(`#reaction_profile_browser > li:nth-child(${i}) > div > a > div > div > span > i`).classList.value

			//Let's pass the name and reaction!
			//tooo the searchReaction function!


			searchReaction(arrOfNames[i-1], reaction)
			//But wait?? We did not create it yet ??
		}
    }
}

//TASK 4:Let's create a searchReaction function that accepts a name and a reaction variable!
function searchReaction (name, reaction){

	// Now if the name's reaction is heart then do this one!

	if (reaction == classValueHeart){
		console.log(name , "-> Heart")
    }

	// And same goes for everyone!
	if (reaction == classValueLike){
		console.log(name , "-> Like")
    }
	if (reaction == classValueWow){
		console.log(name , "-> Wow")
    }
	if (reaction == classValueSad){
		console.log(name , "-> Sad")
    }
    if (reaction == classValueSad){
		console.log(name , "-> Haha")
    }
}

//Names of Reaction
// Sad = Brando James Supera
// Haha = Leanne Catherine V. Marino
// Wow = Charles Andre Franco Nieves
// Heart = Mckeen Mamonong Asma
// Like = Cjames Buot

// TASK 5: Knowing the reaction of a name (person)
getReaction("Mckeen Mamonong Asma")
getReaction("Rebecca Mamonong")
getReaction("Patrick Barcelo")
getReaction("Christian John Talo")
getReaction("Cjames Buot")
getReaction("Roger Axma")
getReaction("Denryl Brina")




getReaction("Hobie Untal")
getReaction("Mark Kaganovich")
getReaction("Kim Geverola")
