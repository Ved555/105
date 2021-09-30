Webcam.set({width: 350, height: 350, image_format:'png', png_quality:100});
cam = document.getElementById("cam");
Webcam.attach(cam);
function Take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("captured").innerHTML ='<img id="pic" src="'+data_uri+'">'
    });
}
console.log("ml5 version: " , ml5.version);
ok = false;
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Fkxi-F7cj/model.json', modalloaded);
function modalloaded(){
    ok= true;
    console.log("modal is loaded");
}
function Identify(){
    image = document.getElementById('pic');
    classifier.classify(image, gotresults);
}
function gotresults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = "Object is: " +results[0].label;
        document.getElementById("object_accuracy").innerHTML = "Accuracy is: " +results[0].confidence.toFixed(3);
    }
}