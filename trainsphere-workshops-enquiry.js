function submitEnquiry() {

    let name = document.querySelector("#name").value.trim();
    let service = document.querySelector("#service").value;
    let days = document.querySelector("#days").value;

    if (name === "" || service === "" || days === "") {
        alert("Please fill all fields");
    }
    else if (!(Number(days) > 0)) {
        alert("Enter a valid number of days");
    }
    else {
        document.querySelector("#message").innerHTML =
        "Corporate Training & Workshop Enquiry Submitted Successfully!";
    }
}

let count = 0;
let updateTimer;
let offerTimer;

function startUpdates() {

    if (!updateTimer) {
        updateTimer = setInterval(function() {
            count++;

            document.querySelector("#status").innerHTML =
            "TrainSphere Workshop Update: " + count;

        }, 2000);
    }
}

function stopUpdates() {

    clearInterval(updateTimer);
    updateTimer = null;
}

function showOffer() {

    clearTimeout(offerTimer);

    document.querySelector("#status").innerHTML =
    "New Corporate Workshop Offer Coming Soon!";

    offerTimer = setTimeout(function() {

        document.querySelector("#status").innerHTML =
        "Special Team Training & Workshop Offer Available!";

    }, 3000);
}

function cancelOffer() {

    clearTimeout(offerTimer);

    document.querySelector("#status").innerHTML =
    "Corporate Workshop Offer Cancelled";
}
