const productImg=document.getElementById("productImg")
const mainImg=document.getElementById("mainImg")
const mainImgModal=document.getElementById("mainImgM")
const selectionImgs=document.getElementById("imgSelection").children
const selectionImgsModal=document.getElementById("imgSelectionM").children
const productModal=document.getElementById("productModal")
const closeIcon=document.getElementById("closeIcon")
const leftArrow=document.querySelectorAll(".left-arrow")
const rightArrow=document.querySelectorAll(".right-arrow")

const selectionImgsList=[]
const selectionImgsListModal=[]
for(el of selectionImgs){
    selectionImgsList.push(el)
    }
for(el of selectionImgsModal){
    selectionImgsListModal.push(el)
    }
let currentImgNum=1

rightArrow.forEach(e=>e.addEventListener("click",()=>{
    currentImgNum++   
    if(currentImgNum>4){currentImgNum=1}
    changeImg(currentImgNum)
    changeStyleOfSelectedImg(currentImgNum-1)
 }))
 leftArrow.forEach(e=>e.addEventListener("click",()=>{
    currentImgNum--   
    if(currentImgNum<1){currentImgNum=4}
    changeImg(currentImgNum)
    changeStyleOfSelectedImg(currentImgNum-1)
 }))


mainImg.addEventListener("click",()=>{
    productModal.classList.remove("no-display")
})
closeIcon.addEventListener("click",()=>{
    productModal.classList.add("no-display")
})

selectionImgsList.forEach(e =>e.addEventListener("click",()=>{
   changeImg(selectionImgsList.indexOf(e)+1)
   changeStyleOfSelectedImg(selectionImgsList.indexOf(e))
}));

selectionImgsListModal.forEach(e =>e.addEventListener("click",()=>{
    changeImg(selectionImgsListModal.indexOf(e)+1)
   changeStyleOfSelectedImg(selectionImgsListModal.indexOf(e))
}));

function changeImg(imgNum){
    mainImg.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
    mainImgM.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
    productImg.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
}

function changeStyleOfSelectedImg(indxOfSelected){
    selectionImgsList.forEach(e =>{e.classList.remove("selected-img-border")
    e.children.item(0).classList.remove("selected-img-filter")})
    selectionImgsListModal.forEach(e =>{e.classList.remove("selected-img-border")
    e.children.item(0).classList.remove("selected-img-filter")})

    selectionImgsList[indxOfSelected].classList.add("selected-img-border")
    selectionImgsList[indxOfSelected].children.item(0).classList.add("selected-img-filter")

    selectionImgsListModal[indxOfSelected].classList.add("selected-img-border")
    selectionImgsListModal[indxOfSelected].children.item(0).classList.add("selected-img-filter")
}
