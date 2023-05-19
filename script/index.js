console.log("welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('../image/Spotify Clone/songs/5.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from( document.getElementsByClassName('songItem'));



let songs =[
   
    {songName: "coco cola Zalima", filePath: "../image/Spotify Clone/songs/1.mp3", coverPath: "../image/Spotify Clone/covers/10.jpg"},
    {songName: "let me love you", filePath: "../image/Spotify Clone/songs/2.mp3", coverPath: "../image/Spotify Clone/covers/2.jpg"},
    {songName: "meri Zindgi ho tum", filePath: "../image/Spotify Clone/songs/3.mp3", coverPath: "../image/Spotify Clone/covers/3.jpg"},
    {songName: "rata lambiyaan", filePath: "../image/Spotify Clone/songs/4.mp3", coverPath: "../image/Spotify Clone/covers/4.jpg"},
    {songName: "Sugar & brownish", filePath: "../image/Spotify Clone/5.mp3", coverPath: "../image/Spotify Clone/covers/5.jpg"},
    {songName: "Senorita", filePath: "../image/Spotify Clone/songs/6.mp3", coverPath: "../image/Spotify Clone/covers/6.jpg"},
    {songName: "ShubhanAllh", filePath: "../image/Spotify Clone/7.mp3", coverPath: "../image/Spotify Clone/covers/7.jpg"},
    {songName: "Tip Tip barish ", filePath: "../image/Spotify Clone/songs/8.mp3", coverPath: "../image/Spotify Clone/covers/8.jpg"},
    {songName: "Tum man meri jaan ", filePath: "../image/Spotify Clone/9.mp3", coverPath: "../image/Spotify Clone/covers/9.jpg"},
    {songName: "tum jo ", filePath: "../image/Spotify Clone/songs/10.mp3", coverPath: "../image/Spotify Clone/covers/1.jpg"},
    
    
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

 // audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
         gif.style.opacity = 0;
         
    } 
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })  
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt( e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `../image/Spotify Clone/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../image/Spotify Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../image/Spotify Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})