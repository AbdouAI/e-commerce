const basketIcon=document.getElementById("basket")
const basketBox=document.getElementById("basketBox")
const innerBasketBox=document.getElementById("innerBasket")
const plus=document.getElementById("plus")
const minus=document.getElementById("minus")
const numToOrderShown=document.getElementById("numToOrder")
const addCartBtn=document.getElementById("addCart") 
const numOrderedInCart=document.getElementById("numOrdered")
const totalShown=document.getElementById("total")
const deleteIcon=document.getElementById("deleteIcon")
const cartNotif=document.getElementById("cartNotif")

let numToOrder=0
let numOrdered=0
let total=0
let numNotif=0



basketIcon.addEventListener("click",()=>{
    basketBox.classList.toggle("no-display")
    cartNotif.classList.add("no-visible")
    numNotif=0
})

plus.addEventListener("click",()=>{
    numToOrder++
    showNum(numToOrderShown,numToOrder)
})

minus.addEventListener("click",()=>{
    if(numToOrder>0){
        numToOrder--
    }
    showNum(numToOrderShown,numToOrder)
})

addCartBtn.addEventListener("click",()=>{
    if(numToOrder>0){
        for(let i=0;i<basketBox.classList.length;i++){
            if(basketBox.classList[i]=="no-display"){
                numNotif+=1
                cartNotif.textContent=numNotif
                cartNotif.classList.remove("no-visible")
            }
        }
            
        innerBasketBox.children.item(0).classList.add("no-display")
        innerBasketBox.children.item(1).classList.remove("no-display")
        innerBasketBox.children.item(2).classList.remove("no-display")
        total+=numToOrder*125
        numOrdered+=numToOrder
        numToOrder=0
        showNum(numOrderedInCart,numOrdered)
        showNum(totalShown,`$${total}.00`)
        showNum(numToOrderShown,0)

    }
})

deleteIcon.addEventListener("click",()=>{
    innerBasketBox.children.item(0).classList.remove("no-display")
    innerBasketBox.children.item(1).classList.add("no-display")
    innerBasketBox.children.item(2).classList.add("no-display")
    total=0
    numOrdered=0
})


function showNum(el,newNum){
    el.textContent=newNum
}