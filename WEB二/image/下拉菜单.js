/*
* @Author: Marte
* @Date:   2017-12-29 20:45:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-05 14:57:45
*/
window.onload=function(){

        var lis=document.getElementById('nav').childNodes;
        var zhuye=lis[1].childNodes[2];
        var xiangce=lis[3].childNodes[2];
        var rizhi=lis[5].childNodes[2];
        var haoyou=lis[7].childNodes[2];
        var ziliao=lis[9].childNodes[2];
        zhuye.style.cssText="display:none;"
        xiangce.style.cssText="display:none;"
        rizhi.style.cssText="display:none;"
        haoyou.style.cssText="display:none;"
        ziliao.style.cssText="display:none;"
        lis[1].onmouseover=function(){
            zhuye.style.cssText=""
        }
        lis[1].onmouseout=function(){
            zhuye.style.cssText="display:none;"
        }
        lis[3].onmouseout=function(){
            xiangce.style.cssText="display:none;"
        }
        lis[3].onmouseover=function(){
            xiangce.style.cssText=""
        }
        lis[5].onmouseover=function(){
            rizhi.style.cssText=""
        }
        lis[5].onmouseout=function(){
            rizhi.style.cssText="display:none;"
        }
        lis[7].onmouseover=function(){
            haoyou.style.cssText=""
        }
        lis[7].onmouseout=function(){
            haoyou.style.cssText="display:none;"
        }
        lis[9].onmouseover=function(){
            ziliao.style.cssText=""
        }
        lis[9].onmouseout=function(){
            ziliao.style.cssText="display:none;"
        }
        var mytext=new Array('小齿灵猫于1980年灭绝!',
            '新疆虎于1916年灭绝!',
            '中国犀牛于1922年灭绝!',
            '亚洲猎豹于1948年灭绝!',
            '台湾云豹于1972年灭绝!',
            '滇池蝾螈于1979年灭绝!',
            '白头鹳灭绝年代不详!',
            '镰翅鸡于2000年宣布灭绝!',
            '中国豚鹿1970年灭绝!'
            );
        var thisAd;
        thisAd=Math.floor((Math.random()*mytext.length));
        document.getElementById('text').value=mytext[thisAd];
        rotate();
        function rotate(){
            thisAd++;
            if(thisAd==mytext.length){
                thisAd=0;
            }
            document.getElementById('text').value=mytext[thisAd];
            document.getElementById('text').setAttribute('style','color:#880033;');
            setTimeout(rotate,2*1000);
        }
        //banner部分
        var back=document.getElementById('back');
        var next=document.getElementById('next');
        back.onmouseover=function(){
            back.style.cssText="opacity:1;"
        }
        back.onmouseout=function(){
            back.style.cssText="opacity:0.3;"
        }
        next.onmouseover=function(){
            next.style.cssText="opacity:1;"
        }
        next.onmouseout=function(){
            next.style.cssText="opacity:0.3;"
        }
var mypic=new Array('image/金丝猴.png','image/穿山甲.png','image/枯叶蝶.png','image/朱鹮.png','image/白鳍豚.png');
var tu=document.getElementById('tu');
    var thispic=0;
    next.onclick=function(){
        thispic++;
        if(thispic==mypic.length){
            thispic=0;
        }
        tu.src=mypic[thispic];
        return false;
    }
    back.onclick=function(){
        thispic--;
        if(thispic==-1){
            thispic=mypic.length-1;
        }
        tu.src=mypic[thispic];
        return false;
    }
    choosepic();
    function choosepic(){
        thispic=Math.floor((Math.random()*mypic.length));
        tu.src=mypic[thispic]
        ratu();
    }
    function ratu(){
        thispic++;
        if(thispic==mypic.length){
            thispic=0;
        }
        tu.src=mypic[thispic];
        setTimeout(ratu,3*1000);
    }
    document.getElementById('div1').style.cssText="display:none;"
    document.getElementById('open').onclick=function(){
        document.getElementById('div1').style.cssText="display: one;"
        document.getElementById('open').style.cssText="display:none;"
    }
    document.getElementById('ok').onclick=function(){
        document.getElementById('div1').style.cssText="display:none;"
        document.getElementById('open').style.cssText="display: one;"
    }
    var top1=document.getElementById('top1');
        var top2=document.getElementById('top2');
        var passward=document.getElementById('passward');
        var use=document.getElementById('use');
        var pass=document.getElementById("pass");
        var iphone=document.getElementById("iphone");
        var ward;
        use.focus();
        use.onfocus=function(){
            top1.innerHTML=" "
            if(use.value.length==0){
                top1.innerHTML="请输入用户名";
            }
        }
        use.onblur=function(){
            if(use.value.length==0){
                top1.innerHTML="用户名不能为空";
            }
            else{
                top1.innerHTML="用户名可用";
            }
        }
        iphone.onfocus=function(){
            top4.innerHTML=" "
            if(iphone.value.length==0){
                top4.innerHTML="请输入手机号";
            }
        }
        iphone.onblur=function(){
            if(iphone.value.length==0){
                top4.innerHTML="手机号不能为空";
            }
            if(iphone.value.length==11){
                top4.innerHTML="手机号可用";
            }
            else{
                top4.innerHTML="手机号不可用";
            }
        }
        passward.onfocus=function(){
            top2.innerHTML="请输入密码";

            if(passward.value.length!=0){
                passward.value=ward;
            }
        }
        passward.onblur=function(){
            ward=passward.value;
            if(passward.value.length!=0){
                passward.value="******";
                top2.innerHTML="密码可用";
            }
            if(passward.value.length==0){
                top2.innerHTML="密码不能为空";
            }

        }
        pass.onfocus=function(){
            top3.innerHTML="请再次输入密码";
            if(pass.value.length!=0){
                pass.value=ward2;
            }
        }
        pass.onblur=function(){
                ward2=pass.value;
                if(pass.value.length!=0){
                pass.value="******";
                if(ward2==ward){
                    top3.innerHTML="密码正确";
                }
            }

                if(ward2!=ward){
                    top3.innerHTML="密码不正确";
                }}
                document.getElementById('ok').onclick=function(){
                    use.focus();
                    pass.value="";
                    passward.value="";
                    use.value="";
                    ward="";
                    ward2="";
                    top1.innerHTML="";
                    top2.innerHTML="";
                    top3.innerHTML="";
                    top4.innerHTML="";
                    document.getElementById('div1').style.cssText="display:none;"
                    document.getElementById('open').style.cssText="display: one;"
                };
                document.getElementById('no').onclick=function(){
                    use.focus();
                    pass.value="";
                    passward.value="";
                    use.value="";
                    ward="";
                    ward2="";
                    top1.innerHTML="";
                    top2.innerHTML="";
                    top3.innerHTML="";
                    top4.innerHTML="";
                    document.getElementById('div1').style.cssText="display:none;"
                    document.getElementById('open').style.cssText="display: one;"
                }
                document.getElementById('open').style.cssText="display:none;"
                setTimeout(open,3*1000);
                function open(){
                    document.getElementById('open').style.cssText="display: one;"
                }

}