const toggleOut = (position) => {
    if ( document.getElementById(position).classList.contains('out') )
        document.getElementById(position).classList.remove('out');
    else
        document.getElementById(position).classList.add('out');
    //If the character was centered remove that class, since it is no longer at the center
    if(document.getElementById(position).classList.contains('center'))
        document.getElementById(position).classList.remove('center');
};


const toggleCenter = (position) => {
    if ( document.getElementById(position).classList.contains('center') )
        document.getElementById(position).classList.toggle('center');
    else
        document.getElementById(position).classList.add('center');
    //If the character was out remove that class, since it is no longer out of the scene 
    if(document.getElementById(position).classList.contains('out'))
        document.getElementById(position).classList.remove('out');
};
$( run )
var textTimer, fullText, currentOffset;

function run(){
    toggleCenter("left");
    Speak("Peter","Hey! IT guy wait!. My <strong style='color: Red;'>internet <i>connection<i> </strong> has failed, SOLVE IT! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

function Speak(person, text) {
    $("#name").html(person);
    console.log(person);
    console.log($("#name").html());
    fullText = text;
    currentOffset = 0;
    textTimer = setInterval(onTick, 100);
    $(".dialog").click(function(){ complete();});
}

function onTick() {
    currentOffset++;

    if(fullText[currentOffset]=="<"){
        while(fullText[currentOffset]!=">"){
            currentOffset++;
        }
    }


    if (currentOffset == fullText.length) {
        complete();
        return;
    }
    var text = fullText.substring(0, currentOffset);
    $("#message").html(text);
}

const complete = () => {
    clearInterval(textTimer);
    textTimer = null;
    $("#message").html(fullText);
    $("#name").html("Peter");
}




const changeHTMLbyID = (id,content) =>{
    console.log($(id).html());
    $(id).html(content);
};
