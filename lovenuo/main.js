// JavaScript Document
var i=0;
window.onload=function(){
	var iNO = document.getElementById("iNO");
	var iOK = document.getElementById("iOK");
	var iTEXT = document.getElementById("iTEXT");
	iNO.onclick=function(){
		i++;
		if(i==1){
	   		iTEXT.innerHTML = "~ 一生一世爱你 ~";
		}else if(i==2){
		   	iTEXT.innerHTML = "~ 諾最好啦 ~";  		
		}else if(i==3){
		   	iTEXT.innerHTML = "~ 永远喜欢諾 ~";
		}else if(i==4){
			iTEXT.innerHTML = "~ 永远喜欢諾+2 ~";   		
		}else if(i==5){
			iTEXT.innerHTML = "~ 永远喜欢諾+3 ~";
		}else if(i==6){
			iTEXT.innerHTML = "~ 永远喜欢諾+4 ~";
		}else if(i==7){
			iTEXT.innerHTML = "~ 工资全上交 ~";
			i=0;
		}

	}
	iOK.onclick=function(){
		iTEXT.innerHTML = "吼开心啊，爱你呦諾！~~~";
	}
}