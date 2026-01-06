window.onload = () => {
  const tab_switchers =  document.querySelectorAll('[data-switcher]');
for(let i = 0; i< tab_switchers.length; i++){
  const tab_switcher =  tab_switchers[i];
  const page_id = tab_switcher.dataset.tab;

  tab_switcher.addEventListener('click',() => {
      document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
      tab_switcher.parentNode.classList.add('is-active');

      SwitchPage(page_id);
  });

  }

}

function SwitchPage(page_id){
    const curr_Page = document.querySelector('.pages .page.is-active');
    curr_Page.classList.remove('is-active');
    next_page = document.querySelector(`.pages .page[data-page = "${page_id}"]`);
    next_page.classList.add('is-active');
    
    console.log(next_page.classList);
}
