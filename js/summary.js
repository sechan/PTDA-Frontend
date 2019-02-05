// My Boi Jake QUERY

$(document).ready(function(){
  console.log("summary.js loaded.")

  var doc = new jsPDF();
  var specialElementHandlers = {
    '#editor': function(element, renderer) {
      return true;
    }
  };

  $('#cmd').unbind("click");

  $('#cmd').click(function(){
    console.log("button clicked");

    doc.fromHTML($('#content').html(), 15, 15, {
      'width': 170, 'elementHandlers': specialElementHandlers
    });
    doc.save('summary.pdf');
    console.log("PDF created");
  });
});
