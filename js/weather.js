function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector('#forecast').style.display = "block";

    //Set default location if one isn't provided
    let location;
    //default location Ann Arbor
    location = document.querySelector("#location").value;
    if (location == "") {
        location = "Ann Arbor, US";
        console.log("Location is : " + location);
    }
    
    console.log("Location is : " + location);
   

    //set default temperature format if one isn't provided
    let format;
        format = "imperial";
        if(document.querySelector("#fahrenheit").checked) {
            format = "imperial";
        }
        else if(document.querySelector("#celcius").checked) {
            format = "metric";
            
        }
    // Your code here.
    

    //set the query 
    let query; 
    keyhw = "04d72a5ec79e2e14a507f103851831aa";
	


    if (Number.isInteger(parseInt(location))){
        console.log("Using zip code");
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&APPID=" + keyhw + "&units=" + format;
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + keyhw + "&units=" + format;
        console.log("Using city name");
    }
    console.log("Query is :" + query);


  

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = json["name"];
		temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
		tempImg.src = "http://openweathermap.org/img/wn/"+ json["weather"][0]["icon"] + ".png";
		tempImg.alt = "Weather icon for "+ json["weather"][0]["description"];
        console.log("updated weather values should now be displayed")
    });
    

}
