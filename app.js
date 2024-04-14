 const allBtn=document.getElementsByClassName('btn-all')
 let  count=0;
 let grandPrice=0;
 let totalDiscount=0;
 for(const btn of allBtn){
    btn.addEventListener("click",function(e){

        if (count >= 4) {
            alert("You have reached the maximum selection limit (4). No more seats can be selected.");
            return; // Return early to prevent further selection
        }
       count+=1;
       btn.style.backgroundColor="#1DD100"
        const seatNumber=e.target.innerText;


        const div= document.createElement('div');
        div.innerHTML=`
        <div class="flex justify-between"><p>${seatNumber}</p><p>Economoy</p><p>550</p></div> `
        setInnerText('seat-count',count);
       document.getElementById('ticket-title-price-list-container').appendChild(div);

       const totalPrice=550*count;
       setInnerText("total-price",totalPrice);
       
 
       if(count==4){
        const couponApplyBtn= document.getElementById("couponApplyBtn");
        couponApplyBtn.removeAttribute('disabled')

        couponApplyBtn.addEventListener('click', function(){
            const couponBox=document.getElementById('coupon-box').value;
            if(couponBox=='NEW15'){
                totalDiscount=totalPrice*(.15);
                grandPrice=totalPrice*(0.85);
                document.getElementById('coupon-container').classList.add('hidden');
                
            }
            else if(couponBox=='Couple 20'){
                totalDiscount=totalPrice*(.20);
                grandPrice=totalPrice*(.8);
                document.getElementById('coupon-container').classList.add('hidden');
            }

            else{
                alert("Invalid Coupon Code");
                document.getElementById('coupon-box').value="";
                document.getElementById("discount-msg-container").removeChild(div);
                
            }

            setInnerText('grand-total-ammount',grandPrice);
            
            const div=document.createElement('div');

            div.innerHTML=`<div class="flex justify-between mb-2">
            <p>Discount Price</p>
            <p>BDT <span id="total-price">${totalDiscount}</span></p>
            </div>`

          document.getElementById("discount-msg-container").appendChild(div);

          
          

        })


       }
    })
 }



//  set inner text

function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}