if (typeof window.isElementVisible === 'undefined') {
    function isElementVisible(el) {
        var rect     = el.getBoundingClientRect(),
            vWidth   = window.innerWidth || doc.documentElement.clientWidth,
            vHeight  = window.innerHeight || doc.documentElement.clientHeight,
            efp      = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
                || rect.left > vWidth || rect.top > vHeight)
            return false;

        return (
              el.contains(efp(rect.left,  rect.top))
          ||  el.contains(efp(rect.right, rect.top))
          ||  el.contains(efp(rect.right, rect.bottom))
          ||  el.contains(efp(rect.left,  rect.bottom))
        );
    }
}
var imgNames = document.querySelectorAll("#irc_cc>div[data-item-id]");
imgNames.forEach(function(img){
    if(isElementVisible(img)){
        console.log(img.dataset);
    }
});
