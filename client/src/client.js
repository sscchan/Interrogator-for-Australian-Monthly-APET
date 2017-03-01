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
  $('#querySubmit').on('click', function(event) {
    event.preventDefault();
    
    // Clear result box
    $('#resultTextArea').val('');
    
    // Retrieve user input from form
    var longitude = $('#longitudeInput').val();
    var latitude = $('#latitudeInput').val();
    $.get(serverLocation + 'APET/' + longitude + ',' + latitude)
      .done(function(data) {
        var resultText = 
            data.january + ',' +
            data.february + ',' +
            data.march + ',' +
            data.april + ',' +   
            data.may + ',' +
            data.june + ',' +
            data.july + ',' +
            data.august + ',' +  
            data.september + ',' +
            data.october + ',' +
            data.november + ',' +
            data.december;
        $('#resultTextArea').val(resultText);
        
        // Populate result tables
        var tableRows = $('#resultTableBody').children();
        tableRows[0].children[1].innerHTML = data.annual;
        tableRows[1].children[1].innerHTML = data.january;
        tableRows[2].children[1].innerHTML = data.february;
        tableRows[3].children[1].innerHTML = data.march;
        tableRows[4].children[1].innerHTML = data.april;
        tableRows[5].children[1].innerHTML = data.may;
        tableRows[6].children[1].innerHTML = data.june;
        tableRows[7].children[1].innerHTML = data.july;
        tableRows[8].children[1].innerHTML = data.august;
        tableRows[9].children[1].innerHTML = data.september;
        tableRows[10].children[1].innerHTML = data.october;
        tableRows[11].children[1].innerHTML = data.november;
        tableRows[12].children[1].innerHTML = data.december;    
      })
      .fail(function(error) {
        console.log('failed');
        console.log('Error: ', error);
        $('#resultTextArea').val('Error');
        var tableRows = $('#resultTableBody').children();
        for (var i = 0; i < tableRows.length; i++) {
          tableRows[i].children[1].innerHTML = '';
        }
        
      });
  });