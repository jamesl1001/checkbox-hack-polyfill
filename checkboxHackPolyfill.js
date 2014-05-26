/*
    checkbox-hack-polyfill by JaL Productions
    http://jalproductions.co.uk/
    https://github.com/jamesl1001/checkbox-hack-polyfill
*/

function checkboxHackPolyfill(toggleLabelId) {
    window.onload = function() {
        var toggleLabel = document.getElementById(toggleLabelId);
        var toggleState = false;

        toggleLabel.attachEvent('onclick', function() {
            if(toggleState) {
                document.body.className = document.body.className.replace(' checkbox--checked', '');
                toggleState = false;
            } else {
                document.body.className += ' checkbox--checked';
                toggleState = true;
            }
        });
    }
}