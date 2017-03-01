var serverLocation = '/';
$('#copyResults').on('click', function(event) {
  event.preventDefault();
  
  var currentFocus = document.activeElement;
  var resultTextArea = document.getElementById('resultTextArea');
  resultTextArea.focus();
  resultTextArea.setSelectionRange(0, resultTextArea.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand('copy');
    currentFocus.focus();
  } catch (e) {
    succeed = false;
    currentFocus.focus();
  }
});

document.execCommand('copy');