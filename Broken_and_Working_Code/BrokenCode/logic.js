$("#factButton").on("click", function() {
	
	var number = Math.floor((Math.random() * catFactArray.length));
	
	$("#factText").text(catFactArray[number])
})

var catFactArray = ["Grumpy was born on April 4, 2012", "Grumpy's unique look comes from feline dwarfism and an underbite", "Grumpy has a brother named Pokey", "Her favorite Friskies food is Savory Shreds"]

$("#textPink").on("click", function() {
	
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {

	$("#funText").css("color", "green")
})

$("#boxGrow").on("click", function() {
	
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})