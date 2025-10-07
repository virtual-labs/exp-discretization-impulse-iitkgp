


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////
function system(){
var outputText1;
var outputText2;
var outputText2_1;
var outputText3;
var R1;
var R2;
var Rt1;
var Rt2;
            document.getElementById('tfbody').style.display = "block";
			document.getElementById('tfbody2').style.display = "block";
			document.getElementById('pdf').style.visibility = "visible";
			document.getElementById('dtf').style.visibility = "visible";
			document.getElementById('dButton').style.visibility = "visible";
	       
			
            var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
			document.getElementById('tfn1').value = b0;
	        document.getElementById('tfn2').value = b1;
	        document.getElementById('tfn3').value = b2;
	        document.getElementById('tfd1').value = a0;
	        document.getElementById('tfd2').value = a1;
	        document.getElementById('tfd3').value = a2;
			
			outputText1=" <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>G</span>(<span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>s</span>)= ["+b0+"<span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>s</span>\u00B2+("+b1+")<span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>s</span>+("+b2+ ")] / [" +a0+"<span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>s</span><sup>2</sup>+("+a1+")<span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>s</span>+("+a2+ ")]";//+b0+"s\u00B2+"+b1+"s+"+b2+;
	        outputText2=" <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>0</sub></span>="+b0+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>1</sub></span>="+b1+"; <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>2</sub></span>="+b2+ "; <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>0</sub></span>="+a0+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>1</sub></span>="+a1+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>2</sub></span>="+a2+ "";
			//document.getElementById("output_text1").innerHTML=outputText1;
			//document.getElementById("output_text2").innerHTML=outputText2;
		    
			var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			Rt1="Pole-1 = " +R1+ "";
			Rt2="Pole-2 = " +R2+ "";
			
			document.getElementById("Rt_text1").innerHTML=Rt1;
			document.getElementById("Rt_text2").innerHTML=Rt2;
				
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			
			
			////////
			var A1= math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2)),1000)),1000);
			var A2= math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1)),1000)),1000);
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var rp=1;
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11').value = A1.re;
			//document.getElementById('tfn11_1').value = A1.im;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12').value = A2.re;
			//document.getElementById('tfn12_1').value = A2.im;
			
			
	        //document.getElementById('tfd10').value = -R1;
			R11=math.complex(-R1.re,-R1.im);
	        document.getElementById('tfd10').value = R11;
			//document.getElementById('tfd10').value = -R1.re;
			//document.getElementById('tfd10_1').value = -R1.im;
			R22=math.complex(-R2.re,-R2.im);
	        document.getElementById('tfd11').value = R22;
			//document.getElementById('tfd11').value = -R2.re;
			//document.getElementById('tfd11_1').value = -R2.im;
			document.getElementById('rr').value = rp;
			
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText2_1=" <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>0</sub></span>="+b0+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>1</sub></span>="+b1+"; <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>b<sub>2</sub></span>="+b2+ "; <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>0</sub></span>="+a0+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>1</sub></span>="+a1+";  <span style='font-family:Bodoni MT; font-style:italic;font-size:18px'>a<sub>2</sub></span>="+a2+ "";
			outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			///////
				
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			console.log(R1);
			console.log(R2);
			Rt1="Root-1 = " +math.divide(num1,den)+ "";
			Rt2="Root-2 = " +math.divide(num2,den)+ "";
			
			document.getElementById("Rt_text1").innerHTML=Rt1;
			document.getElementById("Rt_text2").innerHTML=Rt2;
			
			//document.getElementById("Root_text1").innerHTML=-R1;
			//document.getElementById("Root_text2").innerHTML=-R2;
			
			if (R1==R2){
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var rp1=1;
			var rp2=2;
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11_1').value = 0;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12_1').value = 0;
			
			
	        document.getElementById('tfd10').value = -R1;
			//document.getElementById('tfd10_1').value = 0;
	        document.getElementById('tfd11').value = -R2;
			//document.getElementById('tfd11_1').value = 0;
			
			document.getElementById('rr1').value = rp1;
			document.getElementById('rr2').value = rp2;
			
			}
			else{
				//PFRR();				
				
		
           var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var rp1=1;
			var rp2=1;
			
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11_1').value = 0;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12_1').value = 0;
			
			
	        document.getElementById('tfd10').value = -R1;
			//document.getElementById('tfd10_1').value = 0;
	        document.getElementById('tfd11').value = -R2;
			//document.getElementById('tfd11_1').value = 0;
			document.getElementById('rr1').value = rp1;
			document.getElementById('rr2').value = rp2;
			
	        
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;

		    }
			}
			}

////////////////////

function IIM(){
	var outputText4;
	var outputText4_1;
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value;
			
           	
	        var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
			
			if (part < 0)
			{
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var den=math.multiply(2,a0);
			R11=math.divide(num1,den);
			
			R1 = math.complex(math.divide(math.round(math.multiply(R11.re,1000)),1000),math.divide(math.round(math.multiply(R11.im,1000)),1000));
			
			console.log(R1);
			console.log(R1.re);
			console.log(R1.im);
			
			var num2=math.add(-a1,-part1);
			
			R2=math.complex(R1.re,-R1.im);
			
			console.log(R2);
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2;
			 */
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = -d1;
			document.getElementById('tfn21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;
	        
			
			
			outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
				
			}
			
			else {
			
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			var d = R1;
			
			var e0=math.add(b1,math.multiply(2,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.add(b1,math.multiply(2,b0,d));
			var A2=math.add(b2,math.multiply(b1,d),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			var Tb0a0 = math.divide(math.round(math.multiply(math.multiply(T,b0a0),100)),100);
			
			
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.multiply(2,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			
			var d0=math.divide(math.round(math.multiply(math.add(Tb0a0,TA1),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(-2,b0,eTp2,T),-math.multiply(TA1,eTp1),math.multiply(T,TA2,eTp1)),1000)),1000);
			
			//var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			//var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(b0,eTp1,eTp2),1000)),1000);//0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(A1);
			console.log(A2);
			console.log(d0);
			console.log(d1);
			console.log(d2);
			console.log(c1);
			console.log(c2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = d1;
			document.getElementById('tfn21').value = d2; 
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;  
	        
			
			}
			
			else {
			
			var e0=math.subtract(b1,math.multiply(a1,math.divide(b0,a0)));
			var e1=math.subtract(b2,math.multiply(a2,math.divide(b0,a0)));
			var A1=math.divide(math.add(math.multiply(e0,R1),e1),math.subtract(R1,R2));
			var A2=math.divide(math.add(math.multiply(e0,R2),e1),math.subtract(R2,R1));
	
			var TA1=math.divide(math.round(math.multiply(math.multiply(T,A1),1000)),1000);
			var TA2=math.divide(math.round(math.multiply(math.multiply(T,A2),1000)),1000);
			var eTp1=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R1)),1000)),1000);
			var eTp2=math.divide(math.round(math.multiply(math.exp(math.multiply(T,R2)),1000)),1000);
			var c1=math.divide(math.round(math.multiply(math.add(eTp1,eTp2),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.multiply(eTp1,eTp2),1000)),1000);
			var d0=math.divide(math.round(math.multiply(math.add(TA1,TA2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.multiply(TA1,eTp2),math.multiply(TA2,eTp1)),1000)),1000);
			var d2=0;//math.divide(math.round(math.multiply(math.multiply(math.multiply(T,0.5,b0),eTp1,eTp2),100)),100);
	
	
	        console.log(TA1);
			console.log(TA2);
			console.log(eTp1);
			console.log(eTp2);
	        
			/* document.getElementById('tfn13').value = b0;
	        document.getElementById('tfn14').value = TA1;	
	        document.getElementById('tfn15').value = TA2;
			
	        document.getElementById('tfn16').value = b0;
			document.getElementById('tfn17').value = TA1;
			document.getElementById('tfn18').value = TA2; */
			
			document.getElementById('tfn19').value = d0;
			document.getElementById('tfn20').value = -d1;
			document.getElementById('tfn21').value = d2;
			
			/* document.getElementById('tfd12').value = eTp1;
	        document.getElementById('tfd13').value = eTp2;
			
			document.getElementById('tfd14').value = eTp1;
	        document.getElementById('tfd15').value = eTp2; */
			
			document.getElementById('tfd16').value = 1;
	        document.getElementById('tfd17').value = -c1;
			document.getElementById('tfd18').value = c2;
	        
			}
			
			outputText4=" b<sub>0</sub>="+b0+";  TA<sub>1</sub>="+TA1+"; TA<sub>2</sub>="+TA2+ "; e<sup>Tp<sub>1</sub></sup>="+eTp1+";  e<sup>Tp<sub>2</sub></sup>="+eTp2+"";
			outputText4_1=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+"; c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			/* document.getElementById("output_text4").innerHTML=outputText4;
			document.getElementById("output_text4_1").innerHTML=outputText4_1; */
			
			}
}


function BTM(){
	var outputText4;
	var outputText4_1;
	
	 document.getElementById('tfbody4').style.display = "block";
	
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value; 
			
			var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
			var part1=math.sqrt(part);
			var num1=math.add(-a1,part1);
			var num2=math.add(-a1,-part1);
			var den=math.multiply(2,a0);
			R1=math.divide(num1,den);
			R2=math.divide(num2,den);
			
			if (R1==R2){
				
			/* var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k); */
			
			/* var d0=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,2),T),b2),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,-8),math.multiply(T,T)),math.multiply(b2,2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.add(math.divide(math.multiply(b0,4),math.multiply(T,T)),math.divide(math.multiply(b1,-2),T),b2),1000)),1000);
			
			var c0=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,4),T),math.multiply(R1,R1)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.add(math.divide(-8,math.multiply(T,T)),math.multiply(R1,R1,2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.add(math.divide(4,math.multiply(T,T)),math.divide(math.multiply(R1,-4),T),math.multiply(R1,R1)),1000)),1000);
			
			var d0c0 = math.divide(math.round(math.multiply(math.divide(d0,c0),1000)),1000);
			var d1c0 = math.divide(math.round(math.multiply(math.divide(d1,c0),1000)),1000);
			var d2c0 = math.divide(math.round(math.multiply(math.divide(d2,c0),1000)),1000);
			
			var c1c0 = math.divide(math.round(math.multiply(math.divide(c1,c0),1000)),1000);
			var c2c0 = math.divide(math.round(math.multiply(math.divide(c2,c0),1000)),1000);
			
			
			document.getElementById('tfn22').value = d0c0;
	        document.getElementById('tfn23').value = d1c0;	
	        document.getElementById('tfn24').value = d2c0;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1c0;
			document.getElementById('tfd21').value = c2c0; */
			
			var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfn22').value = d0;
	        document.getElementById('tfn23').value = d1;	
	        document.getElementById('tfn24').value = d2;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1;
			document.getElementById('tfd21').value = c2;
				
			}
			
			else{
	
	        var k=math.divide(2,T);
			var b0k2=math.multiply(b0,math.pow(k,2));
			var b1k=math.multiply(b1,k);
			var a0k2=math.multiply(a0,math.pow(k,2));
			var a1k=math.multiply(a1,k);
			
			var d0=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*b2,2*b0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var d2=math.divide(math.round(math.multiply(math.divide(math.add(b0k2,-b1k,b2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			var c1=math.divide(math.round(math.multiply(math.divide(math.subtract(2*a2,2*a0k2),math.add(a0k2,a1k,a2)),1000)),1000);
			var c2=math.divide(math.round(math.multiply(math.divide(math.add(a0k2,-a1k,a2),math.add(a0k2,a1k,a2)),1000)),1000);
			
			document.getElementById('tfn22').value = d0;
	        document.getElementById('tfn23').value = d1;	
	        document.getElementById('tfn24').value = d2;
			        			
						
			document.getElementById('tfd19').value = 1;
	        document.getElementById('tfd20').value = c1;
			document.getElementById('tfd21').value = c2;
			}
	
	        outputText4=" d<sub>0</sub>="+d0+"; d<sub>1</sub>="+d1+ "; d<sub>2</sub>="+d2+";";
			outputText4_1=" c<sub>1</sub>="+c1+";  c<sub>2</sub>="+c2+"";
			
			//document.getElementById("output_text4").innerHTML=outputText4;
			//document.getElementById("output_text4_1").innerHTML=outputText4_1;
}



/* function PFRR()
{
	var outputText5;
	var outputText5_1;
	var Rt1;
	var Rt2;
	
	 document.getElementById('tfbody5').style.display = "block";
	
	        var b0 = document.getElementById('b_0').value;			
			var b1 = document.getElementById('b_1').value;
			var b2 = document.getElementById('b_2').value;
            var a0 = document.getElementById('a_0').value;
			var a1 = document.getElementById('a_1').value;
			var a2 = document.getElementById('a_2').value;
	        var T = document.getElementById('Ts').value; 
	
	var part=math.subtract(math.pow(a1,2),math.multiply(4,a0,a2));
	
	var part1=math.sqrt(part);
	var num1=math.add(-a1,part1);
	var num2=math.add(-a1,-part1);
	var den=math.multiply(2,a0);
	R1=math.divide(num1,den);
	R2=math.divide(num2,den);
	console.log(R1);
	console.log(R2);
	Rt1="Root-1 = " +math.divide(num1,den)+ "";
	Rt2="Root-2 = " +math.divide(num2,den)+ "";
	
	document.getElementById("Rt_text1").innerHTML=Rt1;
	document.getElementById("Rt_text2").innerHTML=Rt2;
			
			//document.getElementById("Root_text1").innerHTML=-R1;
			//document.getElementById("Root_text2").innerHTML=-R2;
			var d = - R1;
			
			var e0=math.subtract(b1,math.multiply(2,a1,b0,d));
			var e1=math.subtract(b2,math.multiply(b0,d,d));
			
			var A1=math.subtract(b1,math.multiply(2,a1,b0,d));
			var A2=math.add(math.subtract(b2,math.multiply(b1,d)),math.multiply(b0,d,d));
			
			var b0a0 = math.divide(math.round(math.multiply(math.divide(b0,a0),100)),100);
			
			console.log(e0);
			console.log(e1);
			console.log(A1);
			console.log(A2);
			
			document.getElementById('tfn4').value = b0;
	        document.getElementById('tfn5').value = b1;
	        document.getElementById('tfn6').value = b2;
			
			document.getElementById('tfd4').value = a0;
	        document.getElementById('tfd5').value = a1;
	        document.getElementById('tfd6').value = a2;
			
			document.getElementById('tfn7').value = b0a0;
	        document.getElementById('tfn8').value = e0;
	        document.getElementById('tfn9').value = e1;
			
	        document.getElementById('tfd7').value = a0;
	        document.getElementById('tfd8').value = a1;
	        document.getElementById('tfd9').value = a2;
			
			document.getElementById('tfn10').value = b0;
	        document.getElementById('tfn11').value = A1;
			//document.getElementById('tfn11_1').value = 0;
	        document.getElementById('tfn12').value = A2;
			//document.getElementById('tfn12_1').value = 0;
			
			
	        document.getElementById('tfd10').value = -R1;
			//document.getElementById('tfd10_1').value = 0;
	        document.getElementById('tfd11').value = -R2;
			//document.getElementById('tfd11_1').value = 0;
			
			
	        
	
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			outputText5=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			outputText5_1=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			
			
	
}

 */