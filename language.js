

var svg_german = document.getElementById("language-switch-german");
var svg_english = document.getElementById("language-switch-english");


var mission = document.getElementById("mission");
var vorstellung = document.getElementById("vorstellung");
var model = document.getElementById("three-js-model-text");



function german(){
svg_german.style.display = "none";
svg_english.style.display = "block";
//console.log("German")

//Text Mission Deutsch
mission.querySelector('h2').textContent = "Mission";
mission.querySelector('p').textContent = "Unsere Sekundärmission besteht darin, die Oberflächentemperatur des Waldes mithilfe einer Wärmebildkamera am CanSat zu erfassen und gleichzeitig die relative Luftfeuchtigkeit an zentralen Stellen im Wald zu messen. Dies sollte der frühzeitigen Erkennung von gefährdeten Waldgebieten dienen.";

//Text Vorstellung Deutsch
vorstellung.querySelector('h2').textContent = "Vorstellung";
vorstellung.querySelector('h3:nth-of-type(1)').textContent = "Der CanSat Wettbewerb";
vorstellung.querySelector('.splitInfo:nth-of-type(1) p').innerHTML = "Mithilfe eines Dosensatelliten, im englischen " + "<a href='https://www.cansat.de/'>" + "CanSat" + "</a>" + " genannt, testen und modellieren wir den Ablauf einer realen Raumfahrtmission. Am deutschen CanSat Wettbewerb haben wir uns bereits erfolgreich qualifiziert, bei dem wir unsere Ergebnisse präsentieren werden. Dieser Wettbewerb wird vom 11. bis zum 15. März 2024 in Bremen ausgetragen.";
vorstellung.querySelector('h3:nth-of-type(2)').textContent = "Das Life-Science Lab";
vorstellung.querySelector('.splitInfo:nth-of-type(2) p').innerHTML = "Unser Team setzt sich aus Teilnehmern der außerschulischen Förderung " + "<a href='https://www.life-science-lab.org/cms/'>" + "Heidelberger Life-Science Lab" + "</a>" + " zusammen, die als eigenständige Abteilung am Deutschen Krebsforschungszentrum besonders naturwissenschaftlich begeisterte Mittel- und Oberstufenschüler bis zum Abitur ideell fördert.";
vorstellung.querySelector('h3:nth-of-type(3)').textContent = "Unser Kernteam";

// Texte interaktives Modell Deutsch
model.textContent = "Unser CanSat";

}


function english(){
svg_german.style.display = "block";
svg_english.style.display = "none";
//console.log("English")

//Text Mission Englisch
mission.querySelector('h2').textContent = "Mission";
mission.querySelector('p').textContent = "Our secondary mission is about capturing the surface temperature of the forest using a thermal imaging camera attached to the CanSat, while simultaneously measuring the relative humidity at central locations within the forest. This was intended for the early detection of forest areas, at high risk of wild fires.";

//Text Vorstellung Englisch
vorstellung.querySelector('h2').textContent = "Introduction";
vorstellung.querySelector('h3:nth-of-type(1)').textContent = "The CanSat Competition";
vorstellung.querySelector('.splitInfo:nth-of-type(1) p').innerHTML = "Using a can-sized satellite, known as " + "<a href='https://www.cansat.de/'>" + "CanSat" + "</a>" + " in English, we test and model the process of a real space mission. We have already successfully qualified for the German CanSat Competition, where we will present our results. This competition will take place from March 11. to March 15. 2024, in Bremen.";
vorstellung.querySelector('h3:nth-of-type(2)').textContent = "The Life-Science Lab";
vorstellung.querySelector('.splitInfo:nth-of-type(2) p').innerHTML = "Our team consists of participants from the extracurricular program " + "<a href='https://www.life-science-lab.org/cms/'>" + "Heidelberger Life-Science Lab" + "</a>" + ", an independent department at the German Cancer Research Center that provides ideal support for science enthusiasts in middle and high school up to graduation.";
vorstellung.querySelector('h3:nth-of-type(3)').textContent = "Our Core Team";


// Texte interaktives Modell Englisch
model.textContent = "Our CanSat";
}



german();
