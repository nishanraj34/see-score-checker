


document.getElementById("submit").addEventListener("click",function(){
    var scoreInput= document.getElementById("scoreInput").value;
    
     var result=scoreInput;
     your_result="";

    if (scoreInput>=90 ){
        your_result="A+(Outstanding)"
    }
    else if(scoreInput>= 80 && scoreInput<=89){
        your_result="A (Excellent)"

      }
      else if(scoreInput>= 70 && scoreInput<=79){
       your_result="B+(Very good)"
      }
      else if(scoreInput>= 60 && scoreInput<=69){
        your_result="B (good)"
       }
       else if(scoreInput>= 50 && scoreInput<=59){
        your_result="C+(Satisfactory)"
       }
       else if(scoreInput>= 40 && scoreInput<=49){
        your_result="C(Acceptable)"
       }
       else if(scoreInput>= 35 && scoreInput<=49){
        your_result="D(Basic)"
       }
      else{
        your_result="NG(Not Graded)"
      }

      alert("Congratulations! you have secured grade: "   + your_result);
});











