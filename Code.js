function doGet(request) {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sync() {
  const now = new Date();
  return "Synched at " + now.toISOString();
}
