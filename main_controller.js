
var language;
$(main);

async function main(){
    $.getJSON('/JUMICI/languages/english.json',function (data){language=data;});
    while(language==undefined){
        console.log('waiting for language to load');
        await new Promise(resolve => setTimeout(resolve,300));
    }
    initializeActions();
    //sceneOne = new Scene(window.prompt("Input Scene name"));
    var sceneOne;
    sceneOne = new Scene('One');
    sceneOne.setActions(actions);
    sceneOne.setNextStep(toggleCenter.name,"left");
    sceneOne.setNextStep(showMessage.name,[0,0]);
    sceneOne.setNextStep(toggleCenter.name,"left");
    sceneOne.setNextStep(toggleOut.name,"right");
    sceneOne.setNextStep(showMessage.name,[0,1]);
    sceneOne.setNextStep(toggleOut.name,"left");
    sceneOne.setNextStep(toggleOut.name,"right");

    sceneOne.run();

    // download(JSON.stringify(sceneOne),sceneOne.name + '.json', 'text/plain');
    // let dialogEnglish=new Object;
    // dialogEnglish.sceneArray = new Array();

    // dialogEnglish.sceneArray[0] = new Object;
    // dialogEnglish.sceneArray[0].dialog = new Array();
    // dialogEnglish.sceneArray[0].dialog[0]= new Object();
    // dialogEnglish.sceneArray[0].dialog[0].speaker='Peter';
    // dialogEnglish.sceneArray[0].dialog[0].message='Hey i need you to fix my internet connection';
    // dialogEnglish.sceneArray[0].dialog[1]= new Object();
    // dialogEnglish.sceneArray[0].dialog[1].speaker='Karen';
    // dialogEnglish.sceneArray[0].dialog[1].message='Yeah, same';
    
    // dialogEnglish.sceneArray[1] = new Object;
    // dialogEnglish.sceneArray[1].dialog = new Array();
    // dialogEnglish.sceneArray[1].dialog[0]= new Object();
    // dialogEnglish.sceneArray[1].dialog[0].speaker = 'Gary';
    // dialogEnglish.sceneArray[1].dialog[0].dialog = 'Yoooooooo internet is down again fix it please';
    // download(JSON.stringify(dialogEnglish),sceneOne.name + '.json', 'text/plain');
}




