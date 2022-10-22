
var search = document.getElementById('search');
    search.addEventListener('focus',bgcolor);
    search.addEventListener('blur',bgcolor_default);
    function bgcolor_default(){
        document.querySelector('div.search-box').classList.remove("searchBoxFocus")
    }

   function bgcolor(){
    document.querySelector('div.search-box').classList.add("searchBoxFocus");
  }

var more = document.getElementById('more');
    more.addEventListener('click',show_more)

    function show_more(){
        var more_item = document.getElementById('more-box');
        more_item.classList.toggle('show');
    }

var show_category = document.getElementById('category');
     show_category.addEventListener('click',show_cat);

     function show_cat(){
        var category_box = document.getElementById('category-box');
        category_box.classList.toggle('show');
     }

     var left_sidebar = document.getElementById('left-sidebar-box');
         left_sidebar.addEventListener('mouseover',leftSidebarShow);
         left_sidebar.addEventListener('mouseleave',leftSidebarHidden);

        

         function leftSidebarShow(){
            this.classList.add('leftSidebarBox');
         }

         function leftSidebarHidden(){
            this.classList.remove('leftSidebarBox');
         }
         
   var toggle_arrow = document.getElementById('toggle-arrow')    
        toggle_arrow.addEventListener('click',toggleArrow);

        function toggleArrow(){
            this.classList.toggle('toggle_arrow');
            document.getElementById('right-sidebar').classList.toggle('right_sidebar_box');
            document.getElementById('main-box-header').classList.toggle('main_box_header');
            document.getElementById('main-section').classList.toggle('main_box_header');
        }