

let openIncognito = document.getElementById('openIncognito');
openIncognito.onclick = function(element) {

}






// The below function has the potential to open an incognito window 



//This function makes url into the current tab
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  console.log(url)
  chrome.windows.create({url: url},)
});
