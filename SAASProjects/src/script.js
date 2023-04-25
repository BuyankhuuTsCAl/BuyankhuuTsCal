const clientId = "b9cc3b5b1eab4ca08469fcf73a13e1b8";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if(document.getElementById("startButton")!=null){
document.getElementById("startButton").addEventListener("click",function() {redirectToAuthCodeFlow(clientId)});
}
if (code){
const accessTokens = accessToken(clientId);
const topTracks =  await fetchTopTracks(accessTokens);
checkTracks(topTracks);
}


function switchBackground(){
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "contents";
}
async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "https://buyankhuutscal.github.io/SAASProjects/wheel.html");
    params.append("scope", 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read');
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
async function accessToken(client_id){
    const endpoint = "https://accounts.spotify.com/api/token"
    const body = {
            "grant_type": "client_credentials",
            "client_id":client_id,
            "client_secret":"090c9156d6944e04a147103e6d752350"
        }

    const requests = new XMLHttpRequest();
    requests.open("POST",endpoint);
    requests.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    requests.send(JSON.stringify(body))
    requests.onload=()=>{
        console.log(requests.response);
    }
    return JSON.parse(requests.response);
}

async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret","090c9156d6944e04a147103e6d752350");
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "https://buyankhuutscal.github.io/SAASProjects/wheel.html");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

function populateUI(profile) {
    document.getElementById("displayName").innerText = profile.display_name;
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar").appendChild(profileImage);
        document.getElementById("imgUrl").innerText = profile.images[0].url;
    }
    document.getElementById("id").innerText = profile.id;
    document.getElementById("email").innerText = profile.email;
    document.getElementById("uri").innerText = profile.uri;
    document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url").innerText = profile.href;
    document.getElementById("url").setAttribute("href", profile.href);

}

async function fetchPlaylists(token) {
    const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}


function populatePlaylists(playlists) {

   
    var names = new Array();
    function addName(item){
        names += item.name;
    }
    playlists.items.forEach(addName)

    var answer = prompt('Which of these playlists would you like to see '+names);
    while(!names.includes(answer)){
        answer = prompt('Please choose one of the following '+names);
    }

    var ind = names.indexOf(answer);
    playlistId = playlists.items[ind].id;
    
    document.getElementById("play").innerText = names;

}


async function fetchTracks(token) {
    const result = await fetch("https://api.spotify.com/v1/playlists/"+playlistId+"/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}



async function fetchTopTracks(token) {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks?", {
        headers: { Authorization: `Bearer ${token}` }
    });


    return await result.json();
}

function checkTracks(topTracks){
    var names = new Array();
    var images = new Array();
    //maybe look into a specific playlist by giving them the option of getting info from that playlist and then compare with the track. 
    function addName(item){
        names+=" "+ item.name;
      
        images.push(item.album.images[2].url);
    }
    topTracks.items.forEach(addName);
    let numOfTracks = 6;
    for(let x = 0; x<numOfTracks;x++){
        let tracksitem=document.querySelectorAll(".cabin");
       
        tracksitem[x].style.backgroundImage = "url(\'"+images[x]+"\')";

    }
    

    

   /**
    * const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar").appendChild(profileImage);
          /**var temp = new Image(200,200);
        temp.src = item.album.images[1].url;**/
    

}


