// JavaScript source code
function findCode(o) {
    var codeString;
    var iB = o.indexOf('<');
    var iE;
    var iS = 0;

    if (iB > iS) { iS = iB + 4 }
    beginCodeString = o.slice(iB, iS);

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

    if (beginCodeString == '<inp') {

        iE = o.indexOf('>');
        iE += 1;
    }

    if (iB != -1) {
        codeString = o.slice(iB, iE);
        o = o.replace(codeString, '</span><xmp>' + codeString + '</xmp><span>');
    }

    return o;
}

function formatFixes(s) {
    var fixesMarkup = '';
    fixes = s.split('\n');
    for (z = 0; z < fixes.length; z++) {
        if ((fixes[z] == 'Fix all of the following:' || fixes[z] == 'Fix any of the following:') && z < 1) {
            fixesMarkup += '<div class="fixes">' + fixes[z] + '</div><ul>';
            z++
        }
        if ((fixes[z] == 'Fix all of the following:' || fixes[z] == 'Fix any of the following:') && z > 1) {
            fixesMarkup += '</ul><div class="fixes">' + fixes[z] + '</div><ul>';
        }
        else if (fixes[z].length > 1) {
            fixesMarkup += '<li>' + fixes[z] + '</li>';
        }  
    }
    fixesMarkup += '</ul>';
    return fixesMarkup;
}

var violations = {};
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      request = request;
      if (request) {
          console.log('sending farewell');
          sendResponse({ farewell: "success" });

          var page = request.url;
          var count = (page.match(/page/g) || []).length;
          if (count > 1) {
              page = page.slice(page.lastIndexOf('page') + 5, page.length);
              page = page.slice(0, page.indexOf('&'));
          } else {
              page = page.slice(page.lastIndexOf('/') + 1, page.lastIndexOf('page') + 4);
          }
          if (page == '') { page = request.url.slice(0, 72) + '...'; }
          $('#analyzer').hide();
          $('#page').html(page);
          $('#pageLabel').show();
          $('#page').show();
          $('#violations').html('');
          violations = request.violations;
          console.log(request.violations);
          for (i = 0; i < request.violations.length; i++) {
              $('#violations').append('<div>' + '<span class="warning ' + request.violations[i].impact + '">' + request.violations[i].impact + '</span><span class="issue">' + request.violations[i].id + ' </span><div class="description">' + findCode(request.violations[i].description) + '</div></div>');
              if (request.violations[i].nodes.length > 0) {
                  $('#violations').append('<div class="affected">Affected nodes:</div>');
                  for (y = 0; y < request.violations[i].nodes.length; y++) {
                      $('#violations').append('<pre class="default prettyprint prettyprinted"><code><span>' + findCode(request.violations[i].nodes[y].html) + '</span></code></pre>');
                      $('#violations').append('<div class="failureSummary">' + formatFixes(request.violations[i].nodes[y].failureSummary) + '</div>');
                  }
              }
          }
      }
      return true;
  });

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    $('#pageLabel').hide(); $('#page').hide();
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "script hello" }, function (response) {
        console.log(response.farewell);
    });
});
