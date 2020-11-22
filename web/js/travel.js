var timer = null,
    index = 0,
    pics = byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId("prev"),
    next=byId("next"),
    size = pics.length;

//封装的get ID 方法
function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}


function slideImg(){
    var main = byId("main");
    // console.log(pics);

    var banner = byId("banner");
    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;

            if(index >= size){
                index = 0;
            }
            //console.log(index);
            changeImg();
        },3000);
    }

    main.onmouseover = function(){
        if(timer){
            clearInterval(timer);
        }
    }

    main.onmouseout();

    for(var d=0;d<size;d++){
        // console.log(d);
        dots[d].id=d;
        dots[d].onclick=function(){
            index=this.id;
            changeImg();
        }
    }
    next.onclick=function(){
        index++;
        if (index >= size) index = 0;
        changeImg();
    }

    prev.onclick=function(){
        index--;
        if(index<0) index=size-1;
        changeImg();
    }
}

function changeImg(){
    for(var i=0;i<size;i++){
        pics[i].style.display = "none";
        dots[i].className=""
    }
    pics[index].style.display = "block";
    dots[index].className="active";
}



slideImg();