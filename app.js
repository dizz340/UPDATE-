function loadData() {
return JSON.parse(localStorage.getItem(KEY)) || [
{ title:'Google', url:'https://google.com', img:'https://picsum.photos/400/200?1' },
{ title:'YouTube', url:'https://youtube.com', img:'https://picsum.photos/400/200?2' }
];
}


function saveData(data) {
localStorage.setItem(KEY, JSON.stringify(data));
}


function render(containerId, clickable=true) {
const data = loadData();
const wrap = document.getElementById(containerId);
wrap.innerHTML='';


data.forEach((d,i)=>{
const card = document.createElement('div');
card.className='card';
card.innerHTML=`<img src="${d.img}"><div class="title">${d.title}</div>`;
if(clickable) card.onclick=()=>window.open(d.url,'_blank');
wrap.appendChild(card);
});
}


function addLink(title,url,img){
const data = loadData();
data.push({title,url,img});
saveData(data);
}