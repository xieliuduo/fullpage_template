(function(win,doc){
    win.addEventListener('resize',change,false);
    function change(){
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth*20/320+'px';
    }
    change();
})(window,document);