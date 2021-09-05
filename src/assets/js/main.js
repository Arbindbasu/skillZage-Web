const ClickMe = document.getElementById('ClickMeOnLoad')?document.getElementById('ClickMeOnLoad'):null;
if(ClickMe){ ClickMe.click(); }

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('input[type="password"]');
if(togglePassword){
    togglePassword.addEventListener('click', function (e) {
        password.setAttribute('type', password.getAttribute('type') === 'password' ? 'text' : 'password');
        this.classList.toggle('fa-eye-slash');
    });
}
function popup(selector=''){    
    const overlay = document.querySelector('div.overlay');
    if(selector=='close'){
        const popup = document.querySelector('div.popup.open');
        popup.classList.toggle('open');        
    }else{
        const popup = selector?document.querySelector('div.popup.'+selector):document.querySelector('div.popup');        
        popup.classList.toggle('open');                
    }        
    overlay.classList.toggle('open');
}

function toggle(el, elt){
    let element = document.getElementById(el);
    element.classList.toggle('active');
    let elementtgl = document.getElementById(elt);
    elementtgl.classList.toggle('fa-sort-up');
}
function Line(){
    let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','IitemLine');
    newLine.setAttribute('x1','0');
    newLine.setAttribute('y1','0');
    newLine.setAttribute('x2','0');
    newLine.setAttribute('y2','0');
    newLine.setAttribute('stroke-dasharray', '5, 5');
    let svg = document.getElementById('SwgLine');
    if(svg){
        svg.append(newLine);
    }
}
function DrawLine(el, pos){
    if(!pos) return;
    let Line = document.getElementById('IitemLine');
    let Canvas = getPosition(document.getElementById('Canvas'));
    let position = getPosition(el);
    if(pos==='L'){
        Line.setAttribute('x1',position.left-Canvas.left+el.offsetWidth);
        Line.setAttribute('y1',position.top-Canvas.top+(1/2)*el.offsetHeight);
        Line.setAttribute('x2',position.left-Canvas.left+el.offsetWidth);
        Line.setAttribute('y2',position.top-Canvas.top+(1/2)*el.offsetHeight);
    }else if(pos==='R'){
        Line.setAttribute('x2',position.left-Canvas.left);
        Line.setAttribute('y2',position.top-Canvas.top+(1/2)*el.offsetHeight);    
    }
}
Line();

function getPosition(element) {
    let clientRect = element.getBoundingClientRect();
    return {left: clientRect.left + document.body.scrollLeft,
        top: clientRect.top + document.body.scrollTop};
}