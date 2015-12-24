/*    --------------------------------------------------- *\
        Interface
\*    --------------------------------------------------- */
module UI{
    var interfaceCanvas = null;
    var fields = [];
    
    /*    --------------------------------------------------- *\
            [function] isInputEnabled()
    
            * Check si l'input sur une GUI est activé *
    
            Return: true, false
    \*    --------------------------------------------------- */
    export function isInputEnabled(){
        var focus = false;
        for (var i = fields.length - 1; i >= 0; i--) {
            if(fields[i].isFocused(null)){
                focus = true;
            }
        }

        return focus;
    }

    /*    --------------------------------------------------- *\
            [function] getUsedCanvas()
    
            * Return the used canvas for interfaces *
    
            Return: interfaceCanvas
    \*    --------------------------------------------------- */
    export function getUsedCanvas(){
        return interfaceCanvas;
    }

}