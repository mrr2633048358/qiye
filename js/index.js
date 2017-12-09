window.onload=function(){
	/*let banbox=document.getElementsByClassName('banner')[0];
	let banpic=document.getElementsByClassName('pic')[0];
	let banli=banpic.getElementsByTagName('li');
	let banbut=document.getElementsByClassName('nav-center')[0];
	// console.log(banbut);
	let butli=banbut.getElementsByTagName('li');
	let t=setInterval(banfn,2000);
	banbox.onmouseover=function(){
		clearInterval(t);
	}
	banbox.onmouseout=function(){
		t=setInterval(banfn,2000);
	}
	let num=0;
	function banfn(){
		num++;
		if(num==4){
			num=0;
		}
		for(let i=0;i<banli.length;i++){
			banli[i].className='';
			butli[i].className='';
		}
		banli[num].className='li';
		butli[num].className='an';
	}
	for(let i=0;i<butli.length;i++){
		butli.onclick=function(){
			banli[num].className='';
			butli[num].className='';
			banli[i].className='li';
			butli[i].className='an';
			num=i;
		}
	}*/


	let banbox=$('.pic li');
	let butli=$('.nav-center li');
	let t=setInterval(banfn,2000);
	banbox.onmouseover=function(){
		clearInterval(t);
	}
	banbox.onmouseout=function(){
		t=setInterval(banfn,2000);
	}
	let num=0;
	function banfn(){
		num++;
		if(num==4){
			num=0;
		}

		banbox.css({opacity: 0,	zIndex: 0});
		butli.css({background: '#333',width:' 6px',height: '6px'});
		banbox.eq(num).css({opacity: 1,	zIndex: 1});
		butli.eq(num).css({background: '#fff',width: '12px',height: '12px'});
		/*for(let i=0;i<banli.length;i++){
			banli[i].className='';
			butli[i].className='';
		}
		banli[num].className='li';
		butli[num].className='an';*/
	}
	butli.on('click',function(){
		banbox.css({opacity: 0,	zIndex: 0});
		butli.css({background: '#333',width: '6px',height: '6px'});
        var index = $(butli).index($(this));
		banbox.eq(index).css({opacity: 1,	zIndex: 1});
		butli.eq(index).css({background: '#fff',width: '12px',height: '12px'});
		num=index;
	})
	/*for(let i=0;i<butli.length;i++){
		butli.onclick=function(){
			banli[num].className='';
			butli[num].className='';
			banli[i].className='li';
			butli[i].className='an';
			num=i;
		}
	}*/

	// gk
	let gk=document.getElementsByClassName('list-son1');
	let gkpic=document.getElementsByClassName('main-box');
	// console.log(gk.length);
	// let num;
	for(let j=0;j<gkpic.length;j++){
		gk[j].onclick=function(){
			for(let i=0;i<gk.length;i++){
				gkpic[i].className='main-box';
				gk[i].className='list-son1';
			}
			gk[j].className='list-son1 son';
			gkpic[j].className='main-box  gkxxk';
		}	
	}
	// wen
	let wen=document.getElementsByClassName('list-son');
	let wenpic=document.getElementsByClassName('linst-right');
	// console.log(wenpic.length);
	// let num;
	for(let j=0;j<wenpic.length;j++){
		wen[j].onclick=function(){
			for(let i=0;i<wen.length;i++){
				wenpic[i].className='linst-right';
				wen[i].className='list-son';
			}
			wen[j].className='list-son son';
			wenpic[j].className='linst-right  gkxxk';
		}	
	}




	// shouban
	let line2=document.querySelector('.line2s');
	let line=document.querySelectorAll('.line2-pic');
	let linew=line[0].offsetWidth;
	console.log(linew,line.length,line2);
	let now=0;
	let next=0;
	function linefn(){
		next=now+1;
		if(next>=line.length){
			next=0;
		}
		line2.style.left=0;
		animate(line2,{left:-linew},linear,function(){
			line.appendChild('line[now]');

		});
		now=next;
	}


	let mibox=$('.line2');
	let button=$('.right1');
	let butL=button.eq(1);
	let butR=button.eq(0);
	let box=$('.line2s');
	let boxs=box.children();
	let sons=boxs.length;
	let sonw=boxs.outerWidth(true);
	console.log(sons,sonw);
	let num1=0;
	let mit;
	$(butR).on('click',function(){
		mifn2();
		return;
	})
	$(butL).on('click',function(){
		mifn1();
		return;
	})
	mit=setInterval(mifn,2000);
	mibox.hover(function(){
		clearInterval(mit);
	},function(){
		mit=setInterval(mifn,2000);
	})
	function mifn(){
		if(num1==0){	
			mifn1();
		}
		else if(num1==1){
			mifn2();
		}
	}
	function mifn1(){
		if(num1==1){
			return;
		}
		num1++;
		butL.css({opacity:0.5})
		butR.css({opacity:1})
		box.animate({left:-(4*sonw+15)}, 1000);
	}
	function mifn2(){
		if(num1==0){
			return;	
		}
		num1--;
		butR.css({opacity:0.5})
		butL.css({opacity:1})
		box.animate({left:0}, 1000);
	}

}
