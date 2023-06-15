let mainGridContent = document.querySelector('.mainGridContent');

let newsContainer = {
        news : [
            {        
            image: "https://static.warthunder.com/upload/image/0_2022_Anons/Other/_thumbs/520x/anons_378_la_royale_logo_5a05bb59798a886d5639cb41fd2a8f02.jpg",
            title: "Meet Major Update “La Royale”!",
            text: "The beginning of the Closed Beta Test for the French Naval forces, new and updated graphical effects for flares, afterburners, rockets and missiles along with",
            comments: "25",
            date: "14 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{        
            image: "https://static.warthunder.com/upload/image/0_2022_Anons/Navy/_thumbs/520x/378_wt_steam_la_royale_da294efaa0d4e83f8239a94f8a6faa50.jpg",
            title: "Become a Tester for the French Navy!",
            text: "One of the largest and oldest naval fleets in the world, nicknamed La Royale back in the 17th century, has arrived at War Thunder! Its research tree consists",
            comments: "12",
            date: "14 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{        
            image: "https://warthunder.com/assets/img/jpg/widget-about-game.jpg",
            title: "ABOUT THE GAME",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "https://warthunder.com/assets/img/jpg/widget-exchange.jpg",
            titletwo: "MARKET",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-out.svg"
        },{        
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Other/_thumbs/520x/econ_130623_378_824c3a32565f119faaf66a9028e8da40.jpg",
            title: "Economy Revision - Our Plan in Detail",
            text: "First and foremost, we would like to express our gratitude for your patience during the past few weeks as we diligently worked on outlining the roadmap for",
            comments: "345",
            date: "13 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{       
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Other/_thumbs/520x/Map_anons_b6b022dd6d5402e0aa6c33cb182d21f2.jpg",
            title: "War Thunder Changes Roadmap",
            text: "After your feedback and suggestions, we would like to show you the development roadmap of War Thunder for the next few months.",
            comments: "341",
            date: "13 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{       
            image: "https://warthunder.com/assets/img/jpg/widget-tournament.jpg",
            title: "TOURNAMENTS",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "https://warthunder.com/assets/img/jpg/widget-wiki.jpg",
            titletwo: "WIKI",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-out.svg"
        },{         
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Navy/_thumbs/520x/anons_378_cruiser_emile_bertin_a643dbccf575201e353f06a44ca26cdb.jpg",
            title: "Émile Bertin light cruiser: hit and run",
            text: "The French Émile Bertin light cruiser lacks protection, but is capable of inflicting deadly damage. The Agile glass cannon of the",
            comments: "16",
            date: "12 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Videos/_thumbs/520x/Small358_3e01c34fe8153559dea8937eacb2a8d4.jpg",
            title: "The Shooting Range #358",
            text: "You are watch The Shooting Range - a weekly show for all tankers, airmen and Captains in War Thunder.",
            comments: "1",
            date: "11 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{ 
            image: "https://warthunder.com/assets/img/webp/backgrounds/widget-merch_banner.webp",
            title: "MERCHANDISE",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "https://warthunder.com/assets/img/jpg/widget-social.jpg",
            titletwo: "SOCIAL MEDIA",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-out.svg"
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Videos/_thumbs/520x/TS_88_small_clear_2169dbdb29206cfbb64331ba33f81e4d.jpg",
            title: "Thunder Show: ANTI-AIR NIGHTMARE",
            text: "Hi! Welcome to Thunder Show and the most hilarious moments of the past week. In this episode: additional chores before nuclear bombing, ice dodging",
            comments: "1",
            date: "9 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Ground/_thumbs/520x/stormer_hvm_940px_Anons_fc6fa9891483986d4f52c799e0f23b55.jpg",
            title: "Missile duels: fair play",
            text: "More improvements for SACLOS missiles are coming with the La Royale update to bring more balance and authenticity to missile duels.",
            comments: "58",
            date: "9 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Navy/_thumbs/520x/Gen_Anons_d741d91831e132ddc15dd0e1e9480c46.jpg",
            title: "RN Geniere Is Back for Italian Navy Day",
            text: "On June 10th, 1918 an Italian MAS 15 torpedo boat, commanded by lieutenant Luigi Rizzo, scouted an Austro-Hungarian dreadnought Szent István — and",
            comments: "",
            date: "9 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Videos/_thumbs/520x/Small_cbd5c711c860e5a20b229bc06128691a.jpg",
            title: "Bell UH-1: American Gunship",
            text: "The UH-1 helicopter, also known as “Iroquois” or “Huey”, is a vehicle that every single War Thunder player is familiar with. Thanks to its extensive use in",
            comments: "11",
            date:" 7 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/Ground/_thumbs/520x/anons_378_m4_t26_e2adb95827976d005c2139ddcf18f971.jpg",
            title: "M4/T26: a “Sherman” and a half",
            text: "A US-built experimental M4 tank with a turret and a gun from the T26 will give you the ultimate “Sherman” experience!",
            comments: "34",
            date: "7 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        },{ 
            image: "https://static.warthunder.com/upload/image//0_2022_Anons/_thumbs/520x/WT4_SALE_378h213_6d5115f556eb07592e407308c8760a28.jpg",
            title: "Vehicles of D-Day for Golden Eagles!",
            text: "Today the world remembers the valor of the Allies in their daring landing in Normandy as a part of Operation Overlord. The success of D-Day allowed ",
            comments: "13",
            date: "6 June 2023",
            small: false,
            imgTwo: "",
            titletwo: "",
            texttwo: "",
            icon: "https://warthunder.com/assets/img/svg/icon-speech-bubble.svg"
        }
    ]

};

const newsBlock = () => {

    newsContainer.news.forEach((obj) => {

        let newBlock = document.createElement('div');
        let newBlank = document.createElement('div');
        let newBottom = document.createElement('div');
        let newBottomHeader = document.createElement('div');
        let newBottomText = document.createElement('div');
        let newBottomMessages = document.createElement('div');
        let newBottomMessagesLeft = document.createElement('div');
        let newBottomMessagesRight = document.createElement('div');
        let newBottomShrinkWrapper = document.createElement('div');
        let newBottomShrink = document.createElement('div');
        let newBottomShrinkL = document.createElement('div');
        let newBottomShrinkR = document.createElement('div');
        let newBottomShrinkBlank = document.createElement('div')
        let newBottomShrinkWrapperTop = document.createElement('div');
        let newBottomShrinkTop = document.createElement('div');
        let newBottomShrinkTopL = document.createElement('div');
        let newBottomShrinkTopR = document.createElement('div');
        let newBottomShrinkBlankTop = document.createElement('div')
        let newBottomImg = document.createElement('img');
        let newBottomImgTop = document.createElement('img');

        if (obj.small){
            let newWrapper = document.createElement('div');
            newWrapper.setAttribute('class', 'newWrapper');
            mainGridContent.append(newWrapper);

            newBlock.setAttribute('class', 'newsBlockShrinkTop');
            // newBlock.setAttribute('onmouseover', 'zoomer()');
            newBlock.style.backgroundImage = "linear-gradient(to bottom, transparent 0%, #13191b 98%), url(" + obj.image + ")";
            newWrapper.append(newBlock);
            newBlock.append(newBottomShrinkWrapperTop);
            newBottomShrinkWrapperTop.append(newBottomShrinkBlankTop);
            newBottomShrinkWrapperTop.append(newBottomShrinkTop);
            newBottomShrinkWrapperTop.setAttribute('class', 'newBottomShrinkWrapperTop');
            newBottomShrinkTop.setAttribute('class', 'newBottomShrinkTop');
            newBottomShrinkTopL.setAttribute('class', 'newBottomShrinkTopL');
            newBottomShrinkTopR.setAttribute('class', 'newBottomShrinkTopR');
            newBottomShrinkBlankTop.setAttribute('class', 'newBottomShrinkBlankTop')
            newBottomShrinkTop.append(newBottomShrinkTopL);
            newBottomShrinkTopL.innerHTML = obj.title;
            newBottomShrinkTop.append(newBottomShrinkTopR);
            newBottomShrinkTopR.append(newBottomImgTop);
            newBottomImgTop.setAttribute('src', "https://warthunder.com/assets/img/svg/icon-out.svg#icon-out");
            newBottomImgTop.setAttribute('class', "BottomRightImgTop");



            let secondBlock = document.createElement('div');
            secondBlock.setAttribute('class', 'newsBlockShrink');
            secondBlock.style.backgroundImage = "linear-gradient(to bottom, transparent 0%, #13191b 98%), url(" + obj.imgTwo + ")"
            newWrapper.append(secondBlock);
            secondBlock.append(newBottomShrinkWrapper);
            newBottomShrinkWrapper.append(newBottomShrinkBlank);
            newBottomShrinkWrapper.append(newBottomShrink);
            newBottomShrinkWrapper.setAttribute('class', 'newBottomShrinkWrapper');
            newBottomShrink.setAttribute('class', 'newBottomShrink');
            newBottomShrinkL.setAttribute('class', 'newBottomShrinkL');
            newBottomShrinkR.setAttribute('class', 'newBottomShrinkR');
            newBottomShrinkBlank.setAttribute('class', 'newBottomShrinkBlank')
            newBottomShrink.append(newBottomShrinkL);
            newBottomShrinkL.innerHTML = obj.titletwo;
            newBottomShrink.append(newBottomShrinkR);
            newBottomShrinkR.append(newBottomImg);
            newBottomImg.setAttribute('src', "https://warthunder.com/assets/img/svg/icon-out.svg#icon-out");
            newBottomImg.setAttribute('class', "BottomRightImg");

        }
        else {
            newBlock.setAttribute('class', 'newsBlock'); 
            newBlock.style.backgroundImage = "url(" + obj.image + ")"

            mainGridContent.append(newBlock);

            newBlock.append(newBlank);
            newBlock.append(newBottom);
            newBlock.append(newBottomMessages);

            newBottom.setAttribute('class', 'newBottom');
            newBottom.append(newBottomHeader);
            
            newBottomHeader.setAttribute('class', 'newBottomHeader');
            newBottomHeader.innerHTML = obj.title;
            
            newBottom.append(newBottomText);

            newBottomText.setAttribute('class', 'newBottomText');
            newBottomText.innerHTML = obj.text;

            newBottomMessages.setAttribute('class', 'newBottomMessages');
            newBottomMessagesLeft.setAttribute('class', 'newBottomMessagesLeft');
            newBottomMessagesRight.setAttribute('class', 'newBottomMessagesRight');

            newBottomMessages.setAttribute('class', 'newBottomMessages');
            newBottomMessagesLeft.setAttribute('class', 'newBottomMessagesLeft');
            newBottomMessagesRight.setAttribute('class', 'newBottomMessagesRight');
            newBottomMessages.append(newBottomMessagesLeft);
            newBottomMessages.append(newBottomMessagesRight);

        }
    });

}

newsBlock();

let menuContainer = {
    list: [{
            name: "GAME",
            arrow: true
        },{
            name: "MEDIA",
            arrow: true
        },{
            name: "TUTORIALS",
            arrow: false
        },{
            name: "WORKSHOP",
            arrow: true
        },{
            name: "COMMUNITY",
            arrow: true
        },{
            name: "ESPORT",
            arrow: true
        }
    ]
}

let ul = document.querySelector('.menuUl');


const menuList = () => {

    menuContainer.list.forEach((obj) => {

        let newLi = document.createElement('li');

        if (obj.arrow){
            newLi.setAttribute('class', 'menuLi');
            newLi.innerHTML = obj.name;
            ul.append(newLi);

            let newWrapper = document.createElement('div');
            newWrapper.setAttribute('class', 'bottomLinkArrowWrapper');
            ul.append(newWrapper);

            let arrowDiv = document.createElement('div');
            arrowDiv.setAttribute('class', 'bottomLinkArrow');
            newWrapper.append(arrowDiv);

        }
        else {
            newLi.setAttribute('class', 'menuLi');
            newLi.innerHTML = obj.name;
            ul.append(newLi);

            let newWrapper = document.createElement('div');
            newWrapper.setAttribute('class', 'bottomLinkArrowWrapper');
            ul.append(newWrapper);
        }
    });
}

menuList();

let osContainer = {
    list: [{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-windows.svg",
            height: "21px",
            width: "95px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-mac.svg",
            height: "35px",
            width: "25px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-linux.svg",
            height: "32px",
            width: "32px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-oculus.svg",
            height: "34px",
            width: "42px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-vive.svg",
            height: "36px",
            width: "46px"
        }
    ]
}

let osCell = document.querySelector('.osCell');


const osList = () => {

    osContainer.list.forEach((obj) => {

        let newImg = document.createElement('img');
        let newDiv = document.createElement('div');

        if (obj.img){
            newDiv.setAttribute('class', 'os');
            newDiv.style.width = obj.width;
            newDiv.style.height = obj.height;
            newImg.setAttribute('class', 'osImg');
            newImg.setAttribute('src', obj.img);
            osCell.append(newDiv);
            newDiv.append(newImg);
        }
    });
}

osList();

let consoleContainer = {
    list: [{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-ps4.svg#logo-ps4",
            height: "24px",
            width: "110px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-xbox-one.svg#logo-xbox-one",
            height: "24px",
            width: "124px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-ps5.svg#logo-ps5",
            height: "24px",
            width: "106px"
        },{
            img: "https://warthunder.com/assets/img/svg/platforms/logo-xbox-series-xs.svg#logo-xbox-series-xs",
            height: "24px",
            width: "175px"
        }
    ]
}

let consoleRow = document.querySelector('.consoleRow');


const consoleList = () => {

    consoleContainer.list.forEach((obj) => {

        let newImg = document.createElement('img');
        let newDiv = document.createElement('div');

        if (obj.img){
            newDiv.setAttribute('class', 'console');
            newDiv.style.width = obj.width;
            newDiv.style.height = obj.height;
            newImg.setAttribute('class', 'consoleImg');
            newImg.setAttribute('src', obj.img);
            consoleRow.append(newDiv);
            newDiv.append(newImg);
        }
    });
}

consoleList();

// found on w3 schools and modified
function scrollFunction() {
    
    let barBtm = document.querySelector(".bottomNavbar");
    let warThunderLogo = document.querySelector(".warThunderLogoImg");

    if (barBtm.scrollTop > 125 || document.documentElement.scrollTop > 125) {
        barBtm.style.height = "54px";
        barBtm.style.top = "0";
        barBtm.style.position = "fixed";
        warThunderLogo.style.height = "55px";
        warThunderLogo.style.width = "95px";
    } else {
        barBtm.style.height = "140px";
        barBtm.style.top = "";
        barBtm.style.position = "";
        warThunderLogo.style.height = "105px";
        warThunderLogo.style.width = "205px";
    }
}

window.onscroll = function() {scrollFunction()};


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let signin = document.querySelector('.signin');
let warThunderBox = document.querySelector('.warThunderBox');


let hideMe = () => {
    warThunderBox.classList.toggle('warThunderBoxHide');
}

let loggedIn = () => {
 
    if(signin.innerHTML === "SIGN IN"){
    signin.classList.toggle(signin.innerHTML = "LOG OUT");
    }
    else {
        signin.classList.toggle(signin.innerHTML = "SIGN IN");
    }
}

const slide = () => {
    let fly = document.querySelector('.contentWrapper');
    fly.classList.toggle('contentWrapperHide');
    hideMe();
}

const zoom = () => {
    let zoom = document.querySelector('.newsBlockShrink');
    zoom.classList.toggle('zooming');
}