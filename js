var engineLink  = null;
// Search Engines
var engines = [
    //  [Key Code], [Search URL],   [Home Page Link],   [Favicon]
    ["",    "https://www.google.com/#q=",                       "https://www.google.com",           "https://www.google.com/favicon.ico"],
    ["!d",  "https://www.duckduckgo.com/?q=",                   "https://www.duckduckgo.com",       "http://www.cfrank.org/f/0RIxiU.ico"],
    ["!g",  "https://www.google.com/#q=",                       "https://www.google.com",           "https://www.google.com/favicon.ico"],
    ["!t",  "https://translate.google.com/?vi=",                "https://translate.google.com/",    "https://translate.google.com/favicon.ico"],
    ["!i",  "https://www.google.com/search?tbm=isch&q=",        "https://www.images.google.com",    "https://www.google.com/favicon.ico"],
    ["!y",  "https://www.youtube.com/results?search_query=",    "https://www.youtube.com",          "https://youtube.com/favicon.ico"],
    ["!w",  "https://en.wikipedia.org/w/index.php?search=",     "https://www.en.wikipedia.org",     "http://en.wikipedia.org/favicon.ico"]
];

// Handle Search
function query(e, v)
{
    var key         = e.keyCode || e.which,
        input       = document.getElementById("q");
    // Check for search engine
    if(v.length === 2 && key !== 13 && v.lastIndexOf("!") !== -1)
    {
        var en = v.lastIndexOf("!"); // Engine Selected
        for(var i = 0; i < engines.length; ++i)
        {
            if(engines[i][0] === v.substr(en))
            {
                e.preventDefault(); // Remove the leading space on the query
                engineLink                  = engines[i][1];
                var engineIcon              = '<a href="' + engines[i][2] + '"><img src="' + engines[i][3] + '" width="16" height="16" /></a>',
                    grabFavIcon             = document.getElementById("favicon");
                grabFavIcon.innerHTML       = engineIcon;
                grabFavIcon.style.opacity   = "1";
                input.value = "";
            }
        }
    }
    // On enter
    if(key === 13)
    {
        if(engineLink != null && engineLink === engines[3][1])
        {
            var lang    = ["ru", "en"];
            if(v.match(/^[\x20-\x7E]+$/))
            {
                // English Language ~ EN - RU
                window.location = engineLink + 'c#' + lang[1] + '/' + lang[0] + '/' + v;
            }
            else if(v.match(/[\u0400-\u04FF]/))
            {
                // Russian Language ~ RU - EN
                window.location = engineLink + 'c#' + lang[0] + '/' + lang[1] + '/' + v;
            }
            else
            {
                // Unknown Language ~ AU - EN
                window.location = engineLink + 'c#auto/en/' + v;
            }
        }
        else if(engineLink != null && engineLink === engines[3][1])
        {
            var url     = "https://www.google.com/searchbyimage?image_url=",
                pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                // Is not a link
                if(!pattern.test(v))
                {
                    window.location = engineLink + v;
                }
                // Is a link
                else
                {
                    window.location = url + v;
                }
        }
        else if(engineLink != null)
        {
            window.location = engineLink + v;
        }
        else
        {
            window.location = engines[0][1] + v;
        }
    }
}