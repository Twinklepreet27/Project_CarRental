// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk6z_rGwADtAIR7dFcI4A1AeGijbzFI2M",
    authDomain: "javascirptcarrental.firebaseapp.com",
    databaseURL: "https://javascirptcarrental.firebaseio.com",
    projectId: "javascirptcarrental",
    storageBucket: "",
    messagingSenderId: "392470545315",
    appId: "1:392470545315:web:32095d0c4a7c02db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var locationName = ["Vancouver", "Richmond", "Surrey"];
var carname = ["Alfa Romeo Montreal", "Audi A4", "BMW i8", "Chevrolet Cruze", "Ford Focus",
    "Tesla Model S", "Jeep Compass", "Lexus LFA", "Toyota Corolla", "Honda Civic",
    "Jeep Wrangler", "Jaguar XF", "Ford F150", "Chevrolet Impala", "Tesla Model 3",
    "Mazda RX-8", "Mercedes-Benz C-class", "Nissan Rogue", "Toyota Prius", "Chevrolet Malibu",
    "Chevrolet Camaro SS", "Jaguar XJ", "Mazda 3", "Ford Mustang", "Nissan Micra",
    "Subaru Legacy", "Toyota Camry", "Jeep Cherokee", "Tesla Model X", "Mercedes-Benz S-class"];
var VIN = ["HEHKX9E5NEPF9X6E71", "5129H42K61FX914P6", "P7PEE916675HF3HP4", "1FX66E6ENPXQPEEHN", "1HNF6HNK9QK6Q6NX4",
    "F3XK49KKP263X6F4Q", "X35Q76E45HKFF6EQ9", "76Q7K65HK67Q966N1", "FFQ2ENF6132211XP7", "3F13F559372FE9NE2",
    "E9KX9KPQ92734Q67P", "K9P7K7K75EQF2KFQ5", "1FQ4XEHK9KFX9729X", "199566XH4KN46F2NK", "5F6X9FP13E2K725HE",
    "66KXH6F2NN1H15HPH", "66QXH4QX39K459K34", "EQQ3PX43696P1Q6HF", "67PNKKE3QPQQ1K941", "32XEH9QX7N27QEN39",
    "HNN66QPFN241X5QXK", "N3F14NKQK9EKEKF29", "566221E66HNE456X9", "NQ4K443KQ7EX12363", "9N5622QE34FP319N9",
    "3XK1E2HHNP1X66QP6", "H1PKH6H9K42F3N644", "67Q2KK729H2N26QEF", "QXQ5PF4371HQ9F36F", "P3HNPF75475916F4F"];
var pricePerHour = [300.00, 180.59, 590.85, 180.90, 150.00, 400.00, 450.00, 480.00, 130.00, 130.00,
    500.00, 550.00, 350.00, 500.84, 300.00, 480.00, 280.00, 380.00, 300.00, 150.00,
    600.00, 700.00, 200.00, 580.00, 190.00, 230.00, 280.00, 380.00, 680.00, 900.00];
var color = ["Red", "Black", "Blue", "Red", "Blue", "White", "Red", "Black", "White", "Black",
    "White", "Silver", "Black", "Red", "White", "Red", "Black", "White", "Blue", "White",
    "Yellow", "Red", "Black", "Black", "White", "Black", "Blue", "Black", "Black", "White"];
var year = [2010, 2009, 2017, 2008, 2007, 2013, 2000, 2009, 2005, 2003,
    2005, 2008, 2013, 1980, 2018, 2015, 2000, 2017, 2018, 2005,
    2015, 1968, 2005, 2015, 2010, 2012, 2009, 2008, 2017, 2019];
var fuel = ["Gasoline", "Gasoline", "Electric", "Gasoline", "Electric", "Electric", "Gasoline", "Gasoline", "Gasoline", "Gasoline",
    "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Electric", "Gasoline", "Gasoline", "Gasoline", "Electric", "Gasoline",
    "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Gasoline", "Electric", "Gasoline"];
var classification = ["Auto", "Auto", "Auto", "Auto", "Auto", "Auto", "Manual", "Auto", "Auto", "Auto",
    "Manual", "Manual", "Manual", "Manual", "Auto", "Auto", "Manual", "Auto", "Auto", "Auto",
    "Auto", "Manual", "Auto", "Auto", "Manual", "Manual", "Auto", "Auto", "Auto", "Auto"];
var power = [400, 250, 600, 200, 150, 400, 160, 250, 80, 80,
    300, 250, 280, 350, 250, 350, 300, 200, 250, 150,
    450, 300, 90, 450, 110, 170, 190, 400, 400, 600];
var make = ["Alfa Romeo", "Audi", "BMW", "Chevrolet", "Ford", "Tesla", "Jeep", "Lexus", "Toyota", "Honda",
    "Jeep", "Jaguar", "Ford", "Chevrolet", "Tesla", "Mazda", "Mercedes-Benz", "Nissan", "Toyota", "Chevrolet",
    "Chevrolet", "Jaguar", "Mazda", "Ford", "Nissan", "Subaro", "Toyota", "Jeep", "Tesla", "Mercedes-Benz"];

var seating = [2, 4, 2, 5, 5, 4, 4, 3, 4, 4,
    5, 4, 5, 2, 4, 2, 4, 5, 4, 5,
    2, 2, 4, 4, 5, 5, 5, 5, 7, 4];


$("#btn-login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != null) {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            window.alert("Message: " + errorMessage);
        })
    } else {
        window.alert("Please fill the fields");
    }
});

function signUp() {
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if (email != "" && password != "" && cPassword != "") {
        if (password == cPassword) {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);
            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                window.alert("Message: " + errorMessage);
            });
        } else {
            window.alert("passwords do not match")
        }
    } else {
        window.alert("Please fill the fields");
    }
}

$("#btn-logout").click(function () {
    firebase.auth().signOut();
});

$("#btn-update").click(function () {
    var firstName = $("#fName").val();
    var lastName = $("#lName").val();;
    var phone = $("#phone").val();
    var gender = $("#gender").val();
    var address = $("#address").val();;

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if (firstName != "" && lastName != "" && phone != "" && gender != "" && address != "") {
        userData = {
            "firstname": firstName,
            "lastname": lastName,
            "phone": phone,
            "address": address,
            "gender": gender,
        };

        usersRef.set(userData, function (error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                window.alert("Message: " + errorMessage);
            } else {
                window.location.href = "home.html";
            }
        });
    } else {
        window.alert("Please fill all the fields. ");
    }
});


$("#add").click(function () {

    var rootReference = firebase.database().ref().child("Cars");
    var check = 0;

    for (var i = 0; i < 30; i++) {
        if (i == 10) {
            check = 1;

        } else if (i == 20) {
            check = 2;
        }
        var locationRef = rootReference.child(locationName[check]);
        var carRef = locationRef.child(carname[i]);

        var carData = {
            "carname": carname[i],
            "seating": seating[i],
            "price": pricePerHour[i],
            "classification": classification[i],
            "year": year[i],
            "fuel": fuel[i],
            "power": power[i],
            "make": make[i],
            "VIN": VIN[i]
        };
        carRef.set(carData, function (error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                window.alert("Message: " + errorMessage);
            } else {
                window.location.href = "home.html";
            }
        });
    }
});

$("#city").change(function () {

    var para = document.getElementById("resultpara");
    var selecte = $("#city").val();
    const dobject = firebase.database().ref().child("Cars").child(selecte + "/");
    dobject.on('value', gotData, errData);

    function gotData(data) {
        var cars = data.val();
        var keys = Object.keys(cars);

        var viewCarNames = [];
        var viewVIN = [];
        var viewSeating = [];
        var viewClassification = [];
        var viewFuel = [];
        var viewPrice = [];
        var viewPower = [];
        var viewYear = [];
        var viewMake = [];

        for (var k = 0; k < keys.length; k++) {
            var nameofcar = cars[keys[k]].carname;
            viewCarNames.push(nameofcar);
            var vinofcar = cars[keys[k]].VIN;
            viewVIN.push(vinofcar);
            var seatofcar = cars[keys[k]].seating;
            viewSeating.push(seatofcar);
            var classofcar = cars[keys[k]].classification;
            viewClassification.push(classofcar);
            var fuelofcar = cars[keys[k]].fuel;
            viewFuel.push(fuelofcar);
            var priceofcar = cars[keys[k]].price;
            viewPrice.push(priceofcar);
            var powerofcar = cars[keys[k]].power;
            viewPower.push(powerofcar);
            var yearofcar = cars[keys[k]].year;
            viewYear.push(yearofcar);
            var makeofcar = cars[keys[k]].make;
            viewMake.push(makeofcar);
        }

        $("#cardsOfCars").show();
        $("#" + viewCarNames[0]).show();

        var buttons = new Array();

        for (var j = 0; j < viewCarNames.length; j++) {
            if (j == viewCarNames.length - 1) {
                break;
            }
            var title = document.getElementById(j + 1 + "Title");
            title.innerHTML = viewCarNames[j];

            var images = document.getElementById(j + 1 + "Image");
            images.src = "design_files/images/carImages/" + viewCarNames[j] + ".jpg";

            var text = document.getElementById(j + 1 + "Text");
            text.innerHTML = "$ " + viewPrice[j] + " /day";
            text.style.fontWeight = "900";

            var net = document.createElement("div");
            text.appendChild(net);

            buttons[j] = document.createElement("button");
            buttons[j].id = viewCarNames[j];
            buttons[j].className = "btn btn-success";
            buttons[j].innerHTML = "View Details";

            buttons[j].onclick = function () {
                showAlert(this.id, selecte);
            };
            net.appendChild(buttons[j]);
        }
    }
    function errData(err) {
        console.log('Error!');
        console.log(err);
    }
});

function showAlert(number, locationName) {
    localStorage.setItem("carname", number);
    localStorage.setItem("locationName", locationName);
    window.location.href = "carDetails.html";
}




$("#getData").click(function () {
    $("#city").show();
});


function getUserInfo() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const dobject = firebase.database().ref().child("Users").child(user.uid);
            dobject.on('value', gotData, errData);

            function gotData(data) {
                var firstname = data.val().firstname;
                var lastname = data.val().lastname;
                var address = data.val().address;
                var gender = data.val().gender;
                var phone = data.val().phone;
                var email = user.email;

                var firstnames = document.getElementById("firstnames");
                firstnames.innerHTML = firstname;
                var lastnames = document.getElementById("lastnames");
                lastnames.innerHTML = lastname;
                var addresses = document.getElementById("addresses");
                addresses.innerHTML = address;
                var genders = document.getElementById("genders");
                genders.innerHTML = gender;
                var phones = document.getElementById("phones");
                phones.innerHTML = phone;
                var emails = document.getElementById("emails");
                emails.innerHTML = email;
            }
            function errData(err) {
                console.log(err);
            }
        } else {
        }
    });
}


function carDetails() {

    var getting = localStorage.getItem("carname");
    var getlocation = localStorage.getItem("locationName");
    const dobject = firebase.database().ref().child("Cars").child(getlocation + "/").child(getting);
    dobject.on('value', gotData, errData);

    function gotData(data) {
        var cars = data.val();
        var carnames = cars.carname;
        var vins = cars.VIN;
        var classifications = cars.classification;
        var fuels = cars.fuel;
        var makes = cars.make;
        var powers = cars.power;
        var prices = cars.price;
        var seatings = cars.seating;
        var years = cars.year;

        var nameofcar = document.getElementById("carnames");
        nameofcar.innerHTML = carnames;
        var vinofcar = document.getElementById("vins");
        vinofcar.innerHTML = vins;
        var classificationofcar = document.getElementById("classifications");
        classificationofcar.innerHTML = classifications;
        var fuelofcar = document.getElementById("fuels");
        fuelofcar.innerHTML = fuels;
        var makeofcar = document.getElementById("makes");
        makeofcar.innerHTML = makes;
        var powerofcar = document.getElementById("powers");
        powerofcar.innerHTML = powers;
        var priceofcar = document.getElementById("prices");
        priceofcar.innerHTML = prices;
        var seatingofcar = document.getElementById("seatings");
        seatingofcar.innerHTML = seatings;
        var yearofcar = document.getElementById("years");
        yearofcar.innerHTML = years;

        var imgs = document.getElementById("imageofcar");
        imgs.src = "design_files/images/carImages/" + carnames + ".jpg"
    }

    function errData(err) {
        console.log('Error!');
        console.log(err);
    }
}

function nextPage() {


    var starting = document.getElementById("startingDate").value;
    var ending = document.getElementById("endingDate").value;

    var date_diff_indays = function (date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    var days = date_diff_indays(starting, ending);

    if (days <= 0) {
        window.alert("Starting and ending dates are in wrong order!");
    } else {
        var gaddi = document.getElementById("carnames").innerHTML;
        localStorage.setItem("detailscarname", gaddi);
        var gaddivin = document.getElementById("vins").innerHTML;
        localStorage.setItem("detailsvin", gaddivin);
        var gaddiclassification = document.getElementById("classifications").innerHTML;
        localStorage.setItem("detailsclassification", gaddiclassification);
        var gaddifuel = document.getElementById("fuels").innerHTML;
        localStorage.setItem("detailsfuel", gaddifuel);
        var gaddimake = document.getElementById("makes").innerHTML;
        localStorage.setItem("detailsmake", gaddimake);
        var gaddipower = document.getElementById("powers").innerHTML;
        localStorage.setItem("detailspower", gaddipower);
        var gaddiprice = document.getElementById("prices").innerHTML;
        localStorage.setItem("detailsprice", gaddiprice);
        var gaddiseats = document.getElementById("seatings").innerHTML;
        localStorage.setItem("detailsseats", gaddiseats);
        var gaddiyear = document.getElementById("years").innerHTML;
        localStorage.setItem("detailsyear", gaddiyear);
        localStorage.setItem("days", days);
        localStorage.setItem("start", starting);
        localStorage.setItem("end", ending);



        window.location.href = "orderDetails.html";
    }



};

$("#reserveCar").click(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var userid = user.uid;

            var gaddi = localStorage.getItem("detailscarname");
            var gaddivin = localStorage.getItem("detailsvin");
            var gaddiclassification = localStorage.getItem("detailsclassification");
            var gaddifuel = localStorage.getItem("detailsfuel");
            var gaddimake = localStorage.getItem("detailsmake");
            var gaddipower = localStorage.getItem("detailspower");
            var gaddiprice = localStorage.getItem("detailsprice");
            var gaddiseats = localStorage.getItem("detailssetas")
            var gaddiyear = localStorage.getItem("detailsyear");
            var day = localStorage.getItem("days");
            var start = localStorage.getItem("start");
            var end = localStorage.getItem("end");


            // var cardno = document.getElementById("cardNumber").value;
            // var cardName = document.getElementById("cardName").value;
            var tot = gaddiprice * day;



            var rootReference = firebase.database().ref().child("Users");
            var locationRef = rootReference.child(userid).child("Rentals");
            var rentalInfo = {
                "carname": gaddi,
                "seating": gaddiseats,
                "price": gaddiprice,
                "classification": gaddiclassification,
                "year": gaddiyear,
                "fuel": gaddifuel,
                "power": gaddipower,
                "make": gaddimake,
                "VIN": gaddivin,
                "startingdate": start,
                "endingdate": end,
                "days": day,
                "totalPrice": tot
                // "cardnumber": cardno,
                // "carname": cardName
            };

            locationRef.set(rentalInfo, function (error) {
                if (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    window.alert("Message: " + errorMessage);
                }
                else {
                    window.alert("Reservation Done");
                    window.location.href = "home.html";
                }
            });

        } else {
            window.location.href = "signin.html";
        }
    });


});

function getTotalPrice() {
    var day = localStorage.getItem("days");
    var gaddiprice = localStorage.getItem("detailsprice");
    document.getElementById("totalPrice").innerHTML = (gaddiprice * day) + "";

}


function getHistory() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            const dobject = firebase.database().ref().child("Users").child(user.id).child("Rentals");
            dobject.on('value', gotData, errData);


            function gotData(data){

                var x = data.val();
                console.log(x);
            }
            function errData(err){
                
            }
        } else {

        }
    });
}




/*

function carDetails() {

    var getting = localStorage.getItem("carname");
    var getlocation = localStorage.getItem("locationName");
    const dobject = firebase.database().ref().child("Cars").child(getlocation + "/").child(getting);
    dobject.on('value', gotData, errData);

    function gotData(data) {
        var cars = data.val();
        var carnames = cars.carname;
        var vins = cars.VIN;
        var classifications = cars.classification;
        var fuels = cars.fuel;
        var makes = cars.make;
        var powers = cars.power;
        var prices = cars.price;
        var seatings = cars.seating;
        var years = cars.year;

        var nameofcar = document.getElementById("carnames");
        nameofcar.innerHTML = carnames;
        var vinofcar = document.getElementById("vins");
        vinofcar.innerHTML = vins;
        var classificationofcar = document.getElementById("classifications");
        classificationofcar.innerHTML = classifications;
        var fuelofcar = document.getElementById("fuels");
        fuelofcar.innerHTML = fuels;
        var makeofcar = document.getElementById("makes");
        makeofcar.innerHTML = makes;
        var powerofcar = document.getElementById("powers");
        powerofcar.innerHTML = powers ;
        var priceofcar = document.getElementById("prices");
        priceofcar.innerHTML = prices ;
        var seatingofcar = document.getElementById("seatings");
        seatingofcar.innerHTML = seatings;
        var yearofcar = document.getElementById("years");
        yearofcar.innerHTML = years;

        var imgs = document.getElementById("imageofcar");
        imgs.src = "design_files/images/carImages/" + carnames + ".jpg"
    }

    function errData(err) {
        console.log('Error!');
        console.log(err);
    }
}
*/





