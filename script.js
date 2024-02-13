
function changeColors() {
  var body = document.body;

  
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  }
}

async function checkBlacklist() {
  const userId = prompt('Enter user ID. User ID must not be longer than 19 characters:');

  if (userId === '1018100950977744906') {
    alert('Authenticated. Welcome HannaeAltae');
    showEditorButton();
  } else {
    alert('Incorrect.');
  }
}

function showEditorButton() {
  const editorButton = document.getElementById('editorButton');
  editorButton.style.visibility = 'visible';
}

function changeVideoSrc() {
  const newURL = prompt('Enter URL: ');
  const newTitle = prompt('Enter title: ');
  
  if (newURL) {
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = newURL;
    alert('URL submitted: ' + newURL + '. Video updated!');
  } else {
    alert('Invalid URL. Please enter a valid URL.');
  }
  const videoTitle = document.getElementById('videoTitle');
  videoTitle.innerText = 'Current shared video: ' + newTitle;
  alert('Video title updated to: ' + newTitle);
}