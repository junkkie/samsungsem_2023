//main.js
window.addEventListener("load", () => {
  /* 주메뉴 */
  // 각 li에 마우스 올리면 높이값 가져와서 풀다운 메뉴 내려오고 보여야 됨,
  // 키보드 탭으로도 움직여야함

  const gnbMenu = document.querySelectorAll('.gnb>ul>li');
  const headerWrap = document.querySelector('.header_wrap');

  for(let i = 0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener('mouseover', e =>{
      e.currentTarget.classList.add('on')
      let ht = e.currentTarget.children[1].offsetHeight;
      headerWrap.style.height = `${70+ht}px`
      
    })

    gnbMenu[i].addEventListener('mouseout', e =>{
      e.currentTarget.classList.remove('on')
      headerWrap.style.height = `${70}px`
    })
    
    gnbMenu[i].children[0].addEventListener('focus', e => {
      e.currentTarget.parentElement.classList.add('on')
      let ht = e.currentTarget.nextElementSibling.offsetHeight;
      headerWrap.style.height = `${70+ht}px`
    })

    gnbMenu[i].children[0].addEventListener('blur', e => {
      e.currentTarget.parentElement.classList.remove('on')
      headerWrap.style.height = `${70}px`
    })
  }




  /* 검색박스 */
  // 검색버튼 누르면 검색박스 보이고
  // 닫기버튼 누르면 검색박스 안보이게

  const btnSrch = document.querySelector('.btn_srch')
  const srchWrap = document.querySelector('.srch_wrap')
  const btnSrchClose = document.querySelector('.btn_srch_close')

  btnSrch.addEventListener('click', e =>{
    e.preventDefault();
    srchWrap.classList.add('on');
  });

  btnSrchClose.addEventListener('click', e =>{
    e.preventDefault();
    srchWrap.classList.remove('on');
  });

  //content3 list2 백그라운드 이미지
  const productLi = document.querySelectorAll(".list2_img");
  const content3Li = document.querySelectorAll(".list2>li");

  for(let i=0; i<productLi.length; i++){
    productLi[i].style.background = `url(images/img_prd0${i+1}.jpg) no-repeat center/100%`;
    content3Li[i].addEventListener("mouseover", () => {
      productLi[i].style.backgroundSize = '110%';
    })
    content3Li[i].addEventListener("mouseleave", () => {
      productLi[i].style.backgroundSize = '100%';
    })
  }

  //content4 마우스오버 이벤트
  const content4Img = document.querySelectorAll(".content4>div");

  for(let i=0; i<content4Img.length; i++){
    content4Img[i].addEventListener("mouseover", () =>{
      content4Img[i].style.backgroundSize = '105%';
    })
    content4Img[i].addEventListener("mouseleave", () =>{
      content4Img[i].style.backgroundSize = '100%';
    })
  }


  //top버튼
  const topBtn = document.querySelector(".btn_top");
  //클릭하면 스크롤 맨위로
  topBtn.addEventListener("click",e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  })

  //스크롤 이벤트
  const museBtn = document.querySelector(".btn_sem")
  const content1_li = document.querySelector(".content1>ul")
  const content1_letter = document.querySelector(".newsletter")
  const content2_= document.querySelector(".content2")

  window.addEventListener("scroll", ()=>{
    let scll = document.querySelector("html").scrollTop;
    console.log(scll)

    if(scll<=50){
      topBtn.classList.remove("on","ab");
      museBtn.classList.remove("on","ab");
    }else if(scll>=4500){
      topBtn.classList.add("ab");
      topBtn.classList.add("on");
      museBtn.classList.add("ab");
      museBtn.classList.add("on");
    }else{
      topBtn.classList.remove("ab");
      topBtn.classList.add("on");
      museBtn.classList.remove("ab");
      museBtn.classList.add("on");
    }

    if(scll>=400){
      content1_li.classList.add("on");
    }
    if(scll>=500){
      content1_letter.classList.add("on");
    }
  })


  /* sub1 */
  /* step1 */
  const liStep1 = document.querySelectorAll(".step1>ul>li");

  liStep1.forEach((el, i) => {
    el.querySelector("a").style.backgroundColor = 'transparent';
    el.querySelector("a").style.background = `url(images/ico_inquiry_0${i+1}.png) no-repeat 50% 35%`;
    el.querySelector("a").style.color = '#333';
  });

});