let mainGridContent = document.querySelector('.mainGridContent');

let newsContainer = {
        news : [
            {        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{       
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{       
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{         
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{
        image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: true,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        },{ 
            image: "",
            title: "",
            text: "",
            comments: "",
            date: "",
            small: false,
            imgTwo: "",
            texttwo: "",
            icon: ""
        }
    ]

};

const newsBlock = () => {

    newsContainer.news.forEach((obj) => {

        let newBlock = document.createElement('div');
        let newImg = document.createElement('img');
        newImg.setAttribute('src', obj.image);

        if (obj.small){
            let newWrapper = document.createElement('div');
            newWrapper.setAttribute('class', 'newWrapper');
            mainGridContent.append(newWrapper);

            newBlock.setAttribute('class', 'newsBlockShrink');
            newBlock.setAttribute('background', obj.image);
            newWrapper.append(newBlock);

            let secondBlock = document.createElement('div');
            secondBlock.setAttribute('class', 'newsBlockShrink');
            secondBlock.setAttribute('background', obj.imageTwo);
            newWrapper.append(secondBlock);

        }
        else {
           newBlock.setAttribute('class', 'newsBlock'); 
           mainGridContent.append(newBlock);
           newBlock.append(newImg);
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