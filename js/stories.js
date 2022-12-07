let storiesWindow = document.getElementById("stories-window")


function openStories(){
    storiesWindow.classList.add('active')
}

function closeStories(){
    storiesWindow.classList.remove('active')
}

setInterval(closeStories, 15000)


// 2===================


let storiesWindow2 = document.getElementById("stories-window2")

function openStories2(){
    storiesWindow2.classList.add('active')
}

function closeStories2(){
    storiesWindow2.classList.remove('active')
}

setInterval(closeStories2, 15000)