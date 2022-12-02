console.log("content-script")

chrome.runtime.onMessage.addListener(goMessage);

function goMessage(msg, sender, sendResponse) {
        console.log(msg.txt);

        if (msg.txt == 'descargar') {
                var urlHistoria = "";
                var video = document.querySelectorAll("video")[0];
                var nameHistoria = "nome";

                if (video == undefined) {
                        urlHistoria = document.querySelectorAll("img.y-yJ5")[0].srcset;
                        nameHistoria = document.querySelectorAll("img.y-yJ5")[0].baseURI.split('stories/')[1]
                } else {
                        urlHistoria = document.querySelectorAll("video")[0].src;
                        nameHistoria = document.querySelectorAll("video")[0].baseURI.split('stories/')[1]
                }

                
                nameHistoria = nameHistoria.replace(".","");
                console.log(nameHistoria.split("/")[0] +"_"+ Date.now())

                downloadImage(urlHistoria, nameHistoria);
        }
}

function downloadImage(url, name){
        fetch(url)
          .then(resp => resp.blob())
          .then(blob => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              // the filename you want
              a.download = name;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
          })
          .catch(() => alert('An error sorry'));
  }