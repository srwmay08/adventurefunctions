/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid",
	"crab king"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
	"flaming sword of fire",
	"holy water sprinkler"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to",
	"abmushed",
	"tickled"
];

var demeanor = [ 
	"morally bad",
	"angry",
	"corrupted",
	"loathsome",
	"stinking"
];

var support = [
	"band of merry men",
	"army of knights",
	"faithful serving wench",
	"friend One Legged Hob the stable boy"
]



var advButton = document.getElementById("nadv");
var adventure = document.getElementById("adventure");

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/
function choose(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

function advRand() {
	var heroGender = Math.random() > 0.5 ? "hero" : "heroine";
	var chosenMonster = choose(monsters);
	var chosenWeapon = choose(weapons);
	var chosenAction = choose(actions);
	var chosenDemeanor = choose(demeanor);
	var chosenSupport = choose(support);
	if (heroGender == "hero") {
		var nounGender = "his";
	} else if (heroGender == "heroine") {
		var nounGender = "her";
	}
	var output = "Our " +
	heroGender +
	" along with " +
	nounGender +
	" " +
	chosenSupport +
	" and " +
	chosenWeapon +
    " " +
	chosenAction +
	" the " + 
	chosenDemeanor +
	" " +
	chosenMonster +
	"!";
	adventure.innerHTML = output;
	console.log("Does my button work?");
}

advRand();

advButton.onclick = advRand;


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
