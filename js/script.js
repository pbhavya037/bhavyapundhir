
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwZga5BEtXFn2NHQDi1cxbvJvb4D2-gEQQJGp58pcuSr9DJkk8vfLdVBawlMoysCaC8/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(res => alert('Submited Succesfully'))
      .catch(error => console.error('Error!', error.message))
      .then( a => (document.getElementById("myform").reset()));
    
  })
