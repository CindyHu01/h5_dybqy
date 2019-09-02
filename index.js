window.onload = function(){
    var expandBtn = document.getElementById('expand-btn');
    var statement = document.getElementById('statement');
    var submitBtn = document.getElementById('submitBtn');
    var canva = document.getElementById('canva');

    var startY = 0;
    var endY = 0;
    var moveY = 0;
    var submitDisp = false;

    submitBtn.onclick = function(){
        window.location.href = "https://mbinvest.tebon.com.cn/app_share/screenshot/hxApp.html";
    }

    expandBtn.onclick = function(ev){
        if(expandBtn.className == 'closed'){
            expandBtn.classList.remove('closed');
            expandBtn.classList.add('open');
            statement.classList.remove('hidden');
        }else if(expandBtn.className == 'open'){
            expandBtn.classList.remove('open');
            expandBtn.classList.add('closed');
            statement.classList.add('hidden');
        }
    }

    document.body.ontouchstart = function(ev){
        startY = ev.touches[0].pageY;
    }
    document.body.ontouchmove = function(ev){
        if(submitDisp){
            return;
        }
        endY = ev.touches[0].pageY;
        moveY = endY - startY;
        if(moveY<0){
            submitBtn.classList.add('fixed');
            submitDisp = true;
            document.body.ontouchmove = null;
            document.body.ontouchstart = null;
            canva.classList.remove('hidden');
        }
    }
}