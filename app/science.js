const fetchbtn = document.getElementById("fetch-btn");
const mainWrapper = document.getElementById("main-wrapper");
const filterBtn = document.getElementById("filter-btn");
const valueInput = document.querySelector('.value')

function loading(){
    fetchingData()
}


//Loads all data on first visit
const fetchingData = async () => {
    const query = await fetch('https://inshorts.deta.dev/news?category=science');
    const results = await query.json();
    console.log(results);

    const newsArray = results.data;

    newsArray.forEach((items) => {
            const list = ` <div class="item">
                                <img src=${items.imageUrl} alt="">
                                <h3>${items.author}</h3>
                                <p>${items.content}</p>
                                <p>${items.title}</p>
                                <a href="">${items.url}</a>
                            </div>`

            mainWrapper.insertAdjacentHTML("beforeend", list);
    })
}

// fetchbtn.addEventListener('click', () => {
//     fetchingData();
// })


//redner when you filter
const filterAction = async () => {
    //fetching all the new feeds
    const query = await fetch('https://inshorts.deta.dev/news?category=science');
    const results = await query.json();
    console.log(results);

    const newsArray = results.data;
    //value of the search input
    const inputValue = valueInput.value;
    const newListArray = newsArray.filter(item => item.author == inputValue);
    
    newListArray.forEach((items) => {
        const list = ` <div class="item">
                            <img src=${items.imageUrl} alt="">
                            <h3>${items.author}</h3>
                            <p>${items.content}</p>
                            <p>${items.title}</p>
                            <a href="">${items.url}</a>
                        </div>`

        mainWrapper.insertAdjacentHTML("beforeend", list);
})
    
}

filterBtn.addEventListener('click', () => {
    mainWrapper.innerHTML = "";
   filterAction();
})

