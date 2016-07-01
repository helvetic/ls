var titles = document.querySelectorAll('.accordeon-title');

titles.forEach(function(el){
  el.addEventListener('click', function(){

    var parent = el.parentNode,
        active = document.querySelector('.accordeon-item.active');

    if(parent.classList.contains('active')){
      parent.classList.remove('active');
    }else{
      if(active){
        active.classList.remove('active');
      }
      parent.classList.add('active');
    }

  });
});
