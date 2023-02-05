(function(){
    let result1=document.querySelector('#result1');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('#clear');
    let equal=document.querySelector('#equal');
    let result2=document.querySelector('#result2');
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            result1.value+=value;
        })
    });
    clear.addEventListener('click',function(e){
        result1.value=""
        result2.value=""
    })
    equal.addEventListener('click',function(e){
      if(result1.value===""){
        result2.value=""
      }

      else{
        try{
            document.getElementById("result2").style.color='orange'
            let answer=eval(result1.value);
            result2.value=answer
               
           }catch(error){
            document.getElementById("result2").style.color='red'
            result2.value="error"
           }
      }
    })

})()


