import "./styles.css";

startFlight();

function startFlight() {
  let launchTime = 0;
  let index = 0;
  for (const interval of flyOrder()) {
    const parameters = {
      index,
      launchTime
    };

    setTimeout(function () {
      launchIt(parameters);
    }, launchTime * 1000);

    launchTime = launchTime + interval;
    index = index + 1;
  }

  //launchIt(launchTime);
}

function launchIt(parameters) {
  console.log("launchIt ", parameters);
  var hammer = document.createElement("div");
  hammer.style.position = "absolute";
  hammer.style.top = "50%";
  hammer.style.left = "0%";
  hammer.style.width = "2em";
  hammer.style.height = "2em";
  hammer.style.background = "cornflowerblue";
  hammer.style.animation = "1s forwards slidetoright";
  hammer.textContent = parameters.index + ":" + parameters.launchTime;
  document.body.appendChild(hammer);
}

function flyOrder() {
  return [1, 3, 1, 2, 4, 1];
}
