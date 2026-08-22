let score = JSON.parse(localStorage.getItem('rscore')) || {wins:0, loses:0, ties:0};
        let compmove='';
        let result='';
       update();
  function choose()
  {
  const choice=Math.random()
    if(choice>=0 && choice<0.33)
      compmove='rock';
    else if(choice>=0.33 && choice<0.66)
      compmove='paper';
    else if(choice>=0.66 && choice<1)
      compmove='scissors';
  }
  function play(playermove)
  {
      if(compmove===playermove)
      result='Tie';
      else if(compmove==='rock'&&playermove==='paper'||
              compmove==='paper'&&playermove==='scissors'||
              compmove==='scissors'&&playermove==='rock')
              result='You win';
      else
      result='You lose';
     if(result==='You win')
  score.wins+=1
  else if(result==='You lose')
  score.loses+=1;
else
score.ties+=1;
localStorage.setItem('rscore',JSON.stringify(score));
update(playermove);
  } 
  function update(playerm)
  {
     document.querySelector('.res').innerHTML= `Wins : ${score.wins}   Loses: ${score.loses}    Ties : ${score.ties}`;
  if (result) {
  document.querySelector('.result').innerHTML = result;
} else {
  document.querySelector('.result').innerHTML = '';
}
    if (playerm) {
     document.querySelector('.sco').innerHTML = `<span class="te" >You</span> <img src="${playerm}-emoji.png" class="ic"> <img src="${compmove}-emoji.png" class="ic"><span class="te">Computer</span>`;
   } else {
     document.querySelector('.sco').innerHTML = '';
   }
  }