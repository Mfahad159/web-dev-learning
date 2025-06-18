document.body.querySelector('button').addEventListener('click', () => {
   let btn = document.getElementById('btn');
   let msg = document.querySelector('.para');
   msg.style.display = 'inline-block';
   msg.textContent = 'Processing...';

   setTimeout(() => {
       btn.transition= 'transform 0.5s, background-color 0.5s, display 0.5s';
       msg.textContent = 'Completed!';
       setTimeout(() => {
        msg.style.display = 'none';
       btn.textContent = 'Start again';
       btn.style.backgroundColor = '#371392d8';
       }, 2000);
   }, 3000);
});