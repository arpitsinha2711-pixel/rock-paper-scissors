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
  let isplaying=false;
  let id;
  function auto() {
  if (!isplaying) {

    id = setInterval(()=> {

      choose();
      const playermove = compmove;

      choose();

      play(playermove);

    },1000);

    isplaying = true;

  } else {

    clearInterval(id);
    isplaying = false;
  }
}
document.querySelector('.js-rock').addEventListener('click',()=>
{
  choose();
  play('rock');
});
document.querySelector('.js-sci').addEventListener('click',()=>
{
  choose();
  play('scissors');
});
document.querySelector('.js-paper').addEventListener('click',()=>
{
  choose();
  play('paper');
});
document.querySelector('.set').addEventListener('click',()=>
{
  score.wins=0;
  score.loses=0;
  score.ties=0;
  compmove='';
  result='';
  update('');
  localStorage.removeItem('rscore');
});
document.querySelector('.auto').addEventListener('click',()=>
{
 auto(); stop();
});

document.body.addEventListener('keydown',(event)=>
{
  if(event.key==='r')
    {choose();
    play('rock');
    }
  else if(event.key==='s')
  {
    choose();
    play('scissors');
  }
  else if(event.key==='p')
  {
    choose();
    play('paper');
  }
});
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
  function stop()
  {
  const au=document.querySelector('.auto');
  if(au.innerText==='Auto-Play')
  {
    au.innerText='Stop';
    au.classList.add('sto');
  }
  else
    {
      au.innerText='Auto-Play';
      au.classList.remove('sto');
    }
}