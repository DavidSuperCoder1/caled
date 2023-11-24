


function changeInputfield() {
  //console.log('changeInputfield function is called');
  let metric = document.querySelector('#metric');
  let imperial = document.querySelector('#imperial');
  let metric1 = document.querySelector('#metric1');
  let imperial1 = document.querySelector('#imperial1');
  let calwrapper= document.querySelector('.calculator-wrapper');
  let calwrapper1= document.querySelector('.calculator-wrapper1');

  
  if (metric1.checked) {
  
    console.log("Metric is checked");
    calwrapper1.style.display="none";
    calwrapper.style.display="flex";
    metric.checked=true; 
    
  }else if(imperial1.checked){
    console.log('Imperial is checked');
    
    calwrapper.style.display="none";
    calwrapper1.style.display="flex";
    imperial1.checked = true;
  }else if(imperial.checked){
    calwrapper.style.display="none";
    calwrapper1.style.display="flex";
    imperial1.checked=true;
  }
}

