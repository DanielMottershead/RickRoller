
ricky.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: rickRoll,
    });
  });
  
 

    function rickRoll(){
        var content = '<div style="' +
           'position: absolute;' +
            'width: 100%;' +
            'height: 100%;' +
            'top: 0;' +
            'left: 0;' +
            'bottom: 0;' +
            'right: 0;' +
            'display: flex;' +
            'flex-direction: column;' +
            'justify-content: center;' +
            'align-items: center;">' +
            '<iframe width=100% height=100%  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&modestbranding=1&amp;controls=0&showinfo=0&autohide=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        document.getElementsByTagName('body')[0].innerHTML = content;
        }
    
  