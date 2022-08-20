// //creating data
// let images = ['https://menu.am/resources/default/img/restaurants/big/1631171991340-1416.png', 'https://menu.am/resources/default/img/restaurants/big/1622474046078-2423.png', 'https://menu.am/resources/default/img/restaurants/big/1635760020646-95.png', 'https://menu.am/resources/default/img/restaurants/big/1659622230220-2650.png', 'https://menu.am/resources/default/img/restaurants/big/1643695006935-2564.png', 'https://menu.am/resources/default/img/restaurants/big/1633947715277-2517.png', 'https://menu.am/resources/default/img/restaurants/big/1635491385538-220.png', 'https://menu.am/resources/default/img/restaurants/big/1631269050464-2408.png', 'https://menu.am/resources/default/img/restaurants/big/1635491732422-117.png', 'https://menu.am/resources/default/img/restaurants/big/KFC.png', 'https://menu.am/resources/default/img/restaurants/big/1623845244129-2453.png', 'https://menu.am/resources/default/img/restaurants/big/1660683390432-2310.png', 'https://menu.am/resources/default/img/restaurants/big/1635492004806-447.png', 'https://menu.am/resources/default/img/restaurants/big/mr-gyros.png', 'https://menu.am/resources/default/img/restaurants/big/1635499590109-751.png', 'https://menu.am/resources/default/img/restaurants/big/1624517428381-586.png', 'https://menu.am/resources/default/img/restaurants/big/1624514329497-87.png'];
// let data = {};
// let arrImg = images.map((elem, index )=>  data[index] = {elem})
// console.log(arrImg)
// //end data
// let header = document.querySelector('.header')
// let main = document.querySelector('.main')
// let arrayOfImages = [];
// let counter = document.querySelector('.counter')
//
// //trashBox start
// let trashBoxArr = [];
// let trashBox = document.querySelector('.trashBox')
// let trashBoxDiv = document.createElement('div')
// let trashBoxImages = document.createElement('div');
// trashBoxDiv.className = 'trashBoxDiv'
// trashBoxDiv.style.display = 'none';
// trashBoxImages.className = 'trashImage';
//
// arrImg.forEach((element,index) => {
//     let dives = document.createElement('div')
//     let image = document.createElement('img')
//     let buttons = document.createElement('button')
//     buttons.className = 'buttons'
//     buttons.innerText = 'Buy'
//     dives.append(buttons)
//     image.setAttribute('src', element.elem)
//     arrayOfImages.push(image)
//     dives.append(image)
//     main.append(dives)
//     buttons.addEventListener('click', () => {
//         counter.innerText = +counter.innerText + 1;
//         trashBoxArr.push(image.currentSrc)
//     })
// })
//
// let trashHeader = document.querySelector('.trashHeader')
// trashHeader.style.display = 'none'
//
// trashBox.addEventListener('click',
//     (event) => {
//         if (trashBoxDiv.style.display !== 'flex') {
//             trashHeader.style.display = 'flex';
//             document.body.append(trashHeader)
//             header.style.display = 'none';
//             main.style.display = 'none';
//             trashBoxDiv.style.display = 'flex';
//             trashBoxDiv.style.flexWrap = 'wrap'
//             trashBoxArr.forEach(elem => {
//                 let trashDiv = document.createElement('div');
//                 trashDiv.className = 'trashDiv'
//                 let trashImage = document.createElement('img');
//                 trashImage.setAttribute('src', elem)
//                 trashDiv.append(trashImage)
//                 trashBoxDiv.append(trashDiv)
//                 document.body.append(trashBoxDiv)
//             })
//         }
//     })













// padding-top: 15px;
// padding-left: 15px;
// padding-right: 15px;
// padding-bottom: 130px;
// border: 1px solid #e5e5e5;
// position: relative;
// display: block;
// vertical-align: top;
// -webkit-transition: all .3s;
// -o-transition: all .3s;
// transition: all .3s;
// background-color: #fff;
// border-radius: 5px;
// box-sizing: border-box;
// -webkit-box-shadow: 1.5px 2.6px 7px rgb(0 0 0 / 4%);
// box-shadow: 1.5px 2.6px 7px rgb(0 0 0 / 4%);
// -webkit-transition: all .3s ease;
// -o-transition: all .3s ease;
// transition: all .3s ease;
// margin-bottom: 30px;




//
// cardList.forEach((elem, index) => {
//     let cardListImage = document.createElement('img')
//     let cardImageDiv = document.createElement('div');
//     let button = document.createElement('button')
//     button.className = 'CardButton'
//     button.innerText = 'delete'
//     cardListImage.setAttribute('src', elem[0])
//     cardImageDiv.className = 'cardImageDiv'
//     cardListImage.className = 'cardImg'
//     cardImageDiv.append(button)
//     cardImageDiv.append(cardListImage)
//     document.body.append(cardImageDiv)
//     button.addEventListener('click', () => {
//         button.parentElement.style.display = 'none';
//         counter.innerText = +counter.innerText - 1;
//         if (+counter.innerText === 0) {
//             counter.style.display = 'none';
//         }
//     })
// })
// let obj = {
//     1: 12,
//     2:555
// }
//
//
// for (let i in obj) {
//     delete obj[i];
// }
// console.log(obj)
// let res = [];
// let arr = ['2150$','35500$', '123$']
// for (let i = 0; i < arr.length; i++) {
//     res = arr[i].split('')
//
// }
// for (let i = 0; i < res.length; i++) {
//     if (isNaN(+res[i])) {
//         res.splice(i, 1)
//     }
// }
// console.log(res)


