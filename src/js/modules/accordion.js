function accordion (){

  const btns = document.querySelectorAll('mobile-link__parent-btn');

  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      console.log('Click!');

      const content = btn.nextElementSibling;
      console.log(content);

      const isOpen = btn.classList.toggle('active');

      if (isOpen) {
        content.style.maxheight = content.scrollHeight + 'px';
      } else {
        content.style.maxheight = '0px';
      }

      // content.style.maxHeight = '200px';
     
    })

  })

}

export default accordion;