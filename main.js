$("document").ready(function() {

    // Get a random number from 0 to size
    var getRandomNumber = function(size) {
        return Math.floor(Math.random() * size);
    };


    // Calculate distance between click event and target

    var getDistance = function(event, target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY + diffY));
    };

    // Get a string reporesenting the distance


    var getDistanceHint = function(distance) {
        if (distance < 40) {
            return("Boiling hot!");
        } else if (distance < 80) {
            return ("really hot!");
        } else if (distance < 140) {
            return ("hot");
        } else if (distance < 180) {
            return ("warm");
        } else if (distance < 460) {
            return ("cold");
          }else if (distance < 560) {
            return ("not as bad as freezing")
          }else {
            return ("freezing");
        }
    };


    // set up our variables

    var width = 800;
    var height = 800;
    var clicks = 0;

    // Create a random target location

    var target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };
    console.log(target);

    // Add a click handler to the img element


    $("#map").click(function(event) {
        clicks++;

        if (clicks === 10) {
          alert("Game over!!");
          return;
        }

        // get distance between click event and target
        var distance = getDistance(event, target);

        // Convert distance to a hint
        var distanceHint = getDistanceHint(distance);

        // Update the #distance element with the new hint
        $("#distance").text(distanceHint);

        // If the click was close enough tell they won
        if (distance < 30) {
            alert("Found the treasure in " + clicks + " clicks");
        }

    });

});
