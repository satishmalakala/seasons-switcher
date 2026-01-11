let smallImageEl = document.getElementById("smallImage");
let meadiumImageEl = document.getElementById("meadiumImage");

let springBtnEl = document.getElementById("springBtn");
let summergBtnEl = document.getElementById("summergBtn");
let autumnBtnEl = document.getElementById("autumnBtn");
let winterBtnEl = document.getElementById("winterBtn");

function changeToSpring(){
smallImageEl.src  = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
meadiumImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
}

function changeToSummer(){
    smallImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    meadiumImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
}

function changeToAntumn(){
smallImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
meadiumImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
}

function changeToWinter(){
    smallImageEl.src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    meadiumImageEl.src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
}