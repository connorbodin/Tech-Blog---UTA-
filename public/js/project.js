
const comment = document.getElementById('comment');

commentSection = () => {
    
   let form = document.getElementById("comment-form")
   console.log(form);
   form.classList.remove("display-none");
};

comment.addEventListener('click', commentSection);