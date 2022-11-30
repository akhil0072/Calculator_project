
    function display(a){
        console.log(a); 
        if(document.getElementById("myInput").value == '0'){
            document.getElementById("myInput").value= "";   

        }
        document.getElementById("myInput").value+=a;
    }

    function inputClear(){
        document.getElementById("myInput").value = "0";
    }

    function check(){
        var algebraicString = document.getElementById('myInput').value;
        var result = [];
        if(algebraicString.includes("+")){
            result = algebraicString.split('+');
		if(result[0].includes(".")){
			var res = [];
			res = result[0].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[1].includes(".")){
			var res = [];
			res = result[1].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[0].length >8 || result[1].length >8){
		alert("The values entered must be less then length 8");
		return 0;		
		}
            return(parseFloat(result[0]) + parseFloat(result[1]));
        }
        else if(algebraicString.includes("-")){
            result = algebraicString.split('-');
		if(result[0].includes(".")){
			var res = [];
			res = result[0].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[1].includes(".")){
			var res = [];
			res = result[1].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[0].length >8 || result[1].length >8){
		alert("The values entered must be less then length 8");
		return 0;		
		}
            return(parseFloat(result[0]) - parseFloat(result[1]));
        }
        else if(algebraicString.includes("/")){
            result = algebraicString.split('/');
		if(result[0].includes(".")){
			var res = [];
			res = result[0].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[1].includes(".")){
			var res = [];
			res = result[1].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[0].length >8 || result[1].length >8){
		alert("The values entered must be less then length 8");
		return 0;		
		}
            return(parseFloat(result[0]) / parseFloat(result[1]));
        }
        else{
            result = algebraicString.split('*');
		if(result[0].includes(".")){
			var res = [];
			res = result[0].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[1].includes(".")){
			var res = [];
			res = result[1].split(".");
			if(res[1].length >3){
				alert("the decimal length should be less than 3");
				return 0;
			}
		}
		if(result[0].length >8 || result[1].length >8){
		alert("The values entered must be less then length 8");
		return 0;		
		}
            return(parseFloat(result[0]) * parseFloat(result[1]));
        }
    }
    function result(){
        var a = check();
        document.getElementById('myInput').value = a;   
    }
