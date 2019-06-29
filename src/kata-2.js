export function kata2 (obj, def, path) {
    
    if (path != undefined) {
        return safeAccess(obj,def,path);
    } else {
        return (p) => safeAccess (obj, def, p);
    }

    function safeAccess(obj,def,path) {
        var levels = path.split('.');
        var current = obj;
        for (var i = 0; i < levels.length; i++) {
            if (!current[levels[i]]) return def;
            current = current[levels[i]];
        }
        return current;
    }
}