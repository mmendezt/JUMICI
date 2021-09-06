
var language;
var scene;
$(main);

async function main(){

    $.getJSON('languages/english.json',function (data){language=data;});
    while(language==undefined){
        console.log('Waiting for language to load');
        await new Promise(resolve => setTimeout(resolve,300));
    }

    var urlSearchParams = new URLSearchParams(window.location.search);
    if(urlSearchParams.has('scene')){
        var sceneName = urlSearchParams.get('scene');
        var scene = undefined;
        var sceneData = undefined;        
        
        $.getJSON('scenes/'+sceneName+'.json',function (data){sceneData=data;});
        while(sceneData==undefined){
            console.log('Waiting for scene to load');
            await new Promise(resolve => setTimeout(resolve,300));
        }

        initializeActions();
        scene = new Scene(sceneData);
        scene.setActions(actions);
        scene.run();
        console.log('Everyting loaded correctly');
    }
    else{
        console.log('No scene name parameter on URL')
    }




    // sceneOne.setActions(actions);
    // sceneOne.setNextStep(activateDialogView.name,'office1.jpg')
    // sceneOne.setNextStep(loadCharacter.name,['left', 'char1.png'])
    // sceneOne.setNextStep(loadCharacter.name,['right', 'char2.png'])
    // sceneOne.setNextStep(toggleCenter.name,"left");
    // sceneOne.setNextStep(showMessage.name,[0,0]);
    // sceneOne.setNextStep(toggleCenter.name,"left");
    // sceneOne.setNextStep(toggleOut.name,"right");
    // sceneOne.setNextStep(showMessage.name,[0,1]);
    // sceneOne.setNextStep(toggleOut.name,"both");
    // sceneOne.setNextStep(deactivateDialogView.name,"");
    // sceneOne.setNextStep(activateTestView.name,[0,0]);
    // sceneOne.setNextStep(getTestAnswer.name,"");
    // sceneOne.setNextStep(deactivateTestView.name,[0,0]);
    // sceneOne.setNextStep(activateDialogView.name,'office1.jpg')
    // sceneOne.setNextStep(toggleOut.name,"both");
    // sceneOne.setNextStep(showMessage.name,[0,2]);
    // sceneOne.setNextStep(showMessage.name,[0,3]);
    // sceneOne.setNextStep(toggleOut.name,"left");
    // sceneOne.setNextStep(changeBackground.name,"office2.jpg");
    // sceneOne.setNextStep(loadCharacter.name,['left', 'char3.png'])
    // sceneOne.setNextStep(toggleOut.name,"left");
    // sceneOne.setNextStep(showMessage.name,[0,4]);
    // sceneOne.setNextStep(showMessage.name,[0,5]);
    // sceneOne.setNextStep(showMessage.name,[0,6]);
    // sceneOne.setNextStep(toggleOut.name,"both");
    // sceneOne.setNextStep(deactivateDialogView.name,"");
    // sceneOne.setNextStep(activateTestView.name,[0,1]);
    // sceneOne.setNextStep(getTestAnswer.name,"");
    // sceneOne.setNextStep(deactivateTestView.name,"");



    // download(JSON.stringify(sceneOne),sceneOne.name + '.json', 'text/plain');
}




