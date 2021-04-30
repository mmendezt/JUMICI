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