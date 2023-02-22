const toggleComment = () => {
    const commentForm = document.getElementById('comment-form')
    const commentButton= document.getElementById('comment')
    commentButton.style.display = 'none';
    commentForm.style.display = 'block';
  }
  
  const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#commentBody').value.trim();
    const project_id = document.querySelector('#comment-submit').getAttribute('data-id');
    console.log(project_id)
  
  
    if (content && project_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, project_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            document.location.replace(`/project/${project_id}`);
        } else {
            alert('failed to post')
        }
    }
  };
  
  document
  .querySelector('#comment-form')
  .addEventListener('submit', newCommentHandler);
  
  document.querySelector('#comment').addEventListener('click', toggleComment());