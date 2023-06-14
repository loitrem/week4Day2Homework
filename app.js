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