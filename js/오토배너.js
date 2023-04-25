/* 오토배너 */

//next 버튼 클릭했을때
//li.slide_roll 
//.slide_roll>ul>li.on>a

const btnNext = document.querySelector('.btn_next')
const btnPrev = document.querySelector('.btn_prev')
const slide = document.querySelectorAll('.slide')
const slideRoll = document.querySelectorAll('.slide_roll li')
const btnPlay = document.querySelector('.btn_play')

let bnnNum = 0;
let lastNum = document.querySelectorAll('.slide_wrap>li').length -1;

function activation(index,list){
  for(let i=0; i<list.length;i++){
    list[i].classList.remove('on','active');
  }
  list[index].classList.add('on','active');
}

btnNext.addEventListener('click', e =>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum){bnnNum=0;}
  activation(bnnNum, slide);
  activation(bnnNum, slideRoll);
})

//prev버튼 클릭했을때
btnPrev.addEventListener('click', e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0){bnnNum=lastNum;}

  activation(bnnNum, slide);
  activation(bnnNum, slideRoll);

})

//오토배너 5초마다
function autoBanner(){
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,5000);

  if(autoBnn !== null){
    clearTimeout(autoBnn);
  };
  autoBnn = setTimeout(autoBanner,5000);
}

autoBanner();

//재생,멈춤
let flag = true;

btnPlay.addEventListener('click', e =>{
  e.preventDefault();
  if(flag==true){
    btnPlay.classList.add('on');
    clearTimeout(autoBnn); 
    flag = false;
  }else{
    btnPlay.classList.remove('on')
    autoBnn = setTimeout(autoBanner, 5000)
    flag = true;
  }
  })

  slideRoll.forEach((el, index) => {
    el.addEventListener('click', e => {
      e.preventDefault();
      activation(index, slide);
      activation(index, slideRoll);
      bnnNum = index;
    });
  });
  
// for(let i=0; i<slideRoll.length;i++){
//   slideRoll[i].addEventListener('click', e =>{
//     e.preventDefault();
//     activation(i, slide);
//     activation(i, slideRoll);
//     console.log(bnnNum)
//   })
// }