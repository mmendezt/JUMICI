const toggleOut = (position) => {
    let character = document.getElementById(position);
    character.classList.toggle('out');
    //If the character was centered remove that class, since it is no longer at the center
    if(character.classList.contains('center'))
        character.classList.remove('center');

    return new Promise(resolve => setTimeout(function(){resolve();} ,1300));
};

const toggleCenter = (position) => {
    let character = document.getElementById(position);
    character.classList.toggle('center');
    //If the character was out remove that class, since it is no longer out of the scene 
    if(character.classList.contains('out'))
        character.classList.remove('out');

    return new Promise(resolve => setTimeout(function(){resolve();},1300));
};

//Speak Functions
const showMessage = async (args) => {
    $('#message').html('<span id="visibleMessage"></span><span id="blankedMessage"></span>');
    let currentOffset = 0;
    let markUpArray = [];
    let currentDialog = language.sceneArray[args[0]].dialog[args[1]];
    let fullText = currentDialog.message;
    $("#title").html(currentDialog.speaker+' says:');
    $(".dialog").click(function(){$("#message").html(fullText);});
    do{
        await new Promise(resolve => setTimeout(resolve,50));
        //this function can be implemented here to reduce the amount of functions in the script
        currentOffset = displayNextCharacter(currentOffset,fullText,markUpArray);
    }while(currentOffset<fullText.length)
    return new Promise(resolve => $("#canvas").click(resolve));
}
const displayNextCharacter = (currentOffset,fullText,markUpArray) =>{
    currentOffset++;
    if($("#message").html()==fullText){//If the message is complete return complete text length
        return  fullText.length;
    }

    if(fullText[currentOffset]=="<" && fullText[currentOffset+1]=="/"){
        markUpArray.pop();
        do{
            currentOffset++;
        }while(fullText[currentOffset]!=">");
        currentOffset++;
    }

    if(fullText[currentOffset]=="<" && fullText[currentOffset+1]!="/"){
        let markup = "";
        do{            
            markup+=fullText[currentOffset];
            currentOffset++;
        }while(fullText[currentOffset]!=">");
        markup+=fullText[currentOffset];
        currentOffset++;
        markUpArray.push(markup);
    }

    if (currentOffset == fullText.length) {
        $("#message").html(fullText);
        return;
    }

    var text = fullText.substring(0, currentOffset);
    $("#visibleMessage").html(text);
    if(markUpArray.length>0){
        $("#blankedMessage").html(markUpArray.toString().replace(",","")+fullText.substring(currentOffset, fullText.length));
    }else{
        $("#blankedMessage").html(fullText.substring(currentOffset, fullText.length));
    }
    return currentOffset;
}

var actions;
function initializeActions(){
    actions = new Map();    
    actions.set(toggleOut.name,toggleOut);
    actions.set(toggleCenter.name, toggleCenter);
    actions.set(showMessage.name, showMessage);
}