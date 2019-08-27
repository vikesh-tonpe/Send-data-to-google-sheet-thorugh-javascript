function doGet(e){
  
  var op = e.parameter.action;

  var ss=SpreadsheetApp.openByUrl("Paste your sheet URL here in quatoes");
  var sheet = ss.getSheetByName("Sheet1");
  if(op=="insert")
    return insert_value(e,sheet);
}

//Recieve parameter and pass it to function to handle

function insert_value(request,sheet){
   var name = request.parameter.name;
    var email = request.parameter.email;
    var subject = request.parameter.subject;
    var message = request.parameter.message;
  var flag=1;
  if(flag==1){
  var d = new Date();
    var currentTime = d.toLocaleString();
  var rowData = sheet.appendRow([currentTime,name,email,subject,message]);  
  var result="Insertion successful";
  }
     result = JSON.stringify({
    "result": result
  });  
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }
  