
$(document).ready(function () {

    var friends = ["Cat", "Rachel", "Pat", "Tommy", "Oliver"];

    var locations = ["St. Louis", "New Orleans", "Nashville", "Chattanooga", "Atlanta",
        "Athens", "Ashville", "Charlotte", "Bryson City", "Chicago"];

    var weapons = ["Stick", "Coffee Cup", "RCP 90", "Springfield 9mm", "Coffee Cup",
        "Sissors", "Fork", "Man O War", "Box Cutter", "Lung Cancer",
        "Rocks", "Pillow", "Rabid Possum", "Bottle Opener", "Plastic Bag",
        "Sock", "Expanding Foam", "Log", "Gallon of Worms", "The Void of Space"]

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>" + "Accusation " + [i] + ":" + "</h3>");

        $($h3).appendTo(".firstDiv").css({
            "cursor": "pointer",
            "user-select": "none"
        });

        $h3.click(thingsForMessage(i))
    }

    function thingsForMessage(j) {
        
        var friend = friends[j % 5];
        var location = locations[j % 10];
        var weapon = weapons[j % 20];

         function message () {
            alert("Accusation " + [j] + ":" + " I accuse " + friend + ", with the " + weapon + " in " + location + "!");
        };
        return message;
    }
});





