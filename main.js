String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query){
    switch(query.substr(0, 2)){
        case "-d":
            query = query.substr(3);
            window.location = "https://duckduckgo.com/?q=" +
                query.replaceChars(" ", "+");
            break;
        case "-y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "+");
            break;
        case "-w":
            query = query.substr(3);
            window.location =
                "https://en.wikipedia.org/w/index.php?search=" +
                query.replaceChars(" ", "%20");
            break;
        case "-4":
            query = query.substr(3);
            window.location =
                "http://boards.4chan.org/" +
                query.replaceChars(" ", "%20");
            break;
        case "-r":
            query = query.substr(3);
            window.location =
                "http://www.reddit.com/r/" +
                query.replaceChars(" ", "%20");
            break;
        case "-i":
            query = query.substr(3);
            window.location =
                "https://www.google.com/search?q=" +
                query.replaceChars(" ", "%20") + "&tbm=isch";
            break;
        default:
            window.location="https://www.google.com/#q=" +
                query.replaceChars(" ", "+");
    }
}

window.onload = function(){
    // search
    searchinput = document.getElementById("searchinput");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }

    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");

        }

