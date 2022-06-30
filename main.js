var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start()
} 
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if(content=="selfie")
    {
        console.log(content);
speak();
    }
}
    
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 1 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        img_id="selfie_1"
        speak_data = "Taking your next Selfie in 8 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
take_snapshot();

save();
    },8000);

    setTimeout(function(){
        img_id="selfie_2"
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot();
        
        save();
            },5000);

            setTimeout(function(){
                img_id="selfie_3"

                take_snapshot();
                speak_data = "Taking your next Selfie in 10 seconds";
                var utterThis = new SpeechSynthesisUtterance(speak_data);
                save();
                    },10000);
        }

        
        function take_snapshot(){
            console.log(img_id)
            Webcam.snap(function(data_uri){
                if(img_id==selfie_1 ){
                document.getElementById("result").innerHTML='<img id="selfie_1" src="'+data_uri+'"/>';}

                if(img_id==selfie_2 ){
                    document.getElementById("result").innerHTML='<img id="selfie_2" src="'+data_uri+'"/>';}

                    if(img_id==selfie_3 ){
                        document.getElementById("result").innerHTML='<img id="selfie_3" src="'+data_uri+'"/>';}
            });
        }
        function save(){
            link=document.getElementById("link");
            image=document.getElementById("selfie.m").src;
        link.href=image;
        link.click();
        }
