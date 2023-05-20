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
let currentImgNumM=1

rightArrow.forEach(e=>e.addEventListener("click",()=>{
    if(productModal.classList.contains("no-display")){
        currentImgNum++   
        if(currentImgNum>4){currentImgNum=1}
        changeImg(currentImgNum)
        changeStyleOfSelectedImg(currentImgNum-1,selectionImgsList)
    }else{
        currentImgNumM++   
        if(currentImgNumM>4){currentImgNumM=1}
        changeImgM(currentImgNumM)
        changeStyleOfSelectedImg(currentImgNumM-1,selectionImgsListModal)
    }
    
 }))
 leftArrow.forEach(e=>e.addEventListener("click",()=>{
    if(productModal.classList.contains("no-display")){
        currentImgNum--   
        if(currentImgNum<1){currentImgNum=4}
        changeImg(currentImgNum)
        changeStyleOfSelectedImg(currentImgNum-1,selectionImgsList)
    }else{
        currentImgNumM--   
        if(currentImgNumM<1){currentImgNumM=4}
        changeImgM(currentImgNumM)
        changeStyleOfSelectedImg(currentImgNumM-1,selectionImgsListModal)
    }
   
 }))


mainImg.addEventListener("click",()=>{
    productModal.classList.remove("no-display")
    currentImgNumM=currentImgNum
    changeImgM(currentImgNumM)
    changeStyleOfSelectedImg(currentImgNum-1,selectionImgsListModal)
})
closeIcon.addEventListener("click",()=>{
    productModal.classList.add("no-display")
})

selectionImgsList.forEach(e =>e.addEventListener("click",()=>{
   currentImgNum=selectionImgsList.indexOf(e)+1
   changeImg(currentImgNum)
   changeStyleOfSelectedImg(selectionImgsList.indexOf(e),selectionImgsList)

}));

selectionImgsListModal.forEach(e =>e.addEventListener("click",()=>{
   currentImgNumM=selectionImgsListModal.indexOf(e)+1
   changeImgM(currentImgNumM)
   changeStyleOfSelectedImg(selectionImgsListModal.indexOf(e),selectionImgsListModal)
}));

function changeImg(imgNum){
    mainImg.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
    productImg.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
}

function changeImgM(imgNum){
    mainImgM.style.backgroundImage=` url(images/image-product-${imgNum}.jpg)`
}

function changeStyleOfSelectedImg(indxOfSelected,imgList){
    imgList.forEach(e =>{e.classList.remove("selected-img-border")
    e.firstElementChild.classList.remove("selected-img-filter")})

    imgList[indxOfSelected].classList.add("selected-img-border")
    imgList[indxOfSelected].firstElementChild.classList.add("selected-img-filter")
}
