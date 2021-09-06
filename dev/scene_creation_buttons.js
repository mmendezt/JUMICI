function initializeSceneButtons(){
    let sceneDiv='<div id="scene_buttons"> \
                    <div style="display: flex;flex-direction: row;"> \
                        <button>Create Scene</button> \
                    </div>                                  \
                    <div style="display: flex;flex-direction: row;"> \
                        <button>Load Scene</button> \
                    </div> \
                    <div style="display: flex;flex-direction: row;"> \
                    <button>Load Language</button> \
                </div> \
                </div>';
    $('body').append(sceneDiv);
    $("#scene_buttons").find("button").eq(0).click( function(){ console.log('Create Scene');} );
    $("#scene_buttons").find("button").eq(1).click( function(){ console.log('Load Scene');} );
    $("#scene_buttons").find("button").eq(2).click( function(){ $.getJSON('/languages/english.json',function (data){language=data;});} );
    $("#scene_buttons").css({
        height: "5vh",
        position: "fixed",
        top: "0",
        right: "10vw",
        "max-width": "10vw",
        display: "flex",
        "flex-direction": "column",
        "background-color": "transparent"
    });
}


document.addEventListener('DOMContentLoaded', initializeSceneButtons);


function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}