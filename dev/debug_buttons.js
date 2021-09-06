
function initializeDebugButtons(){
    let debugDiv='<div id="debug_buttons"> \
                    <div style="display: flex;flex-direction: row;"> \
                        <button>Left In/Out</button> \
                        <button>Right In/Out</button> \
                    </div>                                  \
                    <div style="display: flex;flex-direction: row;"> \
                        <button>Left center</button> \
                        <button>Right center</button> \
                    </div> \
                </div>';
    $('body').append(debugDiv);
    $("#debug_buttons").find("button").eq(0).click( function(){ toggleOut('left');} );
    $("#debug_buttons").find("button").eq(1).click( function(){ toggleOut('right');} );
    $("#debug_buttons").find("button").eq(2).click( function(){ toggleCenter('left');} );
    $("#debug_buttons").find("button").eq(3).click( function(){ toggleCenter('right');} );
    $("#debug_buttons").css({
        height: "5vh",
        position: "fixed",
        top: "0",
        right: "90vw",
        "max-width": "10vw",
        display: "flex",
        "flex-direction": "column",
        "background-color": "transparent"
    });
}


document.addEventListener('DOMContentLoaded', initializeDebugButtons);
