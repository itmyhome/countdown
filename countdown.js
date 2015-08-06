sto = null;

 function _$(id) {
	return document.getElementById(id);
 }
 //start eg: 2014-12-1 12:00:00
 function getSeconds(endDate, nowDate) {
	var d = (new Date(endDate)).getTime() - (new Date(nowDate)).getTime(); 
	return d > 0 ? d : 0; 
 }
 /**
  * 启动函数 
  * @param endDate 结束时间 格式为2015/5/5 11:11:11
  * @param nowDate 当前时间 格式为2015/5/5 11:11:11
  */
 function run(endDate, nowDate) {
	var sec = getSeconds(endDate, nowDate)/1000;
	var	d = parseInt(sec/(60*60*24), 10);
	var	h = parseInt((sec/(60*60) - d*24), 10);
	var	m = parseInt(sec/60 - d*24*60 - h*60);
	var	s = parseInt(sec - d*24*60*60 - h*60*60 - m*60);
	var	timer = {
			d: d,
			h: h,
			m: m,
			s: s
		};
		
	toHTML(timer);
	
	var sto = setInterval(function() {
		timer = mulit(timer);
		if(timer.d === -1) {
			clearInterval(sto);
		} else {
			toHTML(timer);
		}
	},1000);
 }
 function mulit(tmpTimer) {
	var t = tmpTimer;
	var	d = t.d;
	var	h = t.h;
	var	m = t.m;
	var	s = t.s;
	if(s > 0) {
		s -= 1;
	}else {
		m -= 1;
		s = 59;
	}
	if(m < 0) {
		h -= 1;
		m = 59;
	}
	if(h < 0) {
		d -= 1;
		h = 23;
	}
	return {
			d: d,
			h: h,
			m: m,
			s: s
			};
 }
 function toHTML(timer) {
	var t = timer;
	if(t.d === 0 && t.m === 0 && t.s === 0){
		$("#gif_hm").hide();
		$("#t_hm").show();
	}
	if(t.d < 10){
		$("#t_d").html("0"+t.d.toString());
	}else{
		$("#t_d").html(t.d);
	}
	if(t.h < 10){
		$("#t_h").html("0"+t.h.toString());
	}else{
		$("#t_h").html(t.h);
	}
	if(t.m < 10){
		$("#t_m").html("0"+t.m.toString());
	}else{
		$("#t_m").html(t.m);
	}
	if(t.s < 10){
		$("#t_s").html("0"+t.s.toString());
	}else{
		$("#t_s").html(t.s);
	}
 } 