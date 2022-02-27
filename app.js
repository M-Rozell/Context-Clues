
$(document).ready(function () {

    var friends = ["Cat", "Rachel", "Pat", "Tommy", "Oliver"];

    var locations = ["St. Louis", "New Orleans", "Nashville", "Chattanooga", "Atlanta",
        "Athens", "Ashville", "Charlotte", "Bryson City", "Chicago"];

    var wepons = ["Stick", "Coffee Cup", "RCP 90", "Springfield 9mm", "Coffee Cup",
        "Sissors", "Fork", "Man O War", "Box Cutter", "Lung Cancer",
        "Rocks", "Pillow", "Rabid Possum", "Bottle Opener", "Plastic Bag",
        "Sock", "Expanding Foam", "Log", "Gallon of Worms", "The Void of Space"]

    for (var i = 1; i < 101; i++) {
        var $h3 = $("<h3>" + "Accusation " + [i] + ":" + "</h3>");
        $($h3).appendTo(".firstDiv").css({
            "cursor": "pointer",
            "user-select": "none"
        });

        $h3.click(function () {
            return thingsForMessage(i++);
        })
    }
            
    function thingsForMessage() {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var wepon = wepons[i % 20]

        function message() {
            alert("I accuse " + friend + ", with the " + wepon + " in the " + location + "!");
        }
        return message();
    }
});

//thingsForMessage(i);
//Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!