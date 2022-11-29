
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
            return(parseInt(result[0]) + parseInt(result[1]));
        }
        else if(algebraicString.includes("-")){
            result = algebraicString.split('-');
            return(parseInt(result[0]) - parseInt(result[1]));
        }
        else if(algebraicString.includes("/")){
            result = algebraicString.split('/');
            return(parseInt(result[0]) / parseInt(result[1]));
        }
        else{
            result = algebraicString.split('*');
            return(parseInt(result[0]) * parseInt(result[1]));
        }
    }
    function result(){
        var a = check();
        document.getElementById('myInput').value = a;
    }
