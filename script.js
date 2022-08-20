let info = ['15.6 դյույմ / Core i9 11900H / 32 ԳԲ RAM / 1 ՏԲ SSD / GeForce RTX3050Ti 4Gb / Windows 11 Pro', '14 դյույմ / Ryzen 7 5700U / 8 ԳԲ RAM / 512 ԳԲ SSD / Radeon Graphics / Windows 10', '15.6 դյույմ / Ryzen 7 4700U / 8 ԳԲ RAM / 256 ԳԲ SSD / Radeon Graphics / Windows 10', '14 դյույմ / Core i7 1195G7 / 16 ԳԲ RAM / 512 ԳԲ SSD / Intel Iris Plus Graphics / Windows 11', '14 դյույմ / Core i5 1240g/16 ԳԲ RAM / 512 ԳԲ SSD / Radeon Graphics / Windows 10 Pro', '14 դյույմ /256 ԳԲ SSD / Intel Iris Plus Graphics / Windows 11', '14 դյույմ / Core i5 1240P / 8 ԳԲ RAM / 256 ԳԲ SSD / Intel Iris Plus Graphics / Windows 11', '14 դյույմ / Core i7 11370H / 8 ԳԲ RAM / 512 ԳԲ SSD / GeForce GTX1650 4Gb / Windows 10', '14 դյույմ / Core i7 10610U / 16 ԳԲ RAM / 128 ԳԲ SSD / Intel UHD Graphics / Windows 10 Pro', '14 դյույմ / Core i7 1165G7 / 16 ԳԲ RAM / 512 ԳԲ SSD / Intel Iris Plus Graphics / Dos', '14 դյույմ / Ryzen 5 5500U / 16 ԳԲ RAM / 256 ԳԲ SSD / Radeon Graphics / Windows 11', '16.2 դյույմ / 16 ԳԲ RAM / 512 ԳԲ SSD / MacOS', '15.6 դյույմ / Ryzen 9 5900HX / 16 ԳԲ RAM / 1 ՏԲ SSD / GeForce RTX3080 8Gb / Windows 10', '', '15.6 դյույմ / Ryzen 7 3700U / 16 ԳԲ RAM / 512 ԳԲ SSD / Radeon Graphics / Windows 10', '                                                  …                                                 ', '                                                  …RAM / 512 ԳԲ SSD / Intel Iris Plus Graphics / Dos'];
let priceData = ['2150', '1125', '1200', '1960', '950', '1450', '1250', '1550', '1120', '1350', '2399', '2500', '2399', '180', '120','850']
let names = ['Dell XPS 9510   ', 'Asus VivoBook TM420UA', 'HP Envy X360 15-ee0029', 'Lenovo IP Slim 9 Touch', 'HP Envy X360 15-ey0023dx', 'HP 14-dq2088wm', 'Asus ZenBook Q409Z', 'Asus VivoBook K3400P', 'Dell Latitude 5410', 'Lenovo ThinkPad E14', 'Lenovo Flex 5 ', 'MacBook Pro 16(2021) ', 'Asus ROG Strix Scar 15', 'Apple Airpods 2', '.Honor MagicBook 15', 'WACOM Intuos M Bluetooth ', 'HP ProBook 450 G8']
let dataImg = ['https://notebookcentre.am/wa-data/public/shop/products/51/48/4851/images/9227/9227.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/42/48/4842/images/9205/9205.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/41/48/4841/images/9202/9202.200@2x.jpeg', 'https://notebookcentre.am/wa-data/public/shop/products/19/48/4819/images/9157/9157.200@2x.PNG', 'https://notebookcentre.am/wa-data/public/shop/products/17/48/4817/images/9149/9149.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/86/47/4786/images/9101/9101.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/26/47/4726/images/9022/9022.200@2x.png', 'https://notebookcentre.am/wa-data/public/shop/products/23/47/4723/images/9014/9014.200@2x.png', 'https://notebookcentre.am/wa-data/public/shop/products/21/47/4721/images/9007/9007.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/20/47/4720/images/9003/9003.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/18/47/4718/images/8993/8993.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/30/37/3730/images/6718/6718.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/38/42/4238/images/7949/7949.200@2x.jpg', 'https://notebookcentre.am/wa-data/public/shop/products/92/06/692/images/1030/1030.200@2x.jpg','https://notebookcentre.am/wa-data/public/shop/products/85/21/2185/images/3088/3088.200@2x.png', 'https://notebookcentre.am/wa-data/public/shop/products/16/47/4716/images/8989/8989.200@2x.jpg'];
let data = {};
let cardList = {};
let header = document.querySelector('.header')
let cardIcon = document.querySelector('.cardListPng')
let imgArr = dataImg.map((elem,index) => data[index] = {elem})
let main = document.createElement('div')
let counter = document.createElement('button')
let wishCounter = document.createElement('button')
let backIcon = document.querySelector('.backIcon')
let cardHeader = document.createElement('div')
let numForCard = 0;
let input = document.querySelector('.input');
wishCounter.className = 'wishCounter'
wishCounter.style.display = 'none';
cardHeader.className = 'cardHeader';
backIcon.style.display = 'none';
imgArr.forEach((elem,index) => elem.info = info[index])
imgArr.forEach((elem,index) => elem.name = names[index])
imgArr.forEach((elem,index) => elem.price = priceData[index])
counter.style.display = 'none';

imgArr.forEach((element, index) => {
    let full = document.createElement('img');
    let empty = document.createElement('img');
    let dollar = document.createElement('div')
    let button = document.createElement('button')
    let divImg = document.createElement('div')
    let img = document.createElement('img')
    let price = document.createElement('p');
    let info = document.createElement('p')
    let paragraph = document.createElement('p')
    full.setAttribute('src', 'fullHeart.png')
    empty.setAttribute('src', 'emptyHeart.png')
    full.className = 'fullHeart';
    empty.className = 'emptyHeart'
    info.className = 'info';
    counter.className = 'counter';
    button.className = 'button'
    paragraph.className = 'paragraph'
    dollar.innerText = '$'
    dollar.className = 'dollar'
    main.className = 'main'
    divImg.className = 'divImg'
    img.className = 'img'
    price.className = 'price';
    button.innerText = 'Add'
    paragraph.innerText = element.name;
    price.innerText = element.price;
    img.setAttribute('src', element.elem)
    divImg.append(full)
    divImg.append(empty)
    divImg.append(dollar)
    header.append(counter)
    header.append(wishCounter)
    divImg.append(img)
    divImg.append(button)
    divImg.append(paragraph)
    divImg.append(price)
    main.append(divImg)
    document.body.append(main)
    button.addEventListener('click', () => {
        counter.style.display = 'block'
        counter.innerText = +counter.innerText + 1;
        if (cardList[index] === undefined) {
            cardList[index] = {
                img: element.elem,
                price: element.price,
                info: element.info,
                dollar: dollar.innerText
            };
            }
         else
        {
                    cardList[index + 1] = {
                        img: element.elem,
                        price: element.price,
                        info: element.info,
                        dollar: dollar.innerText
                }
            }
        numForCard += +cardList[index].price
        cardHeader.innerText = numForCard;
    })
    full.style.display = 'none';
    empty.addEventListener('click', () => {
        wishCounter.style.display = '';
        wishCounter.innerText = +wishCounter.innerText + 1;
        empty.style.display = 'none';
        full.style.display = 'block';
    })
    full.addEventListener('click', () => {
        wishCounter.innerText = +wishCounter.innerText - 1
        if (+wishCounter.innerText === 0) {
            wishCounter.style.display = 'none';
        }
        full.style.display = 'none';
        empty.style.display = 'block'
    })
    
    
    input.addEventListener('input', (event) => {
        let inputNames = [...document.querySelectorAll('.paragraph')]
        console.log(inputNames[0].innerText)
        inputNames.forEach((el, index) => {
            if (!el.innerText.includes(input.value)) {
                el.parentElement.style.display = 'none'
            }
        })
    })
})





let containerInput = document.createElement('div');
containerInput.classList.add('container');
let cardCounter = document.createElement('div')
let container = document.createElement('div')
cardCounter.style.display = 'none';
container.className = 'container';
container.style.display = 'none';
cardIcon.addEventListener('click', () => {
    if (numForCard === 0) {
        cardCounter.style.display = 'none'
    }else{
        cardCounter.style.display = 'block'
    }
    container.style.display = 'block';
    main.style.display = 'none';
    cardIcon.style.display = 'none';
    backIcon.style.display = 'block'
    for (let i in cardList) {
        let cardListImage = document.createElement('img')
        let cardImageDiv = document.createElement('div');
        let cardPrice = document.createElement('p');
        let cardInfo = document.createElement('p');
        let button = document.createElement('button')
        let cardDollar = document.createElement('div')
        cardCounter.className = 'cardCounter'
        cardCounter.innerText = 'Need to Pay ' + numForCard + '$';
        cardDollar.innerText = cardList[i].dollar
        cardDollar.className = 'cardDollar'
        cardInfo.className = 'cardInfo'
        cardInfo.innerText = cardList[i].info;
        cardPrice.className = 'cardPrice'
        cardPrice.innerText = cardList[i].price;
        button.className = 'CardButton'
        button.innerText = 'delete'
        cardListImage.setAttribute('src', cardList[i].img)
        cardImageDiv.className = 'cardImageDiv'
        cardListImage.className = 'cardImg'
        cardImageDiv.append(cardPrice)
        cardImageDiv.append(cardDollar)
        cardImageDiv.append(cardInfo)
        cardImageDiv.append(button)
        cardImageDiv.append(cardListImage);
        container.append(cardImageDiv)
        document.body.append(container)
        button.addEventListener('click', () => {
            numForCard -= +button.parentElement.firstChild.innerText
            cardCounter.innerText = 'Need to Pay ' + numForCard + '$';
            if (numForCard === 0) {
                cardCounter.style.display = 'none';
            }
            button.parentElement.style.display = 'none';
            counter.innerText = +counter.innerText - 1;
            for (let i in cardList) {
                delete cardList[i];
            }
        })
    }
})
header.append(cardCounter)
if (+counter.innerText > 1) {
    counter.style.display = 'none'
}
backIcon.addEventListener('click', () => {
    cardCounter.style.display = 'none'
    container.style.display = 'none'
    main.style.display = 'flex';
    cardIcon.style.display = 'block';
    backIcon.style.display = 'none';
    for (let i in cardList) {
        delete cardList[i];
    }
})
