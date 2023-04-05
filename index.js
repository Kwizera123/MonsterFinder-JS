// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import {monsters} from './monsters.js';

console.log(monsters);

for (let mosterdiv of monsters){
  showmosters(mosterdiv);
}



function showmosters(mosterdiv){

const monster = document.createElement('div');
monster.className = 'monster';

const img = document.createElement('img');
img.src = `https://robohash.org/${mosterdiv.id}?set=set2`;
img.alt = mosterdiv.name;

const mname = document.createElement('p');
mname.className = 'name';
mname.innerText = mosterdiv.name;

const email = document.createElement('p');
email.className = 'email';
email.innerText = mosterdiv.email;

monster.append(img,mname,email);

document.querySelector('.monsters').append(monster);

console.log(monster);

}

notFound();
function notFound(){
  const notFoundDiv = document.createElement('div');
  notFoundDiv.className = 'p-5 not-found';
  notFoundDiv.style.display = 'none';
  
  const span = document.createElement('span');
  span.innerText = '404';
  
  const h1 = document.createElement('h1');
  h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
  
  notFoundDiv.append(span,h1);

  document.querySelector('.monsters').append(notFoundDiv);

  console.log(notFoundDiv);
}



/*

<div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="Kazi Ariyan" />
          <p class="name">Kazi Ariyan</p>
          <p class="email">info@easylearningbd.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
*/

document.querySelector('#search-monster').addEventListener('keyup', function(e) {
  const keyword = e.target.value.toLowerCase();


  const findmonster = document.querySelectorAll('.monster');

  let notFound = true;

  for (let monster of findmonster){
    
    const name = monster.children[1].innerText.toLowerCase();
    const email = monster.children[2].innerText.toLowerCase();

    if(name.includes(keyword) || email.includes(keyword)){
        monster.style.display = 'block';
        notFound = false;
    }else{
      monster.style.display = 'none';
      }
    
  }
    if(notFound){
      document.querySelector('.not-found').style.display = 'block';
    }else{
      document.querySelector('.not-found').style.display = 'none';
    }

});
