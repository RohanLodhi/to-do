var data;
const input = document.querySelector('button');
var key=0;
//showInstallPromotion();
console.log('debug')
if(localStorage.getItem('localKey') !== null){
    key = localStorage.getItem('localKey');
}
else{
    key = 0;
}
if(key !== 0){
    for(i=0;i<key;i++){
        var li = document.createElement('li');
        var ul = document.querySelector('ul');
        li.appendChild(document.createTextNode(localStorage.getItem(i+1)));
        ul.appendChild(li);
        li.addEventListener('click', e => {
            e.target.style.textDecoration = 'line-through';
        });
        li.addEventListener('dblclick', e =>{
            e.target.remove();
        });
    }
}
console.log('debug2')
input.addEventListener('click', e => {
    console.log('hi');
    data = document.getElementById('data');
    var li = document.createElement('li');
    var ul = document.querySelector('ul');

    if(data.value !== ""){
        li.appendChild(document.createTextNode(data.value));
        ul.appendChild(li);
        localStorage.setItem(key, data.value);
        key = parseInt(key);
        
        key+=1;
        localStorage.setItem('localKey',key);

        li.addEventListener('click', e => {
            e.target.style.textDecoration = 'line-through';
        });
        li.addEventListener('dblclick', e =>{
            e.target.remove();
        });
        data.value="";
    };
});
const field = document.querySelector('input');
console.log(field);
field.addEventListener('keypress', e => {
    if(e.key==='Enter'){
        var li = document.createElement('li');
        var ul = document.querySelector('ul');
        if(field.value !== ""){
            li.appendChild(document.createTextNode(field.value));
            ul.appendChild(li);
            localStorage.setItem(key, field.value);
            key = parseInt(key);

            key+=1;
            localStorage.setItem('localKey',key);
            field.value="";
        };
    }
});
const removeList = document.getElementById('delete');
removeList.addEventListener('click',() => {
    for(i=0;i<key;i++){
        localStorage.removeItem(i);
        var li =document.querySelector('li');
        li.remove();
    }
    localStorage.removeItem('localKey');
    key = 0;
}); 
