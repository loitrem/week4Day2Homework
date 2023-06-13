let mainGridContent = document.querySelector('mainGridContent');

let newsContainer = {
        news : [
            {        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        },{        
            image: "",
            title: "",
            text: "",
            comments: "",
            date: ""
        }
    ]

};

const newsBlock = () => {

    newsContainer.news.forEach(() => {

        let newBlock = document.createElement('div');
        let newImg = document.createElement('img');
        newImg.setAttribute('src', newsContainer.news.image);
        newBlock.setAttribute('class', 'newsBlock');
        mainGridContent.append(newBlock);
        newBlock.append(newImg);

    });

}

newsBlock();