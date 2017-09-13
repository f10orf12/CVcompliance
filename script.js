// JavaScript source code
(function () { console.log('hello steve'); })()



function findCode(o) {
    var codeString;
    var iB = o.indexOf('<');
    var iE;
    beginCodeString = o.slice(iB, 4);
    if (beginCodeString == '<div') {
        iE = o.indexOf('</div>');
        iE += 6;
    }
    if (beginCodeString == '<span') {
        iE = o.indexOf('</span>');
        iE += 7;
    }
    if (beginCodeString == '<p') {
        iE = o.indexOf('</p>');
        iE += 4;
    }
    
    console.log('new slice: ',iB, ' ', iE, o.slice(iB, iE))
    //var iE = o.indexOf('>');
    //iE++;
    console.log(iB, ' ', iE, o.slice(iB, iE));
    if (iB != -1) {
        codeString = o.slice(iB, iE);
        o = o.replace(codeString, '</span><xmp>' + codeString + '</xmp><span>');
    }

    return o;
}
var Results;
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      Results = request;
      if (Results) {
          console.log('sending farewell');
          sendResponse({ farewell: "success" });

          var page = Results.url;
          page = page.slice(page.lastIndexOf('/') + 1, page.lastIndexOf('page') + 4);
          $('#page').html(page);
          $('#violations').html('');
          for (i = 0; i < Results.violations.length; i++) {
              $('#violations').append('<div>' + '<span class="warning ' + Results.violations[i].impact + '">' + Results.violations[i].impact + '</span><span class="issue">' + Results.violations[i].id + ' </span><div class="description">' + findCode(Results.violations[i].description) + '</div></div>');
              if (Results.violations[i].nodes.length > 0) {
                  $('#violations').append('<div class="affected">Affected nodes:</div>');
                  for (y = 0; y < Results.violations[i].nodes.length; y++) {
                      $('#violations').append('<pre class="default prettyprint prettyprinted"><code><span>' + findCode(Results.violations[i].nodes[y].html) + '</span></code></pre>');
                  }
              }
              console.log('');
          }
      }
      return true;
  });

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "script hello" }, function (response) {
        console.log(response.farewell);
    });
});
