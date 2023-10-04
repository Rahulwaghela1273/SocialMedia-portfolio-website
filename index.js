//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGE
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customise-theme');
const fontsizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        }
        else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display= 'none';
        }
    })
})
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click',() => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
       
       messages.style.boxShadow ="none";
    }, 2000);
})


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customise-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click' , closeThemeModal);
theme.addEventListener('click', openThemeModal);

//fonts
const removesizeselector = () =>{
    fontsizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontsizes.forEach(size => {
    
    size.addEventListener('click',() => {
    removesizeselector();
    let fontsize;
    size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontsize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontsize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontsize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontsize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontsize = '22px';
            root.style.setProperty('----sticky-top-left','-10rem');
            root.style.setProperty('----sticky-top-right','-33rem');
        }
        //change the font size of root html element
        document.querySelector('html').style.fontSize = fontsize;
    })

})
//remove active class from color
const changeActivecolorclass = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}
// CHANGE PRIMARY COLOR
colorPalette.forEach(color => {
    color.addEventListener('click', ()=> {
        let primaryHue;
        changeActivecolorclass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-Hue', primaryHue);
    })
})
//theme BACKGROUND VALUES
let lightcolorLightness;
let whitecolorLightness;
let darkcolorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightcolorLightness);
    root.style.setProperty('--white-color-lightness', whitecolorLightness);
    root.style.setProperty('--dark-color-lightness', darkcolorLightness);
}
bg1.addEventListener('click', () =>{
    bg1.classList.add('active');
    //remove active class from other
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    //reemove customise changes from local storage
    window.location.reload();
});

bg2.addEventListener('click',()=>{
    darkcolorLightness='95%';
    whitecolorLightness='20%';
    lightcolorLightness='15%';

    // add active class
    bg2.classList.add('active');
    //remove active class from other
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});
bg3.addEventListener('click',()=>{
    darkcolorLightness='95%';
    whitecolorLightness='10%';
    lightcolorLightness='0%';

    // add active class
    bg3.classList.add('active');
    //remove active class from other
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});


//END.
