let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    },
    {
        'name': 'HTML',
        'img': 'https://media.istockphoto.com/id/1413514774/photo/stylized-3d-html-icon-design.jpg?s=2048x2048&w=is&k=20&c=Ft77rRHe8rIoVZdKXw92oGdDMoKvB6te93IZslIfqOE=',
    },
    {
        'name': 'jQuery',
        'img': 'https://cdn.pixabay.com/photo/2014/09/14/01/13/jquery-444684_1280.png',
    },
    {
        'name': 'JS',
        'img': 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png',
    },
    {
        'name': 'Node',
        'img': 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png',
    },
    {
        'name': 'python',
        'img': 'https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
    }
];
 const parentdiv=document.querySelector('#card-section');
const gameCard= cardsArray.concat(cardsArray)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());





let clickcount=0;
let firstcard=""
let secondcard=""
 const card_matches=()=>{ 
let card_selected=document. querySelectorAll('.card_selected');
card_selected.forEach((Elem)=>{
    Elem.classList.add('card_matches')

})

}
const resetgame=()=>{
    firstcard="";
    secondcard="";
    clickcount=0;
    let card_selected=document. querySelectorAll('.card_selected');
    card_selected.forEach((Elem)=>{
    Elem.classList.remove('card_selected')

})

}

parentdiv.addEventListener( 'click' ,( event)=>{
    let curcard=event.target;
        clickcount++;
        if(clickcount<3){
            if(clickcount===1){
                firstcard=curcard.parentNode.dataset.name
                curcard.parentNode.classList.add('card_selected');
            }
            if(clickcount===2){
                secondcard=curcard.parentNode.dataset.name
                curcard.parentNode.classList.add('card_selected');


            }
            if(firstcard!==""&& secondcard!==""){
                if(firstcard===secondcard){
                    setTimeout(() => {
                        card_matches()
                        resetgame()

  
                    }, 1000);
                    
                }
                else{
                    setTimeout(() => {
                        resetgame();
 
                    }, 1000);
                }
            }


    }
    
   if(curcard.id==="card-section")
   {
        return false;
    }
   })






for(i=0;i<=shuffledChild.length;i++)
{
const childdiv=document.createElement('div')
childdiv.classList.add('card')
childdiv.dataset.name=shuffledChild[i].name;
//childdiv.style.backgroundImage=`url(${shuffledChild[i].img})`;
 const front_div=document.createElement('div')
 front_div.classList.add('front-card')
 const back_div=document.createElement('div')
 back_div.classList.add('back-card')
 back_div.style.backgroundImage=`url(${shuffledChild[i].img})`;


parentdiv.appendChild(childdiv)
childdiv.appendChild(back_div)
childdiv.appendChild(front_div)

}
