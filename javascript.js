const body = document.querySelector(".body");
const add = document.querySelector("#add");
const ul = document.createElement('ul');
const div = document.createElement('div');
const randomList = ['lmao', 'lol', 'nti']


add.addEventListener("click", function(){
    const value = document.querySelector('input').value;
    const li = document.createElement('li');
    for (var i = 0; i < randomList.length; i++){
        var nigga =+ randomList[i];
        li.setAttribute('id', 'list '+ nigga[i]);
    }
    li.textContent = value;
    ul.append(li);
    if (li.textContent == ''){
        alert("can't be empty");
        li.remove()
    } else if(li.textContent == value){
        div.appendChild(ul);
        body.append(div);
        var button = document.createElement('span');
        button.setAttribute('id', 'remove');
        button.textContent = "x";
        li.append(button);
        button.addEventListener('click', function(){
            li.remove()
        });
    }
});


