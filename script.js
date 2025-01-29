document.addEventListener('DOMContentLoaded', function() {
 const toggleTitles = document.querySelectorAll('.toggle-title');

 toggleTitles.forEach(function(title) {
     title.addEventListener('click', function() {
       const parent = this.parentNode;
         const content = parent.querySelector('.toggle-content');
         if(content){
              content.classList.toggle('active');
              this.classList.toggle('active');
         }

     });
 });
 });
